import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import solar7 from '../assets/images/solar7.jpg';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Avatar,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

const Stat = ({ label, value }) => {
    return (
        <Stack 
          direction={'column'} 
          align={'center'} 
          spacing={2}
          p={6}
          rounded={'xl'}
          bg={'white'}
          boxShadow={'lg'}
          borderWidth={'2px'}
          borderColor={'transparent'}
          transition={'all 0.3s ease'}
          _hover={{
            borderColor: 'brand.200',
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 30px rgba(0, 102, 255, 0.15)',
          }}
        >
             <Text 
               fontSize={'5xl'} 
               fontWeight={'800'} 
               bgGradient={'linear(to-r, brand.500, accent.500)'}
               bgClip={'text'}
             >
                {value}
            </Text>
             <Text fontSize={'md'} color={useColorModeValue('gray.600', 'whiteAlpha.700')} fontWeight={'600'}>
                {label}
            </Text>
        </Stack>
    )
}

const About = () => {
  return (
    <Box>
      <Box 
        bg={useColorModeValue('brand.50', 'gray.800')} 
        py={20} 
        textAlign={'center'}
        position={'relative'}
        overflow={'hidden'}
      >
        <Box
          position={'absolute'}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage={useColorModeValue(
            'radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 70%, rgba(27, 58, 95, 0.2) 0%, transparent 50%)'
          )}
        />
        <Container maxW={'container.lg'} position={'relative'} zIndex={1}>
          <Heading 
            as="h1" 
            size="2xl" 
            mb={4}
            fontWeight={'800'}
            color={useColorModeValue('brand.500', 'white')}
          >
            About G.M.P Electrical
          </Heading>
          <Text fontSize="xl" color={useColorModeValue('gray.600', 'whiteAlpha.800')} lineHeight={'tall'}>
            Dedicated to powering a sustainable future through innovation and craftsmanship.
          </Text>
        </Container>
      </Box>

      <Container maxW={'container.xl'} py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} mb={20} alignItems="center">
            <Box>
                <Image
                    rounded={'xl'}
                    src={solar7}
                    alt="Solar Panel Installation"
                    objectFit={'cover'}
                    w={'full'}
                    h={{ base: '300px', md: 'full' }}
                    mb={{ base: 8, md: 0 }}
                    shadow={'lg'}
                    loading={'lazy'}
                />
            </Box>
            <Box>
                <Heading mb={6} color={useColorModeValue('brand.500', 'white')}>Our Mission</Heading>
                <Text fontSize={'lg'} color={useColorModeValue('gray.600', 'whiteAlpha.800')} mb={4}>
                    At G.M.P Electrical, we believe reliable power should be simple, safe, and sustainable. Our mission is to help homeowners and businesses move to cleaner energy while keeping every installation neat, compliant, and built to last.
                </Text>
                 <Text fontSize={'lg'} color={useColorModeValue('gray.600', 'whiteAlpha.800')}>
                    With over a decade of hands-on experience, our team has grown from a small local crew to a trusted solar and electrical partner for clients across Mutare and surrounding areas. We combine modern technology with solid workmanship and honest advice.
                </Text>
            </Box>
        </SimpleGrid>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} mb={20}>
             <Box>
                  <Heading mb={6} color={useColorModeValue('brand.500', 'white')}>Why Choose Us?</Heading>
                  <Stack spacing={4}>
                      <Box>
                          <Text fontWeight={'bold'} fontSize={'lg'} color={useColorModeValue('brand.500', 'white')}>Certified Experts</Text>
                          <Text color={useColorModeValue('gray.600', 'whiteAlpha.700')}>Our team consists of licensed electricians and certified solar installers.</Text>
                      </Box>
                      <Box>
                          <Text fontWeight={'bold'} fontSize={'lg'} color={useColorModeValue('brand.500', 'white')}>Quality Guaranteed</Text>
                          <Text color={useColorModeValue('gray.600', 'whiteAlpha.700')}>We use only top-tier materials and back our work with comprehensive warranties.</Text>
                      </Box>
                       <Box>
                          <Text fontWeight={'bold'} fontSize={'lg'} color={useColorModeValue('brand.500', 'white')}>Customer Centric</Text>
                          <Text color={useColorModeValue('gray.600', 'whiteAlpha.700')}>We prioritize your needs and transparent communication throughout the project.</Text>
                      </Box>
                  </Stack>
            </Box>
        </SimpleGrid>

        <Box borderTopWidth={1} borderColor={useColorModeValue('gray.200', 'gray.700')} py={16} mb={10}>
            <Heading textAlign={'center'} mb={12} color={useColorModeValue('brand.500', 'white')}>Our Impact</Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
                <Stat label={'Installations'} value={'500+'} />
                <Stat label={'Happy Clients'} value={'98%'} />
                <Stat label={'CO2 Saved'} value={'10k Tons'} />
                <Stat label={'Years Experience'} value={'10+'} />
            </SimpleGrid>
        </Box>
        
      </Container>
    </Box>
  );
};

export default About;
