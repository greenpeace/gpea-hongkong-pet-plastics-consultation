import React, { useEffect, useState } from 'react'
import {
  Box,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  FormErrorMessage,
  Text,
  Checkbox,
  Link,
  Stack,
  Skeleton,
  InputRightElement,
  InputGroup,
  Divider,
  useToast,
} from '@chakra-ui/react'
import { jsPDF } from 'jspdf'
import { Form, withFormik } from 'formik'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import TopSection from './TopSection'
import formContent from './content.json'
import * as helper from '../../helper'
import MiniDonateForm from '../Donate/MiniDonateForm'
import Axios from 'axios'

import sourcePage1 from '../../assets/images/tableware-form-tc_Page_1.jpg'
import sourcePage2 from '../../assets/images/tableware-form-tc_Page_2.jpg'
import sourcePage3 from '../../assets/images/tableware-form-tc_Page_3.jpg'
import sourcePage4 from '../../assets/images/tableware-form-tc_Page_4.jpg'
import sourceTick from '../../assets/images/tick.png'

let page1
let page2
let page3
let page4
let tick

if (process.env.NODE_ENV === 'production') {
  const corsAnywhere = 'https://cors-anywhere.small-service.gpeastasia.org/'

  page1 = `${corsAnywhere}${sourcePage1}`
  page2 = `${corsAnywhere}${sourcePage2}`
  page3 = `${corsAnywhere}${sourcePage3}`
  page4 = `${corsAnywhere}${sourcePage4}`
  tick = sourceTick // skip corsAnywhere because it will be rendered in base64 format
} else {
  page1 = sourcePage1
  page2 = sourcePage2
  page3 = sourcePage3
  page4 = sourcePage4
  tick = sourceTick
}

