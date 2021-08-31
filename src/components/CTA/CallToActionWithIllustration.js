import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Link,
  Image,
} from '@chakra-ui/react'

import Heart from './cta_heart.svg'

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={'6xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8 }}
        py={{ base: 8 }}
      >
        <Heading
          fontWeight={700}
          fontSize={{ base: '2xl', md: '4xl' }}
          lineHeight={'120%'}
        >
          緩解塑膠污染，
          <Text as={'span'} color={'#ff8100'}>
            急需您的支持！
          </Text>
        </Heading>
        <Text color={'gray.700'} maxW={'3xl'} lineHeight={'200%'}>
          即棄塑膠帶來的一時便利，換來充斥塑膠垃圾的海洋、環境永久的傷害。
          <br />
          請幫助綠色和平以公正獨立的身份，推動超市淘汰即棄塑膠、招募商戶成為走塑店鋪、督促政府訂立更積極的減塑目標與政策，源頭減少即棄塑膠！
          <br />
          綠色和平從不接受政商界資助，因此您的捐助，就是推動項目工作的關鍵！
        </Text>
        <Button
          as='a'
          href='https://supporter.ea.greenpeace.org/hk/s/donate/donation-new?language=zh_HK&campaign=plastics&ref=rdpt-illustration'
          target='_blank'
          rounded={'full'}
          py={6}
          px={12}
          bg={'#ff8100'}
          color={'white'}
        >
          捐助支持
        </Button>
        <Flex w={'full'} alignItems={'center'} justifyContent={'center'}>
          <Link
            as='a'
            href='https://supporter.ea.greenpeace.org/hk/s/donate/donation-new?language=zh_HK&campaign=plastics&ref=rdpt-illustration'
            target='_blank'
          >
            <Image src={Heart} height={{ base: '8rem', md: '16rem' }} pl={6} />
          </Link>
        </Flex>
      </Stack>
    </Container>
  )
}
