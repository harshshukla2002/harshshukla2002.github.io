import {
  Box,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

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
              <Box className="skills-card">
                <Image
                  className="skills-card-img"
                  src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
                />
                <p className="skills-card-name">JavaScript</p>
              </Box>
              <Box className="skills-card">
                <Image
                  className="skills-card-img"
                  src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png"
                />
                <p className="skills-card-name">TypeScript</p>
              </Box>
            </VStack>
            <VStack className="vstack" spacing={5}>
              <Heading size="lg">Front-End</Heading>
              <HStack>
                <Box className="skills-card">
                  <Image
                    className="skills-card-img"
                    src="https://play-lh.googleusercontent.com/vzHVyL8G7birnPZ0zuCQQ2uDxuLIXzYOUGjFDFzIqfx-ww1fq8IysoEiWzhWI3Dw08g"
                  />
                  <p className="skills-card-name">HTML</p>
                </Box>
                <Box className="skills-card">
                  <Image
                    className="skills-card-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6014hBATp4TnR064VPPlSFUaFsfToYSSqM3akkixJYg&usqp=CAU&ec=48665699"
                  />
                  <p className="skills-card-name">CSS</p>
                </Box>
              </HStack>
              <HStack>
                <Box className="skills-card">
                  <Image
                    className="skills-card-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8F70RXPSHHMFqpAxSMZ0v3bXHu5lQ3tw_Jh71sNgqoA&usqp=CAU&ec=48665699"
                  />
                  <p className="skills-card-name">React</p>
                </Box>
                <Box className="skills-card">
                  <Image
                    className="skills-card-img"
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--8JgggMJn--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/4hz72bexko5ol6aq5be4.png"
                  />
                  <p className="skills-card-name">Redux</p>
                </Box>
              </HStack>
            </VStack>
            <VStack className="vstack" spacing={5}>
              <Heading size="lg">Back-End</Heading>
              <Box className="skills-card">
                <Image
                  className="skills-card-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJNML9togUHwU4ePx-yiBGFd-EkVJx9a414cylRyClQ&usqp=CAU&ec=48665699"
                />
                <p className="skills-card-name">NodeJS</p>
              </Box>
              <Box className="skills-card">
                <Image
                  className="skills-card-img"
                  src="https://img.icons8.com/office/512/express-js.png"
                />
                <p className="skills-card-name">Express</p>
              </Box>
            </VStack>
            <VStack spacing={5}>
              <Heading size="lg">Database</Heading>
              <Box className="skills-card">
                <Image
                  className="skills-card-img"
                  src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg"
                />
                <p className="skills-card-name">mongoDB</p>
              </Box>
            </VStack>
            <VStack className="vstack" spacing={5}>
              <Heading size="lg">Testing</Heading>
              <Box className="skills-card">
                <Image
                  className="skills-card-img"
                  src="https://www.cypress.io/cypress_logo_social.png"
                />
                <p className="skills-card-name">Cypress</p>
              </Box>
            </VStack>
            <VStack className="vstack" spacing={5}>
              <Heading size="lg">Static Site Generator</Heading>
              <Box className="skills-card">
                <Image
                  className="skills-card-img"
                  src="https://calendar.perfplanet.com/wp-content/uploads/2022/12/clark/next-logo.png"
                />
                <p className="skills-card-name">NextJS</p>
              </Box>
            </VStack>
            <VStack className="vstack" spacing={5}>
              <Heading size="lg">Other</Heading>
              <Box className="skills-card">
                <Image
                  className="skills-card-img"
                  src="https://git-scm.com/images/logos/downloads/Git-Logo-White.png"
                />
                <p className="skills-card-name">Git</p>
              </Box>
              <Box className="skills-card">
                <Image
                  className="skills-card-img"
                  src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/01/000-VS-Code.png"
                />
                <p className="skills-card-name">VS Code</p>
              </Box>
            </VStack>
          </SimpleGrid>
        </div>
      </div>
    </section>
  );
}

export default Skills;
