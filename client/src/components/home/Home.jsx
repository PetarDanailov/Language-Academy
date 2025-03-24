export default function Home(){
  const topCourses = [ // top courses static for now
    {
      title: "Advanced English Mastery",
      language: "English",
      vacantSpaces: 5,
      image: "https://breakthruenglishmastery.com/wp-content/uploads/2022/09/Producto-web-English-Mastery-Complete.jpg",
    },
    {
      title: "French for Beginners",
      language: "French",
      vacantSpaces: 8,
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668314640i/63289613.jpg",
    },
    {
      title: "Business Spanish Essentials",
      language: "Spanish",
      vacantSpaces: 3,
      image: "https://kodakco.sgp1.digitaloceanspaces.com/blog/wp-content/uploads/2024/07/05170847/FEATURE-IMAGE-1-791x1024.webp",
    },
  ];
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
        <h2>Our best courses</h2>
        <div className="courses-container">
          {topCourses.map((course, index) => (
            <div key={index} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-info">
                <h3>{course.title}</h3>
                <p><strong>language:</strong> {course.language}</p>
                <p><strong>Vacant spaces:</strong> {course.vacantSpaces}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}