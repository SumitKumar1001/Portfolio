import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Email>
            <div>
              Email: sanjay.sumit10@gmail.com
            </div>
            {/* <span>sanjay.sumit10@gmail.com</span> */}
            {/* <a
              className="btn PrimaryBtn"
              href="mailto: sanjay.sumit10@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a> */}
          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
