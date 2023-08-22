import { Card, Heading } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  AOS.init();
  return (
    <section id="contact">
      <div>
        <div className="heading">
          <Heading textAlign={"left"}>Contact</Heading>
          <div style={{ borderBottom: "5px solid red", width: "10%" }}></div>
        </div>
        <div data-aos="zoom-in-down" direction={["column", "row"]}>
          <Card p="20px" m="20px" bg="ButtonFace">
            <div className="contact-item">
              <i className="fa fa-map-marker"></i>{" "}
              <span>Rewa, Madhya Pradesh</span>
            </div>
            <hr />
            <div className="contact-item">
              <i className="fa fa-phone" aria-hidden="true"></i>{" "}
              <span id="contact-phone">+91 7898118805</span>
            </div>
            <hr />
            <div className="contact-item">
              <a href="mailto:harshshukla2312@gmail.com" id="contact-email">
                <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                <span>harshshukla2312@gmail.com</span>
              </a>
            </div>
            <hr />
            <div className="contact-item">
              <a id="contact-github" href="https://github.com/harshshukla2002">
                <i className="fa fa-github-alt" aria-hidden="true"></i>{" "}
                <span>harshshukla2002</span>
              </a>
            </div>
            <div className="contact-item">
              <a
                id="contact-linkedin"
                href="https://www.linkedin.com/in/harsh-shukla12/"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>{" "}
                <span>harsh-shukla12</span>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact;
