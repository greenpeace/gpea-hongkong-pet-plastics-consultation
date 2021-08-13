import React from 'react'
import {
  ChakraProvider,
  Box,
  Center,
  Heading,
  Image,
  Stack,
  Grid,
  Text,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { HelmetProvider } from 'react-helmet-async'
import Sticky from 'react-sticky-el'
import SEO from './components/SEO/SEO'
import theme from './theme'
import Form from './components/form'

import Nav from './components/Nav'
import Countdown from './components/Countdown'
import Testimonials from './components/Testimonials'
import SplitWithImage from './components/SplitWithImage/SplitWithImage'
import LargeWithLogoLeft from './components/Footer/LargeWithLogoLeft'
import SmallWithSocial from './components/Footer/SmallWithSocial'

import '@fontsource/noto-sans-tc'

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
  width: 80%;
  height: 80%;
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
        <Box className={'hero'}>
          <Grid templateColumns='repeat(2, 1fr)'>
            <Box>
              <Center h={'100%'}>
                <Stack direction='column'>
                  <Center h={'80vh'}>
                    <Stack
                      as={Box}
                      h={'100%'}
                      spacing={6}
                      py={{ base: 8, md: 12 }}
                      px={4}
                      position={'relative'}
                      alignItems={'flex-start'}
                    >
                      <Countdown />
                      <Heading
                        fontSize={{ base: '2xl', sm: '4xl' }}
                        lineHeight={'130%'}
                      >
                        <Text mb={1} fontSize={{ base: '5xl' }}>
                          急需您的參與
                        </Text>
                        <Text color={'#ff8100'} fontWeight={'700'}>
                          管制即棄膠餐具計劃
                        </Text>
                        <Text>公眾諮詢</Text>
                      </Heading>
                      <Text color={'gray.700'} lineHeight={'200%'}>
                        環保署已經展開「管制即棄膠餐具計劃」公眾諮詢，截止日期為9月8日。立即行動填妥綠色和平網站表格，參與公眾諮詢，推動香港走塑進程！
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
                      alignItems={'flex-start'}
                    >
                      <Heading
                        fontWeight={'bold'}
                        fontSize={{ base: '2xl', sm: '4xl' }}
                        lineHeight={'120%'}
                      >
                        <Text>電郵您的意見書範本</Text>
                      </Heading>
                      <Text color={'gray.700'} lineHeight={'200%'}>
                        開啟你的電子郵箱，打開由綠色和平發出，附有意見書範本的電郵。轉寄該電郵，在「收件人」一欄輸入rdpt@epd.gov.hk，按下發送。
                      </Text>
                      <ForkWrapper>
                        <Image src={Fork} objectFit='contain' />
                      </ForkWrapper>
                    </Stack>
                  </Center>
                  <Image
                    src={`${process.env.PUBLIC_URL}/assets/20210805_RDPT_KV-02.png`}
                    maxW={'480px'}
                  />
                  <br />
                  <Image
                    src={`${process.env.PUBLIC_URL}/assets/20210805_RDPT_KV-02.png`}
                    maxW={'480px'}
                  />
                </Stack>
              </Center>
            </Box>
            <Box
              w='100%'
              h='100%'
              bg='#F5F5F5'
              position={'relative'}
              className='rightBlock'
            >
              <Sticky
                stickyStyle={{ zIndex: 10 }}
                bottomOffset={20}
                boundaryElement='.rightBlock'
                hideOnBoundaryHit={false}
              >
                <Stack alignItems={'center'}>
                  <Form />
                </Stack>
              </Sticky>
            </Box>
          </Grid>
        </Box>
        <Box>
          <Testimonials />
        </Box>
        <SplitWithImage />
        <Footer>
          <LargeWithLogoLeft />
          <SmallWithSocial />
        </Footer>
      </HelmetProvider>
    </ChakraProvider>
  )
}

export default App
