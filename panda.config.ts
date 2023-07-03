import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Enable JSX
  jsxFramework: 'react',

  // Where to look for your css declarations
  include: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/app/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      sizes: {
        header: { value: '94px', description: 'The height of the header' },
        headerContent: {
          value: '72px',
          description: 'The height of the header content container',
        },
        headerDecoration: {
          value: '24px',
          description: 'The height of the header decorations',
        },
        container: {
          value: '1200px',
          description: 'The width of the main container',
        },
      },
      colors: {
        uspDarkCyan: { value: '#1094AB', description: 'The classic USP dark cyan color' },
        uspLightCyan: { value: '#00C5D4', description: 'The classic USP light cyan color' },
        uspYellow: { value: '#FFB500', description: 'The classic USP yellow color' },
      },
    },
    semanticTokens: {
      spacing: {
        header: { value: '{sizes.header}', description: 'The height of the header' },
      },
    },
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
