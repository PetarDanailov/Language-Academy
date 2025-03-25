import { Link } from "react-router";

export default function Catalogue(){
  const courses = [ //  courses static for now
    {
      courseId: 1,
      title: "Advanced English Mastery",
      language: "English",
      vacantSpaces: 5,
      image: "https://breakthruenglishmastery.com/wp-content/uploads/2022/09/Producto-web-English-Mastery-Complete.jpg",
    },
    {
      courseId: 2,
      title: "French for Beginners",
      language: "French",
      vacantSpaces: 8,
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668314640i/63289613.jpg",
    },
    {
      courseId: 3,
      title: "Business Spanish Essentials",
      language: "Spanish",
      vacantSpaces: 3,
      image: "https://kodakco.sgp1.digitaloceanspaces.com/blog/wp-content/uploads/2024/07/05170847/FEATURE-IMAGE-1-791x1024.webp",
    },
  ];
  return(
    <div>
    <h3 className="heading">Courses</h3>
    <section id="dashboard">
      {courses &&
        courses.map((course) => (
          <div className="course" key={course.courseId}>
            <img src={course.image} alt="Course Image" />
            <h3 className="title">{course.title}</h3>
            <div className="course-info">
              <p className="language">Language: {course.language}</p>
            </div>
            <Link className="details-btn" to={`/courses/${course.courseId}/details`}>
              Details
            </Link>
          </div>
        ))}
    </section>
  </div>
  )
}