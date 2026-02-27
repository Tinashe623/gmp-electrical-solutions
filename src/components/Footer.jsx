import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  SimpleGrid,
  Icon,
  Flex,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      bg={"brand.900"}
      color={"gray.300"}
      position={"relative"}
      mt={0}
    >
      <Container
        as={Stack}
        maxW={"container.xl"}
        py={{ base: 10, md: 14 }}
        px={{ base: 4, md: 6 }}
        position={"relative"}
        zIndex={1}
      >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 8, md: 10 }} align="start">
          {/* Brand Column */}
          <Stack spacing={6} gridColumn={{ md: "span 1" }}>
            <Box>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight={"800"}
                letterSpacing={"tight"}
                color={"white"}
              >
                G.MUNDIETA
                <Text as="span" color="secondary.500">
                  {" "}
                  Electrical
                </Text>
              </Text>
              <Text fontSize={"sm"} mt={3} color={"gray.400"} lineHeight="tall">
                Professional solar, backup power, and electrical solutions for homes
                and businesses in Mutare and surrounding areas. Licensed & certified electricians you can trust.
              </Text>
            </Box>
            <Stack direction={"row"} spacing={3}>
              <SocialButton
                label={"Facebook"}
                href="https://facebook.com"
              >
                <FaFacebook />
              </SocialButton>
              <SocialButton
                label={"Twitter"}
                href="https://twitter.com"
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href="https://instagram.com"
              >
                <FaInstagram />
              </SocialButton>
              <SocialButton
                label={"LinkedIn"}
                href="https://linkedin.com"
              >
                <FaLinkedin />
              </SocialButton>
            </Stack>
          </Stack>

          {/* Quick Links */}
          <Stack align={"flex-start"} spacing={3}>
            <Text
              fontWeight={"700"}
              fontSize={"md"}
              mb={1}
              color={"secondary.500"}
              textTransform={"uppercase"}
              letterSpacing={"0.05em"}
            >
              Quick Links
            </Text>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/packages">Solar Packages</FooterLink>
            <FooterLink to="/contact">Get a Quote</FooterLink>
          </Stack>

          {/* Services */}
          <Stack align={"flex-start"} spacing={3}>
            <Text
              fontWeight={"700"}
              fontSize={"md"}
              mb={1}
              color={"secondary.500"}
              textTransform={"uppercase"}
              letterSpacing={"0.05em"}
            >
              Our Services
            </Text>
            <FooterLink to="/services">Solar Installation</FooterLink>
            <FooterLink to="/services">Battery Backup</FooterLink>
            <FooterLink to="/services">Electrical Wiring</FooterLink>
            <FooterLink to="/services">Conduit & Trunking</FooterLink>
            <FooterLink to="/services">Maintenance</FooterLink>
          </Stack>

          {/* Contact Info */}
          <Stack align={"flex-start"} spacing={4} maxW="280px">
            <Text
              fontWeight={"700"}
              fontSize={"md"}
              mb={1}
              color={"secondary.500"}
              textTransform={"uppercase"}
              letterSpacing={"0.05em"}
            >
              Contact Us
            </Text>

            <Stack spacing={3}>
              <Flex
                align="center"
                gap={3}
                color="gray.400"
                _hover={{ color: "secondary.500" }}
                transition="all 0.3s"
              >
                <Icon as={FaMapMarkerAlt} w={4} h={4} flexShrink={0} />
                <Text fontSize="sm">
                  St James Zongoro<br />
                  313 Mutare, Zimbabwe
                </Text>
              </Flex>

              <Flex
                as="a"
                href="tel:+263781918804"
                align="center"
                gap={3}
                color="gray.400"
                _hover={{ color: "secondary.500" }}
                transition="all 0.3s"
              >
                <Icon as={FaPhone} w={4} h={4} flexShrink={0} />
                <Text fontSize="sm">+263 78 191 8804</Text>
              </Flex>

              <Flex
                as="a"
                href="mailto:mundietageorge@gmail.com"
                align="center"
                gap={3}
                color="gray.400"
                _hover={{ color: "secondary.500" }}
                transition="all 0.3s"
              >
                <Icon as={FaEnvelope} w={4} h={4} flexShrink={0} />
                <Text fontSize="sm" wordBreak="break-word">
                  mundietageorge@gmail.com
                </Text>
              </Flex>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        py={6}
        borderTopWidth={1}
        borderColor="whiteAlpha.100"
        bg={"blackAlpha.300"}
      >
        <Container maxW={"container.xl"} px={{ base: 4, md: 6 }}>
          {/* WhatsApp Button */}
          <Flex justify="center" mb={6}>
            <Button
              as="a"
              href="https://wa.me/263781918804"
              target="_blank"
              rel="noopener noreferrer"
              bg="#25D366"
              color="white"
              size="md"
              rounded="full"
              px={6}
              leftIcon={<FaWhatsapp />}
              fontWeight={"600"}
              boxShadow={"0 4px 15px rgba(37, 211, 102, 0.3)"}
              _hover={{
                bg: '#20BD5A',
                transform: 'scale(1.05)',
                boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
              }}
              transition="all 0.3s ease"
            >
              Chat on WhatsApp
            </Button>
          </Flex>

          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <Text fontSize={"xs"} color={"gray.500"} textAlign="center">
              © {new Date().getFullYear()} G.MUNDIETA Electrical. All rights reserved.<br />
              Licensed electrical contractors in Mutare, Zimbabwe
            </Text>

            <Text
              as="a"
              href="https://tinashe-mundieta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              fontSize={"xs"}
              color={"gray.500"}
              _hover={{ color: "secondary.500" }}
              transition="all 0.3s"
            >
              Designed & Developed by Tinashe Mundieta
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

const FooterLink = ({ to, children }) => (
  <Text
    as={RouterLink}
    to={to}
    color={"gray.400"}
    transition={"all 0.3s ease"}
    fontSize={"sm"}
    _hover={{
      color: "secondary.500",
      textDecoration: "none",
      transform: "translateX(4px)",
    }}
  >
    {children}
  </Text>
);

const SocialButton = ({ children, label, href }) => {
  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      w={9}
      h={9}
      rounded={"full"}
      bg={"whiteAlpha.100"}
      color={"gray.400"}
      transition={"all 0.3s ease"}
      _hover={{
        bg: "secondary.500",
        color: "white",
        transform: "translateY(-3px)",
        boxShadow: "0 6px 15px rgba(245, 166, 35, 0.4)",
      }}
    >
      <Icon as={() => children} w={4} h={4} />
      <span
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
        }}
      >
        {label}
      </span>
    </Box>
  );
};

export default Footer;
