// styles
import classes from "../Styles/Module/Contact.module.css";
// components
import Button from "../Components/Button";
// image
import ContactImage from "../Assets/contact.png";

// main
function Contact() {
  return (
    <div className={classes.Container}>
      <div className={classes.wrapper}>
        <h1>Contact Us</h1>
        <p>
          Have a question, suggestion, or just want to say hello? We’d love to
          hear from you! Fill out the form below and we’ll get back to you
          shortly.
        </p>
        <div className={classes.Form}>
          <div className={classes.flexBox}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <Button>Send Message</Button>
        </div>
      </div>
      <img src={ContactImage} alt="Icon" id="openImage" />
    </div>
  );
}

export default Contact;