const FormWrapper = (props) => {
  const {
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    status,
    values,
  } = props
  const [submittedStatus, setSubmittedStatus] = useState(status === 'submitted')
  const space = 4
  const labelStyle = {
    fontSize: 'sm',
    color: 'gray.700',
  }
  const tagStyle = {
    borderRadius: 12,
    color: '#FFF',
    bgColor: '#e26969',
    fontSize: 12,
    px: 2,
    py: 1,
  }
  const inputProps = {
    onChange: handleChange,
    onBlur: handleBlur,
    disabled: isSubmitting,
    bgColor: '#FFFFFF',
    borderRadius: '4px',
  }

  const toast = useToast()
  const numberProps = {
    fontFamily: 'arial',
    lineHeight: '150%',
    fontSize: { base: '16px', sm: '24px' },
    color: '#FFF',
  }

  useEffect(() => {
    if (status) {
      setSubmittedStatus(status === 'submitted')
    }
  }, [status])

  return (
    <Box>
      <TopSection />
      <Stack px={2} spacing={6}>
        {/** STEP 1 */}
        <Flex direction={{ base: 'row' }}>
          <Box
            textAlign={'center'}
            pos={'relative'}
            w={{ base: '36px' }}
            mr={2}
          >
            <Box
              w={'36px'}
              h={'36px'}
              display={'inline-flex'}
              alignItems={'center'}
              justifyContent={'center'}
              borderRadius={'full'}
              bgColor={submittedStatus ? 'gray.200' : '#66cc00'}
            >
              <Text {...numberProps}>{submittedStatus ? `✓` : `1`}</Text>
            </Box>
          </Box>
          <Box pt={2} flex={1}>
            {submittedStatus ? (
              <Box>
                <Text lineHeight={8}>您已完成第一步！</Text>
              </Box>
            ) : isSubmitting ? (
              <Stack w={'100%'}>
                <Skeleton height='20px' w={'100%'} />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Text fontSize='md' py={4}>
                  請耐心稍候，我們正在準備您的意見書範本...
                </Text>
              </Stack>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Box pb={space}>
                  <FormControl
                    id='email'
                    isInvalid={errors.Email && touched.Email}
                  >
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

                <Stack direction={{ base: 'column', sm: 'row' }}>
                  <Box flex={1} pb={space}>
                    <FormControl
                      id='lastName'
                      isInvalid={errors.LastName && touched.LastName}
                    >
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
                    <FormControl
                      id='firstName'
                      isInvalid={errors.FirstName && touched.FirstName}
                    >
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
                </Stack>

                <Box py={4}>
                  <Button
                    py={6}
                    w='100%'
                    type='submit'
                    borderRadius='8'
                    fontSize='xl'
                    color='#FFF'
                    letterSpacing={4}
                    bg='#ff8100'
                    _hover={{ bg: 'campaign.climate' }}
                    isLoading={isSubmitting}
                  >
                    立即行動
                  </Button>
                </Box>

                <Box py={4}>
                  <Stack spacing={10} direction='row'>
                    <Checkbox
                      id={'OptIn'}
                      name={'OptIn'}
                      colorScheme='whatsapp'
                      alignItems={'flex-start'}
                      onChange={handleChange}
                      defaultChecked
                    >
                      <Text fontSize='sm' color='gray.600'>
                        {formContent.form_remind}
                      </Text>
                    </Checkbox>
                  </Stack>
                </Box>
              </Form>
            )}
          </Box>
        </Flex>
        {/** STEP 2 */}
        <Flex direction={{ base: 'row' }}>
          <Box
            textAlign={'center'}
            pos={'relative'}
            w={{ base: '36px' }}
            mr={2}
          >
            <Box
              w={'36px'}
              h={'36px'}
              display={'inline-flex'}
              alignItems={'center'}
              justifyContent={'center'}
              borderRadius={'full'}
              bgColor={submittedStatus ? '#66cc00' : 'gray.200'}
            >
              <Text {...numberProps}>2</Text>
            </Box>
          </Box>
          {submittedStatus ? (
            <Box flex={1}>
              <Text color='gray.700' fontSize={{ base: 16 }}>
                <Text as='p' color='#ff8100' fontWeight={700}>
                  開啟你的電子郵箱
                </Text>
                打開由綠色和平發出，附有
                <Link
                  href={values.CampaignData1__c}
                  color={'#ff8100'}
                  isExternal
                >
                  意見書範本
                </Link>
                的電郵。
              </Text>
              <Text mt={2} fontSize={'14px'} color='gray.700'>
                <sup>*</sup> 如未能收到郵件，請查看垃圾桶或稍等1-2分鐘
              </Text>
            </Box>
          ) : (
            <Divider flex={1} alignSelf={'center'} orientation='horizontal' />
          )}
        </Flex>
        {/** STEP 3 */}
        <Flex direction={{ base: 'row' }}>
          <Box
            textAlign={'center'}
            pos={'relative'}
            w={{ base: '36px' }}
            mr={2}
          >
            <Box
              w={'36px'}
              h={'36px'}
              display={'inline-flex'}
              alignItems={'center'}
              justifyContent={'center'}
              borderRadius={'full'}
              bgColor={submittedStatus ? '#66cc00' : 'gray.200'}
            >
              <Text {...numberProps}>3</Text>
            </Box>
          </Box>
          {submittedStatus ? (
            <Box flex={1}>
              <Text color='gray.700' fontSize={{ base: 16 }}>
                <Text as='p' color='#ff8100' fontWeight={700}>
                  轉寄該電郵
                </Text>
                在「收件人」一欄輸入
                <chakra.button cursor={'pointer'} as={'a'} color='#ff8100'>
                  <CopyToClipboard
                    text={'rdpt@epd.gov.hk'}
                    onCopy={() =>
                      toast({
                        title: 'DONE',
                        description: '您已複製公眾諮詢電郵地址',
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                      })
                    }
                  >
                    <u>rdpt@epd.gov.hk</u>
                  </CopyToClipboard>
                </chakra.button>
                ，按下發送，完成諮詢！
              </Text>
            </Box>
          ) : (
            <Divider flex={1} alignSelf={'center'} orientation='horizontal' />
          )}
        </Flex>
        {/** DONATE **/}
        {submittedStatus &&
          document.location.search.indexOf('utm_source=dd') == -1 && (
            <Stack spacing={4} pt={4} pb={6}>
              <Box>
                <Text lineHeight={'200%'}>
                  <b>
                    綠色和平從不接受政商界資助，因此您的捐助，就是推動項目工作的關鍵！
                  </b>
                </Text>
                <Text lineHeight={'200%'}>
                  請幫助綠色和平督促政府，訂立更積極的減塑目標與政策，持續推動超市淘汰即棄塑膠、招募商戶成為走塑店鋪，源頭減少即棄塑膠！
                </Text>
              </Box>
              <MiniDonateForm />
            </Stack>
          )}
      </Stack>
    </Box>
  )
}

