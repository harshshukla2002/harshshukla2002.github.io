import { Box, Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";

function Skills() {
  return (
    <section id="skills">
      <div>
        <Heading textAlign={"left"}>Skills</Heading>
        <div style={{ borderBottom: "5px solid red", width: "7%" }}></div>
        <div>
          <SimpleGrid columns={[1, 2, 3]}>
            <VStack className="vstack" spacing={5}>
              <Heading size="lg">Languages</Heading>
              <Box
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                borderRadius="10px"
                p="10px"
              >
                <Flex className="skills-card">
                  <AiOutlineArrowRight
                    size="20px"
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">JavaScript</p>
                </Flex>
                <Flex className="skills-card">
                  <AiOutlineArrowRight
                    size="20px"
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
              >
                <SimpleGrid columns={[1, 2]}>
                  <Flex className="skills-card">
                    <AiOutlineArrowRight
                      size="20px"
                      className="skills-card-img"
                    />
                    <p className="skills-card-name">HTML</p>
                  </Flex>
                  <Flex className="skills-card">
                    <AiOutlineArrowRight
                      size="20px"
                      className="skills-card-img"
                    />
                    <p className="skills-card-name">CSS</p>
                  </Flex>
                  <Flex className="skills-card">
                    <AiOutlineArrowRight
                      size="20px"
                      className="skills-card-img"
                    />
                    <p className="skills-card-name">React</p>
                  </Flex>
                  <Flex
                    className="skills-card"
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                  >
                    <AiOutlineArrowRight
                      size="20px"
                      className="skills-card-img"
                    />
                    <p className="skills-card-name">Redux</p>
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
              >
                <Flex className="skills-card">
                  <AiOutlineArrowRight
                    size="20px"
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">NodeJS</p>
                </Flex>
                <Flex className="skills-card">
                  <AiOutlineArrowRight
                    size="20px"
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">Express</p>
                </Flex>
                <Flex className="skills-card">
                  <AiOutlineArrowRight
                    size="20px"
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
              >
                <Flex className="skills-card">
                  <AiOutlineArrowRight
                    size="20px"
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
              >
                <Flex className="skills-card">
                  <AiOutlineArrowRight
                    size="20px"
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">Cypress</p>
                </Flex>
                <Flex className="skills-card">
                  <AiOutlineArrowRight
                    size="20px"
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
              >
                <Flex className="skills-card">
                  <AiOutlineArrowRight
                    size="20px"
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">Git</p>
                </Flex>
                <Flex className="skills-card">
                  <AiOutlineArrowRight
                    size="20px"
                    className="skills-card-img"
                  />
                  <p className="skills-card-name">VS Code</p>
                </Flex>
              </Box>
            </VStack>
          </SimpleGrid>
        </div>
      </div>
    </section>
  );
}

export default Skills;
