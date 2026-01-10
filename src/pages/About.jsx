import React from 'react';
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
            <Text fontSize={'md'} color={'gray.600'} fontWeight={'600'}>
                {label}
            </Text>
        </Stack>
    )
}

const About = () => {
  return (
    <Box>
      <Box 
        bgGradient={'linear(to-br, brand.50, accent.50, secondary.50)'} 
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
          bgImage={'radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)'}
        />
        <Container maxW={'container.lg'} position={'relative'} zIndex={1}>
          <Heading 
            as="h1" 
            size="2xl" 
            mb={4}
            fontWeight={'800'}
            bgGradient={'linear(to-r, brand.600, secondary.600)'}
            bgClip={'text'}
          >
            About G.M.P Electrical
          </Heading>
          <Text fontSize="xl" color={'gray.600'} lineHeight={'tall'}>
            Dedicated to powering a sustainable future through innovation and craftsmanship.
          </Text>
        </Container>
      </Box>

      <Container maxW={'container.xl'} py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} mb={20} alignItems="center">
            <Box>
                <Image
                    rounded={'xl'}
                    src="/images/solar-images/solar7.jpg"
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
                <Heading mb={6}>Our Mission</Heading>
                <Text fontSize={'lg'} color={'gray.600'} mb={4}>
                    At G.M.P Electrical, we believe that sustainable energy should be accessible, reliable, and expertly installed. Our mission is to transition homes and businesses to cleaner power sources while ensuring the highest standards of electrical safety and efficiency.
                </Text>
                 <Text fontSize={'lg'} color={'gray.600'}>
                    Founded in 2026, we have grown from a small team of passionate electricians to a leading provider of solar and electrical solutions in the region. We combine cutting-edge technology with traditional craftsmanship to deliver results that last.
                </Text>
            </Box>
        </SimpleGrid>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} mb={20}>
             <Box>
                  <Heading mb={6}>Why Choose Us?</Heading>
                  <Stack spacing={4}>
                      <Box>
                          <Text fontWeight={'bold'} fontSize={'lg'}>Certified Experts</Text>
                          <Text color={'gray.600'}>Our team consists of licensed electricians and certified solar installers.</Text>
                      </Box>
                      <Box>
                          <Text fontWeight={'bold'} fontSize={'lg'}>Quality Guaranteed</Text>
                          <Text color={'gray.600'}>We use only top-tier materials and back our work with comprehensive warranties.</Text>
                      </Box>
                       <Box>
                          <Text fontWeight={'bold'} fontSize={'lg'}>Customer Centric</Text>
                          <Text color={'gray.600'}>We prioritize your needs and transparent communication throughout the project.</Text>
                      </Box>
                  </Stack>
            </Box>
        </SimpleGrid>

        <Box borderTopWidth={1} borderColor={'gray.200'} py={16} mb={10}>
            <Heading textAlign={'center'} mb={12}>Our Impact</Heading>
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
