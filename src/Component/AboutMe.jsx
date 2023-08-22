import { Box, Card, Heading, Stack, Button, Flex } from "@chakra-ui/react";
import Resume from "../PDF/Harsh-Shukla-Resume.pdf";
import { DownloadIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  const [width, setWidth] = useState(window.innerWidth);

  AOS.init();

  const DetectWindowSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", DetectWindowSize);

    return () => {
      window.removeEventListener("resize", DetectWindowSize);
    };
  }, [width]);

  return (
    <section>
      <div data-aos="zoom-in" id="about" className="about section">
        <Heading textAlign={"left"}>About Me</Heading>
        <div style={{ borderBottom: "5px solid red", width: "15%" }}></div>
        <Flex
          direction={["column", "row"]}
          justifyContent="space-between"
          alignItems="center"
        >
          <>
            <Heading size="lg" m="30px">
              I am Harsh Shukla <br />
              <span style={{ color: "teal" }}>FULL STACK WEB DEVELOPER</span>
            </Heading>
          </>
          <div
            id="resume-button-2"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1XREqf6QqbzQUNSHqossE0c6bfzL6VOFM/view?usp=share_link"
              )
            }
          >
            <a
              id="resume-link-2"
              className="nav-link resume"
              href={Resume}
              download
            >
              <Button className="margin-class" colorScheme="red">
                <DownloadIcon /> Resume
              </Button>
            </a>
          </div>
        </Flex>
        <p
          id="user-detail-intro"
          style={{
            width: "90%",
            fontSize: "20px",
            margin: "20px",
            textAlign: "justify",
          }}
        >
          I am a Full stack web developer doing militry style coding and
          learning MERN Stack at Masai School. I have done various group as well
          as individual projects using HTML, CSS, JavaScript, React , NodeJs,
          Express and MongoDB in my coding journey. I also did my Bsc in
          Computer Science from Awadesh Pratap Singh University. My interests
          are coding, reading, listening music and exploring somthing new.
        </p>
        <Heading size="lg" m="30px">
          Education
        </Heading>
        <Box className="education">
          {width < 700 ? (
            <Box>
              <Card className="education-card" bg="AppWorkspace" m="10px 0px">
                <Heading size="sm">
                  Full stack Web Development(Full Time)
                </Heading>
                <p>Masai School, Bengaluru</p>
                <Box>
                  <i className="fa fa-calendar"></i> August 2022 - July 2023
                </Box>
              </Card>
              <Card className="education-card" bg="AppWorkspace">
                <Heading size="sm">Bsc in Computer Science</Heading>
                <p>Awadesh Pratap Singh University, Rewa</p>
                <Box>
                  <i className="fa fa-calendar"></i> July 2019 - July 2022
                </Box>
              </Card>
            </Box>
          ) : (
            <Stack direction={"row"} gap="20">
              <Card className="education-card" bg="AppWorkspace">
                <Heading size="sm">
                  Full stack Web Development(Full Time)
                </Heading>
                <p>Masai School, Bengaluru</p>
                <Box>
                  <i className="fa fa-calendar"></i> August 2022 - July 2023
                </Box>
              </Card>
              <Card className="education-card" bg="AppWorkspace">
                <Heading size="sm">Bsc in Computer Science</Heading>
                <p>Awadesh Pratap Singh University, Rewa</p>
                <Box>
                  <i className="fa fa-calendar"></i> July 2019 - July 2022
                </Box>
              </Card>
            </Stack>
          )}
        </Box>
      </div>
    </section>
  );
}

export default AboutMe;
