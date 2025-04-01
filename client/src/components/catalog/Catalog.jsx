import { Link } from "react-router";
import { useCourses } from "../../api/coursesApi";
import { useEffect, useState } from "react";

export default function Catalogue(){
  const {getAll} = useCourses();
  const [courses,setCourses] = useState([]);
  useEffect(() => {
     getAll().then(setCourses);
  },[])
  
  return(
    <div>
    <h3 className="heading">Courses</h3>
    <section id="dashboard">
      {courses &&
        courses.map((course) => (
          course.spaces > 0 ?(
            <div className="course" key={course._id}>
            <img src={course.image} alt="Course Image" />
            <h3 className="title">{course.title}</h3>
            <div className="course-info">
              <p className="language">Language: {course.language}</p>
              <p className="language">Vacant spaces: {course.spaces}</p>
              <p className="language">Price: {course.price}$</p> 
            </div>
            <Link className="details-btn" to={`/courses/${course._id}/details`}>
              Details
            </Link>
          </div>)
          : null
          
          
        ))}
    </section>
  </div>
  )
}