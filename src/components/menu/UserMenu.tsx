import React, { FC } from 'react'
import { Col, Row } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
//import { useLocation } from 'react-router-dom'
import { useRouter } from 'next/router'
import { AntButton } from '../form/Button'
import { Icon } from '../icon/Icon'
//icon/images/RightArrow.svg
//import RightArrow from '../icon/images/RightArrow.svg';
import { ReactComponent as RightArrow } from '../icon/images/RightArrow.svg'
import { Text } from '../index'
import './UserMenu.less'

const UserMenu: FC = () => {
  const { pathname } = useRouter()
  const isMobileDevice = useMediaQuery({ maxWidth: 767 })
  return (
    <Row align={'center'} justify={'between'} className={isMobileDevice ? 'burger-btn-wrapper' : ''}>
      <Col key={0} width={'auto'}>
        <AntButton
          icon={
            <Icon type={'default'} orderReversed={true} gap={8} padding={0} width={'unset'}>
              <RightArrow color={'#35488F'} />
            </Icon>
          }
          type={'ghost'}
          className={pathname.endsWith('why-nymcard') ? 'why-nymcard-style' : ''}
        >
          <Text.Paragraph uppercase font={'tertiary'} weight={700} style={{ color: '#35488F', padding: '0' }}>
            <a rel='noreferrer' href={'https://portal.sand.platform.nymcard.com/default/login'} target={'_blank'} referrerPolicy={'no-referrer'}>
              Sign-in&nbsp;
            </a>
          </Text.Paragraph>
        </AntButton>
      </Col>
      <Col key={1} width={'auto'} style={isMobileDevice ? { paddingRight: '16px' } : undefined}>
        <AntButton style={{ width: '128px', height: '40px', borderRadius: '86px', justifyContent: 'center' }}>
          <Text.Link url={'/contacts'} size='sm' uppercase weight={700} color={'inverse'} style={{ margin: '0 auto' }}>
            Contact us
          </Text.Link>
        </AntButton>
      </Col>
    </Row>
  )
}

export { UserMenu }
