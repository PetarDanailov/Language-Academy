import { Link} from "react-router";
import {useCourses, useDeleteCourse } from "../../../api/coursesApi"
import { useEffect, useReducer, useState } from "react";
const actions = {
  OPEN_MODAL : "open_modal",
  CLOSE_MODAL: "close_modal",
}
const initialState = {
   showModal: false,
   selectedCourse: null,
};
function reducer(state,action) {
  switch(action.type) {
    case actions.OPEN_MODAL: 
      return {...state,showModal:true, selectedCourse: action.payload};
    case actions.CLOSE_MODAL: 
    return {...state,showModal:false, selectedCourse: null};
    default : 
      return state
  }
}
export default function CoursesActions(){
  const {getAll} = useCourses();
  const {deleteCourse} = useDeleteCourse();
  const [courses,setCourses] = useState([]);
  const [state,dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
       getAll().then(setCourses);
    },[])
  const handleDeleteClick = (course) =>{
      dispatch({type: actions.OPEN_MODAL, payload: course})
    };
    const handleCancel = () => {
     dispatch({type: actions.CLOSE_MODAL})
    };
    const handleConfirmDelete = async () => {
      if(state.selectedCourse) {
        await deleteCourse(state.selectedCourse._id);
        setCourses(courses.filter((course) => course._id  !== state.selectedCourse._id));
        dispatch({type: actions.CLOSE_MODAL});
      }
    };
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
                    to={`/admin/${course._id}/edit`}
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
                  <button
                    onClick={() => handleDeleteClick(course)}
                    className="btn btn-delete">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {state.showModal && state.selectedCourse && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>
              Are you sure you want to delete the course "<strong>{state.selectedCourse.title}</strong>"?
            </p>
            <div className="modal-actions">
              <button onClick={handleConfirmDelete} className="btn btn-delete-confirm">
                Yes, Delete
              </button>
              <button onClick={handleCancel} className="btn btn-cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}