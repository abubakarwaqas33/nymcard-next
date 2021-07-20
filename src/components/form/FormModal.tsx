import Image from 'next/image'
import { Form, Formik } from 'formik'
import { FC, useState } from 'react'
import { Col, Row } from 'react-grid-system'
import { ContactThanks } from '../../components/ContactUs/ContactThanks'
import * as Yup from 'yup'
import crossIcon from 'public/assets/icons/cross-icon.png'
import { ReactComponent as FormBgImage } from 'public/assets/images/form-modal-image.svg'
import Text from '../../components/typography'
import { createEmailSubscription } from '../../api/emailSubscriptions'
import { Block } from '../blocks/Block'
import { Privacy } from '../page/Privacy'
import { AntButton } from './Button'
import { Checkbox } from './Checkbox'
import './FormModal.less'
import { Input } from './Input'

type FormModalProps = {
  title: string
  text: string
  onClose: () => void
}

type SubscriptionFormProps = {
  email: string
  name: string
  privacyPolicy: false
}
const FormModal: FC<FormModalProps> = ({ title, text, onClose }) => {
  const initialValues: SubscriptionFormProps = {
    name: '',
    email: '',
    privacyPolicy: false,
  }

  const errorMessage = 'error'

  const validationSchema = Yup.object({
    name: Yup.string().required('Please, provide your name'),
    email: Yup.string().email('Invalid email format').required('Please, provide valid email address'),
    privacyPolicy: Yup.boolean().oneOf([true], errorMessage),
  })



  const [thanks, setThanks] = useState(true)
  const [hidden, setHidden] = useState(false)
  const onSubmit = (formData)=> {
    createEmailSubscription(formData).then(() => {
      setThanks(false)
      setHidden(true)    
    })
      .catch(err => {
        console.log('something wrong', err)
      })
    // createSubscription({}, formData)
    //   .then(() => setThanks(false))
    //   .then(() => setHidden(true))
  }

  const blockProps = {
    title: <Text.Title className={'form-modal-title'}>{title}</Text.Title>,
    text: <Text.Paragraph className={'form-modal-text'}>{text}</Text.Paragraph>,
  }

  const [privacy, setPrivacy] = useState(true)
  return (
    <div className='form-modal'>
      <div onClick={onClose} className='form-modal-background' />

      <div className='form-modal-window' hidden={hidden}>
        <button onClick={onClose} className='form-modal-close-button'>
          <img src={crossIcon} alt='cross-icon' />
          <Image
          src="/assets/icons/cross-icon.png"
          width="20"
          height="20"
          >
          </Image>
        </button>
        <div className='form-modal-window-wrapper'>
          <Row gutterWidth={46} justify={'center'}>
            <Col xs={24} md={8} className='form-modal-description'>
              <Block title={blockProps.title} text={blockProps.text} />
            </Col>
            <Col xs={24} md={8} className='form-modal-main'>
              <Formik<SubscriptionFormProps>
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {({ errors, touched, values }) => (
                  <Form>
                    <div className='input-wrapper'>
                      <Input
                        error={errors.name}
                        touched={touched.name}
                        value={values.name}
                        label='Your name'
                        name='name'
                      />
                    </div>
                    <div className='input-wrapper'>
                      <Input
                        value={values.email}
                        error={errors.email}
                        touched={touched.email}
                        label='Business email'
                        name='email'
                      />
                    </div>
                    <div className='checkbox-wrapper'>
                      <Checkbox
                        value={values.privacyPolicy}
                        error={errors.privacyPolicy ? '' : ''}
                        touched={touched.privacyPolicy}
                        name='privacyPolicy'
                        labelText={
                          <Text.Paragraph>
                            I agree with the{' '}
                            <a  className={'text-link privacy-link'}  onClick={() => setPrivacy(!privacy)}>
                              privacy policy
                           </a>
                          </Text.Paragraph>
                        }
                      />
                    </div>
                    <AntButton htmlType={'submit'} size={'large'} block disabled={!values.privacyPolicy}>
                      <Text.Paragraph
                        font='tertiary'
                        color='inverse'
                        uppercase
                        size='md'
                        weight={600}
                        style={{ margin: '0 auto' }}
                      >
                        Subscribe
                      </Text.Paragraph>
                    </AntButton>
                  </Form>
                )}
              </Formik>
            </Col>
            <Col xs={16} md={8} className='form-modal-background-wrapper'>
              <FormBgImage className='form-modal-background-image' />
              <Image
          src="/assets/icons/cross-icon.png"
          width="20"
          height="20"
          >
          </Image>
            </Col>
          </Row>
        </div>
      </div>
      {/* Thanks */}
      <ContactThanks thanks={thanks} setThanks={setThanks} footer={true} onClose={onClose} />
      {/*  Privacy */}
      {!hidden && <Privacy hidden={privacy} setPrivacy={setPrivacy} />}
    </div>
  )
}

export { FormModal }
