import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#f0f5fa',
    100: '#d1e1f0',
    200: '#a3c3e1',
    300: '#75a5d2',
    400: '#4787c3',
    500: '#1B3A5F', // Deep Navy - Primary
    600: '#162e4c',
    700: '#102339',
    800: '#0b1726',
    900: '#050c13',
  },
  secondary: {
    50: '#fff9eb',
    100: '#ffefc7',
    200: '#ffe08f',
    300: '#ffd057',
    400: '#ffc11f',
    500: '#F5A623', // Golden Yellow - Accent
    600: '#c4851c',
    700: '#936415',
    800: '#62420e',
    900: '#312107',
  },
  accent: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10B981', // Emerald Green - Sustainability
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
        color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
        transition: 'background-color 0.2s ease',
      },
      '*': {
        scrollBehavior: 'smooth',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '600',
        borderRadius: 'full',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      variants: {
        solid: (props) => ({
          bg: props.colorScheme === 'brand' ? 'brand.500' : props.colorScheme === 'secondary' ? 'secondary.500' : undefined,
          color: 'white',
          boxShadow: props.colorScheme === 'brand' ? '0 4px 14px 0 rgba(27, 58, 95, 0.39)' : props.colorScheme === 'secondary' ? '0 4px 14px 0 rgba(255, 140, 0, 0.39)' : undefined,
          _hover: {
            bg: props.colorScheme === 'brand' ? 'brand.600' : props.colorScheme === 'secondary' ? 'secondary.600' : undefined,
            transform: 'translateY(-2px)',
            boxShadow: props.colorScheme === 'brand' ? '0 6px 20px 0 rgba(27, 58, 95, 0.5)' : props.colorScheme === 'secondary' ? '0 6px 20px 0 rgba(255, 140, 0, 0.5)' : 'lg',
          },
          _active: {
            transform: 'translateY(0)',
          },
        }),
        outline: (props) => ({
          borderColor: props.colorScheme === 'brand' ? 'brand.500' : props.colorScheme === 'secondary' ? 'secondary.500' : undefined,
          color: props.colorScheme === 'brand' ? 'brand.500' : props.colorScheme === 'secondary' ? 'secondary.500' : undefined,
          borderWidth: '2px',
          _hover: {
            bg: props.colorScheme === 'brand' ? 'brand.50' : props.colorScheme === 'secondary' ? 'secondary.50' : undefined,
            transform: 'translateY(-2px)',
          },
        }),
      },
      sizes: {
        lg: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: 'xl',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '700',
        letterSpacing: '-0.02em',
      },
    },
  },
  shadows: {
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
    'glass-lg': '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
    glow: '0 0 20px rgba(27, 58, 95, 0.4)',
    'glow-orange': '0 0 20px rgba(255, 140, 0, 0.4)',
    'glow-green': '0 0 20px rgba(16, 185, 129, 0.4)',
  },
});

export default theme;
