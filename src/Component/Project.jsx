import { Flex, Heading, HStack, Image } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithubSquare, FaReact } from "react-icons/fa";
import { MdJavascript, MdHtml, MdCss } from "react-icons/md";
import { SiTypescript } from "react-icons/si";

function Project() {
  return (
    <section id="projects">
      <div>
        <div className="heading">
          <Heading textAlign={"left"}>Projects</Heading>
          <div style={{ borderBottom: "5px solid red", width: "10%" }}></div>
        </div>
        <div className="project-wrapper">
          <Flex
            className="project-card"
            direction={["column", "row"]}
            alignItems="center"
          >
            <div className="project-image">
              <Image src="https://i.postimg.cc/zDHCmG7r/Chargeebee-clone.png" />
            </div>
            <div>
              <Heading className="project-title" m="20px 10px">
                ChargeeBee Clone
              </Heading>
              <p className="project-description">
                Chargebee is a subscription management system which can help you
                handle all the aspects of the subscription life cycle including
                recurring billing, invoicing and trial management for customers.
              </p>
              <HStack className="project-tech-stack" mt="20px">
                <MdHtml size="40px" />
                <MdCss size="40px" />
                <MdJavascript size="40px" />
              </HStack>
              <HStack mt="20px">
                <Flex
                  className="live project-github-link"
                  alignItems="center"
                  onClick={() =>
                    window.open(
                      "https://github.com/harshshukla2002/ChargeBee-Clone"
                    )
                  }
                >
                  <FaGithubSquare size="20px" style={{ margin: "0px 3px" }} />
                  Github
                </Flex>
                <span>|</span>
                <div
                  className="live project-deployed-link"
                  onClick={() =>
                    window.open("https://stalwart-stardust-e2768b.netlify.app/")
                  }
                >
                  <ExternalLinkIcon /> Live
                </div>
              </HStack>
            </div>
          </Flex>
          <Flex
            className="project-card"
            direction={["column", "row"]}
            alignItems="center"
          >
            <div className="project-image">
              <Image src="https://i.postimg.cc/VLFYGX3H/tripadvisor-clone.png" />
            </div>
            <div>
              <Heading className="project-title" m="20px 10px">
                TripAdvisor Clone
              </Heading>
              <p className="project-description">
                TripAdvisor® is the world's largest travel site, enabling
                travelers to plan and have the perfect trip. TripAdvisor offers
                trusted advice from real travelers and a wide variety of travel
                choices and planning features with seamless links to booking
                tools.
              </p>
              <HStack className="project-tech-stack" mt="20px">
                <MdHtml size="40px" />
                <MdCss size="40px" />
                <MdJavascript size="40px" />
              </HStack>
              <HStack mt="20px">
                <Flex
                  className="live project-github-link"
                  alignItems="center"
                  onClick={() =>
                    window.open(
                      "https://github.com/harshshukla2002/TripAdvisorClone"
                    )
                  }
                >
                  <FaGithubSquare size="20px" style={{ margin: "0px 3px" }} />
                  Github
                </Flex>
                <span>|</span>
                <div
                  className="live project-deployed-link"
                  onClick={() =>
                    window.open(
                      "https://loquacious-centaur-45f47d.netlify.app/"
                    )
                  }
                >
                  <ExternalLinkIcon /> Live
                </div>
              </HStack>
            </div>
          </Flex>
          <Flex
            className="project-card"
            direction={["column", "row"]}
            alignItems="center"
          >
            <div className="project-image">
              <Image src="https://i.postimg.cc/g0s8GwXM/dell-clone.png" />
            </div>
            <div>
              <Heading className="project-title" m="20px 10px">
                Dell Clone
              </Heading>
              <p className="project-description">
                Dell sells personal computers (PCs), servers, data storage
                devices, network switches, software, computer peripherals,
                HDTVs, cameras, printers, and electronics built by other
                manufacturers.
              </p>
              <HStack className="project-tech-stack" mt="20px">
                <FaReact size="30px" />
                <MdCss size="40px" />
                <Image
                  w="30px"
                  src="https://media.graphassets.com/91q3gAEGSh6HCrpnPgxS"
                />
              </HStack>
              <HStack mt="20px">
                <Flex
                  className="live project-github-link"
                  alignItems="center"
                  onClick={() =>
                    window.open("https://github.com/harshshukla2002/Dell-Clone")
                  }
                >
                  <FaGithubSquare size="20px" style={{ margin: "0px 3px" }} />
                  Github
                </Flex>
                <span>|</span>
                <div
                  className="live project-deployed-link"
                  onClick={() =>
                    window.open("https://steady-malabi-ac0416.netlify.app/")
                  }
                >
                  <ExternalLinkIcon /> Live
                </div>
              </HStack>
            </div>
          </Flex>
          <Flex
            className="project-card"
            direction={["column", "row"]}
            alignItems="center"
          >
            <div className="project-image">
              <Image src="https://user-images.githubusercontent.com/112845916/221496830-378aef53-138f-41ae-bf32-152d0ab1badf.png" />
            </div>
            <div>
              <Heading className="project-title" m="20px 10px">
                Snapdeal Clone
              </Heading>
              <p className="project-description">
                Snapdeal is an Indian e-commerce company based out of New Delhi.
                Among the surrounding e-commerce platforms in India, Snapdeal
                has managed to carve its own niche with its impressive range of
                discounts and product categories
              </p>
              <HStack className="project-tech-stack" mt="20px">
                <FaReact size="30px" />
                <MdCss size="40px" />
                <Image
                  w="30px"
                  src="https://media.graphassets.com/91q3gAEGSh6HCrpnPgxS"
                />
              </HStack>
              <HStack mt="20px">
                <Flex
                  className="live project-github-link"
                  alignItems="center"
                  onClick={() =>
                    window.open(
                      "https://github.com/harshshukla2002/SnapDeal-Clone"
                    )
                  }
                >
                  <FaGithubSquare size="20px" style={{ margin: "0px 3px" }} />
                  Github
                </Flex>
                <span>|</span>
                <div
                  className="live project-deployed-link"
                  onClick={() =>
                    window.open(
                      "https://subsequent-parcel-2806-mehulktik-gmailcom.vercel.app/"
                    )
                  }
                >
                  <ExternalLinkIcon /> Live
                </div>
              </HStack>
            </div>
          </Flex>
          <Flex
            className="project-card"
            direction={["column", "row"]}
            alignItems="center"
          >
            <div className="project-image">
              <Image src="https://i.postimg.cc/7L5gFvYt/Screenshot-2023-03-24-200537.png" />
            </div>
            <div style={{ width: "70%" }}>
              <Heading className="project-title" m="20px 10px">
                Weather Website
              </Heading>
              <p className="project-description">
                A Website For Weather App, where you can check weather for any
                city.
              </p>
              <HStack className="project-tech-stack" mt="20px">
                <FaReact size="30px" />
                <MdCss size="40px" />
                <Image
                  w="30px"
                  src="https://media.graphassets.com/91q3gAEGSh6HCrpnPgxS"
                />
              </HStack>
              <HStack mt="20px">
                <Flex
                  className="live project-github-link"
                  alignItems="center"
                  onClick={() =>
                    window.open(
                      "https://github.com/harshshukla2002/React-Weather-App"
                    )
                  }
                >
                  <FaGithubSquare size="20px" style={{ margin: "0px 3px" }} />
                  Github
                </Flex>
                <span>|</span>
                <div
                  className="live project-deployed-link"
                  onClick={() =>
                    window.open("https://marvelous-quokka-0749e7.netlify.app/")
                  }
                >
                  <ExternalLinkIcon /> Live
                </div>
              </HStack>
            </div>
          </Flex>
          <Flex
            className="project-card"
            direction={["column", "row"]}
            alignItems="center"
          >
            <div className="project-image">
              <Image src="https://camo.githubusercontent.com/87528560e0f04c3c5d65b2a8abdc376b3f7121ccf749e0bda3267e45fcc41acd/68747470733a2f2f692e706f7374696d672e63632f304e4367634252662f53637265656e73686f742d323032332d30342d31312d3138333833352e706e67" />
            </div>
            <div style={{ width: "70%" }}>
              <Heading className="project-title" m="20px 10px">
                Movie Website
              </Heading>
              <p className="project-description">
                A Website For Movies, where you can search movies and see
                information like poster and all.
              </p>
              <HStack className="project-tech-stack" mt="20px">
                <FaReact size="30px" />
                <MdCss size="40px" />
                <Image
                  w="30px"
                  src="https://media.graphassets.com/91q3gAEGSh6HCrpnPgxS"
                />
                <SiTypescript size="30px" />
              </HStack>
              <HStack mt="20px">
                <Flex
                  className="live project-github-link"
                  alignItems="center"
                  onClick={() =>
                    window.open(
                      "https://github.com/harshshukla2002/React-Movie-App"
                    )
                  }
                >
                  <FaGithubSquare size="20px" style={{ margin: "0px 3px" }} />
                  Github
                </Flex>
                <span>|</span>
                <div
                  className="live project-deployed-link"
                  onClick={() =>
                    window.open("https://mellow-pie-237390.netlify.app/")
                  }
                >
                  <ExternalLinkIcon /> Live
                </div>
              </HStack>
            </div>
          </Flex>
        </div>
      </div>
    </section>
  );
}

export default Project;