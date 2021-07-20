import { Form, Formik } from 'formik'
import moment from 'moment'
import React, { FC, useState } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
import * as Yup from 'yup'
// import SoonImg from 'public/assets/images/coming-soon.svg'
import SoonImg from '../components/page/ComingSoon'
import { Page, Text } from '../components'
import { Block } from '../components/blocks/Block'
import { AntButton } from '../components/form/Button'
import { Icon } from '../components/icon/Icon'
import { Input } from '../components/form/Input'
// import { EmailSubscriptionEntity } from '../models/email-subscription'
import { ReactComponent as RightArrow } from '../components/icon/images/RightArrow.svg'
import { ContactThanks } from '../components/ContactUs/ContactThanks'
import { getMenuCategories } from '../api/categories'
import Layout from '../components/Layout/MainLayout/index';
import './ComingSoon.less'

const ComingSoon:FC<any> = ({ menu }) => {
    const isMobileDevice = useMediaQuery({ maxWidth: 991 });
    const initialValues = {
        email: '',
        name: '',
    };
    const errorMessage = 'error';
    const _a = useState(true), thanks = _a[0], setThanks = _a[1];
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required(errorMessage),
    });
    // const createSubscription = useFetcher(EmailSubscriptionEntity.createShape());
    // const onSubmit = function (values) {
    //     createSubscription({}, values).then(function () { return setThanks(false); });
    // };

  return (
	  <Layout menu={menu}>
    <Page title={'FAQ'}>
      <Container style={{ paddingTop: '43px', position: 'relative' }}>
        <Row justify='center' align='center'>
          <Col xl={15}>
            <Block
              subtitle={<Text.SubTitle className={'soon-subtitle'} style={{textAlign: 'center'}}>404 page not found</Text.SubTitle>}
              title={<Text.Title className={'soon-title'} style={{textAlign: 'center'}}>This page is no<br /> longer available</Text.Title>}
              text={<Text.Paragraph className={'soon-text'} style={{textAlign: 'center'}}>The page you were looking for could not be found.<br /> It might have been removed, renamed, or did not exist</Text.Paragraph>}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '47px',
              }}
            />
            <AntButton
                                    href="/"
                                    icon={
                                      <Icon
                                        color={'secondary'}
                                        type={'default'}
                                        width={32}
                                        height={32}
                                        shape={'circle'}
                                        gap={14}
                                        padding={10}
                                      >
                                        <RightArrow color={'#fff'} />
                                      </Icon>
                                    }
                                    type={'ghost'}
                                    style={{ marginTop: '20px', justifyContent: 'center', border: 'none' }}
                                  >
                                    <Text.Paragraph
                                      font='primary'
                                      color={'secondary'}
                                      align="center"
                                      style={{ fontSize: '17px' }}
                                      weight={500}
                                    >
                                      Go back home
                                    </Text.Paragraph>
                                  </AntButton>
          </Col>
        </Row>
        <Row justify='center'>
          <Col xl={15} style={{ display: 'flex', justifyContent: 'center' }}>
            {/* <img src={SoonImg} style={isMobileDevice ? {} : { height: '450px' }} /> */}
            <SoonImg style={isMobileDevice ? {} : { height: '450px' }} />
          </Col>
        </Row>
        <ContactThanks thanks={thanks} setThanks={setThanks} />
      </Container>
    </Page>
    </Layout>
  )
}


export async function getStaticProps() {

  return getMenuCategories().then(response => {
         const {data: menu} = response;
		 return {
			props: { 
			  menu,
			  loader:false
			 }, 
		  }
 
   }).catch(() => {
     return {
       notFound: true,
     }
 
   })
 }

export { ComingSoon as default }
