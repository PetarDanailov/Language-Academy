import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { useCourse, useEditCourse } from "../../../../api/coursesApi";
import useAlert from "../../../../hooks/useAlert";

export default function CourseEdit(){
  const showAlert = useAlert()
  const navigate = useNavigate();
  const {courseId} = useParams();
  const {editCourse} = useEditCourse();
  const {getOne} = useCourse();
  const [data, setData] = useState({title: "",
    image: "",
    price: "",
    address: "",
    language: "",
    duration: "",
    spaces: "",
    startDate: "",
    description: "",
  })
  const minDate = new Date().toISOString().split("T")[0];
  useEffect(() => {
    getOne(courseId).then(setData)
  },[])
  const editHandler = async (formData) =>
    {
      const {title,image,price, address , language , duration, spaces , startDate , description } = Object.fromEntries(formData)
      if(!title || !image || !price || !address || !language || !duration || !spaces || !startDate || !description){
        setData({title,image,price,address,language,duration,description,spaces,startDate})
        return showAlert("Warning","Please fill out all of the fields", "warning");
      }
      try{
        await editCourse(courseId,{title,image,price, address , language , duration, spaces , startDate , description })
        navigate(`/courses/${courseId}/details`)
      }
      catch(err){
        showAlert("Edit failed", err.message, "error")
      }
    } 
  return(
    <div className="edit-course-container">
      <div className="quote left-quote">
        <p>"Continuous improvement is better than delayed perfection." – Mark Twain</p>
      </div>

      <div className="editForm-container">
        <h2 className="edit-course-title">Edit Course</h2>
        <form action={editHandler} className="course-form">
          <label>
            Title:
            <input type="text" name="title" defaultValue={data.title} required />
          </label>

          <label>
            Image URL:
            <input type="text" name="image" defaultValue={data.image} required />
          </label>

          <label>
            Price (€):
            <input type="number" name="price" defaultValue={data.price} required />
          </label>

          <label>
            Address:
            <input type="text" name="address" defaultValue={data.address} required />
          </label>

          <label>
            Language:
            <input type="text" name="language" defaultValue={data.language} required />
          </label>

          <label>
            Course Duration (weeks):
            <input type="number" name="duration" defaultValue={data.duration} required />
          </label>

          <label>
            Vacant Spaces:
            <input type="number" name="spaces" defaultValue={data.spaces} required />
          </label>

          <label>
            Start Date:
            <input type="date" name="startDate" defaultValue={data.startDate} min={minDate} required />
          </label>

          <label>
            Description:
            <textarea name="description" defaultValue={data.description} required />
          </label>

          <button type="submit" className="submit-button">Save Changes</button>
        </form>
      </div>

      <div className="quote right-quote">
        <p>"We cannot become what we want by remaining what we are." – Max DePree</p>
      </div>
    </div>
  )
}