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
  useDisclosure,
  OrderedList,
  ListItem,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Sticky from 'react-sticky-el'
import Form from '../../components/form'
import Countdown from '../../components/Countdown'

import KV from '../../assets/images/kv1.jpg'
import Fork from '../../assets/images/20200813_rdpt_web_layout-02.png'

const TabItem = styled.div`
  padding: 12px 12px 16px;
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

const KVWrapper = styled.div`
  z-index: -1;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  > img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`

const ForkWrapper = styled.div`
  z-index: -1;
  position: absolute;
  right: -30%;
  bottom: -20%;
  width: 150%;
  height: 100%;
  > img {
    opacity: 0.4;
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
      <Box overflowY={{ base: 'auto', sm: 'unset' }} overflowX={'clip'}>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
        >
          <Box>
            <Center>
              <Stack direction={{ base: 'column' }} position={'relative'}>
                <Center
                  pt={14}
                  pb={8}
                  px={{ base: 6, md: 12 }}
                  overflow={'hidden'}
                >
                  <Stack
                    as={Box}
                    h={'90vh'}
                    spacing={8}
                    position={'relative'}
                    alignItems={'flex-start'}
                  >
                    <Heading
                      fontSize={{ base: '2xl', sm: '4xl' }}
                      letterSpacing={'5%'}
                      lineHeight={'120%'}
                    >
                      <Text
                        color={'#004566'}
                        fontWeight={'300'}
                        fontSize={{ base: '4xl', md: '5xl' }}
                      >
                        急需您參與
                      </Text>
                      <Text
                        mt={2}
                        color={'#ff8100'}
                        fontSize={{ base: '4xl', md: '5xl' }}
                        fontWeight={'700'}
                      >
                        管制即棄膠餐具諮詢
                      </Text>
                    </Heading>
                    <Stack
                      spacing={4}
                      color={'gray.700'}
                      fontSize={{ base: 'sm', md: 'md' }}
                      lineHeight={'200%'}
                    >
                      <Text>
                        環保署已經展開「管制即棄膠餐具計劃」公眾諮詢，
                        <Text as={'span'} fontWeight={'700'}>
                          截止日期為2021年9月8日
                        </Text>
                        。
                      </Text>
                      <Text>
                        可是，署方現時的計劃並
                        <Text as={'span'} fontWeight={'700'}>
                          沒有為全面管制塑膠餐具訂下確切時間表及配套
                        </Text>
                        ，「走塑」恐怕隨時變「走數」。
                      </Text>
                      <Text>
                        您今次的表態，將有助展現香港市民渴望全面減塑的民意力量，推動政府於2025年落實全面禁膠餐具。
                        <Text as={'span'} fontWeight={'700'}>
                          請把握關鍵時機，於9月8日前填妥表格，推動香港走塑進程！
                        </Text>
                      </Text>
                    </Stack>
                    <ForkWrapper>
                      <Image src={Fork} objectFit='contain' />
                    </ForkWrapper>
                  </Stack>
                </Center>
                {/* <Center>
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
                    <Text fontWeight={'300'} fontSize={{ base: '3xl' }}>
                      3 步遞交意見書
                    </Text>
                    <OrderedList lineHeight={'300%'} fontSize={'md'}>
                      <ListItem>
                        填妥綠色和平網站表格，輸入基本聯絡資料。
                      </ListItem>
                      <ListItem>
                        檢查您的郵箱，打開由綠色和平發出，附有意見書範本的電郵。
                      </ListItem>
                      <ListItem>
                        轉寄該電郵。在「收件人」一欄輸入rdpt@epd.gov.hk，最後按下發送，完成諮詢！
                      </ListItem>
                    </OrderedList>
                  </Stack>
                </Center> */}
              </Stack>
            </Center>
          </Box>
          <Box
            w='100%'
            h='100%'
            bg='#F5F5F5'
            position={'relative'}
            className='rightBlock'
            d={{ base: 'none', sm: 'block' }}
          >
            <Sticky
              stickyStyle={{ zIndex: 10 }}
              bottomOffset={20}
              boundaryElement='.rightBlock'
              hideOnBoundaryHit={false}
            >
              <Stack alignItems={'flex-start'} justifyContent={'center'}>
                <Box maxW={'xl'} px={4} py={6}>
                  <Form />
                </Box>
              </Stack>
            </Sticky>
          </Box>
        </Grid>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody px={4}>
            <Box py={6}>
              <Form />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box
        pos='fixed'
        bottom={0}
        w={'100%'}
        zIndex={2}
        d={{ base: 'block', sm: 'none' }}
      >
        <TabItem ref={btnRef} onClick={onOpen}>
          <Stack justifyContent={'center'} spacing={4}>
            <Box color={'#FFF'} fontSize={'16px'}>
              <Text color={'#FFF'} px={2}>
                加速香港禁膠餐具
                <Text as={'span'} px={2} fontSize={'20px'} fontWeight={'700'}>
                  <i>3</i>
                </Text>
                步完成
              </Text>
            </Box>
            <Text
              color={'#FFF'}
              fontSize={'20px'}
              fontWeight={'700'}
              textAlign={'center'}
              borderRadius={'full'}
              bgColor={'#ff8100'}
              letterSpacing={'4px'}
              py={2}
              px={12}
            >
              立即行動
            </Text>
          </Stack>
        </TabItem>
      </Box>
    </Box>
  )
}

export default Index
