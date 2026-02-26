import React from 'react';
import { Box, Flex, Icon, Button } from '@chakra-ui/react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const FloatingContactButton = () => {
  return (
    <Flex
      position="fixed"
      bottom={6}
      right={6}
      zIndex={1000}
      gap={3}
      display={{ base: "flex", lg: "none" }}
    >
      {/* Phone Button */}
      <Button
        as="a"
        href="tel:+263775088760"
        colorScheme="brand"
        size="lg"
        rounded="full"
        boxShadow="0 4px 20px rgba(27, 58, 95, 0.4)"
        _hover={{
          transform: 'scale(1.1)',
          boxShadow: '0 6px 25px rgba(27, 58, 95, 0.5)',
        }}
        transition="all 0.3s ease"
      >
        <Icon as={FaPhone} w={5} h={5} />
      </Button>

      {/* WhatsApp Button */}
      <Button
        as="a"
        href="https://wa.me/263775088760"
        target="_blank"
        rel="noopener noreferrer"
        bg="#25D366"
        color="white"
        size="lg"
        rounded="full"
        boxShadow="0 4px 20px rgba(37, 211, 102, 0.4)"
        _hover={{
          transform: 'scale(1.1)',
          bg: '#20BD5A',
          boxShadow: '0 6px 25px rgba(37, 211, 102, 0.5)',
        }}
        transition="all 0.3s ease"
      >
        <Icon as={FaWhatsapp} w={5} h={5} />
      </Button>
    </Flex>
  );
};

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box flex="1">
        {children}
      </Box>
      <Footer />
      <ScrollToTop />
      <FloatingContactButton />
    </Box>
  );
};

export default Layout;
