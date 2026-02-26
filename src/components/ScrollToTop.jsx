import React, { useState, useEffect } from 'react';
import { IconButton, Box } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check if near footer to hide the button on mobile
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const footerThreshold = documentHeight - 200; // 200px before footer

      if (scrollPosition > footerThreshold) {
        setIsNearFooter(true);
      } else {
        setIsNearFooter(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', toggleVisibility);
    toggleVisibility(); // Check on mount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Don't render on mobile when near footer
  const shouldHide = isNearFooter;

  return (
    <Box
      position={'fixed'}
      bottom={{ base: shouldHide ? '-100px' : '80px', md: '30px' }}
      left={{ base: '20px', md: '30px' }}
      right="auto"
      zIndex={999}
      opacity={isVisible && !shouldHide ? 1 : 0}
      transform={isVisible && !shouldHide ? 'translateY(0)' : 'translateY(20px)'}
      transition={'all 0.3s ease'}
      pointerEvents={isVisible && !shouldHide ? 'auto' : 'none'}
    >
      <IconButton
        aria-label="Scroll to top"
        icon={<FaArrowUp />}
        onClick={scrollToTop}
        size="sm"
        colorScheme={'brand'}
        rounded={'full'}
        boxShadow={'0 4px 20px rgba(27, 58, 95, 0.3)'}
        bgGradient={'linear(to-br, brand.500, brand.600)'}
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: '0 6px 30px rgba(27, 58, 95, 0.4)',
        }}
        _active={{
          transform: 'translateY(-2px)',
        }}
        transition={'all 0.3s ease'}
      />
    </Box>
  );
};

export default ScrollToTop;
