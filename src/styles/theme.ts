import { extendTheme } from '@chakra-ui/react';
import { Button } from './components/Button';

export const theme = extendTheme({
  initialColorMode: 'dark',
  fonts: {
    body: `Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
    xBold: 900,
  },
  colors: {
    blue: {
      '100': '#AB9DFF',
      '200': '#9584FF',
      '300': '#7F6BFF',
      '400': '#6A52FF',
      '500': '#04A2C7',
      '600': '#4730DF',
      '700': '#3B25BF',
      '800': '#2F1C9F',
      '900': '#241480',
    },
    white: {
      '300': '#f7f7f8',
      '200': '#fff',
    },
    gray: {
      '100': '#A6A6A7',
      '200': '#969597',
      '300': '#868587',
      '400': '#767576',
      '500': '#666666',
      '600': '#555456',
      '700': '#454446',
    },
    black: {
      '300': '#1f1f1f',
      '400': '#00082C',
      '500': '#0F0F10',
    },
  },
  components: {
    Button,
  },
});
