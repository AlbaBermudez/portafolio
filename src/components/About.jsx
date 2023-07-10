import { Text, Box, Heading } from '@chakra-ui/react'

export default function About() {
    return (
        <Box w="90%" maxW="1200px" m="0 auto">
            <Box m={{ base: "50px auto 0", md: "80px auto 0" }}>
                <Heading fontWeight="400" fontSize={{ base: "34px", md: "40px" }} textAlign="center" color="palette.pink">Alba Bermudez</Heading>
                <Text textAlign="center" fontWeight="500" fontSize={{ base: "18px", md: "20px" }}>Backend Developer</Text>
            </Box>

            <Box maxW="571px" m="15px auto 0">
                <Text textAlign="center" fontSize={{ base: "15px", md: "16px" }} lineHeight={1.8}>Soy una ingeniera informática con un año de experiencia como Backend Developer, especializada en Python con Django y PostgreSQL. Mi pasión por la tecnología me ha llevado a seguir estudiando y perfeccionando mis habilidades en el desarrollo de software. Estoy emocionada por conectar con profesionales del sector y explorar nuevas oportunidades para aplicar mis conocimientos y habilidades en proyectos desafiantes.
                </Text>
            </Box>

        </Box>
    )
}
