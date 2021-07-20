import { Col, Row } from 'antd'
import 'antd/lib/col/style/css.js'
import 'antd/lib/form/style/index.less'
import 'antd/lib/input/style/index.less'
import 'antd/lib/radio/style/index.less'
import 'antd/lib/row/style/css.js'
import 'antd/lib/select/style/css.js'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import { Form, Input, Radio } from 'formik-antd'
import React, { FC, useState } from 'react'
import { Container } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
import * as Yup from 'yup'
import { Block } from '../../components/blocks/Block'
import { AntInput } from '../../components/form/AntInput'
import { AntSelect } from '../../components/form/AntSelect'
import { AntButton } from '../../components/form/Button'
import Page from '../../components/page'
import Text from '../../components/typography'
import { ContactThanks } from './ContactThanks'
import './ContactUs.less'
import countryList from './countries.json'
import { HeroBlock } from './HeroBlock'
import reasonList from './reasons.json'
import ReCAPTCHA from 'react-google-recaptcha'
import { submitContactusForm } from '../../api/emailSubscriptions'

type ContactFormProps = {
  first_name: string
  last_name: string
  email: string
  phone: string
  company_size: string
  country: string
  reason: string
  message: string
  token: string
}

const ContactUs: FC = () => {
  const md = useMediaQuery({ minWidth: 768 })
  const [thanks, setThanks] = useState(true)
  const router = useRouter()

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
    },
    wrapperCol: {
      xs: { span: 24 },
    },
  }

  const publicEmailsRegex = /^(?!.*(@gmail|@yahoo|@yandex|@mail|@aol|@outlook|@zoho|@icloud|@hubspot)).*$/gi

  const validationSchema = Yup.object({
    first_name: Yup.string().required('Please input first name!'),
    last_name: Yup.string().required('Please input last name!'),
    phone: Yup.number().typeError('Please input valid phone number!').required('Please input your phone number!'),
    email: Yup.string()
      .email('Invalid email format')
      .matches(publicEmailsRegex, 'Please input corporate email')
      .required('Please input your email!'),
    country: Yup.string().required('Please choose your country'),
    company_size: Yup.string().required('Please choose your company size'),
    reason: Yup.string().required('Please choose reason for contact'),
    token: Yup.string().required('Please check the reCAPTCHA box'),
  })

  const initialValues: ContactFormProps = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    country: '',
    company_size: '1-10',
    reason: '',
    message: '',
    token: '',
  }

  const onSubmit = async (formData) => {
  
    submitContactusForm(formData).then(() => {
      router.push('/success-message')
    })
      .catch(err => {
        console.log('error', err)
      })
  }

  return (
    <Page title={'Contact Us'}>
      <Container className={'background-wrapper'}>
        <div className={'higher-wrapper'}>
          <HeroBlock />
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {form => {
              return (
                <Form
                  colon={false}
                  labelAlign={'left'}
                  requiredMark={false}
                  {...formItemLayout}
                  style={{ width: md ? '35%' : '100%' }}
                  className={'contact-us-form'}
                >
                  <Row gutter={[30, 0]}>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                      <div className='input-wrapper'>
                        <AntInput name={'first_name'} label={'First name'} />
                      </div>
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                      <div className='input-wrapper'>
                        <AntInput name={'last_name'} label={'Last name'} />
                      </div>
                    </Col>
                  </Row>
                  <div className='input-wrapper'>
                    <AntInput name={'email'} label={'Business Email'} />
                  </div>
                  <div className='input-wrapper'>
                    <AntInput name={'phone'} label={'Phone'} />
                  </div>
                  <div className='select-wrapper'>
                    <AntSelect name={'country'} label={'Country'} data={countryList} value={form.values.country} />
                  </div>
                  <div className='radio-wrapper'>
                    <Form.Item name='company_size' label='Company Size' className={'contact-us-radio-box'}>
                      <Radio.Group name='company_size'>
                        <Radio name='company_size' value='1-10'>
                          (1-10)
                        </Radio>
                        <Radio name='company_size' value='10-50'>
                          (10-50)
                        </Radio>
                        <Radio name='company_size' value='50-200'>
                          (50-200)
                        </Radio>
                        <Radio name='company_size' value='200+'>
                          (200+)
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                  </div>
                  <div className='select-wrapper'>
                    <AntSelect
                      name={'reason'}
                      label={'Reason for Contact'}
                      data={reasonList}
                      value={form.values.reason}
                    />
                  </div>
                  <div className='textarea-wrapper'>
                    <Form.Item name={'message'} label='Message' className={'contact-us-textarea-box'}>
                      <Input.TextArea name={'message'} style={{ height: '115px' }} />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name='token'>
                      <ReCAPTCHA
                        sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                        onChange={(token: string | null) => form.setFieldValue('token', token)}
                      />
                    </Form.Item>
                  </div>
                  <AntButton
                    block={!md}
                    type={'default'}
                    size={'large'}
                    htmlType={'submit'}
                    style={{ marginTop: md ? 44 : 40, minWidth: 128 }}
                  >
                    <Text.Paragraph font='tertiary' color={'inverse'}>
                      Send
                    </Text.Paragraph>
                  </AntButton>
                </Form>
              )
            }}
          </Formik>
        </div>
        <div className={'lowest-wrapper'}>
          <div className={'cards-wrapper'}>
            <div className={'address'}>
              <Block
                subtitle={<Text.SubTitle className={'address-subtitle'}>Address</Text.SubTitle>}
                title={
                  <Text.Title level={5} className={'address-title'}>
                    NymCard Headquarters
                  </Text.Title>
                }
                text={
                  <Text.Paragraph className={'address-text'}>
                    Al Khatem Tower, 33rd floor ADGM Square, Al Maryah Island Abu Dhabi, U.A.E
                  </Text.Paragraph>
                }
              />
            </div>
            <div className={'communication'}>
              <Block
                title={
                  <Text.Title level={5} className={'communication-title'}>
                    General Communication
                  </Text.Title>
                }
                text={
                  <Text.Paragraph className={'communication-text'} font={'primary'}>
                    Please email:{' '}
                    <a href='mailto:info@nymcard.com' className={'communication-link'}>
                      Info@nymcard.com
                    </a>{' '}
                    for general inquiries and partnership opportunities.
                  </Text.Paragraph>
                }
              />
            </div>
          </div>

          <div className={'social-wrapper'}>
            <span className={'social-text'}>Social:</span>
            <div className={'links-wrapper'}>
              <a
                rel='noreferrer'
                href='https://www.linkedin.com/company/nymcard/'
                target='_blank'
                className={'social-link'}
              />
              <a rel='noreferrer' href='https://twitter.com/nymcard' target='_blank' className={'social-link'} />
            </div>
          </div>
        </div>
        <ContactThanks thanks={thanks} setThanks={setThanks} isMobile={!md} />
      </Container>
    </Page>
  )
}

export { ContactUs }
