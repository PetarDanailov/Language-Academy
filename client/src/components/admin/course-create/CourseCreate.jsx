import { useState } from "react"
import { useCreateCourse } from "../../../api/coursesApi"
import { useNavigate } from "react-router"
import useAlert from "../../../hooks/useAlert"

export default function(){
  const showAlert = useAlert();
  const navigate = useNavigate()
  const [formData,setData] = useState({title: "",
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
  const {create} = useCreateCourse()
  const createCourseHandler = async (createFormData) => {
    const {title,image,price, address , language , duration, spaces , startDate , description } = Object.fromEntries(createFormData)
    if(!title || !image || !price || !address || !language || !duration || !spaces || !startDate || !description){
      setData({title,image,price,address,language,duration,description,spaces,startDate})
      return alert("Please fill out all of the fields");
    }
    try{
      await create({title,image,price, address , language , duration, spaces , startDate , description });
      showAlert("Course created!", "The course was successfully added!", "success")
      navigate("/courses")
    }
    catch(err){
      showAlert("Failed to add the course", "Something went wrong please try again!", "error")
    }
  }
  return(<div className="form-container">
    <h2 className="create-course-title">Create a New Course</h2>
    <form action={createCourseHandler} className="course-form">
      <label>
        Title:
        <input type="text" name="title" defaultValue={formData.title}  required />
      </label>

      <label>
        Image URL:
        <input type="text" name="image" defaultValue={formData.image} required />
      </label>

      <label>
        Price (€):
        <input type="number" name="price" defaultValue={formData.price} required />
      </label>

      <label>
        Address:
        <input type="text" name="address" defaultValue={formData.address} required />
      </label>

      <label>
        Language:
        <input type="text" name="language" defaultValue={formData.language} required />
      </label>

      <label>
        Course Duration (weeks):
        <input type="number" name="duration" defaultValue={formData.duration} required />
      </label>

      <label>
        Vacant Spaces:
        <input type="number" name="spaces" defaultValue={formData.spaces}  required />
      </label>

      <label>
        Start Date:
        <input type="date" name="startDate" defaultValue={formData.startDate} min={minDate} required />
      </label>

      <label>
        Description:
        <textarea name="description" defaultValue={formData.description}  required />
      </label>

      <button type="submit" className="submit-button">Create Course</button>
    </form>
  </div>)
}