const ConsultationForm = withFormik({
  mapPropsToValues: () => ({
    Email: '',
    FirstName: '',
    LastName: '',
    CampaignData1__c: '',
    OptIn: true,
  }),

  validate: (values) => {
    const errors = {}

    if (!values.Email) {
      errors.Email = formContent.empty_data_alert
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = formContent.invalid_email_alert
    }

    if (!values.FirstName) {
      errors.FirstName = formContent.empty_data_alert
    }

    if (!values.LastName) {
      errors.LastName = formContent.empty_data_alert
    }

    return errors
  },

  handleSubmit: (values, { setSubmitting, setStatus, setValues, props }) => {
    setStatus('processing')
    // setTimeout(() => {
    //   setSubmitting(false)
    //   setStatus('submitted')
    // }, 1000)
    const md5 = require('md5')
    const { p29ContentOne, p29ContentTwo, p30ContentOne, p30ContentTwo } = props

    const getHiddenFields = document.querySelectorAll(
      'input[value][type="hidden"]:not([value=""])',
    )

    const hiddenFormValue = [...getHiddenFields].reduce(
      (obj, e) => ({ ...obj, [e.name]: e.value }),
      {},
    )

    const formData = new FormData()
    const doc = new jsPDF()
    const width = doc.internal.pageSize.getWidth()
    const height = doc.internal.pageSize.getHeight()

    /**
     * PAGE 1
     */
    doc.addImage(page1, 'JPEG', 0, 0, width, height)
    doc.setFontSize(15)
    doc.text(45, 115, values.Email)

    // Not sure why cant map loop in first page
    doc.addImage(tick, 'PNG', 25, 101, 5, 5)
    doc.addImage(tick, 'PNG', 27, 142, 5, 5)
    doc.addImage(tick, 'PNG', 76, 177, 5, 5)
    doc.addImage(tick, 'PNG', 76, 187, 5, 5)
    doc.addImage(tick, 'PNG', 76, 197, 5, 5)
    doc.addImage(tick, 'PNG', 76, 208, 5, 5)
    doc.addImage(tick, 'PNG', 76, 219, 5, 5)
    doc.addImage(tick, 'PNG', 76, 230, 5, 5)
    doc.addImage(tick, 'PNG', 76, 240, 5, 5)
    doc.addImage(tick, 'PNG', 76, 251, 5, 5)
    doc.addImage(tick, 'PNG', 76, 261, 5, 5)

    // [{x:25,y:101},{x:27,y:142},{x:76,y:177},{x:76,y:187},{x:76,y:197},{x:76,y:208},{x:76,y:219},{x:76,y:230},{x:76,y:240},{x:76,y:251},{x:76,y:261}]
    // .map((d,i)=>doc.addImage(tick, 'PNG', d.x, d.y, 5, 5))

    /**
     * PAGE 2
     */
    doc.addPage()
    doc.addImage(page2, 'JPEG', 0, 0, width, height)
    ;[
      { x: 27, y: 50 },
      { x: 27, y: 89 },
      { x: 27, y: 133 },
      { x: 27, y: 172 },
      { x: 27, y: 215 },
    ].map((d, i) => doc.addImage(tick, 'PNG', d.x, d.y, 5, 5))

    /**
     * PAGE 3
     */
    doc.addPage()
    doc.addImage(page3, 'JPEG', 0, 0, width, height)
    ;[
      { x: 76, y: 55 },
      { x: 76, y: 64 },
      { x: 76, y: 73 },
      { x: 76, y: 82 },
      { x: 76, y: 91 },
      { x: 76, y: 121 },
      { x: 76, y: 130 },
      { x: 76, y: 139 },
      { x: 76, y: 148 },
    ].map((d, i) => doc.addImage(tick, 'PNG', d.x, d.y, 5, 5))

    doc.addImage(tick, 'PNG', 66, 207, 5, 5)
    doc.addImage(p29ContentOne, 'PNG', 99, 194, 155, 40)
    doc.addImage(tick, 'PNG', 66, 239, 5, 5)
    doc.addImage(p29ContentTwo, 'PNG', 99, 223, 155, 42)

    /**
     * PAGE 4
     */
    doc.addPage()
    doc.addImage(page4, 'JPEG', 0, 0, width, height)
    doc.addImage(tick, 'PNG', 25, 57, 5, 5)
    doc.addImage(tick, 'PNG', 66, 80, 5, 5)

    doc.addImage(p30ContentOne, 'PNG', 50, 72, 155, 50)
    doc.addImage(p30ContentTwo, 'PNG', 30, 110, 155, 50)

    const uploadPDF = new Blob([doc.output('blob')], {
      type: 'application/pdf; charset=utf-8',
    })

    // PREVIEW
    // window.open(doc.output('bloburl'), '_blank')

    formData.append('file', uploadPDF)
    formData.append('upload_preset', 'r7ksxsfb')
    formData.append('resource_type', 'raw')
    formData.append('public_id', md5(values.Email))

    // JSON.stringify(formData);

    Axios.post(
      'https://api.cloudinary.com/v1_1/gpea/image/upload',
      formData,
    ).then(async (res) => {
      const FORM_URL = helper.getPostURL()
      const CAMPAIGN_ID = helper.getCampaignID()
      const { statusText, data } = res
      if (statusText === 'OK') {
        const formData = {
          ...hiddenFormValue,
          ...values,
          CampaignId: `${CAMPAIGN_ID}`,
          CampaignData1__c: data.url,
        }

        const response = await fetch(`${FORM_URL}`, {
          method: 'POST',
          body: Object.keys(formData).reduce((postData, key) => {
            postData.append(key, formData[key])
            return postData
          }, new FormData()),
        })

        if (response.statusText === 'OK') {
          setSubmitting(false)
          setStatus('submitted')
          setValues({
            ...values,
            CampaignData1__c: data.url,
          })
          // Tracking
          helper.sendPetitionTracking('rdpt')
        } else {
          alert('Server errors')
        }
      } else {
        alert('Something errors')
      }
    })
  },

  displayName: 'ConsultationForm',
})(FormWrapper)

export default ConsultationForm
