import Image from 'next/image'
import { FC } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import  SvgComponent  from './GetBuildingBg1'
import  SvgComponent2  from './GetBuildingBg2'
import { ReactComponent as GetBuildingSecondaryDesktop } from 'public/assets/images/get-building-bg-2-desktop.svg'
import { ReactComponent as RightArrow } from '../../components/icon/images/RightArrow.svg'
import Text from '../../components/typography'
import { Block } from '../blocks/Block'
import { AntButton } from '../form/Button'
import { Icon } from '../icon/Icon'
import './GetBuildingSection.less'

const staticImages = {
  GetBuildingMainDesktop: '/assets/images/get-building-bg-1-desktop.svg',
  GetBuildingSecondaryDesktop: '/assets/images/get-building-bg-2-desktop.svg',
  RightArrow: '@components/icon/images/RightArrow.svg'
}

const GetBuildingSection: FC = () => {
  const getBuildingWithData = {
    text: 'Are you ready to build the future of payments?',
    buttonText: 'Let’s talk',
  }
  const blockProps: typeof Block.defaultProps = {
    title: (
      <Text.Title level={2}>
        Get Building With <span className={'get-building-span'}>NymCard</span>
      </Text.Title>
    ),
    text: <Text.Paragraph size={'lg'}>{getBuildingWithData.text}</Text.Paragraph>,
    button: (
      <AntButton
        href={'/contacts'}
        icon={
          <Icon color={'secondary'} type={'default'} width={32} height={32} shape={'circle'} gap={14} padding={10}>
            <RightArrow color={'#fff'} />
          {/* <img src={staticImages.RightArrow} alt="" /> */}
          </Icon>
        }
        type={'ghost'}
      >
        <Text.Paragraph font='primary' color={'secondary'} style={{ fontSize: '17px' }} weight={500}>
          {getBuildingWithData.buttonText}
        </Text.Paragraph>
      </AntButton>
    ),
  }
  return (
    <Container>
      <Row className={'section get-building'}>
        <Col md={12} className='get-building-pictures'>
        {/* <GetBuildingMainDesktop /> */}
        <SvgComponent />
          {/* <img src={staticImages.GetBuildingMainDesktop} alt="" /> */}
        </Col>
        <Col md={12} className='get-building-content'>
          <Block type='secondary' title={blockProps.title} text={blockProps.text} button={blockProps.button} />
        </Col>
        <div className='get-building-background-wrapper'>
        {/* <GetBuildingSecondaryDesktop className='get-building-background-image' /> */}
        <SvgComponent2 className="get-building-background-image" />
        {/* <img src={staticImages.GetBuildingSecondaryDesktop} className="get-building-background-image" alt="" /> */}
        </div>
      </Row>
    </Container>
  )
}

export { GetBuildingSection }
