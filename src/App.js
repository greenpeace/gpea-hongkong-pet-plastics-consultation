import React from 'react'
import {
  ChakraProvider,
  Box,
  VStack,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Grid, 
  GridItem
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { HelmetProvider } from 'react-helmet-async'
import SEO from './components/seo'
import theme from './theme'
import Form from './components/form'

import Nav from './components/Nav'
import Countdown from './components/Countdown'
import Testimonials from './components/Testimonials'
import SplitWithImage from './components/SplitWithImage/SplitWithImage'
import GridListWithHeading from './components/GridList/GridListWithHeading'
import LargeWithLogoLeft from './components/Footer/LargeWithLogoLeft'
import SmallWithSocial from './components/Footer/SmallWithSocial'

import '@fontsource/noto-sans-tc'
import './notosans-regular-normal.js'

const Footer = styled.footer`
  font-size: 0.85rem;
`

const App = (props) => {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <HelmetProvider>
        <SEO />
        <Nav/>
          <Box className={'hero'}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Box w="100%">
              <Center h={'100%'}>
                <Box px={20}>
                資料請求（無料でお届け）<br/><br/>
                ホームページだけではわからない学校の想いや、<br/>
                詳しい情報が掲載されているパンフレットをお届けします。<br/>
                必要事項をご入力の上、確認画面へお進みください。
                </Box>
              </Center>
            </Box>
            <Box w="100%" h="80vh" bg="#F5F5F5">
              <Center h={'100%'}>
                <Box maxW={'640px'}>
                  <Form/>
                </Box>
              </Center>
            </Box>
          </Grid>
          </Box>
        <Box>
          <Testimonials />
        </Box>
        <SplitWithImage />
        <GridListWithHeading />
        <Footer>
          <LargeWithLogoLeft />
          <SmallWithSocial />
        </Footer>
      </HelmetProvider>
    </ChakraProvider>
  )
}

export default App
