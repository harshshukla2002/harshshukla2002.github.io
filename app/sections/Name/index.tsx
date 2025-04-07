import { COLORS } from "@/app/constants/Colors";
import { useScroll } from "@/app/context/ScrollContext";
import { useTheme } from "@/app/context/theme";
import { useWidth } from "@/app/CustomHook/useWidth";
import Image from "next/image";
import React from "react";

const Name = () => {
  const { theme } = useTheme();
  const width = useWidth();
  const { homeRef: ref } = useScroll();

  return (
    <section ref={ref} id="home" className="scroll-mt-5">
      <div
        className="my-5 rounded-2xl mx-1.5 flex gap-20 justify-between items-center p-10"
        style={{
          background:
            theme === "light" ? COLORS.lightCardBg : COLORS.darkCardBg,
          borderBottom: theme === "dark" ? "1px solid green" : "",
          borderRight: theme === "dark" ? "1px solid green" : "",
          flexWrap: width! > 1000 ? "nowrap" : "wrap",
        }}
      >
        {/* <Image
          src="/images/myimage.jpeg"
          width={width! * 0.3}
          height={width! * 0}
          alt="harsh"
          style={{ background: "black" }}
          className="items-center rounded-full"
        /> */}
        <div
          className=" flex flex-col gap-4"
          style={{ width: width! > 1000 ? "45%" : "90%" }}
        >
          <p className="text-2xl">
            <span style={{ color: "#E97B7B" }}>{"<span>"}</span> Heyy, I'm Harsh{" "}
            <span style={{ color: "#E97B7B" }}>{"</span>"}</span>
          </p>
          <p className="text-5xl">
            <span style={{ color: "green" }}>{"{Full Stack}"} </span>
            Web & App Developer_
          </p>
          <p className="text-gray-500 text-xl">
            <span style={{ color: "#E97B7B" }}>{"<p>"}</span> With expertise in
            cutting edge technologies such as{" "}
            <span style={{ color: "#E97B7B", fontSize: "20px" }}>
              NodeJS, React, NextJs
            </span>{" "}
            and{" "}
            <span style={{ color: "#E97B7B", fontSize: "20px" }}>
              React Native
            </span>{" "}
            ... i create web solutions that are both inovative and robust{" "}
            <span style={{ color: "#E97B7B" }}>{"</p>"}</span>
          </p>
          <div
            className="flex gap-5 items-center m-10"
            style={{ flexWrap: width! > 600 ? "nowrap" : "wrap" }}
          >
            <Image
              src={
                "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png"
              }
              width={40}
              height={40}
              alt="nodejs"
            />{" "}
            <Image
              src={
                "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              }
              width={40}
              height={40}
              alt="reactjs"
            />{" "}
            <Image
              src={
                "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png"
              }
              width={40}
              height={40}
              alt="nextjs"
            />{" "}
            <Image
              src={
                "https://devtop.io/wp-content/uploads/2022/10/react-native-1.png"
              }
              width={60}
              height={60}
              alt="react native"
            />{" "}
            <p className="text-xl"> ... and more</p>
          </div>
          <div
            className=""
            id="resume-button-2"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1Ex4jvjVNjB4Lnxo3eTj8g_-np3AdMNGQ/view?usp=sharing"
              )
            }
          >
            <a
              className="resume"
              href="/PDF/Harsh-Shukla-Resume.pdf"
              id="resume-link-2"
              download="Harsh-Shukla-Resume"
            >
              <button className="resume-1">
                <span className="resume-1-content">Download</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Name;
