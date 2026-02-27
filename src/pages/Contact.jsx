import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  VStack,
  Icon,
  useColorModeValue,
  useToast,
  Select,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaMailBulk, FaComment } from "react-icons/fa";

const ContactInfo = ({ icon, title, text, href }) => {
  return (
    <Stack
      direction={"row"}
      align={"center"}
      spacing={4}
      p={4}
      borderRadius="xl"
      transition={"all 0.3s ease"}
      _hover={{
        bg: useColorModeValue("gray.50", "gray.800"),
        transform: "translateX(4px)",
      }}
    >
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
        flexShrink={0}
      >
        <Icon as={icon} w={5} h={5} />
      </Box>
      <Box>
        <Text
          fontWeight={"bold"}
          fontSize={"md"}
          color={useColorModeValue("brand.500", "white")}
        >
          {title}
        </Text>
        {href ? (
          <Text
            as="a"
            href={href}
            color={useColorModeValue("gray.600", "whiteAlpha.700")}
            _hover={{ color: "secondary.500" }}
            fontSize={{ base: "sm", md: "md" }}
          >
            {text}
          </Text>
        ) : (
          <Text
            color={useColorModeValue("gray.600", "whiteAlpha.700")}
            fontSize={{ base: "sm", md: "md" }}
          >
            {text}
          </Text>
        )}
      </Box>
    </Stack>
  );
};

