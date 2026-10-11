import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true
};

const theme = extendTheme({
  config,
  fonts: {
    heading: '"Instrument Sans", system-ui, sans-serif',
    body: '"Instrument Sans", system-ui, sans-serif',
    mono: '"IBM Plex Mono", ui-monospace, monospace'
  },
  colors: {
    brand: {
      50: '#FFF8EB',
      100: '#FFEECC',
      200: '#FFD999',
      300: '#FFC266',
      400: '#F5A623',
      500: '#E89412',
      600: '#C47A0E',
      700: '#9A610C',
      800: '#6D4509',
      900: '#3D2705'
    },
    ink: {
      50: '#F4F4F5',
      100: '#E4E4E7',
      200: '#D4D4D8',
      300: '#A1A1AA',
      400: '#71717A',
      500: '#52525B',
      600: '#3F3F46',
      700: '#27272A',
      800: '#18181B',
      900: '#0B0C0F'
    }
  },
  radii: {
    xl: '1rem',
    '2xl': '1.25rem'
  },
  shadows: {
    card: '0 1px 0 rgba(255,255,255,0.06) inset, 0 12px 40px rgba(0,0,0,0.35)',
    cardLight: '0 1px 0 rgba(0,0,0,0.04) inset, 0 10px 40px rgba(15, 23, 42, 0.08)'
  },
  components: {
    Button: {
      variants: {
        accent: {
          bg: 'brand.500',
          color: 'ink.900',
          fontWeight: '600',
          _hover: {
            bg: 'brand.400',
            _disabled: { bg: 'brand.500' }
          },
          _active: { bg: 'brand.600' }
        }
      }
    },
    Link: {
      baseStyle: {
        color: 'brand.400',
        _hover: { textDecoration: 'none', color: 'brand.300' }
      }
    }
  },
  styles: {
    global: (props) => ({
      html: {
        overflowX: 'hidden',
        // Avoid 100vw + scrollbar horizontal overflow on some layouts
        width: '100%'
      },
      'html, body': {
        minHeight: '100%',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      },
      body: {
        overflowX: 'hidden',
        width: '100%',
        position: 'relative',
        paddingLeft: 'env(safe-area-inset-left, 0px)',
        paddingRight: 'env(safe-area-inset-right, 0px)',
        bg: props.colorMode === 'dark' ? 'ink.900' : 'ink.50',
        color: props.colorMode === 'dark' ? 'ink.100' : 'ink.800'
      },
      '::selection': {
        bg: 'brand.500',
        color: 'ink.900'
      }
    })
  }
});

export default theme;
