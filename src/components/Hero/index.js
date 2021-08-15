import React from 'react'
import {
  Box,
  Center,
  Heading,
  Image,
  Stack,
  Grid,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Sticky from 'react-sticky-el'
import Form from '../../components/form'
import Countdown from '../../components/Countdown'

import Fork from '../../assets/images/20200813_rdpt_web_layout-02.png'

const TabItem = styled.div`
  height : calc(20vh - 60px);
  background-color: #292f47;
`

const FixedCountdown = styled.div`
  z-index: 1;
  position: fixed;
  color: #fff;
  background-color: #292f47;
  padding: 8px 20px;
  border-radius: 0px 24px 24px 0px;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  font-weight: bold;
`

const ForkWrapper = styled.div`
  z-index: -1;
  position: absolute;
  right: -30%;
  bottom: -20%;
  width: 140%;
  height: 100%;
  > img {
    opacity: 0.5;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`

const Index = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box className={'hero'}>

    <FixedCountdown>
      <Countdown />
    </FixedCountdown>

    <Box h={{base: '80vh', sm: '100%'}} overflowY={{base: 'auto', sm: 'unset'}} overflowX={'clip'}>

      <Grid templateColumns={{base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)'}}>
        <Box>
          <Center>
            <Stack direction={{base: 'column'}} position={'relative'}>
              
              <Center h={'75vh'}>
                <Stack
                  as={Box}
                  h={'100%'}
                  spacing={6}
                  py={14}
                  px={8}
                  position={'relative'}
                  alignItems={'flex-start'}
                  maxW={'2xl'}
                >
                  <Heading
                    fontSize={{ base: '2xl', sm: '4xl' }}
                    letterSpacing={'5%'}
                    lineHeight={{base: '200%', sm: '130%'}}
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
                    lineHeight={{base: '200%', sm: '130%'}}
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
          d={{base: 'none', sm: 'block'}}
        >
          <Sticky
            stickyStyle={{ zIndex: 10 }}
            bottomOffset={20}
            boundaryElement='.rightBlock'
            hideOnBoundaryHit={false}
          >
            <Stack alignItems={'flex-start'} justifyContent={'center'}>
              <Box maxW={'xl'} p={6}>
                <Form />
              </Box>
            </Stack>
          </Sticky>
        </Box>
      </Grid>
    
    </Box>

    <Drawer
      isOpen={isOpen}
      placement="bottom"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
        <Box py={6}>
          <Form />
        </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    <Box d={{base: 'block', sm: 'none'}}>
      <TabItem ref={btnRef} onClick={onOpen}>
        <Center h={'100%'} pos={'relative'}>
          <Box pos={'absolute'} color={'#FFF'} top={3} left={4} borderRadius={'2xl'} bgColor={'#ff8100'} fontSize={'12px'} py={1} px={2}>
            按此參與
          </Box>
          <Text color={'#FFF'} fontSize={'24px'} fontWeight={500} textAlign={'center'} noOfLines={1}>
            加速香港禁膠餐具{' '}
            <Text as={'span'} fontSize={'48px'} lineHeight={'48px'} fontWeight={700}>
              <i>3</i>{' '}
            </Text>
            步完成
          </Text>
        </Center>
      </TabItem>
    </Box>

  </Box>
  )
}

export default Index
