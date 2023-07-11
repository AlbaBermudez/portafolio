import { useRouter } from 'next/router'
import { Box, Heading, Divider, Flex, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { en, es } from "@/locales"

export default function Contact() {
  const { colorMode } = useColorMode()
  const { locale } = useRouter()
  const t = locale === "en" ? en : es;
  const { heading } = t

  return (
    <Box w="90%" maxW="1200px" m="0 auto">
      <Box m="60px auto 0">
        <Heading fontWeight="00" textAlign="center">
          {heading.contact}
        </Heading>
        <Divider
          bgColor="palette.pink"
          w="150px"
          h="3px"
          opacity={0.9}
          borderRadius="10px"
          m="10px auto"
        />
      </Box>

      <Flex
        m="30px auto"
        justifyContent="center"
        alignItems="center"
        gap="40px"
      >
        <Link
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          href="https://github.com/AlbaBermudez"
          target="_blank"
        >
          <GrGithub color={colorMode === "light" ? "#4A5568" : "CBD5E0"} fontSize="50px" />
          <Text fontSize="14px">GitHub</Text>
        </Link>

        <Link
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          href="https://www.linkedin.com/in/alba-bermudez-05a691203/"
          target="_blank"
        >
          <FaLinkedinIn color={colorMode === "light" ? "#4A5568" : "CBD5E0"} fontSize="50px" />
          <Text fontSize="14px">LinkedIn</Text>
        </Link>

        <Link
          fontSize="14px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          href="mailto:albamarinab22@gmail.com"
          target="_blank"
        >
          <MdEmail color={colorMode === "light" ? "#4A5568" : "CBD5E0"} fontSize="50px" />
          <Text fontSize="14px">Email</Text>
        </Link>

        {/* <IoLogoWhatsapp color="#fe429c" fontSize="50px" /> */}
      </Flex>
    </Box>
  );
}
// #CBD5E0