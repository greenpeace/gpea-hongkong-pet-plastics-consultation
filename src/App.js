import React, {useState, useEffect} from 'react';
import { ChakraProvider, Box, VStack, HStack, Grid, FormControl, FormLabel, Input, Center, Flex, Button, Select, FormErrorMessage} from '@chakra-ui/react';
import { jsPDF } from "jspdf";
import { Form, withFormik } from "formik";
import { HelmetProvider } from 'react-helmet-async';
import theme from './theme'
import SEO from "./components/seo"
import formContent from './content.json';
import './notosans-regular-normal.js'
import Axios from 'axios'
// import { addfont } from './font'

const App = (props) =>{
  const { touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting} = props;
  const [birthDateYear, setBirthDateYear] = useState([]);
  const mobileCountryCode = [{ label: "+852", value: "852" },{ label: "+853", value: "853" }];
  const space = 4;
  const labelStyle = { fontSize: "xs", color: "gray.400"};

  useEffect(() => {
    let optionYear = [];
    async function fetchOptionYear() {
      let nowYear = new Date().getFullYear();
      let targetYear = nowYear - 110;
      for (var i = nowYear - 20; i >= targetYear; i--) {
        await optionYear.push({ label: i, value: i.toString() });
      }
      setBirthDateYear(optionYear);
    }
    fetchOptionYear(optionYear);
  }, []);

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

          <FormControl>
            <FormLabel {...labelStyle}>
              {formContent.label_phone}
            </FormLabel>
          </FormControl>

          <HStack align='flex-end'>
            <Box
              pb={space}
              mb={errors.MobilePhone && touched.MobilePhone ? "28px" : 0}
            >
              <FormControl id='mobileCountryCode'>
                <Select name='MobileCountryCode' onChange={handleChange}>
                  {mobileCountryCode &&
                    mobileCountryCode.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.label}
                      </option>
                    ))}
                </Select>
              </FormControl>
            </Box>
            <Box flex='1' pb={space}>
              <FormControl
                id='mobilePhone'
                isInvalid={errors.MobilePhone && touched.MobilePhone}
              >
                <Input
                  type='number'
                  name='MobilePhone'
                  placeholder={formContent.label_phone}
                  onChange={handleChange}
                />
                <FormErrorMessage color='red'>
                  {errors.MobilePhone}
                </FormErrorMessage>
              </FormControl>
            </Box>
          </HStack>

          <Box flex='1' pb={space}>
            <FormControl
              id='Birthdate'
              isInvalid={errors.Birthdate && touched.Birthdate}
            >
              <FormLabel {...labelStyle}>
                {formContent.label_year_of_birth}
              </FormLabel>
              <Select
                placeholder={formContent.select}
                onChange={handleChange}
              >
                {birthDateYear &&
                  birthDateYear.map((d) => (
                    <option key={d.value} value={d.value}>
                      {d.value}
                    </option>
                  ))}
              </Select>
              <FormErrorMessage color='red'>
                {errors.Birthdate}
              </FormErrorMessage>
            </FormControl>
          </Box>

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

const ConsultationForm = withFormik({
  mapPropsToValues: () => ({
    Email: "",
    FirstName: "",
    LastName: "",
    MobileCountryCode: "852",
    MobilePhone: "",
    Birthdate: ""
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

    // if (!values.MobilePhone) {
    //   errors.MobilePhone = formContent.empty_data_alert;
    // } else if (values.MobilePhone.toString().length !== 8) {
    //   errors.MobilePhone = formContent.minimum_8_characters;
    // }

    // if (
    //   values.MobilePhone.toString().length === 8 &&
    //   values.MobileCountryCode === "852"
    // ) {
    //   const regex = /^[2,3,5,6,8,9]{1}[0-9]{7}$/i;
    //   if (!regex.test(values.MobilePhone)) {
    //     errors.MobilePhone = formContent.invalid_format_alert;
    //   }
    // }

    // if (
    //   values.MobilePhone.toString().length === 8 &&
    //   values.MobileCountryCode === "853"
    // ) {
    //   const regex = /^[6]{1}[0-9]{7}$/i;
    //   if (!regex.test(values.MobilePhone)) {
    //     errors.MobilePhone = formContent.invalid_format_alert;
    //   }
    // }

    // if (!values.Birthdate) {
    //   errors.Birthdate = formContent.empty_data_alert;
    // }

    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {

    const getHiddenFields = document.querySelectorAll(
      'input[value][type="hidden"]:not([value=""])'
    );

    const hiddenFormValue = [...getHiddenFields].reduce(
      (obj, e) => ({ ...obj, [e.name]: e.value }),
      {}
    )

    const birthdateValue = values.Birthdate ? `${values.Birthdate}-01-01` : "";
    const formData = new FormData()
    const doc = new jsPDF("p", "mm", "a4");
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();

    //PAGE 1
    // doc.addImage('assets/p27.png', 'PNG', 0, 0, width, height);
    // doc.setFontSize(15)
    // doc.text(45, 115, 'values.Email')

    // doc.addImage('assets/click.png', 'PNG', 60, 142, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 76, 176, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 76, 187, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 76, 198, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 76, 209, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 76, 220, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 76, 230, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 76, 241, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 76, 252, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 76, 262, 5, 5);

    //PAGE 2
    // doc.addPage()
    // doc.addImage('assets/p28.png', 'PNG', 0, 0, width, height);
    // doc.addImage('assets/click.png', 'PNG', 27, 50, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 27, 89, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 27, 133, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 27, 172, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 27, 215, 5, 5);

    // doc.addPage()
    // const splitTitle = doc.splitTextToSize('Comprehensive up-to-date news coverage, aggregated from sources all over the world by', 180);
    // doc.text(75, 50, splitTitle);
    // doc.addImage('assets/p29.png', 'PNG', 0, 0, width, height);
    // doc.addImage('assets/click.png', 'PNG', 76, 55, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 76, 64, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 76, 73, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 76, 82, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 76, 91, 5, 5);

    // doc.addImage('assets/click.png', 'PNG', 76, 121, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 76, 130, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 76, 139, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 76, 148, 5, 5);
    // doc.addImage('assets/click.png', 'PNG', 66, 207, 5, 5);

    // doc.text(100, 210, '第一階段相關措施簡易，現時大部分餐廳亦已推行此類措施， 堂食不提供即棄膠餐具，第一階段應推前至2023年實施，加快走塑步伐。');

    // doc.addPage()
    doc.addImage('assets/p30.png', 'PNG', 0, 0, width, height);
    console.log('doc.getFontList()-',doc.getFontList())

    // doc.text(100, 110, '我');

    // const uploadPDF = new Blob([doc.output('blob')], {type: 'application/pdf'});

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
    //       Birthdate: birthdateValue,
    //       pdfFile: data.url
    //     };
    //     alert(JSON.stringify(submitData, null, 4))
    //   } else {
    //     alert('Something errors')
    //   }
    // })
  },

  displayName: "ConsultationForm",
})(App);

export default ConsultationForm;
