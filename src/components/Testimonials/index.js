import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Button
} from '@chakra-ui/react';

const Testimonial = ({children}) => {
  return <Box flex={1}>{children}</Box>;
};

const TestimonialContent = ({children}) => {
  return (
    <Stack
      bg={'#C7EBFB'}
      mx={2}
      p={4}
      rounded={'xl'}
      pos={'relative'}
      minH={'280px'}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({children, number}) => {
  return (
    <Stack direction="row" color={'#004566'}>
      <Heading as={'h3'} fontSize={'3xl'} borderRadius={'50%'} bgColor="#FFF" w={50} h={50} textAlign={'center'} lineHeight={'50px'}>
        {number}
      </Heading>
      <Heading as={'h3'} fontSize={'2xl'} alignSelf={'center'}>
        <b>{children}</b>
      </Heading>
    </Stack>
  );
};

const TestimonialText = ({children}) => {
  return (
    <Text
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>「管制即棄膠餐具計劃」公眾諮詢懶人包</Heading>
        </Stack>
        <Flex direction={{ base: 'column', md: 'row' }} justifyContent={'spaceBetween'}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading number={1}>背景資料</TestimonialHeading>
              <TestimonialText>
              環保署已經展開「管制即棄膠餐具計劃」公眾諮詢，截止日期為9月8日。
              <br/><br/>
              計劃提出分兩階段實行，但第一階段只管制堂食發泡膠、飲筒等膠餐具。
              <br/><br/>
              而就數量更多的即棄膠杯、食物容器等，當局甚至沒有提出第二階段管制時間表。
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading number={2}>綠色和平倡議</TestimonialHeading>
              <TestimonialText>
              綠色和平倡議：
              <br/><br/>
              1. 第一階段提前於2023年實施；<br/>
              2. 最遲2025年實施第二階段管制措施；<br/>
              3. 署方須同時訂立「可重用餐具社區配套時間表」。
              </TestimonialText>
              <Button bgColor={'#FF8100'} color={'#FFF'} borderRadius={8}>立即參與諮詢</Button>
            </TestimonialContent>
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading number={3}>立即行動</TestimonialHeading>
              <TestimonialText>
              填妥綠色和平網站表格後，您將會收到一封附有諮詢範本的電郵。
              <br/><br/>
              請進入郵箱，並打開該電郵。
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading number={4}>完成發送</TestimonialHeading>
              <TestimonialText>
              轉寄該電郵。在「收件人」一欄輸入rdpt@epd.gov.hk，最後按下發送，完成諮詢！
              <br/><br/>
              *如您有其他意見，歡迎前往環保署網站發表意見
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
        </Flex>
      </Container>
    </Box>
  );
}