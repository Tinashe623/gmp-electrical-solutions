import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#e6f2ff',
    100: '#b3d9ff',
    200: '#80bfff',
    300: '#4da6ff',
    400: '#1a8cff',
    500: '#0066FF', // Electric Blue - Primary
    600: '#0052cc',
    700: '#003d99',
    800: '#002966',
    900: '#001433',
  },
  secondary: {
    50: '#e6fef4',
    100: '#b3fce0',
    200: '#80facc',
    300: '#4df8b8',
    400: '#1af6a4',
    500: '#10B981', // Vibrant Green - Sustainability
    600: '#0d9467',
    700: '#0a6f4d',
    800: '#064a33',
    900: '#03251a',
  },
  accent: {
    50: '#e6fbfe',
    100: '#b3f4fc',
    200: '#80edf9',
    300: '#4de6f7',
    400: '#1adff5',
    500: '#06B6D4', // Bright Cyan - Modern Tech
    600: '#0592aa',
    700: '#046d7f',
    800: '#024955',
    900: '#01242a',
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Outfit', 'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
      '*': {
        scrollBehavior: 'smooth',
      },
    },
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
          bg: props.colorScheme === 'brand' ? 'brand.500' : undefined,
          color: props.colorScheme === 'brand' ? 'white' : undefined,
          boxShadow: props.colorScheme === 'brand' ? '0 4px 14px 0 rgba(0, 102, 255, 0.39)' : undefined,
          _hover: {
            bg: props.colorScheme === 'brand' ? 'brand.600' : undefined,
            transform: 'translateY(-2px)',
            boxShadow: props.colorScheme === 'brand' ? '0 6px 20px 0 rgba(0, 102, 255, 0.5)' : 'lg',
          },
          _active: {
            transform: 'translateY(0)',
          },
        }),
        outline: (props) => ({
          borderColor: props.colorScheme === 'brand' ? 'brand.500' : undefined,
          color: props.colorScheme === 'brand' ? 'brand.500' : undefined,
          borderWidth: '2px',
          _hover: {
            bg: props.colorScheme === 'brand' ? 'brand.50' : undefined,
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
    glow: '0 0 20px rgba(0, 102, 255, 0.4)',
    'glow-green': '0 0 20px rgba(16, 185, 129, 0.4)',
  },
});

export default theme;
