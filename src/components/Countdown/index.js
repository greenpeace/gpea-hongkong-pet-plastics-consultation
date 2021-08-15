import React, { useEffect, useState } from 'react'
import { Text, Box, HStack, Stack } from '@chakra-ui/react'

export default function Countdown() {
  const countdownDate = new Date('September 22, 2021 14:30:00').getTime()
  const [countDown, setCountDown] = useState('Count')
  const renderLayout = (count, unit) => {
    return (
      <HStack align='center'>
        <Text fontSize={{base: 'xs', sm: 'md'}}>{count}</Text>
        <Text fontSize={{base: 'xs', sm: 'md'}}>{unit}</Text>
      </HStack>
    )
  }
  useEffect(() => {
    // Update the count down every 1 second
    let timer = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime()

      // Find the distance between now and the count down date
      let distance = countdownDate - now

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setCountDown(
        <HStack>
          <Box>{renderLayout(days, '日')}</Box>
          <Box>{renderLayout(hours, '小時')}</Box>
          <Box>{renderLayout(minutes, '分')}</Box>
          <Box>{renderLayout(seconds, '秒')}</Box>
        </HStack>,
      )

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(timer)
        setCountDown(`已過期`)
      }
    }, 1000)
  }, [])

  return (
    <Stack direction={{ base: 'row' }} align={'center'} spacing={{base: 0, sm: 2}}>
      <Text fontSize={{base: 'xs', sm: 'md'}}>距離諮詢完結：</Text>
      {countDown}
    </Stack>
  )
}
