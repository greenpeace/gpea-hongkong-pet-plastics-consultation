import React from 'react';
import { Box, HStack, FormControl, FormLabel, Input, Flex, Button, FormErrorMessage} from '@chakra-ui/react';
import { jsPDF } from "jspdf";
import { Form, withFormik } from "formik";
import formContent from './content.json';
import Axios from 'axios'

const FormWrapper = (props) =>{
  const { touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting} = props;
  const space = 4;
  const labelStyle = { fontSize: "xs", color: "gray.400"};

  return (
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
          disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
  );
}

const ConsultationForm = withFormik({
  mapPropsToValues: () => ({
    Email: "",
    FirstName: "",
    LastName: ""
  }),

  validate: (values) => {
    const errors = {};

    if (!values.Email) {
      errors.Email = formContent.empty_data_alert;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
      errors.Email = formContent.invalid_email_alert;
    }

    if (!values.FirstName) {
      errors.FirstName = formContent.empty_data_alert;
    }

    if (!values.LastName) {
      errors.LastName = formContent.empty_data_alert;
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
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

    formData.append("file", uploadPDF)
    formData.append("upload_preset", "r7ksxsfb")
    formData.append("resource_type", "raw")
    formData.append("public_id", md5(values.Email))

    JSON.stringify(formData);

    Axios.post("https://api.cloudinary.com/v1_1/gpea/image/upload", formData).then((res)=>{
      const {statusText, data} = res
      if(statusText==='OK'){
        setSubmitting(false)
        const submitData = {
          ...hiddenFormValue,
          ...values,
          pdfFile: data.url
        };
        alert(JSON.stringify(submitData, null, 4))
      } else {
        alert('Something errors')
      }
    })
  },

  displayName: "ConsultationForm",
})(FormWrapper);

export default ConsultationForm;
