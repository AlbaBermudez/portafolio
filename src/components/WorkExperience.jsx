import { Image, Box, Button, Heading, Divider, Flex, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";

export default function WorkExperience() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const icons = [
        { id: 0, image: "/images/workExperience/bod.webp", alt: "BOD" },
        { id: 1, image: "/images/workExperience/iberoseguros.webp", alt: "IberoSeguros" },
        { id: 2, image: "/images/workExperience/multifiber.webp", alt: "Multifiber" },
    ]

    return (
        <Box w="90%" maxW="1200px" m="0 auto">

            <Box m="60px auto 0">
                <Heading fontWeight="400" textAlign="center">Experiencia Laboral</Heading>
                <Divider bgColor="palette.pink" w="150px" h="3px" opacity={0.9} borderRadius="10px" m="10px auto" />
            </Box>

            <Flex direction={{ base: "column", md: "row" }} justifyContent="center" alignItems="center" gap={{ base: "20px", md: "80px" }} mt="40px">
                {icons.map(({ id, image, alt }) => {
                    return (
                        <Box key={id} borderRadius="15px" boxShadow="rgba(0, 0, 0, 0.09) 2px 4px 20px 0px;" overflow="hidden" cursor="pointer" onClick={onOpen}>
                            <Image src={image} alt={alt} w="250px" />
                            <Text textAlign="center" fontWeight="700" p="15px">{alt}</Text>
                        </Box>
                    )
                })}
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil provident numquam reiciendis expedita ad sapiente maxime! Pariatur iure deleniti enim numquam architecto ab, ratione mollitia inventore vel tempora quae. Vero, ullam, illum eius numquam corporis accusamus totam aspernatur inventore officia suscipit at? Repudiandae nisi possimus libero quisquam, nesciunt rem labore consequatur pariatur et iure maxime ad, ipsam provident deserunt consequuntur necessitatibus optio ea dolor voluptatem nam dolore accusamus earum ex doloribus! Nostrum officia in dolores magni earum nihil quae beatae sunt voluptatum sequi. Earum facilis illum quam quo veritatis consequatur nesciunt alias impedit quasi, esse laudantium natus, deleniti quisquam sequi!
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}
