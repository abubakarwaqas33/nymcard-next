import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import './style.less';
import { FC, useState } from 'react'
import { Col, Container, Row, Visible, setConfiguration } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
import { Text } from '../../../index'
//import { useMenuCategories } from '../../../models/category'
import { CategoryEntity } from '../../../models/category'
import { Privacy } from '../../../components/page/Privacy'
import { Terms } from '../../../components/page/Terms'
import { EmailInput } from './EmailInput'
//import './Footer.less'
import { Menu } from './Menu'

const FooterHeader: FC = props => (
  <Text.Paragraph uppercase opacity={0.5} weight={500} font={'tertiary'} {...props}>
    {props.children}
  </Text.Paragraph>
)


const Footer: FC<{ menu: CategoryEntity[] }> = ({ menu }) => {
  const isMobileDevice = useMediaQuery({ maxWidth: 767 })
  setConfiguration({
    gutterWidth: 32,
    gridColumns: 24,
    breakpoints: [480, 576, 768, 992, 1200],
    containerWidths: [420, 540, 740, 960, 1264],
  })  
  const [privacy, setPrivacy] = useState(true)
  const [terms, setTerms] = useState(true)
  return (
    <>
      <footer className={'footer inverse'}>
        <Container className={'footer-container'}>
          <Row align={'start'} justify={'between'}>
            <Col sm={24} md={5}>
              <Text.Link
                font={'tertiary'}
                size={'lg'}
                weight={600}
                style={{ display: 'block', marginBottom: '14px' }}
              >
                  <Image
                    src="/assets/images/icons/footer-logo.svg"
                    width="83"
                    height="20"
                  >
                  </Image>
              </Text.Link>
              <Text.Paragraph
                opacity={0.5}
                weight={400}
                font={'tertiary'}
                size={'sm'}
                style={isMobileDevice ? { marginBottom: '39px', lineHeight: '22px' } : { lineHeight: '22px' }}
              >
                NymCard payments LTD
                <Visible md lg xl xxl>
                  <br />
                  <br /> NymCard
                </Visible>
                <br /> Al Khatem Tower, 33rd floor
                <br /> ADGM Square, Al Maryah Island
                <br /> Abu Dhabi, U.A.E
              </Text.Paragraph>
            </Col>

            <Visible xs sm md lg xl xxl>
              <Col sm={24} md={12} className={'menu-wrapper'}>
                <Menu type='footer' data={menu} />
              </Col>
            </Visible>

            <Col sm={24} md={7} lg={5}>
              <Row>
                <Visible xs sm>
                  <Col xs={12} sm={12} className={'follow-wrapper'}>
                    <FooterHeader>Follow Us</FooterHeader>
                    <div className={'social-wrapper'}>
                      <a
                        rel='noreferrer'
                        href='https://www.linkedin.com/company/nymcard/'
                        target='_blank'
                        className={'footer-social-link'}
                      >
                        <Image
                    src="/assets/images/icons/Linkedin.svg"
                    width="26"
                    height="26"
                  >
                  </Image>
                      </a>
                      <a
                        rel='noreferrer'
                        href='https://twitter.com/nymcard'
                        target='_blank'
                        className={'footer-social-link'}
                      >
                        <Image
                    src="/assets/images/icons/Twitter.svg"
                    width="26"
                    height="26"
                  >
                  </Image>
                      </a>
                    </div>
                  </Col>

                  <Col xs={11} sm={11}>
                    <Link href={'/faq'}>
                      <Text.Paragraph style={{ marginBottom: '10px' }}>Support/ FAQ</Text.Paragraph>
                      {/* <Support className={'footer-social-link'} /> */}
                      {/* <img
                    src="/assets/images/icons/Support.svg"
                  ></img> */}
                    </Link>
                  </Col>
                </Visible>

                <Col md={24} className={'footer-subscribe'}>
                  <FooterHeader>Subscribe</FooterHeader>
                  <EmailInput />
                </Col>

                <Visible md lg xl xxl>
                  <Col className={'follow-wrapper'}>
                    <FooterHeader>Follow Us</FooterHeader>
                    <div className={'social-wrapper'}>
                      <a
                        rel='noreferrer'
                        href='https://www.linkedin.com/company/nymcard/'
                        target='_blank'
                        className={'footer-social-link'}
                      >
                        <Image
                    src="/assets/images/icons/Linkedin.svg"
                    width="26"
                    height="26"
                  >
                  </Image>
                      </a>
                      <a
                        rel='noreferrer'
                        href='https://twitter.com/nymcard'
                        target='_blank'
                        className={'footer-social-link'}
                      >
                        <Image
                    src="/assets/images/icons/Twitter.svg"
                    width="26"
                    height="26"
                  >
                  </Image>
                      </a>
                    </div>
                  </Col>
                </Visible>
              </Row>
            </Col>
          </Row>

          <Visible xs sm>
            <Col sm={24} lg={'content'}>
              <Row gutterWidth={12} justify={'between'} align={'center'}>
                <Col width={'auto'}>
                  <Text.Paragraph style={{ fontSize: '11px' }} font={'tertiary'} opacity={0.5} weight={400}>
                    Site map
                  </Text.Paragraph>
                </Col>
                <span className={'footer-line'} />
                <Col width={'auto'}>
                  <Text.Paragraph
                    onClick={() => setTerms(!terms)}
                    style={{ fontSize: '11px' }}
                    font={'tertiary'}
                    opacity={0.5}
                    weight={400}
                  >
                    API terms and conditions
                  </Text.Paragraph>
                </Col>
                <span className={'footer-line'} />
                <Col width={'auto'}>
                  <Text.Paragraph
                    onClick={() => setPrivacy(!privacy)}
                    style={{ fontSize: '11px' }}
                    font={'tertiary'}
                    opacity={0.5}
                    weight={400}
                  >
                    Privacy policy
                  </Text.Paragraph>
                </Col>
              </Row>
            </Col>
          </Visible>

          <Row align='center' className={'footer-line-wrapper'}>
            <Visible md lg xl xxl>
              <Col md={1}>
                <Link href={'/faq'}>
                <Image
                    src="/assets/images/icons/Support.svg"
                    width="24"
                    height="24"
                  >
                  </Image>
                </Link>
              </Col>
               <Col sm={24} md={3}>
                <Text.Link url={'/faq'}>Support/ FAQ</Text.Link>
              </Col>
            </Visible>
          </Row>

          <Row align={'center'} justify={'between'} className={'footer-copyright'}>
            <Visible xs sm md lg xl xxl>
              <Col sm={24} lg={'content'}>
                <Text.Paragraph font={'tertiary'} opacity={0.5} weight={400}>
                  Copyright © 2021 NymCard
                </Text.Paragraph>
              </Col>
            </Visible>
            <Visible md lg xl xxl>
              <Col sm={24} lg={'content'}>
                <Row gutterWidth={12} justify={'between'} align={'center'}>
                  <Col width={'auto'}>
                    <Text.Link size={'sm'} font={'tertiary'} opacity={0.5} weight={400}>
                      Site map
                    </Text.Link>
                  </Col>
                  <span className={'footer-line'} />
                  <Col width={'auto'}>
                    {/* <Text.Link
                      onClick={() => setTerms(!terms)}
                      size={'sm'}
                      font={'tertiary'}
                      opacity={0.5}
                      weight={400}
                    >
                      API terms and conditions
                    </Text.Link> */}
                    <a className="text-link text text-font-tertiary text-color-primary text-sm"  
                    onClick={() => setTerms(!Terms)}>
                      API terms and conditions
                    </a>
                  </Col>
                  <span className={'footer-line'} />
                  <Col width={'auto'}>
                    {/* <Text.Link
                      size={'sm'}
                      font={'tertiary'}
                      opacity={0.5}
                      weight={400}
                    >
                      Privacy policy
                    </Text.Link> */}
                    <a className="text-link text text-font-tertiary text-color-primary text-sm"  
                    onClick={() => setPrivacy(!privacy)}>Privacy policy</a>
                  </Col>
                </Row>
              </Col>
            </Visible>
          </Row>
        </Container>
      </footer>
      {!privacy && <Privacy hidden={privacy} setPrivacy={setPrivacy} />}
      {!terms && <Terms hidden={terms} setTerms={setTerms} />}
    </>
  )
}

export default Footer 

