import { Flex, Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function NameSection() {
  const [width, setWidth] = useState(window.innerWidth);

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
    <>
      <section id="home">
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="name-wrapper">
            <Flex
              direction={width < 900 ? "column" : "row"}
              justifyContent="space-between"
              alignItems="center"
            >
              <div style={{ width: "70%" }}>
                <Heading size="lg">
                  <Stack direction={["column", "row"]}>
                    <span>My Name is</span>
                    <span id="user-detail-name" style={{ color: "red" }}>
                      <Typewriter
                        options={{
                          autoStart: true,
                          loop: true,
                          delay: 50,
                          strings: ["Harsh Shukla"],
                        }}
                      />
                    </span>
                  </Stack>
                </Heading>
                <br />
                <Heading>
                  <Stack direction={["column", "row"]}>
                    <span> I AM </span>
                    <span style={{ color: "red" }}>
                      <Typewriter
                        options={{
                          autoStart: true,
                          loop: true,
                          delay: 50,
                          strings: [
                            "FULL STACK WEB DEVELOPER",
                            "MERN Developer",
                            "React Developer",
                          ],
                        }}
                      />
                    </span>
                  </Stack>
                </Heading>
              </div>
              <div
                style={{ width: width < 900 ? "80%" : "25%", margin: "20px" }}
              >
                <div className="container">
                  <div className="image-circle">
                    <img
                      className="home-img"
                      src="https://i.postimg.cc/RCjYtjsy/Untitled-design.png"
                      alt="Harsh Shukla"
                    />
                  </div>
                </div>
              </div>
            </Flex>
            <br />
            <br />
            <div>
              <h3 align="center" style={{ fontSize: "20px", color: "teal" }}>
                A Full Stack Web Developer with more than 2000 hours of
                building, maintaining and deploying single page/eCommerce
                applications and specialized in Node, React , Express and
                mongoDB. A passionate, diligent person who wants to learn
                continuously.
              </h3>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default NameSection;