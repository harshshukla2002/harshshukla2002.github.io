import { Flex, Heading, HStack, Image, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect"

function NameSection() {
    const [width, setWidth] = useState(window.innerWidth);

    const DetectWindowSize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", DetectWindowSize)

        return () => {
            window.removeEventListener("resize", DetectWindowSize)
        }
    }, [width])
    return (
        <>
            <div id='homesection' className="name-wrapper nav-link home">
                <Flex justifyContent='space-between' alignItems='center'>
                    <div>
                        <SimpleGrid columns={[1, 2]}>
                            <Heading size='lg'>
                                <HStack spacing={3}>
                                    <span>My Name is</span>
                                    <span id="user-detail-name" style={{ color: "red" }}>
                                        <Typewriter
                                            options={{
                                                autoStart: true,
                                                loop: true,
                                                delay: 50,
                                                strings: ["Harsh Shukla"]
                                            }}
                                        /></span>
                                </HStack>
                            </Heading>
                        </SimpleGrid>
                        <br />
                        <HStack spacing={3}>
                            <Heading> I AM </Heading>
                            <Heading>
                                <span style={{ color: "red" }}>
                                    <Typewriter
                                        options={{
                                            autoStart: true,
                                            loop: true,
                                            delay: 50,
                                            strings: ["FULL STACK WEB DEVELOPER"]
                                        }}
                                    /></span>
                            </Heading>
                        </HStack>
                    </div>
                    <Image w='20%' borderRadius='50%' src="https://i.postimg.cc/LX2pb64P/Profile-Image.jpg" />
                </Flex>
                <br />
                <br />
                <div>
                    <h3 align="center" style={{ fontSize: "20px" }} id="user-detail-intro">A Full Stack Web Developer with more than 2000 hours of building, maintaining and deploying single page/eCommerce applications and specialized in Node, React , Express and mongoDB. A passionate, diligent person who wants to learn continuously.</h3>
                </div>
            </div>
        </>
    )
}

export default NameSection;