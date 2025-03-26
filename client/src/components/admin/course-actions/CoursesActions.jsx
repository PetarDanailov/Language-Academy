import { Link} from "react-router";
import {useCourses } from "../../../api/coursesApi"
import { useEffect, useState } from "react";

export default function CoursesActions(){
  const {getAll} = useCourses();
  const [courses,setCourses] = useState([]);
    useEffect(() => {
       getAll().then(setCourses);
    },[])
  return(
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th className="p-3">Title</th>
            <th className="p-3">Language</th>
            <th className="p-3">Duration</th>
            <th className="p-3">Price</th>
            <th className="p-3">Image</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id} >
              <td >{course.title}</td>
              <td >{course.language}</td>
              <td >{course.duration} weeks</td>
              <td >{course.price}€</td>
              <td >
                <img src={course.image} alt={course.title} className="course-img"/>
              </td>
              <td >
                <div>
                  <Link
                    to={`/courses/${course._id}/edit`}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/courses/${course._id}/details`}
                     className="btn btn-info"
                  >
                    Details
                  </Link>
                  <Link
                    to={`/delete/${course._id}`}
                    className="btn btn-delete">
                    Delete
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}