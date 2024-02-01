import { Flex, Heading, HStack, Image } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithubSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { MdJavascript, MdHtml, MdCss } from "react-icons/md";
import {
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = [
  {
    image: "https://i.postimg.cc/zDHCmG7r/Chargeebee-clone.png",
    title: "ChargeeBee Clone",
    desc: "Chargebee is a subscription management system which can help you handle all the aspects of the subscription life cycle including recurring billing, invoicing and trial management for customers",
    teck: [
      <MdHtml size="40px" />,
      <MdCss size="40px" />,
      <MdJavascript size="40px" />,
    ],
    live: "https://stalwart-stardust-e2768b.netlify.app/",
    github: "https://github.com/harshshukla2002/ChargeBee-Clone",
  },
  {
    image: "https://i.postimg.cc/VLFYGX3H/tripadvisor-clone.png",
    title: "TripAdvisor Clone",
    desc: "TripAdvisor® is the world's largest travel site, enabling travelers to plan and have the perfect trip. TripAdvisor offers trusted advice from real travelers and a wide variety of travel choices and planning features with seamless links to booking tools.",
    teck: [
      <MdHtml size="40px" />,
      <MdCss size="40px" />,
      <MdJavascript size="40px" />,
    ],
    live: "https://loquacious-centaur-45f47d.netlify.app/",
    github: "https://github.com/harshshukla2002/TripAdvisorClone",
  },
  {
    image:
      "https://user-images.githubusercontent.com/112845916/221496830-378aef53-138f-41ae-bf32-152d0ab1badf.png",
    title: "Snapdeal Clone",
    desc: "Snapdeal is an Indian e-commerce company based out of New Delhi. Among the surrounding e-commerce platforms in India, Snapdeal has managed to carve its own niche with its impressive range of discounts and product categories",
    teck: [
      <FaReact size="30px" />,
      <MdCss size="40px" />,
      <Image
        w="30px"
        src="https://media.graphassets.com/91q3gAEGSh6HCrpnPgxS"
      />,
    ],
    live: "https://subsequent-parcel-2806-mehulktik-gmailcom.vercel.app/",
    github: "https://github.com/harshshukla2002/SnapDeal-Clone",
  },
  {
    image: "https://i.postimg.cc/7L5gFvYt/Screenshot-2023-03-24-200537.png",
    title: "Weather Website",
    desc: "A Website For Weather App, where you can check weather for any city.",
    teck: [
      <FaReact size="30px" />,
      <MdCss size="40px" />,
      <Image
        w="30px"
        src="https://media.graphassets.com/91q3gAEGSh6HCrpnPgxS"
      />,
    ],
    live: "https://marvelous-quokka-0749e7.netlify.app/",
    github: "https://github.com/harshshukla2002/React-Weather-App",
  },
  {
    image: "https://i.postimg.cc/G2Rz80P6/Screenshot-2023-05-21-125648.png",
    title: "Movie Website",
    desc: "A Website For Movies, where you can search movies and see information like poster and all.",
    teck: [
      <FaReact size="30px" />,
      <MdCss size="40px" />,
      <Image
        w="30px"
        src="https://media.graphassets.com/91q3gAEGSh6HCrpnPgxS"
      />,
      <SiTypescript size="30px" />,
    ],
    live: "https://voluble-youtiao-659757.netlify.app/",
    github: "https://github.com/harshshukla2002/React-Movie-App",
  },
  {
    image: "https://i.postimg.cc/wvXg80xB/Screenshot-2023-06-23-221450.png",
    title: "Pomodoro Tracker Clone",
    desc: "This app is for Pomodoro Technique using this we can increase our focus and when we are doing some work we can start the timer and work on that task in a given timer.",
    teck: [
      <FaReact size="30px" />,
      <MdCss size="40px" />,
      <Image
        w="30px"
        src="https://media.graphassets.com/91q3gAEGSh6HCrpnPgxS"
      />,
      <FaNodeJs size="30px" />,
      <SiRedux size="30px" />,
      <SiMongodb size="30px" />,
      <SiExpress size="30px" />,
      <SiJsonwebtokens size="30px" />,
    ],
    live: "https://pomodoro-clone-eight.vercel.app/",
    github: "https://github.com/harshshukla2002/Pomodoro-Clone",
  },
  {
    image: "https://i.postimg.cc/XYWsTz07/Screenshot-2024-02-01-151940.png",
    title: "Gleams Website",
    desc: "This is the ecommerce website where user can purchase online product like jwelery and watches according to their choices.",
    teck: [
      <FaReact size="30px" />,
      <MdCss size="40px" />,
      <Image
        w="30px"
        src="https://media.graphassets.com/91q3gAEGSh6HCrpnPgxS"
      />,
      <MdJavascript size={"40px"} />,
      <AiOutlineAntDesign size={"30px"} />,
      <SiRedux size="30px" />,
      <SiTailwindcss size="30px" />,
    ],
    live: "https://glems-eyy4alzt7-harshshukla2002.vercel.app/",
    github: "https://github.com/harshshukla2002/Glems-App",
  },
];

function Project() {
  AOS.init();
  return (
    <section id="projects">
      <div>
        <div className="heading">
          <Heading textAlign={"left"}>Projects</Heading>
          <div style={{ borderBottom: "5px solid blue", width: "10%" }}></div>
        </div>
        <div className="project-wrapper">
          {Projects.map((project) => {
            return (
              <Flex
                data-aos="zoom-out"
                data-aos-duration="2000"
                className="project-card"
                direction={["column"]}
                alignItems="center"
                margin={"10px"}
                boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
                borderRadius={"10px"}
              >
                <div className="project-image">
                  <Image src={project.image} />
                </div>
                <div style={{ padding: "10px" }}>
                  <Heading className="project-title" m="20px 10px">
                    {project.title}
                  </Heading>
                  <p className="project-description">{project.desc}</p>
                  <HStack className="project-tech-stack" mt="20px">
                    {project.teck.map((item) => item)}
                  </HStack>
                  <HStack mt="20px">
                    <Flex
                      className="live project-github-link"
                      alignItems="center"
                      onClick={() => window.open(project.github)}
                    >
                      <FaGithubSquare
                        size="20px"
                        style={{ margin: "0px 3px" }}
                      />
                      Github
                    </Flex>
                    <span>|</span>
                    <div
                      className="live project-deployed-link"
                      onClick={() => window.open(project.live)}
                    >
                      <ExternalLinkIcon /> Live
                    </div>
                  </HStack>
                </div>
              </Flex>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Project;