const Contact = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const { name, email, phone, service, message } = formData;
    const subject = encodeURIComponent(`New Inquiry from ${name} - ${service || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service: ${service || 'Not specified'}

Message:
${message}`
    );

    window.open(`mailto:mundietageorge@gmail.com?subject=${subject}&body=${body}`, '_blank');

    toast({
      title: "Message Ready!",
      description: "Your email client is opening. Please send the email to complete your inquiry.",
      status: "success",
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

    setIsLoading(false);
  };

  return (
    <Box py={{ base: 12, md: 20 }} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW={"container.xl"} px={{ base: 4, md: 6 }}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 10, lg: 16 }}
        >
          {/* Contact Info */}
          <Stack spacing={{ base: 6, md: 8 }}>
            <Box>
              <Heading
                color={useColorModeValue("brand.500", "white")}
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight={"800"}
              >
                Get In Touch
              </Heading>
              <Text
                color={useColorModeValue("gray.600", "whiteAlpha.800")}
                fontSize={{ base: "md", md: "lg" }}
                mt={3}
                lineHeight={"tall"}
              >
                Have a question, need an electrician, or ready to start your solar
                project? Fill out the form or give us a call. We'll respond
                as soon as possible with a free quote.
              </Text>
            </Box>

            <Stack spacing={3}>
              <ContactInfo
                icon={FaPhone}
                title="Phone"
                text="+263 78 191 8804"
                href="tel:+263781918804"
              />
              <ContactInfo
                icon={FaEnvelope}
                title="Email"
                text="mundietageorge@gmail.com"
                href="mailto:mundietageorge@gmail.com"
              />
              <ContactInfo
                icon={FaMapMarkerAlt}
                title="Address"
                text="St James Zongoro, 313 Mutare, Zimbabwe"
              />
            </Stack>

            <Box
              mt={4}
              borderRadius="xl"
              overflow="hidden"
              boxShadow="xl"
            >
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Mutare,+Zimbabwe&output=embed"
                width="100%"
                height={{ base: "200px", md: "300px" }}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Stack>

          {/* Contact Form */}
          <Box
            bg={useColorModeValue("white", "gray.800")}
            p={{ base: 6, md: 8 }}
            rounded={"2xl"}
            shadow={"2xl"}
            borderWidth={"1px"}
            borderColor={useColorModeValue("gray.100", "gray.700")}
            transition={"all 0.3s ease"}
            _hover={{
              borderColor: "brand.200",
              shadow: "0 20px 40px rgba(27, 58, 95, 0.15)",
            }}
          >
            <form onSubmit={handleSubmit}>
              <VStack spacing={5}>
                <Heading
                  size={"md"}
                  w={"full"}
                  color={useColorModeValue("brand.500", "white")}
                  textAlign={"center"}
                  mb={2}
                >
                  Send us a Message
                </Heading>

                <FormControl isInvalid={!!errors.name}>
                  <FormLabel fontWeight={"600"} fontSize={"sm"}>Name *</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" color="gray.400">
                      <FaUser />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      focusBorderColor="brand.500"
                      bg={useColorModeValue("gray.50", "gray.700")}
                      borderRadius="lg"
                      _focus={{
                        boxShadow: "0 0 0 3px rgba(27, 58, 95, 0.2)",
                        borderColor: "brand.500",
                      }}
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.email}>
                  <FormLabel fontWeight={"600"} fontSize={"sm"}>Email *</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" color="gray.400">
                      <FaMailBulk />
                    </InputLeftElement>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      focusBorderColor="brand.500"
                      bg={useColorModeValue("gray.50", "gray.700")}
                      borderRadius="lg"
                      _focus={{
                        boxShadow: "0 0 0 3px rgba(27, 58, 95, 0.2)",
                        borderColor: "brand.500",
                      }}
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={"600"} fontSize={"sm"}>Phone</FormLabel>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+263 78 000 0000"
                    focusBorderColor="brand.500"
                    bg={useColorModeValue("gray.50", "gray.700")}
                    borderRadius="lg"
                    _focus={{
                      boxShadow: "0 0 0 3px rgba(27, 58, 95, 0.2)",
                      borderColor: "brand.500",
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={"600"} fontSize={"sm"}>Service Interested In</FormLabel>
                  <Select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="Select a service"
                    focusBorderColor="brand.500"
                    bg={useColorModeValue("gray.50", "gray.700")}
                    borderRadius="lg"
                    _focus={{
                      boxShadow: "0 0 0 3px rgba(27, 58, 95, 0.2)",
                      borderColor: "brand.500",
                    }}
                  >
                    <option value="Solar Installation">Solar Panel Installation</option>
                    <option value="Battery Backup">Battery Backup Systems</option>
                    <option value="Electrical Wiring">Electrical Wiring</option>
                    <option value="Conduit/Trunking">Conduit & Trunking</option>
                    <option value="Maintenance">Maintenance & Repairs</option>
                    <option value="Other">Other</option>
                  </Select>
                </FormControl>

                <FormControl isInvalid={!!errors.message}>
                  <FormLabel fontWeight={"600"} fontSize={"sm"}>Message *</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" color="gray.400" alignSelf="flex-start" mt={3}>
                      <FaComment />
                    </InputLeftElement>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, requirements, or questions..."
                      rows={5}
                      focusBorderColor="brand.500"
                      bg={useColorModeValue("gray.50", "gray.700")}
                      borderRadius="lg"
                      _focus={{
                        boxShadow: "0 0 0 3px rgba(27, 58, 95, 0.2)",
                        borderColor: "brand.500",
                      }}
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.message}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="brand"
                  size={"lg"}
                  w={"full"}
                  mt={4}
                  isLoading={isLoading}
                  loadingText="Sending..."
                  bgGradient="linear(to-r, brand.500, brand.600)"
                  color="white"
                  fontWeight={"700"}
                  boxShadow={"0 4px 15px rgba(27, 58, 95, 0.3)"}
                  _hover={{
                    bgGradient: "linear(to-r, brand.600, brand.700)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(27, 58, 95, 0.4)",
                  }}
                  _active={{
                    transform: "translateY(0)",
                  }}
                  transition={"all 0.3s ease"}
                >
                  Send Message
                </Button>

                <Text
                  fontSize="xs"
                  color="gray.500"
                  textAlign="center"
                >
                  We typically respond within 24 hours
                </Text>
              </VStack>
            </form>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;
