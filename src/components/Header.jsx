import { useState } from 'react'
import { useRouter } from 'next/router'
import { Link } from '@chakra-ui/next-js'
import { Image, Text, Flex, Box, useColorMode, Button } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { asPath } = useRouter()
    const [changeLocale, setChangeLocale] = useState(true)
    const [locale, setLocale] = useState()
    // const handleChangeLocales = () => {
    //     setChangeLocale(!changeLocale)
    //     if (changeLocale) {
    //         setlocale("en")
    //     } else {
    //         setlocale("es")
    //     }
    //     return locale
    // }
    const handleChangeLocales = () => {
        setChangeLocale(!changeLocale)
        setLocale(prevLocale => changeLocale ? "en" : "es")
    }
    console.log(locale)

    return (
        <Flex w="90%" maxW="1200px" m="0 auto" justifyContent="space-between">
            <Box py="10px">
                <Image src='/images/logo.png' w="250px" h="60px" alt='logo albaBermudez' />
            </Box>

            <Flex alignItems="center" gap="20px">
                <Button onClick={toggleColorMode} aria-label="colorChange">
                    {colorMode === "light" ?
                        <MoonIcon />
                        :
                        <SunIcon />
                    }
                </Button>


                <Link href={asPath} locale={locale} onClick={handleChangeLocales} _hover={{ textDecoration: "none", fontWeight: 700 }} >
                    {locale === "es" ?
                        <Text>ES</Text>
                        :
                        <Text>EN</Text>
                    }
                </Link>
            </Flex>
        </Flex>
    )
}
