import React from "react";
import { MdLocationPin } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { FaPhone, FaArrowUp } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

import "./styles.css";
import { useScroll } from "@/app/context/ScrollContext";

function Contact() {
  const { contactRef: ref } = useScroll();
  return (
    <section ref={ref} id="contact" className="scroll-mt-5">
      <div className="flex flex-col gap-2 justify-center items-center my[5%]">
        <div className="flex gap-2 items-center">
          <MdLocationPin size={23} />
          <p className="text-xl">Rewa, Madhya Pradesh</p>
        </div>
        <div className="flex gap-2 items-center">
          <SiGmail size={23} />
          <p className="text-xl">harshshukla2312@gmail.com</p>
        </div>
        <div className="flex gap-2 items-center">
          <FaPhone size={23} />
          <p className="text-xl">+91 7898118805</p>
        </div>
        <div className="flex gap-2 items-center">
          <Link href={""} target="_blank">
            <Image
              src={"https://www.svgrepo.com/show/475654/github-color.svg"}
              alt="github"
              width={40}
              height={40}
            />
          </Link>
          <Link href={""} target="_blank">
            <Image
              src={
                "https://static.vecteezy.com/system/resources/previews/023/986/926/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
              }
              alt="github"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-end mr-10">
        <button
          className="btn btn-primary"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp size={30} />
        </button>
      </div>
    </section>
  );
}

export default Contact;
