import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

// Replace test data with your own
const features = Array.apply(null, Array(6)).map(function (x, i) {
  return {
    id: i,
    title: '管制即棄膠餐具計劃公眾諮詢',
    text: '請於2021年9月8日或之前以下述方式提交你的意見。',
  }
})

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'2xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>管制即棄膠餐具計劃公眾諮詢</Heading>
        <Text color={'gray.600'} fontSize={'md'}>
          請於2021年9月8日或之前以下述方式提交你的意見。
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'#66cc00'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
