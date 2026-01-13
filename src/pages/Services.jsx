import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  SimpleGrid,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const ServiceSection = ({ title, description, features, imageSrc, reversed }) => {
  return (
    <Container maxW={'container.xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems={'center'}>
        <Stack order={{ base: 2, md: reversed ? 1 : 2 }} spacing={4}>
          <Heading>{title}</Heading>
          <Text color={'gray.600'} fontSize={'lg'}>
            {description}
          </Text>
          <List spacing={3} mt={4}>
            {features.map((feature, index) => (
              <ListItem key={index}>
                 <ListIcon as={CheckCircleIcon} color="secondary.500" />
                {feature}
              </ListItem>
            ))}
          </List>
          <Button
            as={RouterLink}
            to="/contact"
            w={'fit-content'}
            mt={6}
            colorScheme={'brand'}
            rounded={'full'}>
            Get a Quote
          </Button>
        </Stack>
         <Box order={{ base: 1, md: reversed ? 2 : 1 }} flex={1}>
          <Image
            rounded={'2xl'}
            alt={title}
            src={imageSrc}
            w={'full'}
            h={'auto'}
            objectFit={'cover'}
            shadow={'2xl'}
            borderWidth={'2px'}
            borderColor={'brand.100'}
            transition={'all 0.3s ease'}
            loading={'lazy'}
            _hover={{
              transform: 'scale(1.02)',
              shadow: '0 20px 40px rgba(0, 102, 255, 0.2)',
            }}
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

const Services = () => {
  return (
    <Box>
      <Box 
        bgGradient={'linear(to-br, brand.50, secondary.50, brand.100)'} 
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
          bgImage={'radial-gradient(circle at 70% 30%, rgba(0, 102, 255, 0.1) 0%, transparent 50%)'}
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
            Our Expert Services
          </Heading>
          <Text fontSize="xl" color={'gray.600'} lineHeight={'tall'}>
            From harnessing renewable energy to precise electrical installations, we deliver professional solutions for your home and business.
          </Text>
        </Container>
      </Box>

      <Stack spacing={8} py={10}>
        <ServiceSection
          title="Solar Panel Installation"
          description="Maximize your energy independence with our premium solar installation services. We handle everything from site assessment and design to installation and maintenance, ensuring you get the most efficient system for your property."
          features={[
            'Custom solar system design',
             'High-efficiency tier-1 solar panels',
            'Battery storage integration',
            'Grid-tied and off-grid solutions',
            '25-year performance warranty',
          ]}
          imageSrc="/images/solar-images/solar-roof.jpg"
        />
        
        <Box bg={useColorModeValue('gray.50', 'gray.800')}>
             <ServiceSection
              reversed
              title="Electrical Tubing & Conduit"
              description="Protect your wiring with professional tubing solutions. We install rigid and flexible conduits that safeguard your electrical systems against environmental damage, pests, and wear, ensuring code compliance and longevity."
              features={[
                'EMT, IMC, and Rigid conduit installation',
                'PVC and flexible liquid-tight tubing',
                'Surface and concealed mounting',
                'Industrial and residential applications',
                'Code-compliant wire protection',
              ]}
              imageSrc="/images/solar-images/wiring1.jpg"
            />
        </Box>

        <ServiceSection
          title="Home Wiring & Electrical Work"
          description="Ensure your home is powered safely and efficiently. Our certified electricians handle all aspects of residential wiring, from new construction and full house rewiring to panel upgrades and outlet installations."
          features={[
            'Full home rewiring',
            'Electrical panel upgrades',
            'Lighting design and installation',
            'Smart home wiring',
            'Electrical safety inspections',
          ]}
          imageSrc="/images/solar-images/wiring2.jpg"
        />

        <Box bg={useColorModeValue('gray.50', 'gray.900')}>
          <ServiceSection
            title="Solar Maintenance & Monitoring"
            description="Keep your system performing at its best. We offer scheduled maintenance, cleaning, and performance checks so you get the savings you expect from your solar investment."
            features={[
              'Annual system health checks',
              'Panel cleaning and visual inspections',
              'Inverter and battery performance checks',
              'Fault finding and repairs',
              'Monitoring setup and support',
            ]}
            imageSrc="/images/solar-images/wiring3.jpg"
          />
        </Box>

        {/* Wiring detail gallery */}
        <Box py={16} bg={useColorModeValue('white', 'gray.900')}>
          <Container maxW={'container.xl'}>
            <Stack spacing={6} mb={8} textAlign={{ base: 'left', md: 'center' }}>
              <Heading fontSize={{ base: '2xl', md: '3xl' }}>
                Neat, safe wiring on every project
              </Heading>
              <Text fontSize={'md'} color={'gray.600'} maxW={'2xl'} mx={{ base: 0, md: 'auto' }}>
                A quick look at how we route cables, mount equipment, and finish off our electrical work.
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 2, md: 5 }} spacing={4}>
              <Image
                src="/images/solar-images/solar-roof.jpg"
                alt="Solar panels neatly mounted on a roof"
                rounded="xl"
                objectFit="cover"
                h={{ base: '120px', md: '140px' }}
                w="100%"
                loading="lazy"
              />
              <Image
                src="/images/solar-images/wiring1.jpg"
                alt="Conduit and wiring neatly installed"
                rounded="xl"
                objectFit="cover"
                h={{ base: '120px', md: '140px' }}
                w="100%"
                loading="lazy"
              />
              <Image
                src="/images/solar-images/wiring2.jpg"
                alt="Distribution board wiring detail"
                rounded="xl"
                objectFit="cover"
                h={{ base: '120px', md: '140px' }}
                w="100%"
                loading="lazy"
              />
              <Image
                src="/images/solar-images/wiring3.jpg"
                alt="Electrical trunking and cable management"
                rounded="xl"
                objectFit="cover"
                h={{ base: '120px', md: '140px' }}
                w="100%"
                loading="lazy"
              />
              <Image
                src="/images/solar-images/wiring 4.jpg"
                alt="Finished inverter and battery installation"
                rounded="xl"
                objectFit="cover"
                h={{ base: '120px', md: '140px' }}
                w="100%"
                loading="lazy"
              />
            </SimpleGrid>
          </Container>
        </Box>
      </Stack>
    </Box>
  );
};

export default Services;
