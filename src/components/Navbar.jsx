import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
  useBreakpointValue,
  Container,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const btnRef = React.useRef();
  const location = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  const [isMobileLandscape] = useMediaQuery("(max-height: 500px)");

  // Show desktop nav on tablet (md) and desktop (lg)
  // Chakra defaults: md=48em (768px), lg=62em (992px)
  const showDesktopNav = useBreakpointValue({ base: false, md: true });

  // Hoist hook calls so we don't call hooks inside conditionals/expressions.
  const navBorderColor = useColorModeValue("gray.100", "gray.800");
  const navBgScrolled = useColorModeValue("whiteAlpha.800", "gray.900");
  const navBgTop = useColorModeValue("white", "gray.800");
  // Navbar background - consistent across mobile and desktop
  const navBg = useBreakpointValue({
    base: scrolled ? navBgScrolled : navBgTop,
    md: scrolled ? navBgScrolled : navBgTop,
  });
  // Navbar backdrop filter - blur effect when scrolled
  const navBackdropFilter = useBreakpointValue({
    base: scrolled ? "blur(10px)" : "none",
    md: scrolled ? "blur(10px)" : "none",
  });

  const logoFilter = useColorModeValue(
    "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
    "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5))",
  );

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={100}
      bg={navBg}
      backdropFilter={navBackdropFilter}
      boxShadow={scrolled ? "lg" : "sm"}
      borderBottom="1px"
      borderColor={navBorderColor}
      transition="all 0.3s ease"
    >
      {/* Skip to content link for accessibility */}
      <Box
        as="a"
        href="#main-content"
        position="absolute"
        left="-9999px"
        zIndex={9999}
        bg="brand.500"
        color="white"
        px={4}
        py={2}
        rounded="md"
        _focus={{
          left: "10px",
          top: "10px",
        }}
      >
        Skip to content
      </Box>
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <Flex
          minH={
            isMobileLandscape
              ? "60px"
              : { base: "70px", md: "70px", lg: "90px" }
          }
          align={"center"}
          justify={"space-between"}
          gap={{ base: 2, md: 3 }}
        >
          <Flex
            as={RouterLink}
            to="/"
            align={"center"}
            gap={{ base: 2, md: 2 }}
            _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}
            cursor={"pointer"}
          >
            <Image
              src={logo}
              alt="G.M.P Electrical Logo"
              h={
                isMobileLandscape
                  ? "40px"
                  : { base: "40px", md: "50px", lg: "100px" }
              }
              w={"auto"}
              objectFit={"contain"}
              transition={"all 0.3s ease"}
              filter={logoFilter}
              display={{ base: "none", lg: "block" }}
              _hover={{
                filter: "drop-shadow(0 6px 12px rgba(27, 58, 95, 0.3))",
                transform: "scale(1.02)",
              }}
            />
            {/* Company name - visible on mobile and tablet */}
            <Text
              fontSize={{ base: "lg", md: "lg", lg: "xl" }}
              fontWeight={"800"}
              letterSpacing={"tight"}
              color={useColorModeValue("brand.500", "white")}
              whiteSpace="nowrap"
              display={{ base: "inline-block", lg: "none" }}
            >
              G.MUNDIETA
              <Text
                as="span"
                color={useColorModeValue("secondary.500", "secondary.400")}
              >
                {" "}
                Electrical
              </Text>
            </Text>
            {/* Company name for desktop (shown alongside logo) */}
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight={"800"}
              letterSpacing={"tight"}
              color={useColorModeValue("brand.500", "white")}
              whiteSpace="nowrap"
              display={{ base: "none", lg: "inline-block" }}
            >
              G.MUNDIETA
              <Text
                as="span"
                color={useColorModeValue("secondary.500", "secondary.400")}
              >
                {" "}
                Electrical
              </Text>
            </Text>
          </Flex>

          <Stack
            direction={"row"}
            spacing={{ base: 1, md: 2, lg: 4 }}
            display={
              isMobileLandscape ? "none" : showDesktopNav ? "flex" : "none"
            }
            flexWrap="nowrap"
            alignItems="center"
          >
            <Navlink to="/" isActive={location.pathname === "/"}>
              Home
            </Navlink>
            <Navlink
              to="/services"
              isActive={location.pathname === "/services"}
            >
              Services
            </Navlink>
            <Navlink
              to="/packages"
              isActive={location.pathname === "/packages"}
            >
              Packages
            </Navlink>
            <Navlink to="/about" isActive={location.pathname === "/about"}>
              About Us
            </Navlink>
            <Navlink to="/contact" isActive={location.pathname === "/contact"}>
              Contact
            </Navlink>
          </Stack>

          <Stack
            direction={"row"}
            spacing={{ base: 2, md: 3, lg: 4 }}
            display={
              isMobileLandscape ? "none" : showDesktopNav ? "flex" : "none"
            }
          >
            <Button
              as={RouterLink}
              to="/contact"
              colorScheme="brand"
              size="sm"
              px={4}
              bgGradient="linear(to-r, brand.500, brand.600)"
              _hover={{
                bgGradient: "linear(to-r, brand.600, brand.700)",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px 0 rgba(0, 102, 255, 0.5)",
              }}
            >
              Get a Quote
            </Button>

            <IconButton
              display={{ base: "none", lg: "flex" }}
              aria-label="Toggle color mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              colorScheme="brand"
              size="sm"
            />
          </Stack>

          <IconButton
            display={
              isMobileLandscape ? "flex" : showDesktopNav ? "none" : "flex"
            }
            ref={btnRef}
            onClick={onOpen}
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            variant="ghost"
            colorScheme="brand"
          />

          <IconButton
            display={{ base: "flex", lg: "none" }}
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            colorScheme="brand"
          />
        </Flex>
      </Container>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay backdropFilter="blur(4px)" />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>

          <DrawerBody>
            <Stack spacing={4} mt={4}>
              <Box
                animation={"fadeInUp 0.3s ease-out forwards"}
                style={{ animationDelay: "0.1s", opacity: 0 }}
              >
                <Navlink
                  to="/"
                  onClick={onClose}
                  isActive={location.pathname === "/"}
                  fontSize="xl"
                  py={2}
                  display="block"
                >
                  Home
                </Navlink>
              </Box>
              <Box
                animation={"fadeInUp 0.3s ease-out forwards"}
                style={{ animationDelay: "0.2s", opacity: 0 }}
              >
                <Navlink
                  to="/services"
                  onClick={onClose}
                  isActive={location.pathname === "/services"}
                  fontSize="xl"
                  py={2}
                  display="block"
                >
                  Services
                </Navlink>
              </Box>
              <Box
                animation={"fadeInUp 0.3s ease-out forwards"}
                style={{ animationDelay: "0.3s", opacity: 0 }}
              >
                <Navlink
                  to="/packages"
                  onClick={onClose}
                  isActive={location.pathname === "/packages"}
                  fontSize="xl"
                  py={2}
                  display="block"
                >
                  Packages
                </Navlink>
              </Box>
              <Box
                animation={"fadeInUp 0.3s ease-out forwards"}
                style={{ animationDelay: "0.4s", opacity: 0 }}
              >
                <Navlink
                  to="/about"
                  onClick={onClose}
                  isActive={location.pathname === "/about"}
                  fontSize="xl"
                  py={2}
                  display="block"
                >
                  About Us
                </Navlink>
              </Box>
              <Box
                animation={"fadeInUp 0.3s ease-out forwards"}
                style={{ animationDelay: "0.5s", opacity: 0 }}
              >
                <Navlink
                  to="/contact"
                  onClick={onClose}
                  isActive={location.pathname === "/contact"}
                  fontSize="xl"
                  py={2}
                  display="block"
                >
                  Contact
                </Navlink>
              </Box>
              <Box
                animation={"fadeInUp 0.3s ease-out forwards"}
                style={{ animationDelay: "0.6s", opacity: 0 }}
              >
                <Button
                  as={RouterLink}
                  to="/contact"
                  colorScheme="brand"
                  width="full"
                  onClick={onClose}
                  bgGradient="linear(to-r, brand.500, brand.600)"
                  _hover={{
                    bgGradient: "linear(to-r, brand.600, brand.700)",
                  }}
                  size="lg"
                  fontSize="lg"
                >
                  Get a Quote
                </Button>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

const Navlink = ({ to, children, isActive, ...props }) => {
  const activeColor = useColorModeValue("brand.600", "brand.300");
  const inactiveColor = useColorModeValue("gray.600", "whiteAlpha.900");
  const underlineGradient = useColorModeValue(
    "linear(to-r, brand.500, secondary.500)",
    "linear(to-r, brand.300, secondary.300)",
  );

  return (
    <Text
      as={RouterLink}
      to={to}
      fontWeight={isActive ? "700" : "500"}
      fontSize={{ base: "sm", md: "xs", lg: "md" }}
      color={isActive ? activeColor : inactiveColor}
      position="relative"
      whiteSpace="nowrap"
      _hover={{
        color: activeColor,
        textDecoration: "none",
      }}
      _after={{
        content: '""',
        position: "absolute",
        bottom: "-4px",
        left: 0,
        width: isActive ? "100%" : "0%",
        height: "2px",
        bgGradient: underlineGradient,
        transition: "width 0.3s ease",
      }}
      sx={{
        "&:hover::after": {
          width: "100%",
        },
      }}
      transition="all 0.3s ease"
      {...props}
    >
      {children}
    </Text>
  );
};

export default Navbar;
