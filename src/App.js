import React from 'react'
import {
  ChakraProvider,
  Box,
  VStack,
  Center,
  Flex,
  Heading,
  Image,
  Stack
} from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import SEO from './components/seo'
import theme from './theme'
import Form from './components/form'
import Countdown from './components/Countdown'

import SplitWithImage from './components/SplitWithImage/SplitWithImage'
import GridListWithHeading from './components/GridList/GridListWithHeading'
import SmallWithSocial from './components/Footer/SmallWithSocial'

import '@fontsource/noto-sans-tc'
import './notosans-regular-normal.js'

const App = (props) => {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <HelmetProvider>
        <SEO />
        <Box fontSize='xl' bgColor='#D7EEF3' py={10}>
          <Flex flexDirection={{ base: 'column', sm: 'row' }}>
            <Box flex={1}>
              <Center h={`100%`} px={12}>
                <Stack direction="column">
                  <Image
                    src={`${process.env.PUBLIC_URL}/assets/20210805_RDPT_KV-02.png`}
                  />
                  <Countdown/>
                </Stack> 
              </Center>
            </Box>
            <Box flex={1} mx={10}>
              <Center>
                <Box
                  bgColor={'#FFF'}
                  borderRadius={8}
                  mx={{ base: 0, sm: 2 }}
                  maxW={'640px'}
                >
                  <Box
                    bgColor='orange'
                    borderTopRadius={8}
                    textAlign={'center'}
                  >
                    <Heading
                      py={4}
                      fontWeight={600}
                      color='#FFF'
                      fontSize={{ base: 16, sm: 20, md: 24 }}
                      lineHeight={'110%'}
                    >
                      加速香港禁膠餐具 3步完成
                    </Heading>
                  </Box>
                  <Box w={'100%'}>
                    <Form />
                  </Box>
                </Box>
              </Center>
            </Box>
          </Flex>
        </Box>
        <SplitWithImage />
        <GridListWithHeading />
        <SmallWithSocial />
      </HelmetProvider>
    </ChakraProvider>
  )
}

export default App
