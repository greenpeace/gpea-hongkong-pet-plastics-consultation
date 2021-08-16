import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react'

const TopSection = () => {
  return (
    <Box px={2} pb={6}>
      <Heading
        as={'h2'}
        fontSize={{ base: '28px', sm: '36px' }}
        fontWeight={500}
        mb={2}
      >
        加速香港禁膠餐具{' '}
        <Text
          as={'span'}
          fontSize={{ base: '36px', sm: '72px' }}
          fontWeight={700}
        >
          <i>3</i>{' '}
        </Text>
        步完成
      </Heading>
      <Text>
        禁膠餐具，不容再拖！
        我們急需你參與諮詢，立即提交意見書，促盡快管制即棄膠餐具！
      </Text>
    </Box>
  )
}

export default TopSection
