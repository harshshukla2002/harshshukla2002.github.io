import { Box, Heading, HStack, Image, SimpleGrid, VStack } from "@chakra-ui/react";


function Skills() {
    return (
        <div id="skills">
            <Heading textAlign={'left'}>Skills</Heading>
            <div style={{ borderBottom: "5px solid red", width: "7%" }}></div>
            <div className="skill-wrapper">
                <SimpleGrid columns={[1, 2, 3]} >
                    <VStack className="vstack" spacing={5}>
                        <Heading size='lg'>Languages</Heading>
                        <Box className="skill-image-section skills-card">
                            <Image className="skills-card-img" src="https://i.postimg.cc/C5NzDy7N/icons8-js-100.png" />
                            <p className="skills-card-name">JavaScript</p>
                        </Box>
                        <Box className="skill-image-section skills-card">
                            <Image className="skills-card-img" src="https://i.postimg.cc/502G1LG2/icons8-typescript-100.png" />
                            <p className="skills-card-name">TypeScript</p>
                        </Box>
                    </VStack>
                    <VStack className="vstack" spacing={5}>
                        <Heading size='lg'>Front-End</Heading>
                        <HStack>
                            <Box className="skill-image-section skills-card">
                                <Image className="skills-card-img" src="https://i.postimg.cc/Pr1Qw7s8/icons8-html-filetype-96.png" />
                                <p className="skills-card-name">HTML5</p>
                            </Box>
                            <Box className="skill-image-section skills-card">
                                <Image className="skills-card-img" src="https://i.postimg.cc/jSZN608C/icons8-css3-100.png" />
                                <p className="skills-card-name">CSS3</p>
                            </Box>
                        </HStack>
                        <HStack>
                            <Box className="skill-image-section skills-card">
                                <Image className="skills-card-img" src="https://i.postimg.cc/Sx3QbgRD/icons8-react-128.png" />
                                <p className="skills-card-name">React</p>
                            </Box>
                            <Box className="skill-image-section skills-card">
                                <Image className="skills-card-img" src="https://i.postimg.cc/qMN9H4KH/icons8-redux-100.png" />
                                <p className="skills-card-name">Redux</p>
                            </Box>
                        </HStack>
                    </VStack>
                    <VStack className="vstack" spacing={5}>
                        <Heading size='lg'>Back-End</Heading>
                        <Box className="skill-image-section skills-card">
                            <Image className="skills-card-img" src="https://i.postimg.cc/Rhg67wRy/icons8-node-js-96.png" />
                            <p className="skills-card-name">NodeJS</p>
                        </Box>
                        <Box className="skill-image-section skills-card">
                            <Image className="skills-card-img" src="https://i.postimg.cc/59D6V9rw/icons8-express-js-100.png" />
                            <p className="skills-card-name">Express</p>
                        </Box>
                    </VStack>
                    <VStack spacing={5}>
                        <Heading size='lg'>Database</Heading>
                        <Box className="skill-image-section skills-card">
                            <Image className="skills-card-img" src="https://i.postimg.cc/gcVfYNSN/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png" />
                            <p className="skills-card-name">mongoDB</p>
                        </Box>
                    </VStack>
                    <VStack className="vstack" spacing={5}>
                        <Heading size='lg' class="skills-card ">Testing</Heading>
                        <Box className="skill-image-section skills-card">
                            <Image w='70%' m='10px' ml='30px' className="skills-card-img" src="https://i.postimg.cc/9fNqwdLk/index.png" />
                            <p className="skills-card-name">Cypress</p>
                        </Box>
                    </VStack>
                    <VStack className="vstack" spacing={5}>
                        <Heading size='lg'>Other</Heading>
                        <Box className="skill-image-section skills-card">
                            <Image className="skills-card-img" src="https://i.postimg.cc/yxT1cBVN/icons8-git-100.png" />
                            <p className="skills-card-name">Git</p>
                        </Box>
                        <Box className="skill-image-section skills-card">
                            <Image className="skills-card-img" src="https://i.postimg.cc/cCdZsjQG/icons8-visual-studio-100.png" />
                            <p className="skills-card-name">VS Code</p>
                        </Box>
                    </VStack>
                </SimpleGrid>
            </div>
        </div >
    )
}

export default Skills;