import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, HStack, SimpleGrid, useDisclosure } from "@chakra-ui/react"
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef()

    const DetectWindowSize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener("resize", DetectWindowSize)

        return () => {
            window.removeEventListener("resize", DetectWindowSize)
        }
    }, [width, height])
    return (
        <div id='nav-menu' className="navbar" style={{ position: "fixed", background: "white", width: '100%' }}>
            <div className="name-logo" style={{ fontSize: '30px' }}>Harsh</div>
            <div className="space"></div>
            <HStack spacing={50}>
                {
                    width < 920 ?
                        <>
                            <Button ref={btnRef} colorScheme='white' color='black' fontSize={25} onClick={onOpen}>
                                <HamburgerIcon />
                            </Button>
                            <Drawer
                                isOpen={isOpen}
                                placement='top'
                                onClose={onClose}
                                finalFocusRef={btnRef}
                            >
                                <DrawerOverlay />
                                <DrawerContent>
                                    <DrawerCloseButton />
                                    <DrawerBody>
                                        <SimpleGrid columns={[1, 3, 6]} p='10px' textAlign='center'>
                                            <div className="margin-class" id='home'>Home</div>
                                            <div id="about" className=" margin-class about section">About Me</div>
                                            <div className="margin-class" id="skills">Skills</div>
                                            <div className="margin-class" id="projects">Project</div>
                                            <div className="margin-class" id="contact">Contact</div>
                                            <Button className="margin-class"> <DownloadIcon /> Resume</Button>
                                        </SimpleGrid>
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                        </>
                        :
                        <>
                            <NavLink to='#homesection' id='home'>Home</NavLink>
                            <div id="about" className="about section">About Me</div>
                            <div id="skills">Skills</div>
                            <div id="projects">Project</div>
                            <div id="contact">Contact</div>
                            <Button colorScheme='telegram'> <DownloadIcon /> Resume</Button>
                        </>
                }
            </HStack>
            <hr />
        </div>
    )
}

export default NavBar;