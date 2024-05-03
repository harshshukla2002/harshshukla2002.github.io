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
    <section id="about">
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="about section"
      >
        <Heading textAlign={"left"} paddingTop={"20"}>
          About Me
        </Heading>
        <div style={{ borderBottom: "5px solid blue", width: "15%" }}></div>
        <Flex
          direction={["column", "row"]}
          justifyContent="space-between"
          alignItems="center"
        >
          <>
            <Heading size="lg" m="30px">
              I am Harsh Shukla <br />
              <span style={{ color: "blue" }}>FULL STACK WEB DEVELOPER</span>
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
            <a id="resume-link-2" className="resume" href={Resume} download>
              <Button className="margin-class" colorScheme="blue">
                <DownloadIcon /> Resume
              </Button>
            </a>
          </div>
        </Flex>
        <Flex
          alignItems={"center"}
          gap="10"
          flexWrap={width < 900 ? "wrap" : "nowrap"}
        >
          <div style={{ width: width < 900 ? "80%" : "25%", margin: "20px" }}>
            {width < 900 ? (
              <img
                className="home-img"
                src="https://i.postimg.cc/nLK5KBpH/Profile-Image-removebg-preview.png"
                alt="Harsh Shukla"
                clipPath="url(#user-image)"
                style={{ borderRadius: "50%" }}
              />
            ) : (
              <div className="container">
                <img
                  className="home-img"
                  src="https://i.postimg.cc/nLK5KBpH/Profile-Image-removebg-preview.png"
                  alt="Harsh Shukla"
                  clipPath="url(#user-image)"
                  style={{ borderRadius: "50%" }}
                />
              </div>
            )}
          </div>
          <p
            id="user-detail-intro"
            style={{
              width: "90%",
              fontSize: "20px",
              margin: "20px",
              textAlign: "justify",
            }}
          >
            As a full-stack web developer with a background in military-style
            coding and a passion for learning, I've honed my skills at Masai
            School, specializing in the MERN Stack. I bring hands-on experience
            from diverse group projects and solo endeavors, leveraging HTML,
            CSS, JavaScript, React, Node.js, Express, and MongoDB to craft
            dynamic web solutions. Holding a B.Sc. in Computer Science from
            Awadesh Pratap Singh University, I thrive on challenges and
            constantly seek opportunities to expand my knowledge base. Beyond
            coding, I find joy in reading, listening to music, and embarking on
            journeys of discovery.
          </p>
        </Flex>
        <Heading size="lg" m="30px">
          Education
        </Heading>
        <Box className="education">
          {width < 700 ? (
            <Box>
              <Card
                className="education-card"
                bg="AppWorkspace"
                m="10px 0px"
                cursor={"pointer"}
              >
                <Heading size="sm">
                  Full stack Web Development(Full Time)
                </Heading>
                <p>Masai School, Bengaluru</p>
                <Box>
                  <i className="fa fa-calendar"></i> August 2022 - October 2023
                </Box>
              </Card>
              <Card
                className="education-card"
                bg="AppWorkspace"
                cursor={"pointer"}
              >
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
                  <i className="fa fa-calendar"></i> August 2022 - October 2023
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

        <Heading size="lg" m="30px">
          Experience
        </Heading>
        <Box className="education">
          {width < 700 ? (
            <Box>
              <Card
                className="education-card"
                bg="AppWorkspace"
                m="10px 0px"
                cursor={"pointer"}
              >
                <Heading size="sm">SDE Intern</Heading>
                <p>Masai School, Bengaluru</p>
                <Box>
                  <i className="fa fa-calendar"></i> November 2023 - May 2024
                </Box>
              </Card>
            </Box>
          ) : (
            <Stack direction={"row"} gap="20">
              <Card className="education-card" bg="AppWorkspace">
                <Heading size="sm">SDE Intern</Heading>
                <p>Masai School, Bengaluru</p>
                <Box>
                  <i className="fa fa-calendar"></i> November 2023 - May 2024
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
