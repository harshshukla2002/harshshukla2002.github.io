import { Flex, Heading, HStack, Image } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons"

function Project() {
    return (
        <section id="projects">
            <div>
                <div className="heading">
                    <Heading textAlign={'left'}>Projects</Heading>
                    <div style={{ borderBottom: "5px solid red", width: "10%" }}></div>
                </div>
                <div className="project-wrapper">
                    <Flex className="project-card" direction={['column', 'row']} alignItems='center'>
                        <div className="project-image">
                            <Image src="https://i.postimg.cc/zDHCmG7r/Chargeebee-clone.png" />
                        </div>
                        <div>
                            <Heading className="project-title" m='20px 10px'>ChargeeBee Clone</Heading>
                            <p className="project-description">
                                Chargebee is a subscription management system which can help you handle all the aspects of the subscription life cycle including recurring billing, invoicing and trial management for customers.
                            </p>
                            <HStack className="project-tech-stack" mt='20px'>
                                <Image src='https://i.postimg.cc/FznFsvNk/icons8-html-48.png' />
                                <Image src='https://i.postimg.cc/vHRSkjW0/icons8-css-48.png' />
                                <Image src='https://i.postimg.cc/CMCjM63P/icons8-js-48.png' />
                            </HStack>
                            <HStack mt='20px'>
                                <Flex className="live project-github-link" alignItems='center' onClick={() => window.open("https://github.com/harshshukla2002/ChargeBee-Clone")}>
                                    <Image src='https://i.postimg.cc/26yhHzcV/icons8-github-24.pngs' />Github
                                </Flex>
                                <span>|</span>
                                <div className="live project-deployed-link" onClick={() => window.open("https://stalwart-stardust-e2768b.netlify.app/")}>
                                    <ExternalLinkIcon /> Live
                                </div>
                            </HStack>
                        </div>
                    </Flex>
                    <Flex className="project-card" direction={['column', 'row']} alignItems='center'>
                        <div>
                            <Heading className="project-title" m='20px 10px'>TripAdvisor Clone</Heading>
                            <p className="project-description">
                                TripAdvisor® is the world's largest travel site, enabling travelers to plan and have the perfect trip. TripAdvisor offers trusted advice from real travelers and a wide variety of travel choices and planning features with seamless links to booking tools.
                            </p>
                            <HStack className="project-tech-stack" mt='20px'>
                                <Image src='https://i.postimg.cc/FznFsvNk/icons8-html-48.png' />
                                <Image src='https://i.postimg.cc/vHRSkjW0/icons8-css-48.png' />
                                <Image src='https://i.postimg.cc/CMCjM63P/icons8-js-48.png' />
                            </HStack>
                            <HStack mt='20px'>
                                <Flex className="live project-github-link" alignItems='center' onClick={() => window.open("https://github.com/devn5900/subsequent-invention-8280")}>
                                    <Image src='https://i.postimg.cc/26yhHzcV/icons8-github-24.pngs' />Github
                                </Flex>
                                <span>|</span>
                                <div className="live project-deployed-link" onClick={() => window.open("https://loquacious-centaur-45f47d.netlify.app/")}>
                                    <ExternalLinkIcon /> Live
                                </div>
                            </HStack>
                        </div>
                        <div className="project-image">
                            <Image src="https://i.postimg.cc/VLFYGX3H/tripadvisor-clone.png" />
                        </div>
                    </Flex>
                    <Flex className="project-card" direction={['column', 'row']} alignItems='center'>
                        <div className="project-image">
                            <Image src="https://i.postimg.cc/g0s8GwXM/dell-clone.png" />
                        </div>
                        <div>
                            <Heading className="project-title" m='20px 10px'>Dell Clone</Heading>
                            <p className="project-description">
                                Dell sells personal computers (PCs), servers, data storage devices, network switches, software, computer peripherals, HDTVs, cameras, printers, and electronics built by other manufacturers.
                            </p>
                            <HStack className="project-tech-stack" mt='20px'>
                                <Image src='https://i.postimg.cc/15DBVr8X/icons8-react-30.png' />
                                <Image src='https://i.postimg.cc/vHRSkjW0/icons8-css-48.png' />
                                <Image w='35px' src='https://i.postimg.cc/zG0nTt8z/icons8-chakra-ui-48.png' />
                            </HStack>
                            <HStack mt='20px'>
                                <Flex className="live project-github-link" alignItems='center' onClick={() => window.open("https://github.com/harshshukla2002/Dell-Clone")}>
                                    <Image src='https://i.postimg.cc/26yhHzcV/icons8-github-24.pngs' />Github
                                </Flex>
                                <span>|</span>
                                <div className="live project-deployed-link" onClick={() => window.open("https://steady-malabi-ac0416.netlify.app/")}>
                                    <ExternalLinkIcon /> Live
                                </div>
                            </HStack>
                        </div>
                    </Flex>
                </div>
            </div>
        </section>
    )
}

export default Project;