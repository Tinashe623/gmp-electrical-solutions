import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  SimpleGrid,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import solarRoof from "../assets/images/solar-roof.jpg";
import wiring1 from "../assets/images/wiring1.jpg";
import wiring2 from "../assets/images/wiring2.jpg";
import wiring3 from "../assets/images/wiring3.jpg";
import wiring4 from "../assets/images/wiring 4.jpg";

const ServiceSection = ({
  title,
  description,
  features,
  imageSrc,
  reversed,
}) => {
  return (
    <Container maxW={"container.xl"} py={12}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        alignItems={"center"}
      >
        <Stack order={{ base: 2, md: reversed ? 1 : 2 }} spacing={4}>
          <Heading color={useColorModeValue("brand.500", "white")}>
            {title}
          </Heading>
          <Text
            color={useColorModeValue("gray.600", "whiteAlpha.800")}
            fontSize={"lg"}
          >
            {description}
          </Text>
          <List spacing={3} mt={4}>
            {features.map((feature, index) => (
              <ListItem
                key={index}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
              >
                <ListIcon as={CheckCircleIcon} color="accent.500" />
                {feature}
              </ListItem>
            ))}
          </List>
          <Button
            as={RouterLink}
            to="/contact"
            w={"fit-content"}
            mt={6}
            colorScheme={"brand"}
            rounded={"full"}
          >
            Get a Quote
          </Button>
        </Stack>
        <Box order={{ base: 1, md: reversed ? 2 : 1 }} flex={1}>
          <Image
            rounded={"2xl"}
            alt={title}
            src={imageSrc}
            w={"full"}
            h={"auto"}
            objectFit={"cover"}
            shadow={"2xl"}
            borderWidth={"1px"}
            borderColor={useColorModeValue("gray.100", "gray.700")}
            transition={"all 0.3s ease"}
            loading={"lazy"}
            _hover={{
              transform: "translateY(-4px)",
              shadow: "0 20px 40px rgba(27, 58, 95, 0.2)",
            }}
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

const Services = () => {
  return (
    <Box>
      <Box
        bg={useColorModeValue("brand.50", "gray.800")}
        py={20}
        textAlign={"center"}
        position={"relative"}
        overflow={"hidden"}
      >
        <Box
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage={useColorModeValue(
            "radial-gradient(circle at 70% 30%, rgba(27, 58, 95, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 30%, rgba(27, 58, 95, 0.2) 0%, transparent 50%)",
          )}
        />
        <Container maxW={"container.lg"} position={"relative"} zIndex={1}>
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            fontWeight={"800"}
            color={useColorModeValue("brand.500", "white")}
          >
            Our Expert Services
          </Heading>
          <Text
            fontSize="xl"
            color={useColorModeValue("gray.600", "whiteAlpha.800")}
            lineHeight={"tall"}
          >
            From harnessing renewable energy to precise electrical
            installations, we deliver professional solutions for your home and
            business.
          </Text>
        </Container>
      </Box>

      <Stack spacing={8} pt={10} pb={0}>
        <ServiceSection
          title="Solar Panel Installation"
          description="Maximize your energy independence with our premium solar installation services. We handle everything from site assessment and design to installation and maintenance, ensuring you get the most efficient system for your property."
          features={[
            "Custom solar system design",
            "High-efficiency tier-1 solar panels",
            "Battery storage integration",
            "Grid-tied and off-grid solutions",
            "25-year performance warranty",
          ]}
          imageSrc={solarRoof}
        />

        <Box bg={useColorModeValue("gray.50", "gray.800")}>
          <ServiceSection
            reversed
            title="Electrical Tubing & Conduit"
            description="Protect your wiring with professional tubing solutions. We install rigid and flexible conduits that safeguard your electrical systems against environmental damage, pests, and wear, ensuring code compliance and longevity."
            features={[
              "EMT, IMC, and Rigid conduit installation",
              "PVC and flexible liquid-tight tubing",
              "Surface and concealed mounting",
              "Industrial and residential applications",
              "Code-compliant wire protection",
            ]}
            imageSrc={wiring1}
          />
        </Box>

        <ServiceSection
          title="Home Wiring & Electrical Work"
          description="Ensure your home is powered safely and efficiently. Our certified electricians handle all aspects of residential wiring, from new construction and full house rewiring to panel upgrades and outlet installations."
          features={[
            "Full home rewiring",
            "Electrical panel upgrades",
            "Lighting design and installation",
            "Smart home wiring",
            "Electrical safety inspections",
          ]}
          imageSrc={wiring2}
        />

        <Box bg={useColorModeValue("gray.50", "gray.900")}>
          <ServiceSection
            title="Solar Maintenance & Monitoring"
            description="Keep your system performing at its best. We offer scheduled maintenance, cleaning, and performance checks so you get the savings you expect from your solar investment."
            features={[
              "Annual system health checks",
              "Panel cleaning and visual inspections",
              "Inverter and battery performance checks",
              "Fault finding and repairs",
              "Monitoring setup and support",
            ]}
            imageSrc={wiring3}
          />
        </Box>

        {/* Wiring detail gallery */}
        <Box py={16} bg={useColorModeValue("white", "gray.900")}>
          <Container maxW={"container.xl"}>
            <Stack
              spacing={6}
              mb={8}
              textAlign={{ base: "left", md: "center" }}
            >
              <Heading
                fontSize={{ base: "2xl", md: "3xl" }}
                color={useColorModeValue("brand.500", "white")}
              >
                Neat, safe wiring on every project
              </Heading>
              <Text
                fontSize={"md"}
                color={useColorModeValue("gray.600", "whiteAlpha.700")}
                maxW={"2xl"}
                mx={{ base: 0, md: "auto" }}
              >
                A quick look at how we route cables, mount equipment, and finish
                off our electrical work.
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
              <Image
                src={solarRoof}
                alt="Solar panels neatly mounted on a roof"
                rounded="xl"
                objectFit="cover"
                h={{ base: "120px", md: "140px" }}
                w="100%"
                loading="lazy"
              />
              <Image
                src={wiring1}
                alt="Conduit and wiring neatly installed"
                rounded="xl"
                objectFit="cover"
                h={{ base: "120px", md: "140px" }}
                w="100%"
                loading="lazy"
              />
              <Image
                src={wiring2}
                alt="Distribution board wiring detail"
                rounded="xl"
                objectFit="cover"
                h={{ base: "120px", md: "140px" }}
                w="100%"
                loading="lazy"
              />
              <Image
                src={wiring3}
                alt="Electrical trunking and cable management"
                rounded="xl"
                objectFit="cover"
                h={{ base: "120px", md: "140px" }}
                w="100%"
                loading="lazy"
              />
              <Image
                src={wiring4}
                alt="Finished inverter and battery installation"
                rounded="xl"
                objectFit="cover"
                h={{ base: "120px", md: "140px" }}
                w="100%"
                loading="lazy"
              />
            </SimpleGrid>
          </Container>
        </Box>

        {/* FAQ Section */}
        <Box py={20} bg={useColorModeValue("gray.50", "gray.800")}>
          <Container maxW={"container.lg"}>
            <Stack spacing={4} textAlign={"center"} mb={12}>
              <Text
                fontSize={"sm"}
                fontWeight={"600"}
                textTransform={"uppercase"}
                letterSpacing={"0.2em"}
                color={"secondary.500"}
              >
                FAQ
              </Text>
              <Heading
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight={"800"}
                color={useColorModeValue("brand.500", "white")}
              >
                Frequently Asked Questions
              </Heading>
              <Text
                fontSize={"lg"}
                color={useColorModeValue("gray.600", "whiteAlpha.800")}
                maxW="2xl"
                mx="auto"
              >
                Find answers to common questions about our solar and electrical services.
              </Text>
            </Stack>

            <Accordion allowToggle>
              <AccordionItem border="none" mb={4}>
                <AccordionButton
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="xl"
                  p={6}
                  _hover={{ bg: useColorModeValue("gray.50", "gray.600") }}
                  _expanded={{ bg: useColorModeValue("white", "gray.700"), borderBottomRadius: 0 }}
                >
                  <Heading flex="1" textAlign="left" size="md" color={useColorModeValue("brand.500", "white")}>
                    How long does a typical solar installation take?
                  </Heading>
                  <AccordionIcon color="secondary.500" />
                </AccordionButton>
                <AccordionPanel
                  bg={useColorModeValue("white", "gray.700")}
                  borderBottomRadius="xl"
                  pb={6}
                >
                  <Text color={useColorModeValue("gray.600", "whiteAlpha.800")} pt={4}>
                    Most residential solar installations take 1-3 days depending on system size. Smaller 1-3kW systems can be completed in a day, while larger 5-10kW systems may take 2-3 days. We always provide a timeline estimate during the consultation phase.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border="none" mb={4}>
                <AccordionButton
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="xl"
                  p={6}
                  _hover={{ bg: useColorModeValue("gray.50", "gray.600") }}
                  _expanded={{ bg: useColorModeValue("white", "gray.700"), borderBottomRadius: 0 }}
                >
                  <Heading flex="1" textAlign="left" size="md" color={useColorModeValue("brand.500", "white")}>
                    Do you offer warranties on your work?
                  </Heading>
                  <AccordionIcon color="secondary.500" />
                </AccordionButton>
                <AccordionPanel
                  bg={useColorModeValue("white", "gray.700")}
                  borderBottomRadius="xl"
                  pb={6}
                >
                  <Text color={useColorModeValue("gray.600", "whiteAlpha.800")} pt={4}>
                    Yes! We provide a 12-month warranty on all our electrical work and installations. Solar panels come with manufacturer warranties of 25 years, and inverters typically have 1 year warranty. We're also available for ongoing maintenance and support.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border="none" mb={4}>
                <AccordionButton
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="xl"
                  p={6}
                  _hover={{ bg: useColorModeValue("gray.50", "gray.600") }}
                  _expanded={{ bg: useColorModeValue("white", "gray.700"), borderBottomRadius: 0 }}
                >
                  <Heading flex="1" textAlign="left" size="md" color={useColorModeValue("brand.500", "white")}>
                    What areas do you serve?
                  </Heading>
                  <AccordionIcon color="secondary.500" />
                </AccordionButton>
                <AccordionPanel
                  bg={useColorModeValue("white", "gray.700")}
                  borderBottomRadius="xl"
                  pb={6}
                >
                  <Text color={useColorModeValue("gray.600", "whiteAlpha.800")} pt={4}>
                    We primarily serve Mutare and surrounding areas including Christmas Rock, Mutasa, Nyanga, and Chipinge. Contact us to discuss your location - we're happy to travel to nearby areas for larger projects.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border="none" mb={4}>
                <AccordionButton
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="xl"
                  p={6}
                  _hover={{ bg: useColorModeValue("gray.50", "gray.600") }}
                  _expanded={{ bg: useColorModeValue("white", "gray.700"), borderBottomRadius: 0 }}
                >
                  <Heading flex="1" textAlign="left" size="md" color={useColorModeValue("brand.500", "white")}>
                    How much can I save with solar?
                  </Heading>
                  <AccordionIcon color="secondary.500" />
                </AccordionButton>
                <AccordionPanel
                  bg={useColorModeValue("white", "gray.700")}
                  borderBottomRadius="xl"
                  pb={6}
                >
                  <Text color={useColorModeValue("gray.600", "whiteAlpha.800")} pt={4}>
                    Savings depend on your energy usage and system size. Most of our customers see 60-80% reductions in their electricity bills. With battery backup, you can also avoid costly generator fuel during load shedding. We'll help you design a system that maximizes your savings.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border="none" mb={4}>
                <AccordionButton
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="xl"
                  p={6}
                  _hover={{ bg: useColorModeValue("gray.50", "gray.600") }}
                  _expanded={{ bg: useColorModeValue("white", "gray.700"), borderBottomRadius: 0 }}
                >
                  <Heading flex="1" textAlign="left" size="md" color={useColorModeValue("brand.500", "white")}>
                    Do you provide free quotes?
                  </Heading>
                  <AccordionIcon color="secondary.500" />
                </AccordionButton>
                <AccordionPanel
                  bg={useColorModeValue("white", "gray.700")}
                  borderBottomRadius="xl"
                  pb={6}
                >
                  <Text color={useColorModeValue("gray.600", "whiteAlpha.800")} pt={4}>
                    Yes, we offer free, no-obligation quotes for all our services. Simply contact us through the form on our website or call us. We'll assess your needs and provide a detailed quote tailored to your requirements.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Container>
        </Box>
      </Stack>
    </Box>
  );
};

export default Services;
