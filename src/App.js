import React, {useState, useEffect} from 'react';
import { ChakraProvider, Box, VStack, HStack, Grid, FormControl, FormLabel, Input, Center, Flex, Button, Select, FormErrorMessage} from '@chakra-ui/react';
import { jsPDF } from "jspdf";
import { Form, withFormik } from "formik";
import { HelmetProvider } from 'react-helmet-async';
import theme from './theme'
import SEO from "./components/seo"
import formContent from './content.json';
import Axios from 'axios'

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
    const splitTitle = doc.splitTextToSize('Comprehensive up-to-date news coverage, aggregated from sources all over the world by', 180);
    doc.text(75, 50, splitTitle);
    doc.addImage('assets/p29.png', 'PNG', 0, 0, width, height);
    doc.addImage('assets/click.png', 'PNG', 76, 55, 5, 5);
    doc.addImage('assets/click.png', 'PNG', 76, 64, 5, 5);
    doc.addImage('assets/click.png', 'PNG', 76, 73, 5, 5);
    doc.addImage('assets/click.png', 'PNG', 76, 82, 5, 5);
    doc.addImage('assets/click.png', 'PNG', 76, 91, 5, 5);

    doc.addImage('assets/click.png', 'PNG', 76, 121, 5, 5);
    doc.addImage('assets/click.png', 'PNG', 76, 130, 5, 5);
    doc.addImage('assets/click.png', 'PNG', 76, 139, 5, 5);
    doc.addImage('assets/click.png', 'PNG', 76, 148, 5, 5);
    doc.addImage('assets/click.png', 'PNG', 66, 207, 5, 5);

//     this.addFileToVFS('NotoSansTC-Medium-normal.ttf', font);
// this.addFont('NotoSansTC-Medium-normal.ttf', 'NotoSansTC-Medium', 'normal');

    const font = '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ASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUOSWRlbnRpdHkuNTkwNzkOSWRlbnRpdHkuNTkwODAOSWRlbnRpdHkuNTkwODEOSWRlbnRpdHkuNTkwODIOSWRlbnRpdHkuNTkwODMOSWRlbnRpdHkuNTkwODQOSWRlbnRpdHkuNTkwODUOSWRlbnRpdHkuNTkwODYOSWRlbnRpdHkuNTkwODcOSWRlbnRpdHkuNTkwODgOSWRlbnRpdHkuNTkwODkOSWRlbnRpdHkuNTkwOTAOSWRlbnRpdHkuNTkwOTEOSWRlbnRpdHkuNTkwOTIOSWRlbnRpdHkuNTkwOTMOSWRlbnRpdHkuNTkwOTQOSWRlbnRpdHkuNTkwOTUOSWRlbnRpdHkuNTkwOTYOSWRlbnRpdHkuNTkwOTcOSWRlbnRpdHkuNTkwOTgOSWRlbnRpdHkuNTkwOTkOSWRlbnRpdHkuNTkxMDAOSWRlbnRpdHkuNTkxMDEOSWRlbnRpdHkuNTkxMDIOSWRlbnRpdHkuNTkxMDMOSWRlbnRpdHkuNTkxMDQOSWRlbnRpdHkuNTkxMTEOSWRlbnRpdHkuNTkxMTIOSWRlbnRpdHkuNTkxMTMOSWRlbnRpdHkuNTkxMTQOSWRlbnRpdHkuNTkxMTUOSWRlbnRpdHkuNTkxMTYOSWRlbnRpdHkuNTkxMTcOSWRlbnRpdHkuNTkxMTgOSWRlbnRpdHkuNTkxMTkOSWRlbnRpdHkuNTkxMjAOSWRlbnRpdHkuNTkxMjEOSWRlbnRpdHkuNTkxMjIOSWRlbnRpdHkuNTkxMjMOSWRlbnRpdHkuNTkxMjQOSWRlbnRpdHkuNTkxMjUOSWRlbnRpdHkuNTkxMjYOSWRlbnRpdHkuNTkxMjcOSWRlbnRpdHkuNTkxMjgOSWRlbnRpdHkuNTkxMjkOSWRlbnRpdHkuNTkxMzAOSWRlbnRpdHkuNTkxMzEOSWRlbnRpdHkuNTkxMzIOSWRlbnRpdHkuNTkxMzMOSWRlbnRpdHkuNTkxMzQOSWRlbnRpdHkuNTkxMzUOSWRlbnRpdHkuNTkxMzYAAAAB//8AAgAAAAEAAAAA2DmvhQAAAADdLDSlAAAAAN0sNKUAARAAAd3+IQBaA+j/CQC/AykAAAABAAAAAAAAAAAAAAAAAAQD6AKaAAAAAAPoAAAD6AA+AD4AMgA+AD4APgAxAD4APgA+AD4APgA+AD4AMgA+ADEAPgAxAD4APgA+AD4APgA+AD4A7AADAOwAAwDs//cA7AAD//n/+QADAAMA7ADrAOwA6wDrAOwA7ABgAPgA+AD4APgA+AD4AAA=';

    doc.addFileToVFS('NotoSansTC-Medium-normal.ttf', font);
    doc.addFont('NotoSansTC-Medium-normal.ttf', 'NotoSansTC-Medium', 'normal');
    doc.setFontSize(10);
    doc.setFont('NotoSansTC-Medium'); // set custom font
    doc.text(100, 210, '12321');
    // doc.text(100, 210, '第一階段相關措施簡易，現時大部分餐廳亦已推行此類措施， 堂食不提供即棄膠餐具，第一階段應推前至2023年實施，加快走塑步伐。');

    // doc.addPage()
    // doc.addImage('assets/p30.png', 'PNG', 0, 0, width, height);

    // doc.save()


    const uploadPDF = new Blob([doc.output('blob')], {type: 'application/pdf'});

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
