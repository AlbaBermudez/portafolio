import React, { useState } from "react"
import { useRouter } from 'next/router'
import { Image, Box, Button, Heading, Divider, Flex, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, UnorderedList, ListItem, useDisclosure, useColorMode } from "@chakra-ui/react";
import { en, es } from "@/locales"

export default function WorkExperience() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode } = useColorMode()
    const { locale } = useRouter()
    const t = locale === "en" ? en : es;
    const { workExperience, heading } = t
    const [card, setCard] = useState()
    const icons = [
        { id: 0, image: "/images/workExperience/bod.webp", alt: "BOD" },
        { id: 1, image: "/images/workExperience/iberoseguros.webp", alt: "IberoSeguros" },
        { id: 2, image: "/images/workExperience/multifiber.webp", alt: "Multifiber" },
    ]

    return (
        <Box w="90%" maxW="1200px" m="0 auto">

            <Box m="60px auto 0">
                <Heading fontWeight="400" textAlign="center">{heading.workExperience}</Heading>
                <Divider bgColor="palette.pink" w="150px" h="3px" opacity={0.9} borderRadius="10px" m="10px auto" />
            </Box>

            <Flex direction={{ base: "column", md: "row" }} justifyContent="center" alignItems="center" gap={{ base: "20px", md: "80px" }} mt="40px">
                {icons.map(({ id, image, alt }) => {
                    return (
                        <Box key={id} borderRadius="15px" boxShadow={colorMode === "light" ? "rgba(0, 0, 0, 0.09) 2px 4px 20px 0px" : "rgba(0, 0, 0, 0.5) 2px 4px 20px 0px"} _hover={{ transform: "scale(1.05)" }} transition="0.3s" overflow="hidden" cursor="pointer" onClick={() => {
                            onOpen();
                            setCard(id);
                        }}>
                            <Image src={image} alt={alt} w="250px" />
                            <Text textAlign="center" fontWeight="700" p="15px">{alt}</Text>
                        </Box>
                    )
                })}
            </Flex>

            {workExperience.map(({ id, company, job, description, headingResponsibilities, lisItemResponsibilities, text01, text02 }) => {
                return (
                    <React.Fragment key={id}>
                        {card === id &&
                            <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "xl" }} scrollBehavior="inside" >
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader fontSize="16px">{company}</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <Text fontWeight={700}>{job}</Text>
                                        <Text mt="20px">{description}</Text>
                                        <Text my="20px">{headingResponsibilities}</Text>

                                        <UnorderedList>
                                            {lisItemResponsibilities.map(({ id, text }) => {
                                                return (
                                                    <React.Fragment key={id}>
                                                        <ListItem>{text}</ListItem>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </UnorderedList>

                                        <Text my="20px">{text01}</Text>
                                        <Text>{text02}</Text>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button bgColor="palette.pink" color="white" mr={3} onClick={onClose}>
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        }
                    </React.Fragment>
                )
            })}

        </Box>
    )
}
