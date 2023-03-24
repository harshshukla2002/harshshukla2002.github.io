import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import Resume from "../PDF/Harsh-Shukla-Resume.pdf";
import "../CSS/Navbar.css";

function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
    <div
      id="nav-menu"
      className="navbar"
      style={{
        position: "fixed",
        background: "white",
        width: "100%",
      }}
    >
      <div className="name-logo" style={{ fontSize: "30px" }}>
        {" "}
        Harsh
      </div>
      <div className="space"></div>
      <HStack spacing={50}>
        {width < 920 ? (
          <>
            <Button
              ref={btnRef}
              colorScheme="white"
              color="black"
              fontSize={25}
              onClick={onOpen}
            >
              <HamburgerIcon />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="top"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                  <SimpleGrid columns={[1, 3, 6]} p="10px" textAlign="center">
                    <a className="nav-link home" href="#home" smooth>
                      Home
                    </a>
                    <a className="nav-link about" href="#about" smooth>
                      About Me
                    </a>
                    <a className="nav-link skills" href="#skills" smooth>
                      Skills
                    </a>
                    <a className="nav-link projects" href="#projects" smooth>
                      Project
                    </a>
                    <a className="nav-link contact" href="#contact" smooth>
                      Contact
                    </a>
                    <a
                      className="nav-link resume"
                      id="resume-button-1"
                      href={Resume}
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/1XREqf6QqbzQUNSHqossE0c6bfzL6VOFM/view?usp=share_link"
                        )
                      }
                      download="Harsh-Shukla-Resume"
                    >
                      <Button className="margin-class">
                        <DownloadIcon /> Resume
                      </Button>
                    </a>
                  </SimpleGrid>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <>
            <NavHashLink className='"nav-link home"' to="#home" smooth>
              Home
            </NavHashLink>
            <NavHashLink className="nav-link about" to="#about" smooth>
              About Me
            </NavHashLink>
            <NavHashLink className="nav-link skills" to="#skills" smooth>
              Skills
            </NavHashLink>
            <NavHashLink className="nav-link projects" to="#projects" smooth>
              Project
            </NavHashLink>
            <NavHashLink className="nav-link contact" to="#contact" smooth>
              Contact
            </NavHashLink>
            s
            <a
              className="nav-link resume"
              href={Resume}
              id="resume-button-1"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1XREqf6QqbzQUNSHqossE0c6bfzL6VOFM/view?usp=share_link"
                )
              }
              download="Harsh-Shukla-Resume"
            >
              <Button className="margin-class">
                <DownloadIcon /> Resume
              </Button>
            </a>
          </>
        )}
      </HStack>
      <hr />
    </div>
  );
}

export default NavBar;
