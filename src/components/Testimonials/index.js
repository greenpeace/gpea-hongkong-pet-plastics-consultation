import {
  Box,
  Heading,
  Divider,
  Text,
  Stack,
  Container,
  Button,
  Link,
} from '@chakra-ui/react'

const Testimonial = ({ children }) => {
  return (
    <Box bg={'white'} px={4} pt={6} pb={8} rounded={'xl'} flex={1}>
      {children}
    </Box>
  )
}

const TestimonialContent = ({ children }) => {
  return <Box height={'100%'}>{children}</Box>
}

const TestimonialHeading = ({ children, number }) => {
  return (
    <Stack
      direction='row'
      color={'#004566'}
      mb={6}
      spacing={2}
      align={'center'}
      pos={'relative'}
    >
      <Box
        borderRadius={'full'}
        bg={'gray.100'}
        w={8}
        h={8}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Text as={'span'} fontSize={'xl'} fontWeight={'700'}>
          {number}
        </Text>
      </Box>
      <Heading as={'h4'} fontSize={'xl'} alignSelf={'center'}>
        <b>{children}</b>
      </Heading>
    </Stack>
  )
}

const TestimonialText = ({ children }) => {
  return (
    <Text color={'gray.700'} fontSize={'sm'}>
      {children}
    </Text>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box bg={'gray.50'}>
      <Container maxW={'6xl'} py={12} as={Stack} spacing={8}>
        <Stack align={'center'}>
          <Heading color={'#004566'} textAlign={'center'} lineHeight={'120%'}>
            「管制即棄膠餐具計劃」
            <br />
            公眾諮詢懶人包
          </Heading>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          alignItems={'stretch'}
          justifyContent={'spaceBetween'}
          spacing={6}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading number={1}>背景資料</TestimonialHeading>
              <TestimonialText>
                環保署已經展開
                <Link
                  href={'https://www.rdpt.hk/tc/form/'}
                  target={'_blank'}
                  textDecoration={'underline'}
                  color={'#ff8100'}
                  fontSize={'sm'}
                >
                  「管制即棄膠餐具計劃」公眾諮詢，截止日期為9月8日
                </Link>
                。
                <br />
                <br />
                計劃提出分兩階段實行，但第一階段只管制堂食發泡膠、飲筒等膠餐具。
                <br />
                <br />
                而就數量更多的即棄膠杯、食物容器等，當局甚至沒有提出第二階段管制時間表。
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading number={2}>綠色和平倡議</TestimonialHeading>
              <TestimonialText>
                <b>綠色和平倡議：</b>
                <br />
                <br />
                1. 第一階段提前於2023年實施；
                <br />
                <br />
                2. 最遲2025年實施第二階段管制措施；
                <br />
                <br />
                3. 署方須同時訂立「可重用餐具社區配套時間表」。
              </TestimonialText>
              {/* <Button
                as='a'
                href={'https://www.rdpt.hk/tc/form/'}
                target={'_blank'}
                mt={4}
                px={8}
                bgColor={'#66cc00'}
                color={'#FFF'}
                borderRadius={8}
              >
                立即參與諮詢
              </Button> */}
            </TestimonialContent>
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading number={3}>立即行動</TestimonialHeading>
              <TestimonialText>
                填妥綠色和平網站表格後，您將會收到一封附有諮詢範本的電郵。
                <br />
                <br />
                請進入郵箱，並打開該電郵。
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading number={4}>完成發送</TestimonialHeading>
              <TestimonialText>
                轉寄該電郵。在「收件人」一欄輸入rdpt@epd.gov.hk，最後按下發送，完成諮詢！
                <br />
                <br />* 如您有其他意見，歡迎前往環保署網站發表意見
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}
