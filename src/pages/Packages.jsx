import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  VStack,
  List,
  ListItem,
  ListIcon,
  Button,
  Badge,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { FaSolarPanel } from 'react-icons/fa';
import img1kva from '../assets/images/1kva.webp';
import img3kva from '../assets/images/3kva.webp';
import img5kva from '../assets/images/5kva.webp';
import img8kva from '../assets/images/8kva.webp';
import img10kva from '../assets/images/10kva.webp';

const PackageCard = ({ name, capacity, price, features, powers, idealFor, isPopular, image }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={8}
      rounded={'2xl'}
      pos={'relative'}
      boxShadow={'xl'}
      borderWidth={'1px'}
      borderColor={isPopular ? 'brand.200' : useColorModeValue('gray.50', 'gray.700')}
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: isPopular ? '0 20px 40px rgba(27, 58, 95, 0.2)' : '0 20px 40px rgba(27, 58, 95, 0.1)',
        borderColor: 'brand.300',
      }}
      transition={'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'}
    >
      {isPopular && (
        <Badge
          position={'absolute'}
          top={-3}
          right={8}
          bgGradient={'linear(to-r, brand.500, brand.600)'}
          color={'white'}
          px={4}
          py={1}
          rounded={'full'}
          fontSize={'sm'}
          fontWeight={'700'}
          boxShadow={'0 4px 15px rgba(27, 58, 95, 0.3)'}
        >
          Most Popular
        </Badge>
      )}

      {/* Package Image */}
      <Box
        mb={6}
        rounded={'xl'}
        overflow={'hidden'}
        h={'200px'}
        bg={'gray.100'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        position={'relative'}
      >
        {image ? (
          <Image
            src={image}
            alt={`${name} Solar Package`}
            objectFit={'cover'}
            w={'full'}
            h={'full'}
            loading={'lazy'}
          />
        ) : (
          <VStack spacing={2}>
            <Box
              as={FaSolarPanel}
              w={16}
              h={16}
              color={'brand.400'}
            />
            <Text fontSize={'sm'} color={useColorModeValue('gray.500', 'whiteAlpha.600')} fontWeight={'600'}>
              {capacity} System
            </Text>
          </VStack>
        )}
      </Box>

      <VStack spacing={4} align={'start'}>
        <Heading
          fontSize={'2xl'}
          fontWeight={'800'}
          color={useColorModeValue('brand.500', 'white')}
        >
          {name}
        </Heading>

        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'whiteAlpha.800')} fontWeight={'600'}>
          {capacity} Solar System
        </Text>

        {idealFor && (
          <Text fontSize={'sm'} color={useColorModeValue('gray.500', 'whiteAlpha.600')}>
            Best for: {idealFor}
          </Text>
        )}

        <Box mt={2}>
          <Text fontSize={'2xl'} fontWeight={'800'} color={useColorModeValue('gray.800', 'white')}>
            {price}
          </Text>
          <Text fontSize={'xs'} color={useColorModeValue('gray.500', 'whiteAlpha.600')} textTransform={'uppercase'} letterSpacing={'0.08em'}>
            Turnkey supply & installation
          </Text>
        </Box>

        <List spacing={3} w={'full'} mt={4}>
          {features.map((feature, index) => (
            <ListItem key={index} display={'flex'} alignItems={'start'}>
              <ListIcon as={CheckCircleIcon} color={'accent.500'} mt={1} />
              <Text fontSize={'sm'} color={useColorModeValue('gray.700', 'whiteAlpha.800')}>
                {feature}
              </Text>
            </ListItem>
          ))}
        </List>

        {powers && powers.length > 0 && (
          <Box mt={4} w={'full'}>
            <Text
              fontSize={'xs'}
              fontWeight={'700'}
              textTransform={'uppercase'}
              letterSpacing={'0.08em'}
              color={useColorModeValue('gray.500', 'whiteAlpha.600')}
              mb={1}
            >
              What it can power
            </Text>
            <List spacing={1} pl={1}>
              {powers.map((item, index) => (
                <ListItem key={index}>
                  <Text fontSize={'xs'} color={useColorModeValue('gray.600', 'whiteAlpha.700')}>
                    • {item}
                  </Text>
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        <Button
          as={RouterLink}
          to="/contact"
          w={'full'}
          mt={6}
          size={'lg'}
          bg={isPopular ? 'secondary.500' : useColorModeValue('brand.500', 'gray.700')}
          color={'white'}
          rounded={'full'}
          fontWeight={'700'}
          _hover={{
            bg: isPopular ? 'secondary.600' : useColorModeValue('brand.600', 'gray.800'),
            transform: 'translateY(-2px)',
            boxShadow: isPopular ? '0 8px 20px rgba(245, 166, 35, 0.3)' : '0 8px 20px rgba(27, 58, 95, 0.3)',
          }}
          transition={'all 0.3s ease'}
        >
          Get Quote
        </Button>
      </VStack>
    </Stack>
  );
};

const Packages = () => {
  const packages = [
    {
      name: 'Starter',
      capacity: '1kW',
      price: 'From $700',
      idealFor: 'Small apartments, backup for essentials',
      features: [
        '1 x 450W solar panel',
        '1kW inverter',
        'Protection kit',
        'Ideal for small homes',
        '12-months warranty',
      ],
      powers: [
        '4–6 LED lights',
        '1 television + decoder',
        'Wi‑Fi router',
        'Phone and laptop charging',
        'Small energy-efficient fridge',
      ],
      isPopular: false,
      image: img1kva,
    },
    {
      name: 'Home',
      capacity: '3kW',
      price: 'From $1,950',
      idealFor: 'Typical family homes (2–3 bedrooms)',
      features: [
        '4 x 450W solar panels',
        '3kW hybrid inverter',
        'Protection kit',
        'Mounting Kit',
        'Accessories',
        'Automatic Voltage Switcher',
        'Labour | Installation',
        'Perfect for average homes',
        '12-months warranty',
      ],
      powers: [
        '8–10 LED lights',
        '2 televisions',
        'Medium fridge/freezer',
        'Wi‑Fi router and computers',
        'Borehole Pump',
        'Washing Machine',
'Printers and other appliances'
      ],
      isPopular: false,
      image: img3kva,
    },
    {
      name: 'Premium',
      capacity: '5kW',
      price: 'From $2,500',
      idealFor: 'Larger homes with higher usage',
      features: [
        '6 x 450W solar panels',
        '5kW hybrid inverter',
        'Advanced monitoring & app',
        '1 x 48v lithium battery',
        'Reduces bills by 60-80%',
        '12 months warranty',
      ],
      powers: [
        'Full 3–4 bedroom home (lights and plugs)',
        'Fridge + deep freezer',
        'Multiple TVs and computers',
        'Iron, microwave and kettle (managed use)',
        'Small water pump or borehole system',
      ],
      isPopular: true,
      image: img5kva,
    },
    {
      name: 'Business',
      capacity: '5.5kVA',
      price: 'From $2,700',
      idealFor: 'Small offices, shops and clinics',
      features: [
        '8 x 450W solar panels',
        '5.5kW hybrid inverter',
        '1 x 48v 200ah Lithium iron Battery',
         'Mounting kits',
         'Accessories',
         'Automatic ChangeOver Switch',
         'Labour | Installation',
          '12 months warranty',
      ],
      powers: [
        'Small office or shop (computers, POS, lighting)',
        'Multiple fridges/freezers or display fridges',
        'Printers and office equipment',
        'Security system and CCTV',
        'Light workshop tools (e.g. small drills, grinders)',
      ],
      isPopular: false,
      image: img8kva,
    },
    {
      name: 'Enterprise',
      capacity: '10kW',
      price: 'From $4,500',
      idealFor: 'Lodges, guest houses and larger businesses',
      features: [
        '12 x 500W solar panels',
        '10kW hybrid inverter',
        'Enterprise monitoring',
        '2 x 48v 100ah Lithium Ion Battery',
'Mounting kit',
        'Protection kit',
        'Adjustable Voltage Switcher',
'Labour | Installation',
        '5 years warranty'
      ],
      powers: [
        'Lights',
        'TV',
'Decoder',
        'Microwave',
        'Wi‑Fi',
        'Charging',
        'Borehole pump',
        'Gate motor, etc.'

      ],
      isPopular: false,
      image: img10kva,
    },
  ];

  return (
    <Box id="main-content">
      {/* Header Section */}
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
            'radial-gradient(circle at 50% 50%, rgba(27, 58, 95, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(27, 58, 95, 0.2) 0%, transparent 50%)'
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
            Solar Packages
          </Heading>
          <Text fontSize="xl" color={useColorModeValue('gray.600', 'whiteAlpha.800')} lineHeight={'tall'} maxW={'2xl'} mx={'auto'}>
            Choose the perfect solar solution for your home or business. All packages include professional installation, premium equipment, and comprehensive warranties.
          </Text>
        </Container>
      </Box>

      {/* Packages Grid */}
      <Container maxW={'container.xl'} py={20}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </SimpleGrid>
      </Container>

      {/* CTA Section */}
      <Box
        bgGradient={'linear(to-br, brand.500, brand.700)'}
        position={'relative'}
        overflow={'hidden'}
        py={20}
        mt={16}
        mb={0}
      >
        <Box
          position={'absolute'}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage={'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)'}
          opacity={0.5}
        />

        <Container maxW={'container.xl'} position={'relative'} zIndex={2}>
          <Stack spacing={8} textAlign={'center'} align={'center'} maxW={'3xl'} mx={'auto'}>
            <Heading
              color={'white'}
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight={'800'}
            >
              Need a Custom Package?
            </Heading>
            <Text fontSize={'xl'} color={'whiteAlpha.900'} lineHeight={'tall'}>
              Every home is unique. Contact us for a free consultation and custom quote tailored to your specific energy needs and budget.
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
              size={'lg'}
              h={'56px'}
              px={10}
              bg={'secondary.500'}
              color={'white'}
              rounded={'full'}
              fontSize={'lg'}
              fontWeight={'700'}
              boxShadow={'0 8px 30px rgba(245, 166, 35, 0.3)'}
              _hover={{
                bg: 'secondary.600',
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 40px rgba(245, 166, 35, 0.4)',
              }}
              transition={'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'}
            >
              Get Custom Quote
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Packages;
