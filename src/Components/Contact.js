import React from "react";

export default function Contact() {
  return (
    <React.Fragment>
      <div className="nav-comp">
        <h2 className="contact-us-title">Contact Us</h2>
        <p className="contact-us-subtitle">Reach out to our helpdesk</p>
        <div className="contact-us">
          <div className="contact-us-item">
            <img src="https://img.icons8.com/nolan/65/user-location.png" />
            <h4>OUR MAIN OFFICE</h4>
            <h4 className="contact-us-item-text">P.O Box 301, Hazyview 1242</h4>
          </div>
          <div className="contact-us-item">
            <img src="https://img.icons8.com/nolan/65/phone.png" />
            <h4>PHONE NUMBER</h4>
            <h4 className="contact-us-item-text">+2782 398 2825</h4>
          </div>
          <div className="contact-us-item">
            <img src="https://img.icons8.com/nolan/65/fax.png" />
            <h4>FAX</h4>
            <h4 className="contact-us-item-text">+2782 398 2825</h4>
          </div>
          <div className="contact-us-item">
            <img src="https://img.icons8.com/nolan/65/email-sign.png" />
            <h4>EMAIL</h4>
            <h4 className="contact-us-item-text">
              <a href="mailto:pleasuren15@gmail.com">Pleasuren15@gmail.com</a>
            </h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
