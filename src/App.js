import React, {useState, useEffect, useRef} from 'react';
import { ChakraProvider, Box, VStack, HStack, Grid, FormControl, FormLabel, Input, Center, Flex, Button, FormErrorMessage} from '@chakra-ui/react';
import { jsPDF } from "jspdf";
import { Form, withFormik } from "formik";
import { HelmetProvider } from 'react-helmet-async';
import SEO from "./components/seo"
import theme from './theme'
import formContent from './content.json';
import './notosans-regular-normal.js'
import Axios from 'axios'

const App = (props) =>{
  const { touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting} = props;
  const space = 4;
  const labelStyle = { fontSize: "xs", color: "gray.400"};

  return (
    <ChakraProvider theme={theme}>
      <HelmetProvider>
      <SEO/>
      <Box fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Center h={'100%'}>
            <VStack spacing={4}>
            <Form onSubmit={handleSubmit}>
            <Flex direction='column'>
            <Box flex='1' pb={space}>
              <FormControl id='email' isInvalid={errors.Email && touched.Email}>
                <FormLabel {...labelStyle}>{formContent.label_email}</FormLabel>
                <Input
                  name='Email'
                  type='email'
                  placeholder={formContent.label_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage color='red'>{errors.Email}</FormErrorMessage>
              </FormControl>
            </Box>

            <HStack>
              <Box flex={1} pb={space}>
                <FormControl id='lastName' isInvalid={errors.LastName && touched.LastName}>
                  <FormLabel {...labelStyle}>
                    {formContent.label_last_name}
                  </FormLabel>
                  <Input
                    name='LastName'
                    type='text'
                    placeholder={formContent.label_last_name}
                    onChange={handleChange}
                  />
                  <FormErrorMessage color='red'>
                    {errors.LastName}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box flex='1' pb={space}>
                <FormControl
                  id='firstName'
                  isInvalid={errors.FirstName && touched.FirstName}
                >
                  <FormLabel {...labelStyle}>
                    {formContent.label_first_name}
                  </FormLabel>
                  <Input
                    name='FirstName'
                    type='text'
                    placeholder={formContent.label_first_name}
                    onChange={handleChange}
                  />
                  <FormErrorMessage color='red'>
                    {errors.FirstName}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </HStack>

            <Box flex='1' pt={3} pb={3}>
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
                提交
              </Button>
            </Box>
            </Flex>
              </Form>
              </VStack>
              </Center> 
            </VStack>
        </Grid>
      </Box>
      </HelmetProvider>
    </ChakraProvider>
  );
}

const FormikWrapper = () => {
  const inputEl = useRef(null);
  const [p29ContentOne, setP29ContentOne] = useState("");
  const [p29ContentTwo, setP29ContentTwo] = useState("");
  const [p30ContentOne, setP30ContentOne] = useState("");
  const [p30ContentTwo, setP30ContentTwo] = useState("");

  const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
  }

  useEffect(() => {
    const canvasP29ContentOne = document.getElementById('p29ContentOne')
    const canvasP29ContentTwo = document.getElementById('p29ContentTwo')
    const canvasP30ContentOne = document.getElementById('p30ContentOne')
    const canvasP30ContentTwo = document.getElementById('p30ContentTwo')

    let ctx = canvasP29ContentOne.getContext("2d");
    // ctx.width = canvasP29ContentOne.getBoundingClientRect().width
    // ctx.height = canvasP29ContentOne.getBoundingClientRect().height
    ctx.font = '6pt NotoSans-Regular';
    ctx.fillStyle = '#000';

    let ctx2 = canvasP29ContentTwo.getContext("2d");
    ctx2.font = '6pt NotoSans-Regular';
    ctx2.fillStyle = '#000';

    let ctx3 = canvasP30ContentOne.getContext("2d");
    ctx3.font = '6pt NotoSans-Regular';
    ctx3.fillStyle = '#000';
    
    let ctx4 = canvasP30ContentTwo.getContext("2d");
    ctx4.font = '8pt NotoSans-Regular';
    ctx4.fillStyle = '#000';

    wrapText(ctx, `第一階段相關措施簡易，現時大部分餐廳亦已推行此類措施， 堂食不提供即棄膠餐具，第一階段應推前至2023年實施，加快走塑步伐。`, 0, 60, 400, 12);
    wrapText(ctx2, `在疫情下，食肆外賣大增，署方居然未有訂立實施第二階段的確實時間表， 期望政府勿再虛耗光陰。署方須承諾第二階推前至2025年實施，在減廢路上急起直追。`, 0, 60, 500, 12);
    wrapText(ctx3, `署方須同時管制餐飲業處所外預先包裝的食品所附帶的即棄膠餐具，未來積極禁止此類食品， 附帶即棄餐具。政府應密切留意並適時作出措施避免餐飲業界，進一步拓展餐飲業處所外預 先包裝食品的業務，以真正杜絕膠餐具生產及使用。`, 0, 60, 500, 12);
    wrapText(ctx4, `署方須同時訂立「可重用餐具社區配套時間表」，提供配套措施鼓勵飲食業界及市民使用可重用餐具、 推動租借可重用餐具的社區普及化，避免因管制即棄塑膠餐具而增加其他即棄餐具(如:紙、竹)的垃圾量， 達至真正源頭減廢。`, 0, 60, 500, 16);

    if(inputEl){
      setTimeout(function(){ 
        setP29ContentOne(canvasP29ContentOne.toDataURL('image/png'))
        setP29ContentTwo(canvasP29ContentTwo.toDataURL('image/png'))
        setP30ContentOne(canvasP30ContentOne.toDataURL('image/png'))
        setP30ContentTwo(canvasP30ContentTwo.toDataURL('image/png'))
       }, 200);
    }
  }, [document.getElementById('p29ContentOne')]);
  return (
    <Box ref={inputEl}>
    <canvas id="p29ContentOne" width="500px" style={{display: 'none'}}></canvas>
    <canvas id="p29ContentTwo" width="500px" style={{display: 'none'}}></canvas>
    <canvas id="p30ContentOne" width="500px" style={{display: 'none'}}></canvas>
    <canvas id="p30ContentTwo" width="500px" style={{display: 'none'}}></canvas>
    <ConsultationForm p29ContentOne={p29ContentOne} p29ContentTwo={p29ContentTwo} p30ContentOne={p30ContentOne} p30ContentTwo={p30ContentTwo}/>
  </Box>);
};

