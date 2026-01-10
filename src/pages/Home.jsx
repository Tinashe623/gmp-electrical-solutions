import React from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Container, Button, useColorModeValue } from '@chakra-ui/react';
import { FaSolarPanel, FaBolt, FaTools } from 'react-icons/fa';
import Hero from '../components/Hero';
import { Link as RouterLink } from 'react-router-dom';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={8}
        rounded={'2xl'}
        align={'center'}
        pos={'relative'}
        boxShadow={'xl'}
        borderWidth={'2px'}
        borderColor={'transparent'}
        bgGradient={useColorModeValue(
          'linear(to-br, white, gray.50)',
          'linear(to-br, gray.800, gray.900)'
        )}
        _hover={{ 
          transform: 'translateY(-8px) scale(1.02)',
          boxShadow: '0 20px 40px rgba(0, 102, 255, 0.2)',
          borderColor: 'brand.200',
        }}
        transition={'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'}
    >
      <Flex
        w={20}
        h={20}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bgGradient={'linear(to-br, brand.500, accent.500)'}
        mb={4}
        boxShadow={'0 8px 20px rgba(0, 102, 255, 0.3)'}
        _groupHover={{
          transform: 'scale(1.1)',
        }}
        transition={'all 0.3s ease'}
      >
        {icon}
      </Flex>
      <Text fontWeight={700} fontSize={'xl'} color={'gray.800'}>{title}</Text>
      <Text color={'gray.600'} textAlign={'center'} lineHeight={'tall'}>{text}</Text>
    </Stack>
  );
};

const Home = () => {
  return (
    <Box id="main-content">
      <Hero />
      
      <Container maxW={'container.xl'} py={20}>
         <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={16}>
            <Heading 
              fontSize={'4xl'} 
              fontWeight={'800'}
              bgGradient={'linear(to-r, brand.500, accent.500)'}
              bgClip={'text'}
            >
              Comprehensive Electrical Solutions
            </Heading>
            <Text color={'gray.600'} fontSize={'xl'} lineHeight={'tall'}>
              We provide end-to-end electrical services from harnessing the sun's power to ensuring your home's wiring is safe and efficient.
            </Text>
          </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FaSolarPanel} w={10} h={10} />}
            title={'Solar Installation'}
            text={
              'Reduce your carbon footprint and save on energy bills with our state-of-the-art solar panel systems tailored to your roof.'
            }
          />
          <Feature
            icon={<Icon as={FaTools} w={10} h={10} />}
            title={'Professional Tubing'}
            text={
              'Expert conduit and tubing installation to protect your electrical systems and ensure long-lasting safety and compliance.'
            }
          />
          <Feature
             icon={<Icon as={FaBolt} w={10} h={10} />}
            title={'Electrical Wiring'}
            text={
              'Complete home wiring services, from new construction to upgrades and repairs. Safety and quality are our top priorities.'
            }
          />
        </SimpleGrid>
      </Container>

      <Box
        bgGradient={'linear(to-br, brand.500, accent.500, secondary.500)'}
        position={'relative'}
        overflow={'hidden'}
        py={24}
        my={16}
      >
        {/* Pattern Overlay */}
        <Box
          position={'absolute'}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage={'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'}
          opacity={0.5}
        />
        
        <Container maxW={'container.xl'} position={'relative'} zIndex={2}>
          <Stack spacing={8} textAlign={'center'} align={'center'} maxW={'3xl'} mx={'auto'}>
              <Heading 
                color={'white'} 
                fontSize={{ base: '3xl', md: '5xl' }} 
                fontWeight={'800'}
                textShadow={'0 4px 20px rgba(0, 0, 0, 0.2)'}
              >
                  Ready to Switch to Solar?
              </Heading>
              <Text fontSize={'xl'} color={'whiteAlpha.900'} lineHeight={'tall'}>
                  Join hundreds of satisfied homeowners who have taken control of their energy production. Contact us today for a free consultation.
              </Text>
              <Button
                  as={RouterLink}
                  to="/contact"
                  size={'lg'}
                  h={'56px'}
                  px={10}
                  bg={'white'}
                  color={'brand.600'}
                  rounded={'full'}
                  fontSize={'lg'}
                  fontWeight={'700'}
                  boxShadow={'0 8px 30px rgba(255, 255, 255, 0.3)'}
                  _hover={{ 
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(255, 255, 255, 0.5)',
                  }}
                  transition={'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'}
              >
                  Get Started Now
              </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
