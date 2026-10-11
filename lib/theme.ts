import { createSystem, defaultConfig, defineConfig, defineRecipe } from '@chakra-ui/react';

const button = defineRecipe({
  variants: {
    variant: {
      accent: {
        bg: 'brand.500',
        color: 'ink.900',
        fontWeight: '600',
        _hover: { bg: 'brand.400' },
        _active: { bg: 'brand.600' },
        _disabled: { bg: 'brand.500' }
      }
    }
  }
});

const link = defineRecipe({
  base: {
    color: 'brand.400',
    _hover: { textDecoration: 'none', color: 'brand.300' }
  }
});

const config = defineConfig({
  globalCss: {
    html: {
      overflowX: 'hidden',
      // Avoid 100vw + scrollbar horizontal overflow on some layouts
      width: '100%'
    },
    'html, body': {
      minHeight: '100%'
    },
    body: {
      overflowX: 'hidden',
      width: '100%',
      position: 'relative',
      paddingLeft: 'env(safe-area-inset-left, 0px)',
      paddingRight: 'env(safe-area-inset-right, 0px)',
      bg: 'site.page',
      color: 'site.text'
    },
    '::selection': {
      bg: 'brand.500',
      color: 'ink.900'
    }
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'var(--font-instrument), system-ui, sans-serif' },
        body: { value: 'var(--font-instrument), system-ui, sans-serif' },
        mono: { value: 'var(--font-plex-mono), ui-monospace, monospace' }
      },
      colors: {
        brand: {
          50: { value: '#FFF8EB' },
          100: { value: '#FFEECC' },
          200: { value: '#FFD999' },
          300: { value: '#FFC266' },
          400: { value: '#F5A623' },
          500: { value: '#E89412' },
          600: { value: '#C47A0E' },
          700: { value: '#9A610C' },
          800: { value: '#6D4509' },
          900: { value: '#3D2705' }
        },
        ink: {
          50: { value: '#F4F4F5' },
          100: { value: '#E4E4E7' },
          200: { value: '#D4D4D8' },
          300: { value: '#A1A1AA' },
          400: { value: '#71717A' },
          500: { value: '#52525B' },
          600: { value: '#3F3F46' },
          700: { value: '#27272A' },
          800: { value: '#18181B' },
          900: { value: '#0B0C0F' }
        },
        tomato: {
          300: { value: '#FF8A75' },
          400: { value: '#FF6347' },
          500: { value: '#E5533A' }
        }
      },
      radii: {
        xl: { value: '1rem' },
        '2xl': { value: '1.25rem' }
      },
      shadows: {
        card: { value: '0 1px 0 rgba(255,255,255,0.06) inset, 0 12px 40px rgba(0,0,0,0.35)' },
        cardLight: {
          value: '0 1px 0 rgba(0,0,0,0.04) inset, 0 10px 40px rgba(15, 23, 42, 0.08)'
        }
      }
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: '{colors.brand.500}' },
          contrast: { value: '{colors.ink.900}' },
          fg: { value: { _light: '{colors.brand.600}', _dark: '{colors.brand.400}' } },
          muted: { value: '{colors.brand.200}' },
          subtle: { value: { _light: '{colors.brand.50}', _dark: '{colors.brand.900}' } },
          emphasized: { value: '{colors.brand.300}' },
          focusRing: { value: '{colors.brand.500}' }
        },
        site: {
          page: { value: { _light: '{colors.ink.50}', _dark: '{colors.ink.900}' } },
          text: { value: { _light: '{colors.ink.800}', _dark: '{colors.ink.100}' } },
          subtext: { value: { _light: '{colors.ink.600}', _dark: '{colors.ink.300}' } },
          faint: { value: { _light: '{colors.ink.500}', _dark: '{colors.ink.400}' } },
          strong: { value: { _light: '{colors.ink.800}', _dark: '{colors.ink.50}' } },
          strongest: { value: { _light: '{colors.ink.900}', _dark: '{colors.ink.50}' } },
          card: { value: { _light: 'white', _dark: '{colors.ink.800}' } },
          glass: { value: { _light: 'white', _dark: 'rgba(24, 24, 27, 0.72)' } },
          header: {
            value: { _light: 'rgba(250, 250, 248, 0.85)', _dark: 'rgba(11, 12, 15, 0.85)' }
          },
          line: { value: { _light: '{colors.blackAlpha.100}', _dark: '{colors.whiteAlpha.100}' } },
          hover: { value: { _light: '{colors.blackAlpha.50}', _dark: '{colors.whiteAlpha.100}' } },
          tagBg: { value: { _light: '{colors.ink.100}', _dark: '{colors.whiteAlpha.100}' } },
          tagFg: { value: { _light: '{colors.ink.700}', _dark: '{colors.ink.200}' } },
          navActive: { value: { _light: '{colors.brand.600}', _dark: '{colors.brand.300}' } }
        }
      }
    },
    recipes: {
      button,
      link
    }
  }
});

const system = createSystem(defaultConfig, config);

export default system;
