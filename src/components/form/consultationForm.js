import React, {useEffect, useState} from 'react';
import { Box, HStack, FormControl, FormLabel, Input, Flex, Button, FormErrorMessage, Center, Text, Checkbox, Image, Stack, Skeleton, SkeletonCircle, SkeletonText, InputRightElement, InputGroup, Divider} from '@chakra-ui/react';
import { jsPDF } from "jspdf";
import { Form, withFormik } from "formik";
import formContent from './content.json';
import Axios from 'axios'

const FormWrapper = (props) =>{
  const { touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting, status} = props;
  const [submittedStatus, setSubmittedStatus] = useState(status==='submitted');
  const space = 4;
  const labelStyle = { fontSize: "md", color: "#000", fontWeight: 500, fontFamily: 'Noto Sans TC'};
  const tagStyle = { borderRadius: 12, color: "#FFF", bgColor: '#e26969', fontSize: 12, px: 2, py: 1}
  const inputProps = {
    onChange: handleChange,
    onBlur: handleBlur,
    disabled: isSubmitting,
    bgColor: '#FFFFFF',
    borderRadius: 0
  }

  useEffect(() => {
    if(status){
      setSubmittedStatus(status==='submitted')
    }
  }, [status]);

  return (
    <Box>
      <Box px={4} pb={12}>
        <Text fontSize={'36px'} fontWeight={500}>加速香港禁膠餐具 <Text as={'span'} fontSize={'72px'} fontWeight={700}><i>3</i> </Text>步完成</Text> 
        <Text>急需你參與「管制即棄膠餐具計劃」公眾諮詢</Text>
      </Box>
    <Box px={2} py={4}>
        {/** STEP 1 */}
        <Stack direction={{base: 'row'}} spacing={2} px={2} alignItems={'center'} pb={6}>
          <Box w={{base: 16}} textAlign={'center'} pos={'relative'} alignSelf="flex-start">
            <Box borderRadius={'50%'} bgColor={submittedStatus ? 'gray.200' : 'green.400'} w={'48px'}>
              <Text fontFamily={'arial'} fontSize={'24px'} lineHeight={'48px'} color={'#FFF'}>1</Text>
            </Box>
          </Box>
          <Box flex={1}>
          {submittedStatus ? <Box>
            <Text color='gray.500' fontSize={{base: 16}}>完成第一步</Text>   
          </Box>
          :
          isSubmitting ? 
          <Stack maxW={'640px'} w={'100%'}>
            <Skeleton height="20px" w={'100%'} />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          <Box>
            <Text fontSize='xs' color='gray.500'>請耐心稍候，我們正在處理您的資料</Text>
          </Box>
          </Stack> : (
          <Form onSubmit={handleSubmit}>

            <Box pb={space}>
              <FormControl id='email' isInvalid={errors.Email && touched.Email}>
                <Flex>
                  <Box flex={1}>
                  <Box minW={20}>
                  <FormLabel {...labelStyle}>
                        {formContent.label_email}
                      </FormLabel> 
                  </Box>
                  <InputGroup>
                    <Input
                      name='Email'
                      type='email'
                      placeholder={formContent.label_email}
                      {...inputProps}
                    />
                    <FormErrorMessage>
                      <InputRightElement w={'auto'} mr={2} pt={2}>
                        <Box {...tagStyle}>{errors.Email}</Box>
                      </InputRightElement>
                    </FormErrorMessage> 
                  </InputGroup>         
                  </Box>
                </Flex>
              </FormControl>
            </Box>

            <HStack>
              <Box flex={1} pb={space}>
                <FormControl id='lastName' isInvalid={errors.LastName && touched.LastName}>
                  <Flex>
                    <Box flex={1}>
                    <FormLabel {...labelStyle}>
                          {formContent.label_last_name}
                        </FormLabel>  
                        <InputGroup>
                    <Input
                      name='LastName'
                      type='text'
                      placeholder={formContent.label_last_name}
                      {...inputProps}
                    />
                    <FormErrorMessage>
                      <InputRightElement w={'auto'} mr={2} pt={2}>
                        <Box {...tagStyle}>{errors.LastName}</Box>
                      </InputRightElement>
                    </FormErrorMessage> 
                    </InputGroup>                
                    </Box>
                  </Flex>
                </FormControl>
              </Box>

              <Box flex={1} pb={space}>
                <FormControl id='firstName'
                  isInvalid={errors.FirstName && touched.FirstName}>
                  <Flex>
                    {/* <Box minW={12}>
                      <Center h="100%">
                        <FormLabel {...labelStyle}>
                          {formContent.label_first_name}
                        </FormLabel>                
                      </Center>
                    </Box> */}
                    <Box flex={1}>
                    <FormLabel {...labelStyle}>
                          {formContent.label_first_name}
                        </FormLabel>        
                        <InputGroup>
                    <Input
                      name='FirstName'
                      type='text'
                      placeholder={formContent.label_first_name}
                      {...inputProps}
                    />
                    <FormErrorMessage>
                      <InputRightElement w={'auto'} mr={2} pt={2}>
                        <Box {...tagStyle}>{errors.FirstName}</Box>
                      </InputRightElement>
                    </FormErrorMessage>  
                    </InputGroup>
                    </Box>
                  </Flex>
                </FormControl>
              </Box>

              </HStack>
              

              <Box py={2}>
                <Button
                  w='100%'
                  type='submit'
                  height='48px'
                  borderRadius='8'
                  fontSize='xl'
                  color='#FFF'
                  letterSpacing={4}
                  bg='#ff8100'
                  _hover={{ bg: "campaign.climate" }}
                  isLoading={isSubmitting}
                >
                  提交聯絡資料
                </Button>
              </Box>

              <Box pb={4}>
                <Stack spacing={10} direction="row">
                  <Checkbox id={'OptIn'} name={'OptIn'} colorScheme="whatsapp" onChange={handleChange} defaultChecked>
                    <Text fontSize='xs' color='gray.500'>{formContent.form_remind}</Text>
                  </Checkbox>
                </Stack>
              </Box>
              
          </Form>
          )}
          </Box>
        </Stack>
        {/** STEP 2 */}
        <Stack direction={{base: 'row'}} spacing={2} px={2} alignItems={'center'} pb={6}>
          <Box w={{base: 16}} textAlign={'center'} pos={'relative'}>
            <Box bgColor={submittedStatus ? 'green.300' : 'gray.200'} borderRadius={'50%'} w={'48px'}>
              <Text fontFamily={'arial'} fontSize={'24px'} lineHeight={'48px'} color={'#FFF'}>2</Text>
            </Box>
          </Box>
          {submittedStatus ? <Box>
            <Text color='gray.700' fontSize={{base: 16}}><Text as="span" color="#ff8100" fontWeight={500}>開啟你的電子郵箱</Text>，打開由綠色和平發出，附有意見書範本的電郵。</Text>
          </Box> : <Divider orientation="horizontal"/> }
        </Stack>

        {/** STEP 3 */}
        <Stack direction={{base: 'row'}} spacing={2} px={2} alignItems={'center'}>
          <Box w={{base: 16}} textAlign={'center'} pos={'relative'}>
            <Box bgColor={submittedStatus ? 'green.400' : 'gray.200'} borderRadius={'50%'} w={'48px'}>
              <Text fontFamily={'arial'} fontSize={'24px'} lineHeight={'48px'} color={'#FFF'}>3</Text>
            </Box>
          </Box>
          {submittedStatus ? 
            <Box>
            <Text color='gray.700' fontSize={{base: 16}}><Text as="span" color="#ff8100" fontWeight={500}>轉寄該電郵</Text>，在「收件人」一欄輸入<u>rdpt@epd.gov.hk</u>，按下發送，完成諮詢！</Text>
            <Box><Text color='gray.700' fontSize={12}><sup>**</sup>如果未能收到郵件，請查看垃圾桶或稍等1-2分鐘</Text></Box>
          </Box> :
          <Divider orientation="horizontal"/> }
        </Stack>
    </Box>
  </Box>
  );
}

