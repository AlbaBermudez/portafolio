import { Text, Box, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { en, es } from "@/locales"

export default function About() {
    const { locale } = useRouter()
    const t = locale === "en" ? en : es;
    const { about: { text } } = t

    return (
        <Box w="90%" maxW="1200px" m="0 auto">
            <Box m={{ base: "50px auto 0", md: "80px auto 0" }}>
                <Heading fontWeight="400" fontSize={{ base: "34px", md: "40px" }} textAlign="center" color="palette.pink">Alba Bermudez</Heading>
                <Text textAlign="center" fontWeight="500" fontSize={{ base: "18px", md: "20px" }}>Backend Developer</Text>
            </Box>

            <Box maxW="571px" m="15px auto 0">
                <Text textAlign="center" fontSize={{ base: "15px", md: "16px" }} lineHeight={1.8}>{text}</Text>
            </Box>

        </Box>
    )
}