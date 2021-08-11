import React, {useEffect} from 'react';
import { Box, HStack, FormControl, FormLabel, Input, Flex, Button, FormErrorMessage, Center, Text, Checkbox, Image, Stack, Skeleton, SkeletonCircle, SkeletonText} from '@chakra-ui/react';
import { jsPDF } from "jspdf";
import { Form, withFormik } from "formik";
import formContent from './content.json';
import Axios from 'axios'

const FormWrapper = (props) =>{
  const { touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting, status} = props;
  const space = 4;
  const labelStyle = { fontSize: "md", color: "gray.400"};
  const leftBottomCorner = {
    bottom: "0px",
    left: "0px",
    borderBottom: "20px solid #FFF",
    borderRight: "50px solid transparent",
  };
  const rightBottomCorner = {
    bottom: "0px",
    right: "0px",
    borderBottom: "20px solid #FFF",
    borderLeft: "50px solid transparent",
  };

  const leftTopCorner = {
    top: "-13px",
    left: "0px",
    borderBottom: "20px solid #CAE7F8",
    borderRight: "50px solid transparent",
  };
  const rightTopCorner = {
    top: "-13px",
    right: "0px",
    borderBottom: "20px solid #CAE7F8",
    borderLeft: "50px solid transparent",
  };

  useEffect(() => {
    if(status){
      console.log('status-',status)
    }
  }, [status]);

  return (
    <Box px={2} py={4}>
        {/** STEP 1 */}
        <Stack direction={{base: 'row'}} spacing={2} px={2}>
          <Box bgColor={'#CAE7F8'} w={{base: 16}} textAlign={'center'} color={'#FFF'} pos={'relative'}>
            {status === 'submitted' ? <Box py={4}><Image src={`${process.env.PUBLIC_URL}/assets/20210805_RDPT_KV-04.png`}/></Box> : <Text fontSize={48}>1</Text>}
            <Box pos='absolute' {...leftBottomCorner}></Box>
            <Box pos='absolute' {...rightBottomCorner}></Box>
          </Box>
          <Box flex={1}>
          {status === 'submitted' ? <Box><Text color='gray.500' fontSize={{base: 16}}>接下來，您將會收到電郵附上意見書文件範本，轉寄郵件即可完成諮詢。</Text></Box>
          :
          isSubmitting ? 
          <Stack>
            <Skeleton height="20px" />
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
                  <Box minW={20}>
                    <Center h="100%">
                      <FormLabel {...labelStyle}>
                        {formContent.label_email}
                      </FormLabel>                
                    </Center>
                  </Box>
                  <Box flex={1}>
                  <Input
                    name='Email'
                    type='email'
                    // placeholder={formContent.label_email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    bgColor={'#E9E9E9'}
                  />
                  <FormErrorMessage color='red'>
                    {errors.Email}
                  </FormErrorMessage>            
                  </Box>
                </Flex>
              </FormControl>
            </Box>

            <HStack>
              <Box flex={1} pb={space}>
                <FormControl id='lastName' isInvalid={errors.LastName && touched.LastName}>
                  <Flex>
                    <Box minW={12}>
                      <Center h="100%">
                        <FormLabel {...labelStyle}>
                          {formContent.label_last_name}
                        </FormLabel>                
                      </Center>
                    </Box>
                    <Box flex={1}>
                    <Input
                      name='LastName'
                      type='text'
                      // placeholder={formContent.label_last_name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      bgColor={'#E9E9E9'}
                    />
                    <FormErrorMessage color='red'>
                      {errors.LastName}
                    </FormErrorMessage>            
                    </Box>
                  </Flex>
                </FormControl>
              </Box>

              <Box flex={1} pb={space}>
                <FormControl id='firstName'
                  isInvalid={errors.FirstName && touched.FirstName}>
                  <Flex>
                    <Box minW={12}>
                      <Center h="100%">
                        <FormLabel {...labelStyle}>
                          {formContent.label_first_name}
                        </FormLabel>                
                      </Center>
                    </Box>
                    <Box flex={1}>
                    <Input
                      name='FirstName'
                      type='text'
                      // placeholder={formContent.label_first_name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      bgColor={'#E9E9E9'}
                    />
                    <FormErrorMessage color='red'>
                      {errors.FirstName}
                    </FormErrorMessage>            
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
              <Box>
                <HStack align='flex-start'>
                  <Box pb={4}>
                    <FormControl id='optIn'>
                      <Checkbox name='OptIn' onChange={handleChange}>
                        <Text fontSize='xs' color='gray.500'>{formContent.form_remind}</Text>
                      </Checkbox>
                    </FormControl>
                  </Box>
                </HStack>
                </Box>
          </Form>
          )}
          </Box>
        </Stack>
        {/** STEP 2 */}
        <Stack direction={{base: 'row'}} spacing={2} px={2}>
          <Box bgColor={'#CAE7F8'} w={{base: 16}} textAlign={'center'} color={'#FFF'} pos={'relative'} pb={6}>
            <Text fontSize={48} py={2}>2</Text>
            <Box pos='absolute' {...leftTopCorner}></Box>
            <Box pos='absolute' {...rightTopCorner}></Box>
            <Box pos='absolute' {...leftBottomCorner}></Box>
            <Box pos='absolute' {...rightBottomCorner}></Box>
          </Box>
          <Box flex={1} alignSelf="center">
          <Stack spacing={2} direction={'row'}>
            <Box maxW={'64px'}><Image src={`${process.env.PUBLIC_URL}/assets/icon_open.png`}/></Box>
            <Box>
              <Text color='gray.500' fontSize={{base: 16}}>開啟你的電子郵箱，打開由綠色和平發出，附有意見書範本的電郵。</Text>
            </Box>
          </Stack>
          </Box>
        </Stack>

        {/** STEP 3 */}
        <Stack direction={{base: 'row'}} spacing={2}  px={2}>
          <Box bgColor={'#CAE7F8'} w={{base: 16}} textAlign={'center'} color={'#FFF'} pos={'relative'} pb={6}>
            <Text fontSize={48} py={2}>3</Text>
            <Box pos='absolute' {...leftTopCorner}></Box>
            <Box pos='absolute' {...rightTopCorner}></Box>
            <Box pos='absolute' {...leftBottomCorner}></Box>
            <Box pos='absolute' {...rightBottomCorner}></Box>
          </Box>
          <Box flex={1} alignSelf="center">
          <Stack spacing={2} direction={'row'}>
            <Box maxW={'64px'}><Image src={`${process.env.PUBLIC_URL}/assets/icon_forward.png`}/></Box>
            <Box>
              <Text color='gray.500' fontSize={{base: 16}}>轉寄該電郵，在「收件人」一欄輸入<u>rdpt@epd.gov.hk</u>，按下發送，完成諮詢！</Text>
              <Box><Text color='gray.500' fontSize={12}><sup>**</sup>如果未能收到郵件，請查看垃圾桶或稍等1-2分鐘</Text></Box>
            </Box>
          </Stack>
          </Box>
        </Stack>
    </Box>
  );
}

