import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#e6eef7',
    100: '#b3d0e8',
    200: '#80b1d9',
    300: '#4d93ca',
    400: '#2a6fa8',
    500: '#1B3A5F', // Navy Blue - Primary (from banner)
    600: '#162f4d',
    700: '#11243a',
    800: '#0c1928',
    900: '#060d15',
  },
  secondary: {
    50: '#fff5e6',
    100: '#ffe0b3',
    200: '#ffca80',
    300: '#ffb54d',
    400: '#ffa01a',
    500: '#FF8C00', // Vibrant Orange - Accent (from banner)
    600: '#cc7000',
    700: '#995400',
    800: '#663800',
    900: '#331c00',
  },
  accent: {
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
        bg: 'gray.50',
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 2L3 14h9l-1 8 10-12h-9l1-8z' fill='%231B3A5F' fill-opacity='0.1'/%3E%3C/svg%3E"),
          radial-gradient(at 0% 0%, rgba(27, 58, 95, 0.05) 0px, transparent 50%),
          radial-gradient(at 100% 0%, rgba(255, 140, 0, 0.05) 0px, transparent 50%),
          radial-gradient(at 100% 100%, rgba(16, 185, 129, 0.05) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(27, 58, 95, 0.05) 0px, transparent 50%)
        `,
        backgroundSize: '120px 120px, 100% 100%, 100% 100%, 100% 100%, 100% 100%',
        backgroundAttachment: 'fixed',
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
