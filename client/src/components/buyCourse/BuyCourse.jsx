import { useEffect, useState } from "react"
import { useCourse, usePartialUpdateCourse } from "../../api/coursesApi"
import { useNavigate, useParams } from "react-router";
import { useBuyCourse } from "../../api/boughtCoursesApi";
import useAlert from "../../hooks/useAlert";

export default function BuyCourse(){
  const [userData,setUserData] = useState({})
  const navigate = useNavigate();
  const showAlert = useAlert();
  const {courseId} = useParams()
  const {getOne} = useCourse();
  const {buyCourse} = useBuyCourse();
  const {updateVacantSpaces} = usePartialUpdateCourse()
  const [course,setCourse] = useState({});
  const phoneRegex = /^\+?[0-9\s\-\(\)]{7,15}$/;
    useEffect(() => {
     getOne(courseId).then(setCourse);
  },[courseId])
  const buyFormHandler = async (formData) => {
    let data = Object.fromEntries(formData);
    if(!data.name || !data.address || !data.phoneNumber){
      setUserData({name: data.name,address: data.address, phoneNumber: data.phoneNumber});
      showAlert("Missing fields","Fill all the fields from the form", "warning")
    }
    if (!phoneRegex.test(data.phoneNumber)) {
      setUserData({name: data.name, address: data.address, phoneNumber: data.phoneNumber});
      showAlert("Invalid Phone Number", "Please enter a valid phone number. It should be in patter similiar to this one: +359 877 182 829 or like this: 0044-20-7946-0958.", "error");
      return;
    }
    data = {...data, courseId,image: course.image, courseTitle: course.title, courseStartDate: course.startDate, coursePrice:  course.price}
    try{
      await buyCourse(data)
      const latestCourse = await getOne(courseId);
      await updateVacantSpaces(courseId, { spaces: Number(latestCourse.spaces) - 1});
      setCourse(latestCourse);
      showAlert("Congratulations!","You have successfully, secured a spot for this course!","success");
      navigate("/myCourses");
    }
    catch(err){
      showAlert("Fail!","Failed to finish the operation, please try again!","error");
    }
  }
  return(
    <div className="buy-page">
      <div className="buyForm-container">
        <h2>Save a spot</h2>
        <form action={buyFormHandler}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={userData.name}
            required
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            defaultValue={userData.address}
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            defaultValue={userData.phoneNumber}
            required
          />

          <div className="payment-info">
            <p>You will have to pay on your first visit.</p>
          </div>

          <button type="submit">Submit Registration</button>
        </form>
      </div>

      <div className="buyCourse-container">
        <h2>Course Details</h2>
        {course ? (
          <div className="course-info">
            <img
              src={course.image}
              alt="Course"
              className="buyCourse-image"
            />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>
              <strong>Price: </strong>
              {course.price} €
            </p>
          </div>
        ) : (
          <p>No course selected.</p>
        )}
      </div>
    </div>
  )
}