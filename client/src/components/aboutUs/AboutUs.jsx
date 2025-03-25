export default function AboutUs(){
  return(
    <div className="about-us">
      <header className="about-header">
        <h1>About Language Academy</h1>
        <p>Unlocking the world through language</p>
      </header>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Welcome to Language Academy! We are passionate about connecting people
            from all over the world through language. Our mission is to provide high-quality,
            engaging language education to learners of all ages and backgrounds.
          </p>

          <h2>What We Offer</h2>
          <p>
            At Language Academy, we offer courses in English, Spanish, French, German,
            and many more languages. Our experienced instructors use innovative teaching methods
            and immersive learning experiences to help you achieve fluency and confidence.
          </p>

          <h2>Our Vision</h2>
          <p>
            We believe language is the key to unlocking new opportunities, fostering cultural
            exchange, and promoting global understanding. Join us as we embark on a journey towards
            a multilingual future.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/icon.svg" alt="Language Academy" />
        </div>
      </section>

      <footer className="about-footer">
        <p>&copy;Language Academy. All rights reserved.</p>
      </footer>
    </div>
  )
}