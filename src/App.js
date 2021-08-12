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
                <Stack direction="column">
                  {/* <Text fontSize={'24px'} fontWeight={500} color='gray.700'>急需你參與「管制即棄膠餐具計劃」公眾諮詢</Text> */}
                  <Image src={`${process.env.PUBLIC_URL}/assets/20210805_RDPT_KV-02.png`}/><br/>
                  <Countdown/>
                </Stack>
              </Center>
            </Box>
            <Box w="100%" h="80vh" bg="#F5F5F5" position={'relative'}>
              <Center>
                <Box maxW={'640px'}>
                  <Box px={4} pb={12}>
                    <Text fontSize={'36px'} fontWeight={500}>加速香港禁膠餐具 <Text as={'span'} fontSize={'72px'} fontWeight={700}><i>3</i> </Text>步完成</Text> 
                    <Text>急需你參與「管制即棄膠餐具計劃」公眾諮詢</Text>
                  </Box>
                  <Form/>
                </Box>
              </Center>
              <Box pos={'absolute'} bottom={0} right={0} p={6}>
                <Stack direction="row" color={'gray.500'} alignItems={'center'}>
                  <Box>步驟</Box>
                  <Box bgColor={'green.300'} w={'40px'} h={'40px'} borderRadius={'50%'} fontWeight={700} fontSize={18} color="#FFF" textAlign={'center'} fontFamily={'arial'} lineHeight={'40px'}>1</Box>
                  <Box fontFamily={'arial'}>2</Box>
                  <Box fontFamily={'arial'}>3</Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
          </Box>
        <Box>
          <Testimonials />
        </Box>
        {/* <SplitWithImage />
        <GridListWithHeading /> */}
        <Footer>
          <LargeWithLogoLeft />
          <SmallWithSocial />
        </Footer>
      </HelmetProvider>
    </ChakraProvider>
  )
}

export default App
