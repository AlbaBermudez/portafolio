import { useRouter } from 'next/router'
import { Box, Heading, Divider, Grid } from '@chakra-ui/react'
import { FaPython, FaHtml5, FaLinux } from "react-icons/fa";
import { GrMysql, GrDocker } from "react-icons/gr";
import { BsGit } from "react-icons/bs";
import { SiDjango, SiCss3 } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { en, es } from "@/locales"

export default function Skills() {
    const { locale } = useRouter()
    const t = locale === "en" ? en : es;
    const { heading } = t

    return (
        <Box w="90%" maxW="1200px" m="0 auto">

            <Box m="60px auto 0">
                <Heading fontWeight="400" textAlign="center">{heading.skills}</Heading>
                <Divider bgColor="palette.pink" w="150px" h="3px" opacity={0.9} borderRadius="10px" m="10px auto" />
            </Box>

            <Grid my="40px" templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(9, 1fr)" }} placeItems="center" gap={{ base: 6, lg: 0 }}>
                <FaPython color="#fe429c" fontSize="50px" />
                <SiDjango color="#fe429c" fontSize="50px" />
                <BiLogoPostgresql color="#fe429c" fontSize="50px" />
                <GrMysql color="#fe429c" fontSize="50px" />
                <GrDocker color="#fe429c" fontSize="50px" />
                <FaLinux color="#fe429c" fontSize="50px" />
                <BsGit color="#fe429c" fontSize="50px" />
                <FaHtml5 color="#fe429c" fontSize="50px" />
                <SiCss3 color="#fe429c" fontSize="50px" />
            </Grid>
        </Box>
    )
}