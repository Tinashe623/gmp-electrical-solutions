import React from 'react';
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
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = ({ icon, title, text }) => {
    return (
        <Stack direction={'row'} align={'center'} spacing={4}>
            <Box
                bgGradient={'linear(to-br, brand.500, accent.500)'}
                color={'white'}
                rounded={'full'}
                p={3}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                boxShadow={'0 4px 15px rgba(0, 102, 255, 0.3)'}
                transition={'all 0.3s ease'}
                _hover={{
                  transform: 'scale(1.1)',
                  boxShadow: '0 6px 20px rgba(0, 102, 255, 0.4)',
                }}
            >
                <Icon as={icon} w={5} h={5} />
            </Box>
            <Box>
                <Text fontWeight={'bold'} fontSize={'lg'}>{title}</Text>
                <Text color={'gray.600'}>{text}</Text>
            </Box>
        </Stack>
    )
}

const Contact = () => {
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            title: "Message Sent.",
            description: "We've received your request and will get back to you shortly.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
    }

  return (
    <Box py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW={'container.xl'}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
          
          {/* Contact Info */}
          <Stack spacing={8}>
            <Heading>Get In Touch</Heading>
            <Text color={'gray.600'} fontSize={'lg'}>
                Have a question or ready to start your solar project? Fill out the form or give us a call. We look forward to hearing from you.
            </Text>
            
            <Stack spacing={6} mt={4}>
                <ContactInfo icon={FaPhone} title="Phone" text="+1 (555) 123-4567" />
                 <ContactInfo icon={FaEnvelope} title="Email" text="info@gmp-electrical.com" />
                  <ContactInfo icon={FaMapMarkerAlt} title="Address" text="123 Solar Street, Sunshine City, SC 90001" />
            </Stack>
            
             <Box mt={8}>
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1655734407519!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '1rem' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>
          </Stack>

          {/* Contact Form */}
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            p={8}
            rounded={'2xl'}
            shadow={'2xl'}
            borderWidth={'2px'}
            borderColor={'brand.100'}
            transition={'all 0.3s ease'}
            _hover={{
              borderColor: 'brand.200',
              shadow: '0 20px 40px rgba(0, 102, 255, 0.15)',
            }}
          >
            <form onSubmit={handleSubmit}>
                <VStack spacing={5}>
                     <Heading size={'md'} w={'full'}>Send us a Message</Heading>
                    <FormControl id="name" isRequired>
                        <FormLabel fontWeight={'600'}>Name</FormLabel>
                        <Input 
                          type="text" 
                          placeholder="Your Name"
                          focusBorderColor="brand.500"
                          _focus={{
                            boxShadow: '0 0 0 3px rgba(0, 102, 255, 0.1)',
                          }}
                        />
                    </FormControl>
                    <FormControl id="email" isRequired>
                        <FormLabel fontWeight={'600'}>Email</FormLabel>
                        <Input 
                          type="email" 
                          placeholder="your@email.com"
                          focusBorderColor="brand.500"
                          _focus={{
                            boxShadow: '0 0 0 3px rgba(0, 102, 255, 0.1)',
                          }}
                        />
                    </FormControl>
                     <FormControl id="phone">
                        <FormLabel fontWeight={'600'}>Phone</FormLabel>
                        <Input 
                          type="tel" 
                          placeholder="(555) 123-4567"
                          focusBorderColor="brand.500"
                          _focus={{
                            boxShadow: '0 0 0 3px rgba(0, 102, 255, 0.1)',
                          }}
                        />
                    </FormControl>
                     <FormControl id="service">
                        <FormLabel fontWeight={'600'}>Interested Service</FormLabel>
                        <Input 
                          type="text" 
                          placeholder="e.g. Solar Installation"
                          focusBorderColor="brand.500"
                          _focus={{
                            boxShadow: '0 0 0 3px rgba(0, 102, 255, 0.1)',
                          }}
                        />
                    </FormControl>
                    <FormControl id="message" isRequired>
                        <FormLabel fontWeight={'600'}>Message</FormLabel>
                        <Textarea 
                          placeholder="Tell us about your project..." 
                          rows={6}
                          focusBorderColor="brand.500"
                          _focus={{
                            boxShadow: '0 0 0 3px rgba(0, 102, 255, 0.1)',
                          }}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        colorScheme="brand"
                        size="lg"
                        w={'full'}
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
