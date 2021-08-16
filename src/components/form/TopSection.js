import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react'

const TopSection = () => {
  return (
    <Box px={2} mb={6}>
      <Heading
        as={'h2'}
        color={'#004566'}
        fontSize={{ base: '3xl', sm: '4xl' }}
        fontWeight={700}
        mb={2}
      >
        加速香港禁膠餐具
        <Text as={'span'} px={4} fontSize={{ base: '6xl' }} fontWeight={700}>
          <i>3</i>
        </Text>
        步完成
      </Heading>
      <Text color={'gray.700'} lineHeight={'200%'}>
        禁膠餐具，不容再拖！
        我們急需你參與諮詢，立即提交意見書，促盡快管制即棄膠餐具！
      </Text>
    </Box>
  )
}

export default TopSection
