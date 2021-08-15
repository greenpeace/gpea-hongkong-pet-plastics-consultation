import React, { useRef } from 'react'
import { ChakraProvider, Box} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { HelmetProvider } from 'react-helmet-async'
import SEO from './components/SEO/SEO'
import theme from './theme'
import Nav from './components/Nav'
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

const App = () => {
  const imageSection = useRef()
  const illustrationSection = useRef()
  const testimonials = useRef()

  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <HelmetProvider>
        <SEO />
        <Nav imageSection={imageSection} illustrationSection={illustrationSection} testimonials={testimonials}/>
        <HeroSection/>
        <Box ref={testimonials}>
          <Testimonials/>
        </Box>
        <Box ref={imageSection}>
          <SplitWithImage />
        </Box>
        <Box ref={illustrationSection}>
          <CallToActionWithIllustration />
        </Box>
        <Footer>
          <LargeWithLogoLeft />
          <SmallWithSocial />
        </Footer>
      </HelmetProvider>
    </ChakraProvider>
  )
}

export default App
