import React, { useState } from 'react'
import { Box, Text, Heading } from '@chakra-ui/react'

const TopSection = () => {
  const signupNumber = useState(
    document.querySelector('input[name="numResponses"]').value,
  )
  const signupTarget = useState(
    document.querySelector('input[name="numSignupTarget"]').value,
  )

  return (
    <Box px={2}>
      <Heading
        as={'h2'}
        color={'#004566'}
        fontSize={{ base: '2xl', lg: '4xl' }}
        fontWeight={700}
        mb={2}
      >
        加速香港禁膠餐具
        <Text as={'span'} px={4} fontSize={{ base: '6xl' }} fontWeight={700}>
          <i>3</i>
        </Text>
        步完成
      </Heading>
      {/* <Text color={'gray.700'} lineHeight={'200%'}>
        禁膠餐具，不容再拖！
        我們急需你參與諮詢，立即提交意見書，促盡快管制即棄膠餐具！
      </Text> */}
      {signupNumber && signupTarget && (
        <Text
          className='signup-number'
          fontFamily='Arial'
          color={'#004566'}
          lineHeight={'200%'}
        >
          <b>{parseInt(signupNumber, 10).toLocaleString()} 人</b>
          已參與聯署！
          <Text display={'none'}>
            目標人數：
            {parseInt(signupTarget, 10).toLocaleString()}
          </Text>
        </Text>
      )}
    </Box>
  )
}

export default TopSection
