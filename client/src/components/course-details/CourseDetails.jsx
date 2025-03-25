import { useParams } from "react-router"

export default function CourseDetails(){
  const {courseId} = useParams() 
  console.log(courseId)
  const course = {
    title: "Advanced English Mastery",
      language: "English",
      vacantSpaces: 5,
      image: "https://breakthruenglishmastery.com/wp-content/uploads/2022/09/Producto-web-English-Mastery-Complete.jpg",
      instructor: "Ivaylo Papazov",
      price: 350,
      description: "SIDLKdsjklasdjlkashddwipdojbfnksd;jlf",
      duration: "3 months",
      startingDate: "03/02/2020"
  }
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
            <p className="details-weight">Vacant Spaces: {course.vacantSpaces}</p>
            <p className="details-weight">
              Start Date: {course.startingDate}
            </p>
            <p className="course-description">{course.description}</p>
          </div>
          <div className="comments-section">
           
          </div>
        </div>
      </div>
    </section>
  );
}