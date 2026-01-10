import React from 'react';
import { Box, Container, Stack, Text, SimpleGrid, useColorModeValue, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      bgGradient={'linear(to-br, gray.900, gray.800, gray.900)'}
      color={useColorModeValue('gray.50', 'gray.200')}
      position={'relative'}
      overflow={'hidden'}
    >
      {/* Subtle gradient overlay */}
      <Box
        position={'absolute'}
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient={'linear(to-br, transparent, brand.900, transparent)'}
        opacity={0.1}
        pointerEvents={'none'}
      />
      
      <Container as={Stack} maxW={'container.xl'} py={10} position={'relative'} zIndex={1}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Text fontWeight={'bold'} fontSize={'lg'} mb={2} color={'white'}>Company</Text>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/#">Careers</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'bold'} fontSize={'lg'} mb={2} color={'white'}>Services</Text>
            <Link to="/services#solar">Solar Installation</Link>
            <Link to="/services#wiring">Electrical Wiring</Link>
            <Link to="/services#tubing">Tubing Solutions</Link>
            <Link to="/services#maintenance">Maintenance</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'bold'} fontSize={'lg'} mb={2} color={'white'}>Contact</Text>
            <Text>St James Zongoro</Text>
            <Text>313 Mutare</Text>
            <Text color={'brand.300'} _hover={{ color: 'brand.200' }} cursor={'pointer'}>info@gmp-electrical.com</Text>
            <Text>+263 779 941 427</Text>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'bold'} fontSize={'lg'} mb={2} color={'white'}>Follow Us</Text>
            <Stack direction={'row'} spacing={4}>
                <SocialButton label={'Facebook'} href={'#'}><FaFacebook /></SocialButton>
                <SocialButton label={'Twitter'} href={'#'}><FaTwitter /></SocialButton>
                <SocialButton label={'Instagram'} href={'#'}><FaInstagram /></SocialButton>
                <SocialButton label={'LinkedIn'} href={'#'}><FaLinkedin /></SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      
      <Box py={4} borderTopWidth={1} borderColor="whiteAlpha.200" position={'relative'} zIndex={1}>
          <Container maxW={'container.xl'}>
            <Text textAlign={'center'} fontSize={'sm'}>
              © {new Date().getFullYear()} G.M.P Electrical. All rights reserved.
            </Text>
          </Container>
      </Box>
    </Box>
  );
};

const Link = ({ children, to }) => (
    <Text 
      as={RouterLink} 
      to={to} 
      color={'gray.300'}
      transition={'all 0.3s ease'}
      _hover={{ 
        color: 'brand.300',
        textDecoration: 'none',
        transform: 'translateX(4px)',
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
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      w={10}
      h={10}
      rounded={'full'}
      bg={'whiteAlpha.100'}
      color={'gray.300'}
      transition={'all 0.3s ease'}
      _hover={{
        bg: 'brand.500',
        color: 'white',
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 20px rgba(0, 102, 255, 0.4)',
      }}
    >
      <Icon as={() => children} w={5} h={5} />
      <span style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>{label}</span>
    </Box>
  );
};

export default Footer;