const ConsultationForm = withFormik({
  mapPropsToValues: () => ({
    Email: "",
    FirstName: "",
    LastName: "",
    OptIn: true
  }),

  validate: (values) => {
    const errors = {};

    // if (!values.Email) {
    //   errors.Email = formContent.empty_data_alert;
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    //   errors.Email = formContent.invalid_email_alert;
    // }

    // if (!values.FirstName) {
    //   errors.FirstName = formContent.empty_data_alert;
    // }

    // if (!values.LastName) {
    //   errors.LastName = formContent.empty_data_alert;
    // }

    return errors;
  },

  handleSubmit: (values, { setSubmitting, setStatus, props }) => {
    setStatus('processing')
    setTimeout(() => {
      setSubmitting(false)
      setStatus('submitted')
    }, 3000);
    const md5 = require('md5');
    const {p29ContentOne, p29ContentTwo, p30ContentOne, p30ContentTwo} = props

    const getHiddenFields = document.querySelectorAll(
      'input[value][type="hidden"]:not([value=""])'
    );

    const hiddenFormValue = [...getHiddenFields].reduce(
      (obj, e) => ({ ...obj, [e.name]: e.value }),
      {}
    )

    const formData = new FormData()
    const doc = new jsPDF();
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();

    /**
     * PAGE 1
     */
    doc.addImage(`${process.env.PUBLIC_URL}/assets/p27.jpg`, 'JPEG', 0, 0, width, height);
    doc.setFontSize(15)
    doc.text(45, 115, values.Email)

    // Not sure why cant map loop in first page
    doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', 25, 101, 5, 5)
    doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', 27, 142, 5, 5)
    doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', 76, 177, 5, 5)
    doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', 76, 187, 5, 5)
    doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', 76, 197, 5, 5)
    doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', 76, 208, 5, 5)
    doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', 76, 219, 5, 5)
    doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', 76, 230, 5, 5)
    doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', 76, 240, 5, 5)
    doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', 76, 251, 5, 5)
    doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', 76, 261, 5, 5)

    // [{x:25,y:101},{x:27,y:142},{x:76,y:177},{x:76,y:187},{x:76,y:197},{x:76,y:208},{x:76,y:219},{x:76,y:230},{x:76,y:240},{x:76,y:251},{x:76,y:261}]
    // .map((d,i)=>doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', d.x, d.y, 5, 5))

    /**
     * PAGE 2
     */
    doc.addPage()
    doc.addImage(`${process.env.PUBLIC_URL}/assets/p28.png`, 'PNG', 0, 0, width, height);

      [{x:27,y:50},{x:27,y:89},{x:27,y:133},{x:27,y:172},{x:27,y:215}]
      .map((d,i)=>doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', d.x, d.y, 5, 5))


    /**
     * PAGE 3
     */
    doc.addPage()
    doc.addImage(`${process.env.PUBLIC_URL}/assets/p29.png`, 'PNG', 0, 0, width, height);

    [{x:76,y:55},{x:76,y:64},{x:76,y:73},{x:76,y:82},{x:76,y:91},{x:76,y:121},{x:76,y:130},{x:76,y:139},{x:76,y:148}]
    .map((d,i)=>doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', d.x, d.y, 5, 5))

    doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', 66, 207, 5, 5);
    doc.addImage(p29ContentOne, 'PNG', 99, 194, 155, 40);
    doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', 66, 239, 5, 5);
    doc.addImage(p29ContentTwo, 'PNG', 99, 225, 155, 42);

    /**
     * PAGE 4
     */
    doc.addPage()
    doc.addImage(`${process.env.PUBLIC_URL}/assets/p30.png`, 'PNG', 0, 0, width, height);
    doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', 25, 57, 5, 5);
    doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', 66, 80, 5, 5);

    doc.addImage(p30ContentOne, 'PNG', 50, 72, 155, 50);
    doc.addImage(p30ContentTwo, 'PNG', 30, 110, 155, 50);

    const uploadPDF = new Blob([doc.output('blob')], {type: 'application/pdf; charset=utf-8'});

    // PREVIEW
    // window.open(doc.output('bloburl'), '_blank');

    formData.append("file", uploadPDF)
    formData.append("upload_preset", "r7ksxsfb")
    formData.append("resource_type", "raw")
    formData.append("public_id", md5(values.Email))

    // JSON.stringify(formData);

    Axios.post("https://api.cloudinary.com/v1_1/gpea/image/upload", formData).then((res)=>{
      const {statusText, data} = res
      console.log('data-',data)
      if(statusText==='OK'){
        setSubmitting(false)
        const submitData = {
          ...hiddenFormValue,
          ...values,
          CampaignData1__c: data.url,
        };
        alert(JSON.stringify(submitData, null, 4))
        setStatus('submitted')
      } else {
        alert('Something errors')
      }
    })
  },

  displayName: "ConsultationForm",
})(FormWrapper);

export default ConsultationForm;
