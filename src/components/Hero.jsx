import React from 'react';
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
  Box,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Hero() {
  return (
    <Flex
      w={'full'}
      h={'80vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center bottom'}
      position={'relative'}
      overflow={'hidden'}
    >
      {/* Animated Gradient Overlay */}
      <Box
        position={'absolute'}
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient={'linear(to-br, rgba(0, 102, 255, 0.85), rgba(6, 182, 212, 0.75), rgba(16, 185, 129, 0.65))'}
        opacity={0.95}
        zIndex={1}
      />
      
      {/* Subtle Pattern Overlay */}
      <Box
        position={'absolute'}
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage={'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'}
        zIndex={2}
      />

      <VStack
        w={'full'}
        justify={'center'}
        align={'flex-start'}
        px={useBreakpointValue({ base: 6, md: 12 })}
        position={'relative'}
        zIndex={3}
        maxW={'container.xl'}
        mx={'auto'}
      >
        <Stack maxW={'3xl'} align={'flex-start'} spacing={8}>
          <Heading
            color={'white'}
            fontWeight={800}
            lineHeight={1.1}
            fontSize={useBreakpointValue({ base: '4xl', md: '6xl', lg: '7xl' })}
            textShadow={'0 4px 20px rgba(0, 0, 0, 0.3)'}
            letterSpacing={'-0.02em'}
          >
            Powering Your Future With{' '}
            <Text 
              as={'span'} 
              position={'relative'}
              display={'inline-block'}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                right: 0,
                height: '6px',
                bgGradient: 'linear(to-r, secondary.400, accent.400)',
                borderRadius: 'full',
              }}
            >
              Clean Energy
            </Text>
          </Heading>
          
          <Text
            color={'whiteAlpha.900'}
            fontWeight={500}
            lineHeight={1.6}
            fontSize={useBreakpointValue({ base: 'lg', md: 'xl', lg: '2xl' })}
            textShadow={'0 2px 10px rgba(0, 0, 0, 0.2)'}
            maxW={'2xl'}
          >
            Expert solar installations, precision electrical tubing, and comprehensive wiring solutions for modern homes. Sustainable energy meets certified craftsmanship.
          </Text>
          
          <Stack 
            direction={{ base: 'column', sm: 'row' }} 
            spacing={4} 
            pt={4}
            w={{ base: 'full', sm: 'auto' }}
          >
            <Button
              as={RouterLink}
              to="/contact"
              size={'lg'}
              h={'56px'}
              px={8}
              bg={'white'}
              color={'brand.600'}
              rounded={'full'}
              fontWeight={'700'}
              fontSize={'lg'}
              boxShadow={'0 8px 30px rgba(255, 255, 255, 0.3)'}
              _hover={{ 
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 40px rgba(255, 255, 255, 0.4)',
                bg: 'whiteAlpha.900',
              }}
              _active={{
                transform: 'translateY(-2px)',
              }}
              transition={'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'}
            >
              Get a Free Quote
            </Button>
            
            <Button
              as={RouterLink}
              to="/services"
              size={'lg'}
              h={'56px'}
              px={8}
              bg={'whiteAlpha.200'}
              color={'white'}
              rounded={'full'}
              fontWeight={'600'}
              fontSize={'lg'}
              border={'2px solid'}
              borderColor={'whiteAlpha.400'}
              backdropFilter={'blur(10px)'}
              _hover={{ 
                bg: 'whiteAlpha.300',
                borderColor: 'whiteAlpha.600',
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 40px rgba(255, 255, 255, 0.2)',
              }}
              _active={{
                transform: 'translateY(-2px)',
              }}
              transition={'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'}
            >
              Our Services
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
