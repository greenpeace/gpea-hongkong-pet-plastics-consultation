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
  Text,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { HelmetProvider } from 'react-helmet-async'
import SEO from './components/SEO/SEO'
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

import Fork from './assets/images/20210805_RDPT_KV-03.png'

const rightBottomCorner = {
  bottom: '0px',
  right: '-30px',
  borderBottom: '800px solid #F5F5F5',
  borderLeft: '120px solid transparent',
}

const Footer = styled.footer`
  font-size: 0.85rem;
`

const ForkWrapper = styled.div`
  z-index: -1;
  position: absolute;
  right: -20%;
  bottom: -20%;
  width: 500px;
  height: 500px;
  > img {
    opacity: 0.5;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`

const App = (props) => {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <HelmetProvider>
        <SEO />
        <Nav />
        <Box className={'hero'} position={'relative'}>
          <Grid templateColumns='repeat(2, 1fr)'>
            <Stack>
              <Center h={'80vh'}>
                <Stack
                  as={Box}
                  h={'100%'}
                  spacing={6}
                  py={{ base: 8, md: 12 }}
                  px={4}
                  position={'relative'}
                >
                  <Countdown />
                  <Heading
                    fontWeight={'bold'}
                    fontSize={{ base: '3xl', sm: '5xl' }}
                    lineHeight={'120%'}
                  >
                    <Text>急需您的參與</Text>
                    <Text color={'#ff8100'}>管制即棄膠餐具計劃</Text>
                    <Text>公眾諮詢</Text>
                  </Heading>
                  <Text color={'gray.700'} lineHeight={'220%'}>
                    環保署已經展開「管制即棄膠餐具計劃」公眾諮詢，截止日期為9月8日。
                    <br />
                    立即行動填妥綠色和平網站表格，參與公眾諮詢，推動香港走塑進程！
                  </Text>
                  <ForkWrapper>
                    <Image src={Fork} objectFit='contain' />
                  </ForkWrapper>
                </Stack>
              </Center>
              <Center h={'80vh'}>
                <Stack
                  as={Box}
                  h={'100%'}
                  spacing={6}
                  py={{ base: 8, md: 12 }}
                  px={4}
                  position={'relative'}
                >
                  <Countdown />
                  <Heading
                    fontWeight={'bold'}
                    fontSize={{ base: '3xl', sm: '5xl' }}
                    lineHeight={'120%'}
                  >
                    <Text>急需您的參與</Text>
                    <Text color={'#ff8100'}>管制即棄膠餐具計劃</Text>
                    <Text>公眾諮詢</Text>
                  </Heading>
                  <Text color={'gray.700'} lineHeight={'220%'}>
                    環保署已經展開「管制即棄膠餐具計劃」公眾諮詢，截止日期為9月8日。
                    <br />
                    立即行動填妥綠色和平網站表格，參與公眾諮詢，推動香港走塑進程！
                  </Text>
                  <ForkWrapper>
                    <Image src={Fork} objectFit='contain' />
                  </ForkWrapper>
                </Stack>
              </Center>
            </Stack>
            <Box w='100%' h='100vh' bg='#F5F5F5' position={'sticky'} top='0'>
              <Center>
                <Box maxW={'540px'}>
                  <Form />
                </Box>
              </Center>
              <Box pos={'absolute'} bottom={0} right={0} p={6}>
                <Stack direction='row' color={'gray.500'} alignItems={'center'}>
                  <Box>步驟</Box>
                  <Box
                    bgColor={'green.300'}
                    w={'40px'}
                    h={'40px'}
                    borderRadius={'50%'}
                    fontWeight={700}
                    fontSize={18}
                    color='#FFF'
                    textAlign={'center'}
                    fontFamily={'arial'}
                    lineHeight={'40px'}
                  >
                    1
                  </Box>
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
