import { extendTheme } from '@chakra-ui/react'
import foundations from './foundations'

const direction = 'ltr'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra',
}

export const theme = {
  direction,
  ...foundations,
  config,
  fonts: {
    heading: 'Noto Sans TC',
    body: 'Noto Sans TC',
  },
  colors: {
    brand: {
      100: '#ddffa3',
      300: '#a2e649',
      400: '#85D633',
      500: '#66cc00', // Default GP
      600: '#57AD00',
      700: '#378000',
      900: '#133300',
    },
    gray: {
      100: '#f1f3f5',
      300: '#dee2e6',
      500: '#adb5bd',
      700: '#495057',
      900: '#212529',
    },
    system: {
      error: '#FF3333',
      warning: '#F0AF23',
      success: '#66cc00',
    },
    orange: '#ff8100',
    red: '#ff3333',
    lightblue: '#f4f9fa',
    blue: '#108ee9',
    darkblue: '#292f47',
    campaign: {
      arctic: '#62cbd7',
      health: '#f96d8c',
      climate: '#ffbe00',
      plastics: '#afaa91',
      forests: '#00b474',
      oceans: '#008fe2',
    },
  },
  bgColors: {
    darkblue: '#292f47',
    campaign: {
      arctic: '#62cbd7',
      health: '#f96d8c',
      climate: '#ffbe00',
      plastics: '#afaa91',
      forests: '#00b474',
      oceans: '#008fe2',
    },
    orange: '#ff8100',
  },
}

export default extendTheme(theme)
