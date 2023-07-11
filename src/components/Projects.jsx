import { useRouter } from 'next/router'
import { Image, Box, Heading, Divider, Grid, GridItem } from '@chakra-ui/react'
import { en, es } from "@/locales"

export default function Projects() {
    const { locale } = useRouter()
    const t = locale === "en" ? en : es;
    const { heading } = t

    const images = [
        { id: 0, image: "/images/projects/01.avif" },
        { id: 1, image: "/images/projects/02.webp" },
        { id: 2, image: "/images/projects/03.webp" },
        { id: 3, image: "/images/projects/04.avif" },
        { id: 4, image: "/images/projects/05.webp" },
        { id: 5, image: "/images/projects/06.webp" },
    ]

    return (
        <Box w="90%" maxW="1200px" m="0 auto">
            <Box m="50px auto 0">
                <Heading fontWeight="400" textAlign="center">{heading.projects}</Heading>
                <Divider bgColor="palette.pink" w="150px" h="3px" opacity={0.9} borderRadius="10px" m="10px auto" />
            </Box>

            <Grid mt="30px" templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="20px">
                {images.map(({ id, image }) => {
                    return (
                        <GridItem key={id}>
                            <Image borderRadius="16px" src={image} alt='projects image' objectFit="cover" w="100%" h="250px" />
                        </GridItem>
                    )
                })}
            </Grid>
        </Box>
    )
}
