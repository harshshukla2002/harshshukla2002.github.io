import { Box, Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { useWidth } from "../CustomHooks/width";
import { AiOutlineArrowRight } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Languages = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    title: "JavaScript",
  },
  {
    image:
      "https://static-00.iconduck.com/assets.00/typescript-icon-icon-2048x2048-2rhh1z66.png",
    title: "TypeScript",
  },
];

const FrontEnd = [
  {
    image:
      "https://cdn-icons-png.freepik.com/256/4943/4943029.png?semt=ais_hybrid",
    title: "HTML",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    title: "CSS",
  },
  {
    image:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    title: "React",
  },
  {
    image:
      "https://static-00.iconduck.com/assets.00/redux-icon-2048x1945-ahvhunxp.png",
    title: "Redux",
  },
  {
    image: "https://avatars.githubusercontent.com/u/67109815?s=280&v=4",
    title: "Tailwind",
  },
  {
    image:
      "https://www.onu.ro/wp/wp-content/uploads/2020/03/react-native-logo-884x1024.png",
    title: "React Native",
  },
  {
    image:
      "http://pluspng.com/img-png/angular-logo-png-angular-logo-transparent-png-pluspng-482x512.png",
    title: "Angular",
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/apollo-graphql-compact.svg",
    title: "Apollo GraphQl",
  },
];

const Backend = [
  {
    image:
      "https://static-00.iconduck.com/assets.00/logo-nodejs-icon-1755x2048-ejfcifdr.png",
    title: "NodeJS",
  },
  {
    image: "https://img.icons8.com/color/512/express-js.png",
    title: "Express",
  },
  {
    image: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
    title: "NextJS",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
    title: "GraphQl",
  },
  {
    image:
      "https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F1608%2F0f93b179-76bf-4ee7-a838-e8222fbef062.png",
    title: "Prisma",
  },
];

const Database = [
  {
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    title: "MongoDB",
  },
  {
    image:
      "https://seeklogo.com/images/M/mysql-logo-B4943FE6DD-seeklogo.com.png",
    title: "MySQL",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png",
    title: "PostgreSQL",
  },
];

const Testing = [
  {
    title: "Cypress",
    image:
      "https://static-00.iconduck.com/assets.00/cypress-icon-2048x2048-swmlmjca.png",
  },
  {
    title: "Jest",
    image:
      "https://www.danielcornock.co.uk/assets/images/article-icons/jest.png",
  },
];

const Others = [
  {
    title: "Git",
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    title: "VS Code",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
  },
];

const SoftSkills = [
  "Collaboration",
  "Hard Work",
  "Time Managment",
  "Team Work",
];

function Skills() {
  const width = useWidth();

  AOS.init();

  return (
    <section id="skills">
      <div>
        <Heading textAlign={"left"}>Skills</Heading>
        <div style={{ borderBottom: "5px solid blue", width: "7%" }}></div>
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
          <div style={{ borderBottom: "5px solid blue", width: "21%" }}></div>
          <SimpleGrid columns={[1, 2, 3]}>
            <VStack className="vstack" spacing={5}>
              <Heading size="lg">Languages</Heading>
              <Box
                style={{
                  border: "2px solid gray",
                  borderBottomWidth: "4px",
                  borderRadius: "25px",
                }}
                borderRadius="10px"
                p="10px"
                className="skills-box"
              >
                {Languages.map((lang) => {
                  return (
                    <Flex className="skills-card">
                      <img
                        src={lang.image}
                        alt=""
                        className="skills-card-img"
                      />
                      <p className="skills-card-name">{lang.title}</p>
                    </Flex>
                  );
                })}
              </Box>
            </VStack>
            <VStack className="vstack" spacing={5}>
              <Heading size="lg">Front-End</Heading>
              <Box
                borderRadius="10px"
                p="10px"
                className="skills-box"
                style={{
                  border: "2px solid gray",
                  borderBottomWidth: "4px",
                  borderRadius: "25px",
                }}
              >
                <SimpleGrid columns={[width > 1050 ? 2 : 1]}>
                  {FrontEnd.map((elem) => {
                    return (
                      <Flex className="skills-card">
                        <img
                          src={elem.image}
                          alt=""
                          className="skills-card-img"
                        />
                        <p className="skills-card-name">{elem.title}</p>
                      </Flex>
                    );
                  })}
                </SimpleGrid>
              </Box>
            </VStack>
            <VStack className="vstack" spacing={5}>
              <Heading size="lg">Back-End</Heading>
              <Box
                style={{
                  border: "2px solid gray",
                  borderBottomWidth: "4px",
                  borderRadius: "25px",
                }}
                borderRadius="10px"
                p="10px"
                className="skills-box"
              >
                <SimpleGrid columns={[width > 1050 ? 2 : 1]}>
                  {Backend.map((elem) => {
                    return (
                      <Flex className="skills-card">
                        <img
                          src={elem.image}
                          alt=""
                          className="skills-card-img"
                        />
                        <p className="skills-card-name">{elem.title}</p>
                      </Flex>
                    );
                  })}
                </SimpleGrid>
              </Box>
            </VStack>
            <VStack spacing={5}>
              <Heading size="lg">Database</Heading>
              <Box
                style={{
                  border: "2px solid gray",
                  borderBottomWidth: "4px",
                  borderRadius: "25px",
                }}
                borderRadius="10px"
                p="10px"
                className="skills-box"
              >
                {Database.map((elem) => {
                  return (
                    <Flex className="skills-card">
                      <img
                        src={elem.image}
                        alt=""
                        className="skills-card-img"
                      />
                      <p className="skills-card-name">{elem.title}</p>
                    </Flex>
                  );
                })}
              </Box>
            </VStack>
            <VStack className="vstack" spacing={5}>
              <Heading size="lg">Testing</Heading>
              <Box
                style={{
                  border: "2px solid gray",
                  borderBottomWidth: "4px",
                  borderRadius: "25px",
                }}
                borderRadius="10px"
                p="10px"
                className="skills-box"
              >
                {Testing.map((elem) => {
                  return (
                    <Flex className="skills-card">
                      <img
                        src={elem.image}
                        alt=""
                        className="skills-card-img"
                      />
                      <p className="skills-card-name">{elem.title}</p>
                    </Flex>
                  );
                })}
              </Box>
            </VStack>
            <VStack className="vstack" spacing={5}>
              <Heading size="lg">Other</Heading>
              <Box
                style={{
                  border: "2px solid gray",
                  borderBottomWidth: "4px",
                  borderRadius: "25px",
                }}
                borderRadius="10px"
                p="10px"
                className="skills-box"
              >
                {Others.map((elem) => {
                  return (
                    <Flex className="skills-card">
                      <img
                        src={elem.image}
                        alt=""
                        className="skills-card-img"
                      />
                      <p className="skills-card-name">{elem.title}</p>
                    </Flex>
                  );
                })}
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
          <div style={{ borderBottom: "5px solid blue", width: "15%" }}></div>
          <Box
            style={{
              border: "2px solid gray",
              borderBottomWidth: "4px",
              borderRadius: "25px",
            }}
            borderRadius="10px"
            p="10px"
            className="skills-box"
            margin={"10px"}
            w={width < 900 && width > 500 ? "60%" : width < 500 ? "90%" : "30%"}
          >
            {SoftSkills.map((item) => {
              return (
                <Flex className="skills-card">
                  <AiOutlineArrowRight
                    size="20px"
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">{item}</p>
                </Flex>
              );
            })}
          </Box>
        </div>
      </div>
    </section>
  );
}

export default Skills;
