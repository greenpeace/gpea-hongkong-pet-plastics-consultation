import React from 'react'
import {
  Box,
  Text,
} from '@chakra-ui/react'

const TopSection = () => {
  return (
    <Box px={{base: 2, sm: 4}} pb={6}>
      <Text fontSize={{base: '24px', sm: '36px'}} fontWeight={500} noOfLines={1} whiteSpace={'nowrap'}>
        加速香港禁膠餐具{' '}
        <Text as={'span'} fontSize={{base: '36px', sm: '72px'}} fontWeight={700}>
          <i>3</i>{' '}
        </Text>
        步完成
      </Text>
      <Text>
        環保署現正展開「管制即棄膠餐具計劃」公眾諮詢，截止日期為9月8日。我們急需你參與「管制即棄膠餐具計劃」公眾諮詢，與綠色和平一起推動香港走塑進程！
      </Text>
    </Box>
  )
}

export default TopSection
