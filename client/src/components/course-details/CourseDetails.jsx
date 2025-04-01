import { use, useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { useCourse } from "../../api/coursesApi";
import { UserContext } from "../../context/UserContext";
import { useBoughtCourses } from "../../api/boughtCoursesApi";
import { useComments, useDeleteComment, usePostComment, useUpdateComment } from "../../api/commentsApi";
import useAlert from "../../hooks/useAlert";

export default function CourseDetails(){
  const {user} = useContext(UserContext)
  const {courseId} = useParams()
  const {getOne} = useCourse();
  const {getAll} = useBoughtCourses()
  const {postComment} = usePostComment()
  const {getAllComments} = useComments();
  const {updateComment} = useUpdateComment()
  const showAlert = useAlert();
  const {deleteComment} = useDeleteComment();

  const isLoggedIn = !!user;
  const [hasBought,setHasBought] = useState(false);
  const [comments,setComments] = useState([]);
  const [course,setCourse] = useState({});
  const [editedCommentId, setEditingCommentId] = useState(null)
  const [editedMessage,setEditedMessage] = useState("");
  useEffect(() => {
    getOne(courseId).then(setCourse);
    getAllComments(courseId).then((comms) => setComments(comms || []))
    
  },[courseId])
  useEffect(() =>{
    if(user){
      getAll(user._id).then((boughtCourses) => {
        if(boughtCourses){
          const alreadyHasBought = boughtCourses.some((boughtCourse) =>  boughtCourse.courseId === courseId)
          setHasBought(alreadyHasBought);
        }
        else 
        setHasBought(() => false);
      })

    }
  },[user,courseId])
  const commentHandler = async (comment) => {
    const {commentMessage} = Object.fromEntries(comment)
    const newComment = {courseId,commentMessage, author: user.username};
    try{
      const createdComment = await postComment(newComment);
      setComments((oldComments) => [...oldComments,createdComment]);
    }
    catch(e) {
       showAlert("Error", "Failed to submit message, please try again!", "error")
    }
  }
  const handleSaveEdit = async (commentId) => {
    try{
      const updatedComment = await updateComment(commentId, {commentMessage: editedMessage});
      setComments((prevComments) => 
        prevComments.map((com) => 
          com._id === commentId ?  {...com, commentMessage: updatedComment.commentMessage} : com
        )
      )
      setEditingCommentId(null);
  }
  catch(err){
    showAlert("Error","Failed to update comment, please try again!","error")
  }
  }
  const deleteHandler = async (commentId) => {
    try{
      await deleteComment(commentId);
      setComments((prevComments) => 
        prevComments.filter((comment) => comment._id !== commentId));
    }
    catch(err){
      showAlert("Error", "Failed to delete comment,please try again!","error")
    }
  };
  return(
    <section id="details">
    <div id="details-wrapper">
      <div className="left-column">
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
            <p className="details-weight">Start Date: {course.startDate}</p>
            <p className="course-description">{course.description}</p>
          </div>
          <div className="action-section">
            {isLoggedIn && user.role !== "Admin" && !hasBought ? (
              <Link className="buy-button" to={`/checkout/${courseId}`}>
                Save a Place
              </Link>
            ) : null}
          </div>
        </div>
      </div>
      <div className="comment-form-wrapper">
        <h3>We value your opinion</h3>
        <form className="comment-form" action={commentHandler}>
          
          <textarea
            className="comment-textarea" name="commentMessage"
            placeholder="Enter your comment here..."
          ></textarea>
          <button type="submit" className="comment-submit" disabled={!isLoggedIn}>
            Submit
          </button>
        </form>
        <div className="comments-section">
          <h4>Comments</h4>
          {comments?.map((comment) => (
            <div key={comment._id} className="comment">
               <div className="comment-header">
                  <span className="comment-author">{comment.author}</span>
                  {user?._id === comment._ownerId && (
                    <div className="comment-actions">
                      {editedCommentId === comment._id ? (
                        <>
                          <button onClick={() => handleSaveEdit(comment._id)}>Save</button>
                          <button onClick={() => setEditingCommentId(null)}>Cancel</button>
                        </>
                      ) : (
                        <button
                          className="edit-comment"
                          onClick={() => {
                            setEditingCommentId(comment._id);
                            setEditedMessage(comment.commentMessage);
                          }}
                        >
                          Edit
                        </button>
                      )}
                      <button className="delete-comment" onClick={() => deleteHandler(comment._id)}>Delete</button>
                    </div>
                  )}
                </div>
                {editedCommentId === comment._id
                ? (<textarea  className="comment-edit-textarea"
                  value={editedMessage}
                  onChange={(e) => setEditedMessage(e.target.value)}/>)
                  : (<p className="comment-message">{comment.commentMessage}</p>)
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}