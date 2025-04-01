import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { useCourse } from "../../api/coursesApi";
import { UserContext } from "../../context/UserContext";

export default function CourseDetails(){
  const {user} = useContext(UserContext)
  const {courseId} = useParams()
  const {getOne} = useCourse();
  const [course,setCourse] = useState({});
  useEffect(() => {
     getOne(courseId).then(setCourse);
  },[])
  console.log(course)
  return(
    <section id="details">
      <div id="details-wrapper">
        <div className="course-media">
          <img id="details-img" src={course.image} alt="Course" />
          <p id="details-title">{course.title}</p>
        </div>
        <div id="info-wrapper">
          <div id="details-description">
            <p className="details-price">Price: {course.price} €</p>
            <p className="details-price">Address: {course.address}</p>
            <p className="details-condition">Language: {course.language}</p>
            <p className="details-weight">Course Duration: {course.duration}</p>
            <p className="details-weight">Vacant Spaces: {course.spaces}</p>
            <p className="details-weight">
              Start Date: {course.startDate}
            </p>
            <p className="course-description">{course.description}</p>
          </div>
          <div className="action-section">
              {user && user.role !== "Admin" ? <Link className="buy-button" to={`/buy/${courseId}`}>Save a Place</Link> :null}
          </div>
          <div className="comments-section">
           
          </div>
        </div>
      </div>
    </section>
  );
}