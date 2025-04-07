"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

import { COLORS } from "@/app/constants/Colors";
import { useTheme } from "@/app/context/theme";
import { Switch } from "@/components/ui/switch";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import "./styles.css";
import { useWidth } from "@/app/CustomHook/useWidth";
import { useScroll } from "@/app/context/ScrollContext";

const Navbar = () => {
  const width = useWidth();
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const {
    contactRef,
    aboutRef,
    experienceRef,
    projectsRef,
    skillsRef,
    homeRef,
  } = useScroll();

  return (
    <div
      className="mx-auto p-5 text-white rounded-xl flex justify-between items-center"
      style={{
        background: theme === "light" ? COLORS.lightNavBg : COLORS.darkNavBg,
        borderLeft: theme === "dark" ? "1px solid green" : "",
        borderBottom: theme === "dark" ? "1px solid green" : "",
        width: theme === "dark" ? "90.1%" : "90%",
      }}
    >
      <div className="flex gap-2 items-center text-2xl">
        <Image
          src={"https://cdn-icons-png.freepik.com/512/9800/9800718.png"}
          alt="image"
          width={40}
          height={40}
        />
        <p>Harsh</p>
      </div>
      {width! > 1150 ? (
        <>
          <div className="flex gap-8 text-white text-xl">
            <p
              onClick={() =>
                homeRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer opacity-70 hover:opacity-100 transition-all"
            >
              Home
            </p>
            <p
              onClick={() =>
                aboutRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer opacity-70 hover:opacity-100 transition-all"
            >
              About
            </p>
            <p
              onClick={() =>
                experienceRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer opacity-70 hover:opacity-100 transition-all"
            >
              Experience
            </p>
            <p
              onClick={() =>
                projectsRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer opacity-70 hover:opacity-100 transition-all"
            >
              Projects
            </p>
            <p
              onClick={() =>
                skillsRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer opacity-70 hover:opacity-100 transition-all"
            >
              Skills
            </p>
            <p
              onClick={() =>
                contactRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer opacity-70 hover:opacity-100 transition-all"
            >
              Contact
            </p>
          </div>
          <div className="text-xl flex gap-4">
            <div className="flex gap-3 items-center">
              <IoSunnyOutline size={22} />
              <Switch onClick={toggleTheme} checked={theme === "dark"} />
              <IoMoonOutline size={20} />
            </div>
            <a
              className="resume"
              href="/PDF/Harsh-Shukla-Resume.pdf"
              id="resume-button-1"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Ex4jvjVNjB4Lnxo3eTj8g_-np3AdMNGQ/view?usp=sharing"
                )
              }
              download="Harsh-Shukla-Resume"
            >
              <button className="resume-1">
                <span className="resume-1-content">Download</span>
              </button>
            </a>
          </div>
        </>
      ) : (
        <AlertDialog open={open}>
          <AlertDialogTrigger>
            <Image
              src="/Images/menu.png"
              alt="hamburger"
              width={40}
              height={40}
              onClick={() => setOpen(true)}
            />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader className="flex items-end">
              <RxCross1 onClick={() => setOpen(false)} size={30} />
            </AlertDialogHeader>
            <div className="flex flex-col gap-5 text-xl justify-center items-center">
              <p onClick={() => setOpen(false)}>Home</p>
              <p onClick={() => setOpen(false)}>About</p>
              <p onClick={() => setOpen(false)}>Skills</p>
              <p onClick={() => setOpen(false)}>Projects</p>
              <p onClick={() => setOpen(false)}>Contact</p>
              <div className="flex gap-3 items-center">
                <IoSunnyOutline size={22} />
                <Switch onClick={toggleTheme} checked={theme === "dark"} />
                <IoMoonOutline size={20} />
              </div>
              <a
                className="resume"
                href="/PDF/Harsh-Shukla-Resume.pdf"
                id="resume-button-1"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Ex4jvjVNjB4Lnxo3eTj8g_-np3AdMNGQ/view?usp=sharing"
                  )
                }
                download="Harsh-Shukla-Resume"
              >
                <button className="resume-1">
                  <span className="resume-1-content">Download</span>
                </button>
              </a>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default Navbar;
