export default function Contacts(){
  return(
    <div className="contact-page">
    <div className="contact-form">
      <h2>Contact us</h2>
      <form method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="Name" placeholder="Enter your name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="Email" placeholder="Enter your email"/>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Enter subject"/>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="Message" rows="5"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
    <div className="contact-image">
      <img src="/images/contact-us-showcase.png" alt="Contact Us" />
    </div>
  </div>
  )
}