import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
} from '@chakra-ui/react'

const buttonStyle = {
  h: '48px',
  fontWeight: 500,
}

// Donation types
const TYPES = [
  { label: '每月捐款', value: 'monthly' },
  { label: '單次捐款', value: 'single' },
]
const AMOUNT_ONETIME = [
  { label: 'HKD 500', value: 500 },
  { label: 'HKD 700', value: 700 },
  { label: 'HKD 900', value: 900 },
  { label: '其他金額', value: '' },
]
const AMOUNT_MONTHLY = [
  { label: 'HKD 100', value: 100 },
  { label: 'HKD 150', value: 150 },
  { label: 'HKD 200', value: 200 },
  { label: '其他金額', value: '' },
]

const MiniDonateForm = () => {
  const [donateType, setDonateType] = useState('monthly')
  const [amount, setAmount] = useState(100)
  const [url, setURL] = useState({ type: donateType, amount: amount })
  const amountOption =
    donateType === 'monthly' ? AMOUNT_MONTHLY : AMOUNT_ONETIME

  const handleSetDonateType = (value) => {
    setDonateType(value)
    setAmount(
      value === 'monthly' ? AMOUNT_MONTHLY[0].value : AMOUNT_ONETIME[0].value,
    )
    setURL({ ...url, type: value })
  }

  const targetDonateURL =
    'https://supporter.ea.greenpeace.org/hk/s/donate/donation-new?language=zh_HK&campaign=plastics'

  const handleOpenLink = (value) => {
    window.open(`${targetDonateURL}&donate_amt=${donateType}:${amount}`)
  }

  return (
    <Box>
      <Box py={2}>
        <Stack
          direction='row'
          spacing={1}
          borderWidth={1}
          borderColor='brand.500'
          borderRadius={'md'}
          overflow={'hidden'}
        >
          {TYPES.map((d, i) => (
            <Button
              key={d.value}
              flex='1'
              h='40px'
              fontWeight='400'
              borderRadius={0}
              bg={donateType === d.value ? 'brand.500' : '#FFF'}
              color={donateType === d.value ? '#FFF' : 'brand.500'}
              _hover={{ bg: 'brand.500', color: '#FFF' }}
              onClick={() => handleSetDonateType(d.value)}
            >
              {d.label}
            </Button>
          ))}
        </Stack>
      </Box>
      <Box py={4} overflow='hidden'>
        <Flex direction='column'>
          <Box>
            <Grid templateColumns='repeat(3, 1fr)' gap={{ base: 1, sm: 2 }}>
              {amountOption.map((d, i) => {
                const colSpan = amountOption.length === i + 1 ? 3 : 1

                return (
                  <GridItem colSpan={colSpan} key={i}>
                    <Button
                      key={d.value}
                      flex='1'
                      bg={amount === d.value ? 'brand.500' : 'gray.300'}
                      color={amount === d.value ? '#FFF' : 'gray.500'}
                      borderRadius={'md'}
                      _hover={{ bg: 'brand.500', color: '#FFF' }}
                      onClick={() => setAmount(d.value)}
                      w='100%'
                      {...buttonStyle}
                    >
                      {d.label}
                    </Button>
                  </GridItem>
                )
              })}
            </Grid>
          </Box>

          <Box py={6}>
            <Text as='p' variant='paragraph' color='gray.700'>
              您的捐款，將幫助綠色和平為環境問題找到出路，並在全球各地落實環保工作。謝謝！
            </Text>
          </Box>

          <Button
            as='a'
            href='https://supporter.ea.greenpeace.org/hk/s/donate/donation-new?language=zh_HK&campaign=plastics&ref=rdpt-illustration'
            target='_blank'
            rounded={'8px'}
            py={6}
            px={12}
            bg={'#ff8100'}
            color={'white'}
            onClick={() => handleOpenLink()}
          >
            捐助支持
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default MiniDonateForm
