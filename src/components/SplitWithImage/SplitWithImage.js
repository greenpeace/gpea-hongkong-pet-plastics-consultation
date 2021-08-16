import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  ListItem,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

const ImageWrapper = ({ children }) => {
  return (
    <Box w='100%'>
      <Box borderRadius='lg' overflow='hidden'>
        {children}
      </Box>
    </Box>
  )
}

export default function SplitWithImage() {
  return (
    <Container maxW={'6xl'} py={12}>
      <Stack spacing={6}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={4}>
          <Stack py={6} spacing={6}>
            <Heading fontSize={'2xl'} lineHeight={'120%'}>
              塑膠餐具為我們帶來甚麼惡果？
            </Heading>
            <Stack spacing={4}>
              <Text>
                根據2019年統計數字，廢塑膠佔全港堆填區都市固體廢物棄置量約21%，當中棄置塑膠餐具佔第二位，每日約200公噸，相當於全年棄置了146億件膠刀叉。即棄餐具不易回收，亦不會在自然界自己消失，只會分裂成微塑膠，為環境帶來相當沉重負擔。
              </Text>
              <Text>
                即棄膠餐具佔海洋垃圾中的一大部分，破壞海洋環境與人體健康。根據綠色和平調查，海洋生物與鳥類會被迫持續吞下不能消化的塑膠致死。而塑膠垃圾分裂出來的微塑膠毒素亦可能經由海鮮進入人體，影響我們的健康。為著環境與人類福祉著想，推行管制塑膠餐具計劃是刻不容緩。
              </Text>
            </Stack>
          </Stack>
          <Flex>
            <ImageWrapper>
              <Image
                rounded={'md'}
                alt={'綠色和平的走塑訴求是？'}
                src={`${process.env.PUBLIC_URL}/assets/images/GP0STPYWJ_High_res.jpg`}
                objectFit={'cover'}
                transform='scale(1.0)'
                transition='0.3s ease-in-out'
                _hover={{
                  transform: 'scale(1.05)',
                }}
              />
            </ImageWrapper>
          </Flex>
        </SimpleGrid>
        <Stack
          direction={{ base: 'column', sm: 'row-reverse' }}
          columns={{ base: 1, md: 2 }}
          spacing={10}
          py={4}
        >
          <Stack flex={1} py={6} spacing={6}>
            <Heading fontSize={'2xl'} lineHeight={'120%'}>
              綠色和平的走塑訴求是？
            </Heading>
            <Stack spacing={4}>
              <Text>
                現時當局「管制即棄膠餐具計劃」時間表進程太慢且矇糊不清，推行首階段管制措施需要等到2025年，第二階段更是遙遙無期，我們的環境不可再等！綠色和平促請當局：
              </Text>
              <OrderedList spacing={4} pl={4}>
                <ListItem>
                  加快走塑步伐，要求第一階段管制措施提前於2023年實施；第二階段推前至2025年實施；
                </ListItem>
                <ListItem>
                  設立「可重用餐具配套時間表」，措施及時間表推動可重用餐具的普及以防止污染轉移，達至終極走塑。
                </ListItem>
              </OrderedList>
            </Stack>
          </Stack>
          <Flex flex={1}>
            <ImageWrapper>
              <Image
                rounded={'md'}
                alt={'綠色和平的走塑訴求是？'}
                src={`${process.env.PUBLIC_URL}/assets/images/GP0STTWGP_High_res.jpg`}
                objectFit={'cover'}
                transform='scale(1.0)'
                transition='0.3s ease-in-out'
                _hover={{
                  transform: 'scale(1.05)',
                }}
              />
            </ImageWrapper>
          </Flex>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={4}>
          <Stack py={6} spacing={6}>
            <Heading fontSize={'2xl'} lineHeight={'120%'}>
              其他地區都成功限塑，我們也可以！
            </Heading>
            <Stack spacing={4}>
              <UnorderedList spacing={4}>
                <ListItem>
                  澳洲
                  南澳州：2021年起禁止銷售即棄膠飲管、進食用具和攪拌棒；2022年起禁止銷售發泡膠杯、碗、碟及翻蓋式容器等。
                </ListItem>
                <ListItem>
                  加拿大
                  溫哥華：2020年起餐飲業禁止使用發泡膠食物容器和杯，以及塑膠飲管，堂食外賣只可應客人要求提供即棄進食用具。
                </ListItem>
                <ListItem>
                  歐盟：2021年，歐盟成員國要全面禁止塑膠飲管、棉簽、塑膠盤、塑膠刀叉等一次性塑膠製品及發泡膠食物容器和杯。
                </ListItem>
              </UnorderedList>
            </Stack>
          </Stack>
          <Flex>
            <ImageWrapper>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={`${process.env.PUBLIC_URL}/assets/images/shutterstock_1464698738.jpg`}
                objectFit={'cover'}
                transform='scale(1.0)'
                transition='0.3s ease-in-out'
                _hover={{
                  transform: 'scale(1.05)',
                }}
              />
            </ImageWrapper>
          </Flex>
        </SimpleGrid>
      </Stack>
    </Container>
  )
}
