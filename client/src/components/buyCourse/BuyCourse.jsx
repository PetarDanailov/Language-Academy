import { useEffect, useState } from "react"
import { useCourse } from "../../api/coursesApi"
import { useParams } from "react-router";

export default function BuyCourse(){
  const {courseId} = useParams()
  const {getOne} = useCourse();
  const [course,setCourse] = useState({});
  useEffect(() => {
     getOne(courseId).then(setCourse);
  },[])
  return(
    <div className="buy-page">
      <div className="buyForm-container">
        <h2>Save a spot</h2>
        <form >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
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