const ConsultationForm = withFormik({
  mapPropsToValues: () => ({
    Email: "",
    FirstName: "",
    LastName: "",
    OptIn: false
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
      alert('Fake submit');
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

      [{x:25,y:101},{x:60,y:142},{x:76,y:177},{x:76,y:187},{x:76,y:197},{x:76,y:208},{x:76,y:219},{x:76,y:230},{x:76,y:240},{x:76,y:251},{x:76,y:261}]
      .map((d,i)=>doc.addImage(`${process.env.PUBLIC_URL}/assets/tick.png`, 'PNG', d.x, d.y, 5, 5))


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

    // formData.append("file", uploadPDF)
    // formData.append("upload_preset", "r7ksxsfb")
    // formData.append("resource_type", "raw")
    // formData.append("public_id", md5(values.Email))

    // JSON.stringify(formData);

    // Axios.post("https://api.cloudinary.com/v1_1/gpea/image/upload", formData).then((res)=>{
    //   const {statusText, data} = res
    //   if(statusText==='OK'){
    //     setSubmitting(false)
    //     const submitData = {
    //       ...hiddenFormValue,
    //       ...values,
    //       pdfFile: data.url
    //     };
    //     alert(JSON.stringify(submitData, null, 4))
    //   } else {
    //     alert('Something errors')
    //   }
    // })
  },

  displayName: "ConsultationForm",
})(FormWrapper);

export default ConsultationForm;
