import React from 'react'
import {
  ChakraProvider,
  Box,
  VStack,
  Center,
  Flex,
  Heading,
  Image
} from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import SEO from './components/seo'
import theme from './theme'
import Form from './components/form'

import GridListWithHeading from './components/GridList/GridListWithHeading'
import SplitScreen from './components/SplitScreen/SplitScreenWithImage'
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
                <Image src={`${process.env.PUBLIC_URL}/assets/20210805_RDPT_KV-02.png`}/>
              </Center>
            </Box>
            <Box flex={1} mx={10}>
              <Box bgColor={'#FFF'} borderRadius={8} mx={{ base: 0, sm: 2 }}>
                <Box bgColor='orange' borderTopRadius={8} textAlign={'center'}>
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
            </Box>
          </Flex>
        </Box>
        <SplitScreen />
        <GridListWithHeading />
        <SmallWithSocial />
      </HelmetProvider>
    </ChakraProvider>
  )
}

export default App
