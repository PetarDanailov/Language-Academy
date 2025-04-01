import { useEffect, useState } from "react";
import useToken from "../../hooks/useToken"
import { useBoughtCourses } from "../../api/boughtCoursesApi";
import { useNavigate } from "react-router";

export default function MyCourses(){ 
  const navigate = useNavigate(); 
  const {user} = useToken();
  const {getAll} = useBoughtCourses();
  const [courses,setCourses] = useState([]); 
  useEffect(() => {
    getAll(user?._id).then(setCourses)
  },[user])
  return(
    <div className="my-courses-container">
      <h2 className="my-courses-title">My Courses</h2>
      {courses?.length > 0 ? (
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course._id} className="boughtCourse-card" onClick={() => navigate(`/courses/${course.courseId}/details`)}>
              <img src={course.image} alt={course.courseTitle} className="course-image" />
              <div className="course-details">
                <h3 className="course-title">{course.courseTitle}</h3>
                <p className="course-description"><strong>Start date:</strong> {course.courseStartDate}</p>
                <p className="course-price"><strong>Price:</strong> {course.coursePrice} €</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-courses-message">You haven't bought any courses yet.</p>
      )}
    </div>
  )
}