import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  Heading,
  Container,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Hero() {
  return (
    <Flex
      w="full"
      minH={{ base: "80vh", md: "95vh" }}
      bgImage={{
        base: "linear-gradient(to bottom, rgba(6, 13, 21, 0.8), rgba(27, 58, 95, 0.4)), url('/images/solar-images/hero-banner.webp')",
        md: "linear-gradient(to right, rgba(6, 13, 21, 0.85), rgba(27, 58, 95, 0.3)), url('/images/solar-images/hero-banner.webp')",
      }}
      bgSize="cover"
      bgPosition={{ base: "center center", md: "center center" }}
      bgRepeat="no-repeat"
      position="relative"
      overflow="hidden"
      align="center"
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Stack
          direction="column"
          spacing={{ base: 10, md: 12 }}
          align="flex-start"
          justify="center"
        >
          {/* Text content */}
          <VStack
            align="flex-start"
            spacing={6}
            maxW={{ base: "full", md: "2xl" }}
          >
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="0.15em"
              color="secondary.300"
            >
              Solar • Backup Power • Electrical
            </Text>

            <Heading
              color="white"
              fontWeight={800}
              lineHeight={1.1}
              fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
            >
              Powering homes &
              <br />
              businesses in Mutare
            </Heading>

            <Text
              color="whiteAlpha.900"
              fontSize={useBreakpointValue({ base: "md", md: "lg" })}
              maxW={{ base: "full", md: "2xl" }}
            >
              Reliable solar systems, battery backup, and safe electrical
              installations handled by licensed electricians and certified
              solar installers.
            </Text>

            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              w={{ base: "full", sm: "auto" }}
            >
              <Button
                as={RouterLink}
                to="/contact"
                colorScheme="brand"
                size="lg"
                w={{ base: "full", sm: "auto" }}
              >
                Get a Free Quote
              </Button>
              <Button
                as={RouterLink}
                to="/services"
                variant="outline"
                colorScheme="secondary"
                size="lg"
                w={{ base: "full", sm: "auto" }}
              >
                View Services
              </Button>
            </Stack>
          </VStack>

          {/* Banner is now part of the hero background via bgImage */}
        </Stack>
      </Container>

      {/* Scroll indicator */}
      <Box
        position="absolute"
        bottom={6}
        left="50%"
        transform="translateX(-50%)"
        display={{ base: 'flex', md: 'flex' }}
        alignItems="center"
        gap={3}
        color="whiteAlpha.800"
        fontSize="xs"
        zIndex={2}
      >
        <Box
          w="32px"
          h="52px"
          borderRadius="full"
          border="1px solid rgba(255,255,255,0.5)"
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          p={1}
        >
          <Box
            w="4px"
            h="10px"
            borderRadius="full"
            bg="whiteAlpha.900"
            className="scroll-dot"
          />
        </Box>
        <Text
          textTransform="uppercase"
          letterSpacing="0.24em"
          fontWeight="500"
        >
          Scroll
        </Text>
      </Box>


    </Flex>
  );
}
