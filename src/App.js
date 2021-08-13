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
import CallToActionWithIllustration from './components/CTA/CallToActionWithIllustration'
import LargeWithLogoLeft from './components/Footer/LargeWithLogoLeft'
import SmallWithSocial from './components/Footer/SmallWithSocial'

import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri'

import Fork from './assets/images/20210805_RDPT_KV-03.png'

const Footer = styled.footer`
  font-size: 0.85rem;
`

const FixedCountdown = styled.div`
  z-index: 1;
  position: fixed;
  color: #fff;
  background-color: #292f47;
  padding: 4px 20px;
  border-radius: 0px 24px 24px 0px;
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
                <Stack direction='column' position={'relative'}>
                  <FixedCountdown>
                    <Countdown />
                  </FixedCountdown>
                  <Center h={'75vh'}>
                    <Stack
                      as={Box}
                      h={'100%'}
                      spacing={6}
                      py={12}
                      px={8}
                      position={'relative'}
                      alignItems={'flex-start'}
                      maxW={'2xl'}
                    >
                      <Heading
                        fontSize={{ base: '2xl', sm: '4xl' }}
                        letterSpacing={'5%'}
                        lineHeight={'130%'}
                      >
                        <Text fontWeight={'300'} fontSize={{ base: '4xl' }}>
                          急需您的參與
                        </Text>
                        <Text
                          mt={1}
                          mb={2}
                          color={'#ff8100'}
                          fontSize={{ base: '5xl' }}
                          fontWeight={'700'}
                        >
                          管制即棄膠餐具計劃
                        </Text>
                        <Text fontWeight={'300'}>公眾諮詢</Text>
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
                      py={12}
                      px={8}
                      position={'relative'}
                      alignItems={'flex-start'}
                      maxW={'2xl'}
                    >
                      <Heading
                        fontSize={{ base: '2xl', sm: '4xl' }}
                        letterSpacing={'5%'}
                        lineHeight={'130%'}
                      >
                        <Text fontWeight={'300'} fontSize={{ base: '4xl' }}>
                          急需您的參與
                        </Text>
                        <Text
                          mt={1}
                          mb={2}
                          color={'#ff8100'}
                          fontSize={{ base: '5xl' }}
                          fontWeight={'700'}
                        >
                          管制即棄膠餐具計劃
                        </Text>
                        <Text fontWeight={'300'}>公眾諮詢</Text>
                      </Heading>
                      <Text color={'gray.700'} lineHeight={'200%'}>
                        環保署已經展開「管制即棄膠餐具計劃」公眾諮詢，截止日期為9月8日。立即行動填妥綠色和平網站表格，參與公眾諮詢，推動香港走塑進程！
                      </Text>
                      <ForkWrapper>
                        <Image src={Fork} objectFit='contain' />
                      </ForkWrapper>
                    </Stack>
                  </Center>
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
                <Stack alignItems={'center'} justifyContent={'center'}>
                  <Box maxW={'2xl'} p={4}>
                    <Form />
                  </Box>
                </Stack>
              </Sticky>
            </Box>
          </Grid>
        </Box>
        <Box>
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
        </Footer>
      </HelmetProvider>
    </ChakraProvider>
  )
}

export default App
