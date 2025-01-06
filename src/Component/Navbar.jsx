import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Heading,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import { NavHashLink } from "react-router-hash-link";
import Resume from "../PDF/Harsh-Shukla-Resume.pdf";
import "../CSS/Navbar.css";
import { useLocation } from "react-router-dom";

function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { hash } = useLocation();

  const DetectWindowSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    onClose();
  }, [hash]);

  useEffect(() => {
    window.addEventListener("resize", DetectWindowSize);

    return () => {
      window.removeEventListener("resize", DetectWindowSize);
    };
  }, [width]);

  return (
    <div id="nav-menu" className="navbar">
      <div
        className="name-logo"
        style={{ fontSize: "25px", fontWeight: "bold" }}
      >
        <Heading className="gradient-font">Harsh</Heading>
      </div>
      <div className="space"></div>
      <HStack spacing={50}>
        {width < 1050 ? (
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
                  <SimpleGrid columns={[2, 3, 6]} p="10px" textAlign="center">
                    <NavHashLink className="nav-link home" to="#home" smooth>
                      Home
                    </NavHashLink>
                    <NavHashLink className="nav-link about" to="#about" smooth>
                      About
                    </NavHashLink>
                    <NavHashLink
                      className="nav-link skills"
                      to="#skills"
                      smooth
                    >
                      Skills
                    </NavHashLink>

                    <NavHashLink
                      className="nav-link projects"
                      to="#projects"
                      smooth
                    >
                      Project
                    </NavHashLink>
                    <NavHashLink
                      className="nav-link contact"
                      to="#contact"
                      smooth
                    >
                      Contact
                    </NavHashLink>
                    <a
                      className="resume"
                      id="resume-button-1"
                      href={Resume}
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/1Ex4jvjVNjB4Lnxo3eTj8g_-np3AdMNGQ/view?usp=sharing"
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
            <NavHashLink className="nav-link home" to="#home" smooth>
              Home
            </NavHashLink>
            <NavHashLink className="nav-link about" to="#about" smooth>
              About
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
            <a
              className="resume"
              href={Resume}
              id="resume-button-1"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Ex4jvjVNjB4Lnxo3eTj8g_-np3AdMNGQ/view?usp=sharing"
                )
              }
              download="Harsh-Shukla-Resume"
            >
              <Button className="margin-class" variant={"ghost"}>
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
