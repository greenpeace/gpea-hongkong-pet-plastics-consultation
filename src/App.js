import React from 'react'
import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { HelmetProvider } from 'react-helmet-async'
import Sticky from 'react-sticky-el'
import SEO from './components/SEO/SEO'
import theme from './theme'
import Form from './components/form'

import Nav from './components/Nav'
import Countdown from './components/Countdown'
import HeroSection from './components/Hero'
import Testimonials from './components/Testimonials'
import SplitWithImage from './components/SplitWithImage/SplitWithImage'
import CallToActionWithIllustration from './components/CTA/CallToActionWithIllustration'
import LargeWithLogoLeft from './components/Footer/LargeWithLogoLeft'
import SmallWithSocial from './components/Footer/SmallWithSocial'

// import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri'

const Footer = styled.footer`
  font-size: 0.85rem;
`

const App = (props) => {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <HelmetProvider>
        <SEO />
        <Nav />
        <HeroSection/>
        {/* <Box>
          <Testimonials />
        </Box>
        <Box>
          <SplitWithImage />
        </Box>
        <Box>
          <CallToActionWithIllustration />
        </Box>
        <Footer>
          <LargeWithLogoLeft />
          <SmallWithSocial />
        </Footer> */}
      </HelmetProvider>
    </ChakraProvider>
  )
}

export default App
