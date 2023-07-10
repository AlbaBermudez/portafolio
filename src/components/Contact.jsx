import { Box, Heading, Divider, Flex, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <Box w="90%" maxW="1200px" m="0 auto">
      <Box m="60px auto 0">
        <Heading fontWeight="00" textAlign="center">
          Contacto
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
          <GrGithub color="#4A5568" fontSize="50px" />
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
          <FaLinkedinIn color="#4A5568" fontSize="50px" />
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
          <MdEmail color="#4A5568" fontSize="50px" />
          <Text fontSize="14px">Email</Text>
        </Link>

        {/* <IoLogoWhatsapp color="#fe429c" fontSize="50px" /> */}
      </Flex>
    </Box>
  );
}
