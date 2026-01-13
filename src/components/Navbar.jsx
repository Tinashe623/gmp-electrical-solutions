import React from 'react';
import { Box, Flex, Text, Button, Stack, useColorModeValue, Container, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Image } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const location = useLocation();
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={100}
      bg={scrolled ? useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(26, 32, 44, 0.9)') : useColorModeValue('white', 'gray.800')}
      backdropFilter={scrolled ? 'blur(10px)' : 'none'}
      boxShadow={scrolled ? 'lg' : 'sm'}
      borderBottom="1px"
      borderColor={useColorModeValue('gray.100', 'gray.700')}
      transition="all 0.3s ease"
    >
      {/* Skip to content link for accessibility */}
      <Box
        as="a"
        href="#main-content"
        position="absolute"
        left="-9999px"
        zIndex={9999}
        bg="brand.500"
        color="white"
        px={4}
        py={2}
        rounded="md"
        _focus={{
          left: '10px',
          top: '10px',
        }}
      >
        Skip to content
      </Box>
      <Container maxW="container.xl">
        <Flex minH={'90px'} align={'center'} justify={'space-between'}>
          <Flex 
            as={RouterLink}
            to="/"
            align={'center'} 
            gap={4}
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
            cursor={'pointer'}
          >
            <Image 
              src="/images/solar-images/logo.png" 
              alt="G.M.P Electrical Logo" 
              h={{ base: '85px', md: '100px' }}
              w={'auto'}
              objectFit={'contain'}
              transition={'all 0.3s ease'}
              filter={'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15))'}
              _hover={{
                filter: 'drop-shadow(0 6px 12px rgba(0, 102, 255, 0.4))',
                transform: 'scale(1.05)',
              }}
            />
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight={'800'}
              letterSpacing={'tight'}
              bgGradient="linear(to-r, brand.500, secondary.500)"
              bgClip="text"
              display={{ base: 'none', sm: 'inline-block' }}
            >
              G.M.P<Text as="span" bgGradient="linear(to-r, secondary.500, accent.500)" bgClip="text"> Electrical</Text>
            </Text>
          </Flex>

          <Stack direction={'row'} spacing={8} display={{ base: 'none', md: 'flex' }}>
            <Navlink to="/" isActive={location.pathname === '/'}>Home</Navlink>
            <Navlink to="/services" isActive={location.pathname === '/services'}>Services</Navlink>
            <Navlink to="/packages" isActive={location.pathname === '/packages'}>Packages</Navlink>
            <Navlink to="/about" isActive={location.pathname === '/about'}>About Us</Navlink>
            <Navlink to="/contact" isActive={location.pathname === '/contact'}>Contact</Navlink>
          </Stack>

          <Stack direction={'row'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Button 
                as={RouterLink} 
                to="/contact" 
                colorScheme="brand" 
                size="md"
                bgGradient="linear(to-r, brand.500, brand.600)"
                _hover={{
                  bgGradient: "linear(to-r, brand.600, brand.700)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px 0 rgba(0, 102, 255, 0.5)",
                }}
              >
                  Get a Quote
              </Button>
          </Stack>
          
           <IconButton
            display={{ base: 'flex', md: 'none' }}
            ref={btnRef}
            onClick={onOpen}
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            variant="ghost"
            colorScheme="brand"
          />
        </Flex>
      </Container>
      
       <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay backdropFilter="blur(4px)" />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>

          <DrawerBody>
            <Stack spacing={4} mt={4}>
                 <Box 
                   animation={'fadeInUp 0.3s ease-out forwards'}
                   style={{ animationDelay: '0.1s', opacity: 0 }}
                 >
                   <Navlink to="/" onClick={onClose} isActive={location.pathname === '/'}>Home</Navlink>
                 </Box>
                 <Box 
                   animation={'fadeInUp 0.3s ease-out forwards'}
                   style={{ animationDelay: '0.2s', opacity: 0 }}
                 >
                   <Navlink to="/services" onClick={onClose} isActive={location.pathname === '/services'}>Services</Navlink>
                 </Box>
                 <Box 
                   animation={'fadeInUp 0.3s ease-out forwards'}
                   style={{ animationDelay: '0.3s', opacity: 0 }}
                 >
                   <Navlink to="/packages" onClick={onClose} isActive={location.pathname === '/packages'}>Packages</Navlink>
                 </Box>
                 <Box 
                   animation={'fadeInUp 0.3s ease-out forwards'}
                   style={{ animationDelay: '0.4s', opacity: 0 }}
                 >
                   <Navlink to="/about" onClick={onClose} isActive={location.pathname === '/about'}>About Us</Navlink>
                 </Box>
                 <Box 
                   animation={'fadeInUp 0.3s ease-out forwards'}
                   style={{ animationDelay: '0.5s', opacity: 0 }}
                 >
                   <Navlink to="/contact" onClick={onClose} isActive={location.pathname === '/contact'}>Contact</Navlink>
                 </Box>
                 <Box 
                   animation={'fadeInUp 0.3s ease-out forwards'}
                   style={{ animationDelay: '0.6s', opacity: 0 }}
                 >
                   <Button 
                    as={RouterLink} 
                    to="/contact" 
                    colorScheme="brand" 
                    width="full" 
                    onClick={onClose}
                    bgGradient="linear(to-r, brand.500, brand.600)"
                    _hover={{
                      bgGradient: "linear(to-r, brand.600, brand.700)",
                    }}
                  >
                    Get a Quote
                </Button>
                 </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

const Navlink = ({ to, children, isActive, ...props }) => (
    <Text
        as={RouterLink}
        to={to}
        fontWeight={isActive ? "700" : "500"}
        color={isActive ? "brand.500" : "gray.600"}
        position="relative"
        _hover={{ 
          color: 'brand.500', 
          textDecoration: 'none',
        }}
        _after={{
          content: '""',
          position: 'absolute',
          bottom: '-4px',
          left: 0,
          width: isActive ? '100%' : '0%',
          height: '2px',
          bgGradient: 'linear(to-r, brand.500, accent.500)',
          transition: 'width 0.3s ease',
        }}
        sx={{
          '&:hover::after': {
            width: '100%',
          }
        }}
        transition="all 0.3s ease"
        {...props}
    >
        {children}
    </Text>
)

export default Navbar;