const ConsultationForm = withFormik({
  mapPropsToValues: () => ({
    Email: "",
    FirstName: "",
    LastName: ""
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

  handleSubmit: (values, { setSubmitting, props }) => {

    const p29ContentOne = props.p29ContentOne
    const p29ContentTwo = props.p29ContentTwo
    const p30ContentOne = props.p30ContentOne
    const p30ContentTwo = props.p30ContentTwo

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

    //PAGE 1
    doc.addImage('assets/p27.jpg', 'JPEG', 0, 0, width, height);
    doc.setFontSize(15)
    doc.text(45, 115, values.Email)

    doc.addImage('assets/tick.png', 'PNG', 25, 101, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 60, 142, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 76, 177, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 76, 187, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 76, 197, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 76, 208, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 76, 219, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 76, 230, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 76, 240, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 76, 251, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 76, 261, 5, 5);

    //PAGE 2
    doc.addPage()
    doc.addImage('assets/p28.png', 'PNG', 0, 0, width, height);
    doc.addImage('assets/tick.png', 'PNG', 27, 50, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 27, 89, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 27, 133, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 27, 172, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 27, 215, 5, 5);

    //PAGE 3
    doc.addPage()
    doc.addImage('assets/p29.png', 'PNG', 0, 0, width, height);
    doc.addImage('assets/tick.png', 'PNG', 76, 55, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 76, 64, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 76, 73, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 76, 82, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 76, 91, 5, 5);

    doc.addImage('assets/tick.png', 'PNG', 76, 121, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 76, 130, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 76, 139, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 76, 148, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 66, 207, 5, 5);

    doc.addImage(p29ContentOne, 'PNG', 100, 194);

    doc.addImage('assets/tick.png', 'PNG', 66, 239, 5, 5);

    doc.addImage(p29ContentTwo, 'PNG', 100, 225);

    //PAGE 4
    doc.addPage()
    doc.addImage('assets/p30.png', 'PNG', 0, 0, width, height);
    doc.addImage('assets/tick.png', 'PNG', 25, 57, 5, 5);
    doc.addImage('assets/tick.png', 'PNG', 66, 80, 5, 5);

    doc.addImage(p30ContentOne, 'PNG', 100, 65);
    doc.addImage(p30ContentTwo, 'PNG', 30, 110);

    const uploadPDF = new Blob([doc.output('blob')], {type: 'application/pdf; charset=utf-8'});

    window.open(doc.output('bloburl'), '_blank');

    // formData.append("file", uploadPDF)
    // formData.append("upload_preset", "r7ksxsfb")
    // formData.append("resource_type", "raw")
    // formData.append("public_id", values.FirstName)

    // Axios.post("https://api.cloudinary.com/v1_1/gpea/image/upload", formData).then((res)=>{
    //   const {statusText, data} = res
    //   if(statusText==='OK'){
    //     setSubmitting(false)
    //     const submitData = {
    //       ...hiddenFormValue,
    //       ...values,
    //       pdfFile: data.url
    //     };
    //     // alert(JSON.stringify(submitData, null, 4))
    //   } else {
    //     alert('Something errors')
    //   }
    // })
  },

  displayName: "ConsultationForm",
})(App);

export default FormikWrapper;
