import { Box, Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { useWidth } from "../CustomHooks/width";
import { AiOutlineArrowRight } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  const width = useWidth();

  AOS.init();

  return (
    <section id="skills">
      <div>
        <Heading textAlign={"left"}>Skills</Heading>
        <div style={{ borderBottom: "5px solid red", width: "7%" }}></div>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          style={{
            borderRadius: "5px",
            margin: "20px",
            padding: "10px",
          }}
        >
          <Heading>Technical Skills</Heading>
          <div style={{ borderBottom: "5px solid red", width: "21%" }}></div>
          <SimpleGrid columns={[1, 2, 3]}>
            <VStack className="vstack" spacing={5}>
              <Heading size="lg">Languages</Heading>
              <Box
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                borderRadius="10px"
                p="10px"
                className="skills-box"
              >
                <Flex className="skills-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    alt=""
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">JavaScript</p>
                </Flex>
                <Flex className="skills-card">
                  <img
                    src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png"
                    alt=""
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">TypeScript</p>
                </Flex>
              </Box>
            </VStack>
            <VStack className="vstack" spacing={5}>
              <Heading size="lg">Front-End</Heading>
              <Box
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                borderRadius="10px"
                p="10px"
                className="skills-box"
              >
                <SimpleGrid columns={[1, 2]}>
                  <Flex className="skills-card">
                    <img
                      src="https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png"
                      alt=""
                      className="skills-card-img"
                    />
                    <p className="skills-card-name">HTML</p>
                  </Flex>
                  <Flex className="skills-card">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                      alt=""
                      className="skills-card-img"
                    />
                    <p className="skills-card-name">CSS</p>
                  </Flex>
                  <Flex className="skills-card">
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                      alt=""
                      className="skills-card-img"
                    />
                    <p className="skills-card-name">React</p>
                  </Flex>
                  <Flex
                    className="skills-card"
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                  >
                    <img
                      src="https://www.taniarascia.com/static/987371fab3463c3496c5a6447b32553f/56e34/redux.png"
                      alt=""
                      className="skills-card-img"
                    />
                    <p className="skills-card-name">Redux</p>
                  </Flex>
                  <Flex className="skills-card">
                    <img
                      src="https://avatars.githubusercontent.com/u/67109815?s=280&v=4"
                      alt=""
                      className="skills-card-img"
                    />
                    <p className="skills-card-name">TailwindCSS</p>
                  </Flex>
                </SimpleGrid>
              </Box>
            </VStack>
            <VStack className="vstack" spacing={5}>
              <Heading size="lg">Back-End</Heading>
              <Box
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                borderRadius="10px"
                p="10px"
                className="skills-box"
              >
                <Flex className="skills-card">
                  <img
                    src="https://static-00.iconduck.com/assets.00/logo-nodejs-icon-1755x2048-ejfcifdr.png"
                    alt=""
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">NodeJS</p>
                </Flex>
                <Flex className="skills-card">
                  <img
                    src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
                    alt=""
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">Express</p>
                </Flex>
                <Flex className="skills-card">
                  <img
                    src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
                    alt=""
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">NextJS</p>
                </Flex>
              </Box>
            </VStack>
            <VStack spacing={5}>
              <Heading size="lg">Database</Heading>
              <Box
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                borderRadius="10px"
                p="10px"
                className="skills-box"
              >
                <Flex className="skills-card">
                  <img
                    src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
                    alt=""
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">mongoDB</p>
                </Flex>
              </Box>
            </VStack>
            <VStack className="vstack" spacing={5}>
              <Heading size="lg">Testing</Heading>
              <Box
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                borderRadius="10px"
                p="10px"
                className="skills-box"
              >
                <Flex className="skills-card">
                  <img
                    src="https://static-00.iconduck.com/assets.00/cypress-icon-2048x2048-swmlmjca.png"
                    alt=""
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">Cypress</p>
                </Flex>
                <Flex className="skills-card">
                  <img
                    src="https://www.danielcornock.co.uk/assets/images/article-icons/jest.png"
                    alt=""
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">Jest</p>
                </Flex>
              </Box>
            </VStack>
            <VStack className="vstack" spacing={5}>
              <Heading size="lg">Other</Heading>
              <Box
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                borderRadius="10px"
                p="10px"
                className="skills-box"
              >
                <Flex className="skills-card">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">Git</p>
                </Flex>
                <Flex className="skills-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
                    alt=""
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">VS Code</p>
                </Flex>
              </Box>
            </VStack>
          </SimpleGrid>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          style={{
            borderRadius: "5px",
            margin: "20px",
            padding: "10px",
          }}
        >
          <Heading>Soft Skills</Heading>
          <div style={{ borderBottom: "5px solid red", width: "15%" }}></div>
          <Box
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            borderRadius="10px"
            p="10px"
            className="skills-box"
            margin={"10px"}
            w={width < 900 && width > 500 ? "60%" : width < 500 ? "90%" : "30%"}
          >
            <Flex className="skills-card">
              <AiOutlineArrowRight size="20px" className="skills-card-img" />
              <p className="skills-card-name">Collaboration</p>
            </Flex>
            <Flex className="skills-card">
              <AiOutlineArrowRight size="20px" className="skills-card-img" />
              <p className="skills-card-name">Time Managment</p>
            </Flex>
            <Flex className="skills-card">
              <AiOutlineArrowRight size="20px" className="skills-card-img" />
              <p className="skills-card-name">Hard Work</p>
            </Flex>
            <Flex className="skills-card">
              <AiOutlineArrowRight size="20px" className="skills-card-img" />
              <p className="skills-card-name">Team Work</p>
            </Flex>
          </Box>
        </div>
      </div>
    </section>
  );
}

export default Skills;
