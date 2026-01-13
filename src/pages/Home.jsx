import React from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Container, Button, useColorModeValue } from '@chakra-ui/react';
import { FaSolarPanel, FaBolt, FaTools, FaShieldAlt, FaCertificate, FaMapMarkerAlt } from 'react-icons/fa';
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
      <Box position="relative">
        <Hero />
      </Box>
      
      <Container maxW={'container.xl'} py={20}>
         <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={16}>
            <Heading 
              fontSize={'4xl'} 
              fontWeight={'800'}
              bgGradient={'linear(to-r, brand.500, accent.500)'}
              bgClip={'text'}
            >
              Modern Solar & Electrical Solutions
            </Heading>
            <Text color={'gray.600'} fontSize={'xl'} lineHeight={'tall'}>
              From rooftop solar and backup power to safe wiring and neat conduit work, we design, install, and maintain systems that keep your home or business powered every day.
            </Text>
          </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FaSolarPanel} w={10} h={10} />}
            title={'Solar Systems & Backup Power'}
            text={
              'Custom-designed solar and inverter systems with batteries, so you enjoy lower bills and reliable power during grid outages.'
            }
          />
          <Feature
            icon={<Icon as={FaTools} w={10} h={10} />}
            title={'Conduit & Tubing'}
            text={
              'Professional conduit and trunking installation that protects your cables, keeps your walls tidy, and meets local safety standards.'
            }
          />
          <Feature
             icon={<Icon as={FaBolt} w={10} h={10} />}
            title={'Electrical Installations'}
            text={
              'New builds, renovations, fault finding, and repairs handled by experienced, licensed electricians with a focus on safety and quality.'
            }
          />
        </SimpleGrid>
      </Container>

      {/* Trust badges */}
      <Box py={10} bg={useColorModeValue('white', 'gray.900')}>
        <Container maxW={'container.xl'}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Flex align="center" gap={3}>
              <Box
                as={FaShieldAlt}
                w={8}
                h={8}
                color="brand.500"
              />
              <Box>
                <Text fontWeight="700" fontSize="sm" color="gray.800">
                  Licensed & Insured
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Compliant installations and safe workmanship on every job.
                </Text>
              </Box>
            </Flex>
            <Flex align="center" gap={3}>
              <Box
                as={FaCertificate}
                w={8}
                h={8}
                color="secondary.500"
              />
              <Box>
                <Text fontWeight="700" fontSize="sm" color="gray.800">
                  Certified Solar Installers
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Trained to design and commission reliable solar systems.
                </Text>
              </Box>
            </Flex>
            <Flex align="center" gap={3}>
              <Box
                as={FaMapMarkerAlt}
                w={8}
                h={8}
                color="accent.500"
              />
              <Box>
                <Text fontWeight="700" fontSize="sm" color="gray.800">
                  Local to Mutare
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Fast support for homes and businesses in Mutare & surrounds.
                </Text>
              </Box>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Recent installations */}
      <Box py={16} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW={'container.xl'}>
          <Stack spacing={6} mb={10} textAlign={{ base: 'left', md: 'center' }}>
            <Text
              fontSize={'sm'}
              fontWeight={'600'}
              textTransform={'uppercase'}
              letterSpacing={'0.18em'}
              color={'brand.500'}
            >
              Recent installations
            </Text>
            <Heading
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight={'800'}
              color={'gray.800'}
            >
              Projects we&apos;ve completed for clients like you
            </Heading>
            <Text fontSize={'md'} color={'gray.600'} maxW={'2xl'} mx={{ base: 0, md: 'auto' }}>
              A snapshot of some of the systems we&apos;ve recently installed in and around Mutare.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Stack
              role="group"
              bg={useColorModeValue('white', 'gray.800')}
              rounded={'2xl'}
              overflow={'hidden'}
              borderWidth={'1px'}
              borderColor={useColorModeValue('gray.100', 'gray.700')}
              boxShadow={'md'}
              transition="all 0.4s ease"
              transform="translateY(0)"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: 'lg',
              }}
            >
              <Box h={{ base: '220px', md: '260px' }} overflow={'hidden'}>
                <Box
                  as="img"
                  src="/images/solar-images/solar2.jpg"
                  alt="4kW rooftop solar system in Mutare"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  objectPosition="center top"
                  loading="lazy"
                  transform="scale(1.02)"
                  transition="transform 0.6s ease"
                  _groupHover={{ transform: 'scale(1.08)' }}
                />
              </Box>
              <Box p={6}>
                <Text fontWeight="700" fontSize="md" color="gray.800" mb={1}>
                  3kva Home System
                </Text>
                <Text fontSize="sm" color="gray.500" mb={2}>
                  Mutasa, Zimbabwe
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Roof-mounted solar with battery backup to keep lights, fridge, Wi‑Fi and TV running through outages.
                </Text>
              </Box>
            </Stack>

            <Stack
              role="group"
              bg={useColorModeValue('white', 'gray.800')}
              rounded={'2xl'}
              overflow={'hidden'}
              borderWidth={'1px'}
              borderColor={useColorModeValue('gray.100', 'gray.700')}
              boxShadow={'md'}
              transition="all 0.4s ease"
              transform="translateY(0)"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: 'lg',
              }}
            >
              <Box h={{ base: '220px', md: '260px' }} overflow={'hidden'}>
                <Box
                  as="img"
                  src="/images/solar-images/solar3.jpg"
                  alt="5kW office backup system in Mutare CBD"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  objectPosition="center center"
                  loading="lazy"
                  transform="scale(1.02)"
                  transition="transform 0.6s ease"
                  _groupHover={{ transform: 'scale(1.08)' }}
                />
              </Box>
              <Box p={6}>
                <Text fontWeight="700" fontSize="md" color="gray.800" mb={1}>
                  5kW Office Backup
                </Text>
                <Text fontSize="sm" color="gray.500" mb={2}>
                  Mutare CBD
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Hybrid inverter and lithium batteries powering computers, POS systems and lighting for a small office.
                </Text>
              </Box>
            </Stack>

            <Stack
              role="group"
              bg={useColorModeValue('white', 'gray.800')}
              rounded={'2xl'}
              overflow={'hidden'}
              borderWidth={'1px'}
              borderColor={useColorModeValue('gray.100', 'gray.700')}
              boxShadow={'md'}
              transition="all 0.4s ease"
              transform="translateY(0)"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: 'lg',
              }}
            >
              <Box h={{ base: '220px', md: '260px' }} overflow={'hidden'}>
                <Box
                  as="img"
                  src="/images/solar-images/solar4.jpg"
                  alt="8kW system for lodge outside Mutare"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  objectPosition="center center"
                  loading="lazy"
                  transform="scale(1.02)"
                  transition="transform 0.6s ease"
                  _groupHover={{ transform: 'scale(1.08)' }}
                />
              </Box>
              <Box p={6}>
                <Text fontWeight="700" fontSize="md" color="gray.800" mb={1}>
                  5.5kva Home Installation
                </Text>
                <Text fontSize="sm" color="gray.500" mb={2}>
                  Chipinge, Zimbabwe
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Solar + battery setup supplying guest rooms, kitchen equipment and water pumps with clean power.
                </Text>
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      <Box
        bgGradient={'linear(to-br, brand.500, secondary.500, brand.600)'}
        position={'relative'}
        overflow={'hidden'}
        py={24}
        mt={20}
        mb={0}
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
