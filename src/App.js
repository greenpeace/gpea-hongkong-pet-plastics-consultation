import React from 'react';
import { ChakraProvider, Box, VStack, Center, Flex, Heading} from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from "./components/seo"
import theme from './theme'
import Form from './components/form'
import './notosans-regular-normal.js'

const App = (props) =>{
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <HelmetProvider>
      <SEO/>
      <Box fontSize="xl" bgColor="#D7EEF3" py={10}>
        <Flex flexDirection={{base: 'column', sm: 'row'}}>
          <Box flex={1}>
            <Center h={`100%`}>
              MAIN VISUAL
            </Center>
          </Box>
          <Box flex={1} mx={10}>
          <Box bgColor={'#FFF'} borderRadius={8} mx={{base: 0, sm: 2}}>
          <Box bgColor="orange" borderTopRadius={8} textAlign={'center'}>
            <Heading
              py={4}
              fontWeight={600}
              color="#FFF"
              fontSize={{ base: 16, sm: 20, md: 24 }}
              lineHeight={'110%'}>
              加速香港禁膠餐具 3步完成
            </Heading>
          </Box>
            <VStack spacing={8} py={6}>
              <Center h={'100%'}>
                <VStack spacing={4}>
                  <Form/>
                </VStack>
                </Center>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Box>
      </HelmetProvider>
    </ChakraProvider>
  );
}

export default App;
