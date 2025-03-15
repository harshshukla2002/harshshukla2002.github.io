import { Box, Card, Heading, Stack, Flex } from "@chakra-ui/react";
import Resume from "../PDF/Harsh-Shukla-Resume.pdf";
import { DownloadIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// current comment for cursive

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
                "https://drive.google.com/file/d/1Ex4jvjVNjB4Lnxo3eTj8g_-np3AdMNGQ/view?usp=sharing"
              )
            }
          >
            <a id="resume-link-2" className="resume" href={Resume} download>
              <button class="button">
                <DownloadIcon style={{ marginTop: "5px" }} />
                <div class="text">Resume</div>
              </button>
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
            A dedicated Full Stack Developer with 1 years of experience in
            React.js, React Native, Node.js, and MongoDB. Skilled in creating
            responsive UIs, scalable APIs, and cross-platform applications.
            Passionate about delivering innovative, user-focused solutions and
            contributing to impactful projects.
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
                // bg="AppWorkspace"
                m="10px 0px"
                cursor={"pointer"}
                style={{
                  border: "2px solid gray",
                  borderBottomWidth: "4px",
                  borderRadius: "25px",
                }}
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
                // bg="AppWorkspace"
                cursor={"pointer"}
                style={{
                  border: "2px solid gray",
                  borderBottomWidth: "4px",
                  borderRadius: "25px",
                }}
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
              <Card
                className="education-card"
                // bg="AppWorkspace"
                style={{
                  border: "2px solid gray",
                  borderBottomWidth: "4px",
                  borderRadius: "25px",
                }}
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
                // bg="AppWorkspace"
                style={{
                  border: "2px solid gray",
                  borderBottomWidth: "4px",
                  borderRadius: "25px",
                }}
              >
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
                style={{
                  border: "2px solid gray",
                  borderBottomWidth: "4px",
                  borderRadius: "25px",
                }}
              >
                <Heading size="sm">Mobile Application Developer</Heading>
                <p>Anugraha Exceed Incorporated, Bengaluru</p>
                <Box>
                  <i className="fa fa-calendar"></i> June 2024 - November 2024
                </Box>
                <Box mt={2}>
                  <p>
                    • Developed multiple aviation-related forms to streamline
                    data entry for airline pilot training.
                  </p>
                  <p>
                    • Created and implemented a calendar event page for
                    scheduling pilot training sessions.
                  </p>
                </Box>
              </Card>
              <Card
                className="education-card"
                bg="AppWorkspace"
                mt={5}
                style={{
                  border: "2px solid gray",
                  borderBottomWidth: "4px",
                  borderRadius: "25px",
                }}
              >
                <Heading size="sm">SDE Intern</Heading>
                <p>Masai School, Bengaluru</p>
                <Box>
                  <i className="fa fa-calendar"></i> November 2023 - May 2024
                </Box>
                <Box mt={2}>
                  <p>
                    • Developed and maintained the login and user profile
                    sections of the Trifit mobile application using React
                    Native.
                  </p>
                  <p>
                    • Utilized state management libraries (e.g., Redux) to
                    manage user state effectively.
                  </p>
                </Box>
              </Card>
            </Box>
          ) : (
            <Stack direction={"row"} gap="20">
              <Card
                className="education-card"
                bg="AppWorkspace"
                style={{
                  border: "2px solid gray",
                  borderBottomWidth: "4px",
                  borderRadius: "25px",
                }}
              >
                <Heading size="sm">Mobile Application Developer</Heading>
                <p>Anugraha Exceed Incorporated, Bengaluru</p>
                <Box>
                  <i className="fa fa-calendar"></i> June 2024 - September 2024
                </Box>
                <Box mt={2}>
                  <p>
                    • Developed multiple aviation-related forms to streamline
                    data entry for airline pilot training.
                  </p>
                  <p>
                    • Created and implemented a calendar event page for
                    scheduling pilot training sessions.
                  </p>
                </Box>
              </Card>
              <Card
                className="education-card"
                bg="AppWorkspace"
                style={{
                  border: "2px solid gray",
                  borderBottomWidth: "4px",
                  borderRadius: "25px",
                }}
              >
                <Heading size="sm">SDE Intern</Heading>
                <p>Masai School, Bengaluru</p>
                <Box>
                  <i className="fa fa-calendar"></i> November 2023 - May 2024
                </Box>
                <Box mt={2}>
                  <p>
                    • Developed and maintained the login and user profile
                    sections of the Trifit mobile application using React
                    Native.
                  </p>
                  <p>
                    • Utilized state management libraries (e.g., Redux) to
                    manage user state effectively.
                  </p>
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
