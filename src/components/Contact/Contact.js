import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./Contact.css";

const handelChange = (event) => {
  event.preventDefault();
  alert("Thanks for your help!!");
};

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="form-container">
        <h1 className="form-title">REPORT A SUSPECT</h1>

        <form className="contact-form" onSubmit={handelChange}>
          <input
            type="text"
            placeholder="Name of the suspect"
            required="required"
          />
          <input type="text" placeholder="Location" required="required" />
          <input
            type="text"
            placeholder="Your Contact Number"
            required="required"
          />
          <button type="submit">Submit</button>
        </form>
        <h3 className="description">
          If you don't want to reveal you identity, Please call
          <strong>911</strong> and press <strong>3</strong>.
        </h3>

        <h4 className="description">
          For safety reason we don't reveal our contact
        </h4>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
