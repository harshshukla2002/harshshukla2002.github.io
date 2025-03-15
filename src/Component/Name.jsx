import { Flex, Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
              <div
                style={{
                  width: width < 900 ? "95%" : "60%",
                  textAlign: "left",
                }}
              >
                <Heading size="lg">
                  <Stack direction={["column", "row"]}>
                    <p>My Name is</p>
                    <span id="user-detail-name" style={{ color: "blue" }}>
                      Harsh Shukla
                    </span>
                  </Stack>
                </Heading>
                <br />
                <Heading>
                  {/* <Stack direction={["column", "row"]}>
                    <p> I AM </p>
                    <span style={{ color: "blue" }}>
                      <Typewriter
                        options={{
                          autoStart: true,
                          loop: true,
                          delay: 50,
                          strings: [
                            "FULL STACK DEVELOPER",
                            "MERN Developer",
                            "React Developer",
                            "React Native Developer",
                          ],
                        }}
                      />
                    </span>
                  </Stack> */}
                  <div class="card">
                    <div class="loader">
                      <p>I Am</p>
                      <div class="words">
                        <span class="word">MERN Stack Developer</span>
                        <span class="word">MEAN Stack Developer</span>
                        <span class="word">React Developer</span>
                        <span class="word">React Native Developer</span>
                        <span class="word">MERN Stack Developer</span>
                      </div>
                    </div>
                  </div>
                </Heading>
              </div>
              <div
                style={{ width: width < 900 ? "80%" : "25%", margin: "20px" }}
              >
                {width < 900 ? (
                  <img
                    className="home-img"
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWFpN3RvMmZ2emQxeWVvMW9tdmhnbXV4NHhjcGpveng0ODQ5bmJqaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jBOOXxSJfG8kqMxT11/giphy.gif"
                    alt="Harsh Shukla"
                    clipPath="url(#user-image)"
                    style={{ borderRadius: "10px" }}
                  />
                ) : (
                  <div className="container">
                    <img
                      className="home-img"
                      src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWFpN3RvMmZ2emQxeWVvMW9tdmhnbXV4NHhjcGpveng0ODQ5bmJqaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jBOOXxSJfG8kqMxT11/giphy.gif"
                      alt="Harsh Shukla"
                      clipPath="url(#user-image)"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                )}
              </div>
            </Flex>
            <br />
            <br />
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default NameSection;
