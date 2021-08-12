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
  GridItem,
  Text,
  Divider,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { HelmetProvider } from 'react-helmet-async'
import Sticky from 'react-sticky-el';
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

const rightBottomCorner = {
  bottom: "0px",
  right: "-30px",
  borderBottom: "800px solid #F5F5F5",
  borderLeft: "120px solid transparent",
};

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
          <Grid templateColumns="repeat(2, 1fr)" gap={6} overflow={'hidden'}>
            <Box w="100%" pos="relative">
              <Center h={'100%'}>
                <Stack direction="column">
                  {/* <Text fontSize={'24px'} fontWeight={500} color='gray.700'>急需你參與「管制即棄膠餐具計劃」公眾諮詢</Text> */}
                  <Countdown/>
                  <Image src={`${process.env.PUBLIC_URL}/assets/20210805_RDPT_KV-02.png`} maxW={'480px'}/><br/>
                  <Image src={`${process.env.PUBLIC_URL}/assets/20210805_RDPT_KV-02.png`} maxW={'480px'}/><br/>
                  <Image src={`${process.env.PUBLIC_URL}/assets/20210805_RDPT_KV-02.png`} maxW={'480px'}/><br/>
                  <Image src={`${process.env.PUBLIC_URL}/assets/20210805_RDPT_KV-02.png`} maxW={'480px'}/><br/>
                  <Image src={`${process.env.PUBLIC_URL}/assets/20210805_RDPT_KV-02.png`} maxW={'480px'}/><br/>
                </Stack>
              </Center>
            </Box>
            <Box w="100%" h="100%" bg="#F5F5F5" position={'relative'} className="rightBlock">
              <Sticky stickyStyle={{zIndex: 10}} bottomOffset={20} boundaryElement=".rightBlock" hideOnBoundaryHit={false}>
                <Box px={{base: 0, sm: 20}}>
                <Form/>
                </Box>
              </Sticky>
              {/* <Center>
                <Box maxW={'540px'} pos={'relative'}>
                  <Box>
                  
                  </Box>
                </Box>
              </Center> */}
              {/* <Box pos={'absolute'} bottom={0} right={0} p={6}>
                <Stack direction="row" color={'gray.500'} alignItems={'center'}>
                  <Box>步驟</Box>
                  <Box bgColor={'green.300'} w={'40px'} h={'40px'} borderRadius={'50%'} fontWeight={700} fontSize={18} color="#FFF" textAlign={'center'} fontFamily={'arial'} lineHeight={'40px'}>1</Box>
                  <Box fontFamily={'arial'}>2</Box>
                  <Box fontFamily={'arial'}>3</Box>
                </Stack>
              </Box> */}
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
