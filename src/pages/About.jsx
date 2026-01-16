import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Image,
  Flex,
  Icon,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaSolarPanel, FaUsers, FaLeaf, FaClock, FaCheckCircle, FaTools, FaHandshake } from 'react-icons/fa';
import solar7 from '../assets/images/solar7.jpg';

const Stat = ({ label, value, icon }) => {
    return (
        <Stack 
          direction={'column'} 
          align={'center'} 
          spacing={4}
          p={8}
          rounded={'2xl'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'xl'}
          borderWidth={'1px'}
          borderColor={useColorModeValue('gray.100', 'gray.700')}
          transition={'all 0.4s ease'}
          _hover={{
            borderColor: 'brand.200',
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 40px rgba(27, 58, 95, 0.1)',
          }}
        >
             <Flex
                w={12}
                h={12}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'xl'}
                bgGradient={'linear(to-br, brand.500, brand.600)'}
                mb={2}
                boxShadow={'0 8px 15px rgba(27, 58, 95, 0.2)'}
             >
                <Icon as={icon} w={6} h={6} />
             </Flex>
             <Box textAlign="center">
                <Text 
                  fontSize={'3xl'} 
                  fontWeight={'800'} 
                  color={useColorModeValue('brand.500', 'white')}
                >
                    {value}
                </Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.500', 'whiteAlpha.600')} fontWeight={'600'} textTransform="uppercase" letterSpacing="0.1em">
                    {label}
                </Text>
             </Box>
        </Stack>
    )
}

const About = () => {
  return (
    <Box>
      <Box 
        bg={useColorModeValue('brand.50', 'gray.800')} 
        py={24} 
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
            mb={6}
            fontWeight={'800'}
            color={useColorModeValue('brand.500', 'white')}
            letterSpacing="tight"
          >
            About G.M.P Electrical
          </Heading>
          <Text fontSize="xl" color={useColorModeValue('gray.600', 'whiteAlpha.800')} lineHeight={'tall'} maxW="3xl" mx="auto">
            A boutique local team dedicated to powering Mutare's future through precision craftsmanship and sustainable energy solutions.
          </Text>
        </Container>
      </Box>

      <Container maxW={'container.xl'} py={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} mb={24} alignItems="center">
            <Box position="relative">
                <Box
                    position="absolute"
                    top="-20px"
                    left="-20px"
                    w="100px"
                    h="100px"
                    bgGradient="linear(to-br, secondary.400, secondary.600)"
                    rounded="full"
                    opacity={0.2}
                    zIndex={0}
                />
                <Image
                    rounded={'2xl'}
                    src={solar7}
                    alt="Solar Panel Installation"
                    objectFit={'cover'}
                    objectPosition={'center 20%'}
                    w={'full'}
                    h={{ base: '300px', md: '550px' }}
                    shadow={'2xl'}
                    loading={'lazy'}
                    position="relative"
                    zIndex={1}
                    transition={'transform 0.5s ease'}
                    _hover={{ transform: 'scale(1.02)' }}
                />
            </Box>
            <Stack spacing={8}>
                <Box>
                    <Heading size="xl" mb={6} color={useColorModeValue('brand.500', 'white')}>Our Mission</Heading>
                    <Text fontSize={'lg'} color={useColorModeValue('gray.600', 'whiteAlpha.800')} mb={6} lineHeight="tall">
                        At G.M.P Electrical, we believe reliable power should be simple, safe, and sustainable. As a growing local business, our mission is to provide Mutare homeowners and businesses with clean energy transitions that are neat, compliant, and built to last.
                    </Text>
                    <Text fontSize={'lg'} color={useColorModeValue('gray.600', 'whiteAlpha.800')} lineHeight="tall">
                        We don't just install systems; we build relationships. Every project is handled with the personal care of a local team combined with the professional standards of industry experts.
                    </Text>
                </Box>
                
                <SimpleGrid columns={2} spacing={8}>
                    <HStack spacing={4}>
                        <Icon as={FaCheckCircle} color="accent.500" w={5} h={5} />
                        <Text fontWeight="600">Certified Quality</Text>
                    </HStack>
                    <HStack spacing={4}>
                        <Icon as={FaTools} color="accent.500" w={5} h={5} />
                        <Text fontWeight="600">Expert Care</Text>
                    </HStack>
                    <HStack spacing={4}>
                        <Icon as={FaHandshake} color="accent.500" w={5} h={5} />
                        <Text fontWeight="600">Local Support</Text>
                    </HStack>
                    <HStack spacing={4}>
                        <Icon as={FaLeaf} color="accent.500" w={5} h={5} />
                        <Text fontWeight="600">Green Solutions</Text>
                    </HStack>
                </SimpleGrid>
            </Stack>
        </SimpleGrid>

        <Box py={20} borderTopWidth={1} borderColor={useColorModeValue('gray.100', 'gray.700')}>
            <Stack spacing={4} textAlign="center" mb={16}>
                <Text
                    fontSize={'sm'}
                    fontWeight={'600'}
                    textTransform={'uppercase'}
                    letterSpacing={'0.2em'}
                    color={'secondary.500'}
                >
                    Our Growing Impact
                </Text>
                <Heading size="xl" color={useColorModeValue('brand.500', 'white')}>
                    Real Results 
                </Heading>
            </Stack>
            
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                <Stat icon={FaSolarPanel} label={'Installations'} value={'10+'} />
                <Stat icon={FaUsers} label={'Happy Clients'} value={'99.9%'} />
                <Stat icon={FaLeaf} label={'Clean Energy'} value={'50kW+'} />
                <Stat icon={FaClock} label={'Support'} value={'24/7'} />
            </SimpleGrid>
        </Box>
        
      </Container>
    </Box>
  );
};

export default About;
