import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Icon,
  useColorModeValue,
  useToast,
  Link,
} from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = ({ icon, title, text }) => {
  return (
    <Stack direction={"row"} align={"center"} spacing={4}>
      <Box
        bgGradient={"linear(to-br, brand.500, brand.600)"}
        color={"white"}
        rounded={"full"}
        p={3}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        boxShadow={"0 4px 15px rgba(27, 58, 95, 0.2)"}
        transition={"all 0.3s ease"}
        _hover={{
          transform: "scale(1.1)",
          boxShadow: "0 6px 20px rgba(27, 58, 95, 0.3)",
        }}
      >
        <Icon as={icon} w={5} h={5} />
      </Box>
      <Box>
        <Text
          fontWeight={"bold"}
          fontSize={"lg"}
          color={useColorModeValue("brand.500", "white")}
        >
          {title}
        </Text>
        <Text color={useColorModeValue("gray.600", "whiteAlpha.700")}>
          {text}
        </Text>
      </Box>
    </Stack>
  );
};

const Contact = () => {
  const toast = useToast();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, service, message } = formData;
    const mailtoLink = `mailto:mundietageorge@gmail.com?subject=New Inquiry from ${name}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0A%0AMessage:%0A${message}`;

    window.location.href = mailtoLink;

    toast({
      title: "Opening email client...",
      description: "Please send the email to complete your inquiry.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <Box py={20} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW={"container.xl"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
          {/* Contact Info */}
          <Stack spacing={8}>
            <Heading color={useColorModeValue("brand.500", "white")}>
              Get In Touch
            </Heading>
            <Text
              color={useColorModeValue("gray.600", "whiteAlpha.800")}
              fontSize={"lg"}
            >
              Have a question, need an electrician, or ready to start your solar
              project? Fill out the form or give us a call and we will respond
              as soon as possible.
            </Text>

            <Stack spacing={6} mt={4}>
              <ContactInfo
                icon={FaPhone}
                title="Phone"
                text="+263 78 191 8804"
              />
              <ContactInfo
                icon={FaEnvelope}
                title="Email"
                text="mundietageorge@gmail.com"
              />
              <ContactInfo
                icon={FaMapMarkerAlt}
                title="Address"
                text="St James Zongoro, 313 Mutare"
              />
            </Stack>

            <Box mt={8}>
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Mutare,+Zimbabwe&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Stack>

          {/* Contact Form */}
          <Box
            bg={useColorModeValue("white", "gray.800")}
            p={8}
            rounded={"2xl"}
            shadow={"2xl"}
            borderWidth={"1px"}
            borderColor={useColorModeValue("gray.100", "gray.700")}
            transition={"all 0.3s ease"}
            _hover={{
              borderColor: "brand.100",
              shadow: "0 20px 40px rgba(27, 58, 95, 0.1)",
            }}
          >
            <form onSubmit={handleSubmit}>
              <VStack spacing={5}>
                <Heading
                  size={"md"}
                  w={"full"}
                  color={useColorModeValue("brand.500", "white")}
                >
                  Send us a Message
                </Heading>
                <FormControl id="name" isRequired>
                  <FormLabel fontWeight={"600"}>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    focusBorderColor="brand.500"
                    _focus={{
                      boxShadow: "0 0 0 3px rgba(0, 102, 255, 0.1)",
                    }}
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel fontWeight={"600"}>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    focusBorderColor="brand.500"
                    _focus={{
                      boxShadow: "0 0 0 3px rgba(0, 102, 255, 0.1)",
                    }}
                  />
                </FormControl>
                <FormControl id="phone">
                  <FormLabel fontWeight={"600"}>Phone</FormLabel>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +263 00 000 0000"
                    focusBorderColor="brand.500"
                    _focus={{
                      boxShadow: "0 0 0 3px rgba(0, 102, 255, 0.1)",
                    }}
                  />
                </FormControl>
                <FormControl id="service">
                  <FormLabel fontWeight={"600"}>Interested Service</FormLabel>
                  <Input
                    type="text"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="e.g. Solar Installation"
                    focusBorderColor="brand.500"
                    _focus={{
                      boxShadow: "0 0 0 3px rgba(0, 102, 255, 0.1)",
                    }}
                  />
                </FormControl>
                <FormControl id="message" isRequired>
                  <FormLabel fontWeight={"600"}>Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    focusBorderColor="brand.500"
                    _focus={{
                      boxShadow: "0 0 0 3px rgba(0, 102, 255, 0.1)",
                    }}
                  />
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="brand"
                  size="lg"
                  w={"full"}
                  mt={4}
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;
