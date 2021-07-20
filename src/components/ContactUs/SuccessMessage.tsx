import React, { FC, useState } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
import Page from '../../components/page'
import Text from '../../components/typography'
import { Block } from '../../components/blocks/Block'
import { AntButton } from '../../components/form/Button'
import { ContactThanks } from './ContactThanks'
import { Icon } from '../icon/Icon'
import { ReactComponent as RightArrow } from 'src/components/icon/images/RightArrow.svg'

import './SuccessMessage.less'

const SuccessMessage: FC = () => {
  const isMobileDevice = useMediaQuery({ maxWidth: 991 })

  const youCanFindData = {
    buttonText: 'Go back to home page',
  }
  const [thanks, setThanks] = useState(true)

  return (
    <Page title={'success-message'}>
      <Container style={{ paddingTop: '43px', position: 'relative' }}>
        <Row justify='center' align='center'>
          <Col>
            <Block
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '47px',
              }}
              subtitle={<Text.SubTitle className={'success-subtitle'}>You are one step closer to building something great</Text.SubTitle>}
              title={<Text.Title className={'success-title'}>Thank You For Reaching Out!</Text.Title>}
              text={<Text.Paragraph className={'success-text'}>We will get back to you very soon</Text.Paragraph>}
              button={<AntButton
                href={'/'}
                icon={
                  <Icon color={'secondary'} type={'default'} width={32} height={32} shape={'circle'} gap={14} padding={10}>
                    <RightArrow color={'#fff'} />
                  </Icon>
                }
                type={'ghost'}
                style={{border: 'none'}}
              >
                <Text.Paragraph font='primary' color={'secondary'} style={{ fontSize: '17px' }} weight={500}>
                {youCanFindData.buttonText}
                </Text.Paragraph>
              </AntButton>}

            />
          </Col>
        </Row>

        <Row justify='center'>
          <Col xl={15} style={{ display: 'flex', justifyContent: 'center' }}>
            <img src='../../assets/images/coming-soon.svg' style={isMobileDevice ? {} : { height: '450px' }} className='success-image' />
          </Col>
        </Row>
        <ContactThanks thanks={thanks} setThanks={setThanks} />
      </Container>
    </Page>
  )
}

export { SuccessMessage as default }
