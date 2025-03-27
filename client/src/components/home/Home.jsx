import { useEffect, useState } from "react";
import { useLatestCourses } from "../../api/coursesApi";
import { useNavigate } from "react-router";

export default function Home(){
  const navigate = useNavigate();
  const {getLatest} = useLatestCourses();
  const [latestCourses, setLatest] = useState([]);
  useEffect(() => {
  getLatest().then(setLatest);
  },[])
  return(
    <div className="home-container">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome to the Language Academy</h1>
        <p>
        Discover the best language courses to enhance your skills and unlock new opportunities.
        </p>
      </section>

      {/* Top Courses Section */}
      <section className="courses-section">
        <h2>Our latest courses</h2>
        <div className="courses-container" >
          {latestCourses.map((course) => (
            <div key={course._id} className="course-card" onClick={() => navigate(`/courses/${course._id}/details`)}>
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-info">
                <h3>{course.title}</h3>
                <p>Language: {course.language}</p>
                <p><strong>Vacant spaces:</strong> {course.spaces}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}