import React from 'react';
import { Box, Container, Stack, Text, SimpleGrid, useColorModeValue, Icon, Flex, useToast } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const toast = useToast();

  const handleNotice = (e, label) => {
    if (e) e.preventDefault();
    toast({
      title: 'Coming Soon',
      description: `${label} is currently under development as part of our site construction.`,
      status: 'info',
      duration: 5000,
      isClosable: true,
      position: 'bottom-right',
      variant: 'subtle',
    });
  };

  return (
    <Box
      bg={'brand.900'} // Deep Navy Blue
      color={'gray.300'}
      position={'relative'}
      mt={0}
    >
      <Container as={Stack} maxW={'container.xl'} py={16} position={'relative'} zIndex={1}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={12}>
          
          {/* Brand Column */}
          <Stack spacing={6}>
            <Box>
              <Text
                fontSize={'2xl'}
                fontWeight={'800'}
                letterSpacing={'tight'}
                color={'white'}
              >
                G.M.P<Text as="span" color="secondary.500"> Electrical</Text>
              </Text>
              <Text fontSize={'sm'} mt={2} color={'gray.400'}>
                Modern solar, backup power, and electrical solutions for homes and businesses in Mutare and surrounding areas.
              </Text>
            </Box>
            <Stack direction={'row'} spacing={4}>
                <SocialButton label={'Facebook'} onClick={(e) => handleNotice(e, 'Our Facebook page')}><FaFacebook /></SocialButton>
                <SocialButton label={'Twitter'} onClick={(e) => handleNotice(e, 'Our Twitter profile')}><FaTwitter /></SocialButton>
                <SocialButton label={'Instagram'} onClick={(e) => handleNotice(e, 'Our Instagram profile')}><FaInstagram /></SocialButton>
                <SocialButton label={'LinkedIn'} onClick={(e) => handleNotice(e, 'Our LinkedIn profile')}><FaLinkedin /></SocialButton>
            </Stack>
          </Stack>

          {/* Quick Links */}
          <Stack align={'flex-start'}>
            <Text fontWeight={'700'} fontSize={'lg'} mb={2} color={'secondary.500'}>Quick Links</Text>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/packages">Solar Packages</Link>
            <Link to="/contact">Get a Quote</Link>
          </Stack>

          {/* Services */}
          <Stack align={'flex-start'}>
            <Text fontWeight={'700'} fontSize={'lg'} mb={2} color={'secondary.500'}>Our Services</Text>
            <Link to="/services">Solar Installation</Link>
            <Link to="/services">Electrical Wiring</Link>
            <Link to="/services">Tubing Solutions</Link>
            <Link to="/services">Maintenance & Repair</Link>
            <Link to="/services">System Upgrades</Link>
          </Stack>

          {/* Contact Info */}
          <Stack align={'flex-start'}>
            <Text fontWeight={'700'} fontSize={'lg'} mb={2} color={'secondary.500'}>Contact Us</Text>
            <Text fontWeight="600" color="white">Head Office</Text>
            <Text>St Jamses Zongoro</Text>
            <Text mb={2}>313 Mutare</Text>
            
            <Text fontWeight="600" color="white" mt={2}>Get in Touch</Text>
            <Text 
                as="a" 
                href="mailto:info@gmp-electrical.com"
                color={'gray.400'} 
                _hover={{ color: 'secondary.500' }}
            >
                info@gmp-electrical.com
            </Text>
            <Text 
                as="a" 
                href="tel:+263779941427"
                color={'gray.400'} 
                _hover={{ color: 'secondary.500' }}
            >
                +263 779 941 427
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
      
      <Box py={6} borderTopWidth={1} borderColor="whiteAlpha.100" bg={'blackAlpha.300'}>
          <Container maxW={'container.xl'}>
            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
                <Text fontSize={'sm'} color={'gray.500'}>
                © {new Date().getFullYear()} G.M.P Electrical. All rights reserved.
                </Text>
                <Stack direction={'row'} spacing={6} mt={{ base: 4, md: 0 }}>
                    {/* <FooterLink label="Privacy Policy" onClick={(e) => handleNotice(e, 'Privacy Policy')} />
                    <FooterLink label="Terms of Service" onClick={(e) => handleNotice(e, 'Terms of Service')} /> */}
                </Stack>
            </Flex>
          </Container>
      </Box>
    </Box>
  );
};

const FooterLink = ({ label, onClick }) => (
    <Text 
      as="button"
      onClick={onClick}
      color={'gray.400'}
      transition={'all 0.3s ease'}
      fontSize={'sm'}
      _hover={{ 
        color: 'secondary.500',
        textDecoration: 'none',
        transform: 'translateX(4px)',
      }}
    >
        {label}
    </Text>
);

const Link = ({ children, to }) => (
    <Text 
      as={RouterLink} 
      to={to} 
      color={'gray.400'}
      transition={'all 0.3s ease'}
      fontSize={'sm'}
      _hover={{ 
        color: 'secondary.500',
        textDecoration: 'none',
        transform: 'translateX(4px)',
      }}
    >
        {children}
    </Text>
);

const SocialButton = ({ children, label, onClick }) => {
  return (
    <Box
      as="button"
      onClick={onClick}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      w={10}
      h={10}
      rounded={'full'}
      bg={'whiteAlpha.100'}
      color={'gray.400'}
      transition={'all 0.3s ease'}
      _hover={{
        bg: 'secondary.500',
        color: 'white',
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 20px rgba(245, 166, 35, 0.4)',
      }}
    >
      <Icon as={() => children} w={5} h={5} />
      <span style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>{label}</span>
    </Box>
  );
};

export default Footer;
