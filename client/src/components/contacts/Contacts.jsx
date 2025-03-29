import useAlert from "../../hooks/useAlert";

export default function Contacts(){
  const showAlert = useAlert(); 
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "ad9cce1c-c7b0-431b-8422-88d50cb03012");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      showAlert("Good job!", "Your message was sent successfully!", "success")
      event.target.reset();
    } else {
      console.log("Error", data);
      showAlert("Error!","Something went wrong! Please try again!","error")
    }
  };
  return(
    <div className="contact-page">
    <div className="contact-form">
      <h2>Contact us</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email"/>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Enter subject"/>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
    <div className="contact-image">
      <img src="/images/contact-us-showcase.png" alt="Contact Us" />
    </div>
  </div>
  )
}