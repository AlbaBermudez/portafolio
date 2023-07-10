import { Image, Text, Flex, Box } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'

export default function Header() {
    return (
        <Flex w="90%" maxW="1200px" m="0 auto" justifyContent="space-between">
            <Box py="10px">
                <Image src='/images/logo.png' w="250px" h="60px" alt='logo albaBermudez' />
            </Box>

            <Flex alignItems="center" gap="20px">
                <Box>
                    <MoonIcon />
                </Box>

                <Box>
                    <Text >ES</Text>
                </Box>
            </Flex>
        </Flex>
    )
}
