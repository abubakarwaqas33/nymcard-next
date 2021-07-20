import Accordion from '@material-ui/core/Accordion'
import Image from 'next/image'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useResource } from '@rest-hooks/core'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { FC, useEffect, useMemo } from 'react'
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
import sanitize from 'sanitize-html'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/components/pagination/pagination.less'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.less'
// import CardIssuingTopBackgroundDesktop from 'public/assets/images/card-issuing-top-bg-desktop.svg'
import { ReactComponent as CardIssuingTopBackgroundDesktop } from 'public/assets/images/card-issuing-top-bg-desktop.svg'
import cardIssuingTopBackgroundMobile from 'public/assets/images/card-issuing-top-bg-mobile.png'
import { ReactComponent as FrictionlessImage } from 'public/assets/images/frictionless.svg'
import { Page } from '../../../components/page/Page'
// import { Block } from '../../components/blocks/Block'
// import { AntButton } from '../../components/form/Button'
// import { Icon } from '../../components/icon/Icon'
import { Block } from '../../../components/blocks/Block'
import { AntButton } from '../../../components/form/Button'
import { Icon } from '../../../components/icon/Icon'
import { ReactComponent as Icon1 } from '../../../components/icon/images/iconImage5.svg'
import { ReactComponent as  Icon2 } from '../../../components/icon/images/iconImage6.svg'
import { ReactComponent as  Icon3 } from '../../../components/icon/images/iconImage7.svg'
import { ReactComponent as  RightArrow } from '../../../components/icon/images/RightArrow.svg'
import { Card } from '../../../components/page/Card'
import { GetBuildingSection } from '../../../components/page/GetBuildingSection'
import { PartnerSection } from '../../../components/page/PartnerSection'
import { CustomPagination } from '../../../components/slider/CustomPagination/CustomPagination'
import Text from '../../../components/typography'
//import { PageEntity } from '../../models/page'
import './CardIssuing.less'

SwiperCore.use([Pagination])

gsap.registerPlugin(ScrollTrigger)
gsap.timeline({ defaults: { lazy: true } })

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    MuiAccordionroot: {
      '&.MuiAccordion-root:before': {
        backgroundColor: '#3F4869',
      },
    },
  }),
)

const CardIssuing: FC<any> = ({ data }) => {
  const classes = useStyles()
  const xs = useMediaQuery({ minWidth: '480px' })
  const sm = useMediaQuery({ minWidth: '576px' })

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 1200px)': () => {
          const frictionlessParts = gsap.utils.toArray('.content-part-wrapper') as Element[]

          frictionlessParts.forEach((part, index) => {
            const masterTl = gsap.timeline()

            const listItems = Array.from(part?.querySelectorAll('.frictionless-list-item'))

            const listElement = part?.querySelector('.frictionless-list')

            if (listItems?.length && listElement) {
              const highestItem = listItems.map(item => item.scrollHeight).reduce((a, b) => (a < b ? b : a))
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              listElement.style = `height: ${highestItem}px`
              gsap.set(listItems, { zIndex: (i, target, targets) => targets.length - i })
            }

            let endTrigger
            if (index === 0 || index === 1) {
              endTrigger = '200% top'
            } else {
              endTrigger = 'bottom top'
            }

            const image = document.querySelector('.frictionless-image') as HTMLElement
            const imageWrapper = document.querySelector('.frictionless-image-part') as HTMLElement

            ScrollTrigger.create({
              animation: masterTl,
              trigger: part,
              start: '-5% top',
              end: endTrigger,
              scrub: true,
              pin: true,
              onToggle: () => {
                part.classList.contains('active') ? part.classList.remove('active') : part.classList.add('active')
                if (index === 0) {
                  image?.classList.add('first-step')
                  image?.classList.remove('second-step')
                  image?.classList.remove('fourth-step')
                  image?.classList.remove('third-step')
                } else if (index === 1) {
                  image?.classList.add('second-step')
                  image?.classList.remove('first-step')
                  image?.classList.remove('fourth-step')
                  image?.classList.remove('third-step')
                } else if (index === 2) {
                  image?.classList.add('third-step')
                  image?.classList.remove('first-step')
                  image?.classList.remove('second-step')
                  image?.classList.remove('fourth-step')
                } else if (index === 3) {
                  image?.classList.add('fourth-step')
                  image?.classList.remove('first-step')
                  image?.classList.remove('third-step')
                  image?.classList.remove('second-step')
                }
              },
              onEnter: () => {
                if (index === 0) {
                  imageWrapper?.classList.remove('bottom')
                  imageWrapper?.classList.add('fixed')
                } else if (index === 3) {
                  imageWrapper?.classList.add('bottom')
                }
              },
              onEnterBack: () => {
                if (index === 3) {
                  imageWrapper?.classList.add('fixed')
                }
              },
              onLeave: () => {
                if (index === 3) {
                  imageWrapper?.classList.remove('fixed')
                }
              },
              onLeaveBack: () => {
                if (index === 0) {
                  imageWrapper?.classList.remove('bottom')
                  imageWrapper?.classList.remove('fixed')
                }
              },
            })

            const frictionlessListAnimation = () => {
              const frictionlessListTl = gsap.timeline({
                scrollTrigger: {
                  trigger: part,
                  start: '1px center',
                  end: 'bottom center',
                },
              })

              listItems.forEach((item, index) => {
                const isLastElement = index === listItems.length - 1
                frictionlessListTl
                  .fromTo(
                    item,
                    {
                      autoAlpha: 0,
                      y: 50,
                    },
                    {
                      autoAlpha: 1,
                      y: 0,
                    },
                  )
                  .to(item, {
                    autoAlpha: isLastElement ? 1 : 0,
                    y: isLastElement ? 0 : -50,
                  })
              })

              return frictionlessListTl
            }

            masterTl.add(frictionlessListAnimation())
          })
        },
      })
    }, 500)
  }, [])

  const cardIconsSizes = {
    width: sm ? 44 : 32,
    height: sm ? 44 : 32,
  }
  // const data: PageEntity = useResource(PageEntity.detailShape(), { id: 3 })
  const heroData = {
    type: 'hero',
    category: data.sections[0]?.subtitle,
    title: data.sections[0].title,
    text: sanitize(`${data.sections[0].description}`, { allowedTags: [] }),
    buttonText: data.sections[0].button?.title,
  }

  const heroBlockProps: typeof Block.defaultProps = {
    type: 'hero',
    subtitle: (
      <Text.Category opacity={0.3} size={'md'} color={'primary'}>
        {heroData.category}
      </Text.Category>
    ),
    title: <Text.Title level={1}>{heroData.title}</Text.Title>,
    text: <Text.Paragraph size={'xl'}>{heroData.text}</Text.Paragraph>,
    button: (
      <AntButton
        href={data.sections[0].button.url}
        icon={
          <Icon color={'secondary'} type={'default'} width={32} height={32} shape={'circle'} gap={14} padding={10}>
            <RightArrow color={'#fff'} />
            {/* <Image  src={RightArrow} width="10" height="10" color="#fff"/> */}
          </Icon>
        }
        type={'ghost'}
      >
        <Text.Link
          url={data.sections[0].button?.url}
          font='primary'
          style={{ fontSize: '17px', color: '#ed6c68' }}
          weight={500}
        >
          {heroData.buttonText}
        </Text.Link>
      </AntButton>
    ),
  }

  const frictionlessData = {
    title: data.sections[2]?.title,
    text: sanitize(`${data.sections[2]?.description}`, { allowedTags: [] }),
    acordion: [
      {
        title: data.sections[3].title,
        path: '/',
        text: sanitize(data.sections[3].description, { allowedTags: [] }),
        description: data.sections[3].cards.map(card => ({
          title: card.title,
          text: card.description,
        })),
      },
      {
        title: data.sections[4].title,
        path: '/',
        text: sanitize(data.sections[4].description, { allowedTags: [] }),
        description: data.sections[4].cards.map(card => ({
          title: card.title,
          text: card.description,
        })),
      },
      {
        title: data.sections[5].title,
        path: '/',
        text: sanitize(data.sections[5].description, { allowedTags: [] }),
        description: data.sections[5].cards.map(card => ({
          title: card.title,
          text: card.description,
        })),
      },
      {
        title: data.sections[6].title,
        path: '/',
        text: sanitize(data.sections[6].description, { allowedTags: [] }),
        description: data.sections[6].cards.map(card => ({
          title: card.title,
          text: card.description,
        })),
      },
    ],
  }

  const nymcardPaymentData = {
    category: data.sections[1]?.subtitle,
    title: data.sections[1]?.title,
  }

  const paymentIcons = [Icon1, Icon2, Icon3]
  const background = useMemo(
   () => <CardIssuingTopBackgroundDesktop className='card-issuing-top-background-image desktop' />,
    // () => <img src={CardIssuingTopBackgroundDesktop} className='card-issuing-top-background-image desktop' />,
    [],
  )
  return (
    <Page title={data.title}>
      <div className='card-issuing-top-background-wrapper'>
        {xs ? (
          background
        ) : (
          <img
            src={cardIssuingTopBackgroundMobile}
            alt='background-image'
            className='card-issuing-top-background-image mobile'
          />
        )}
         <Container>
          <Row className={'section card-issuing-hero'}>
            <Col xs={24} sm={12} lg={11} xxl={10}>
              <Block
                type={heroBlockProps.type}
                subtitle={heroBlockProps.subtitle}
                title={heroBlockProps.title}
                text={heroBlockProps.text}
                button={heroBlockProps.button}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className={'section nymcard-payment'}>
            <Col width={160} xs={24} xl={4} className='category-col category-col-center'>
              <Text.Category size={'md'} color={'secondary'}>
                {nymcardPaymentData.category}
              </Text.Category>
            </Col>
            <Col xl={20}>
              <Row gutterWidth={40}>
                <Col xxl={16} className={'title-wrapper'}>
                  <Text.Title level={2}>{nymcardPaymentData.title}</Text.Title>
                </Col>
                <Col xs={24}>
                  <Hidden xs sm>
                    <div className='nymcard-payment-list'>
                      {data.sections[1]?.cards.map(({ title, description }, index) => {
                        const Icon = paymentIcons[index]
                        return (
                          <Card
                            key={index}
                            size='small'
                            type='gradient'
                            icon={<Icon {...cardIconsSizes} />}
                            //icon={<Image src={Icon} width='105' height='73' className={'openapi-img'}/>}
                            title={title}
                            description={description}
                          />
                        )
                      })}
                    </div>
                  </Hidden>
                  <Visible xs sm>
                    <Swiper
                      pagination={{
                        clickable: true,
                        el: '.custom-pagination.nymcard-payment-pagination',
                        type: 'bullets',
                      }}
                      spaceBetween={8}
                      slidesPerView={1}
                      className={'nymcard-payment-slider'}
                      loop
                      loopedSlides={2}
                    >
                      {data.sections[1]?.cards.map(({ title, description }, index) => {
                        const Icon = paymentIcons[index]
                        return (
                          <SwiperSlide key={index}>
                            <Card
                              size='small'
                              type='gradient'
                              icon={<Icon {...cardIconsSizes} />}
                             // icon={<Image src={Icon} width='105' height='73' className={'openapi-img'}/>}
                              title={title}
                              description={description}
                            />
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                    <CustomPagination className='nymcard-payment-pagination' />
                  </Visible>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>


      </div>
      {/* Frictionless Card Management  */}

       <Container fluid className={'inverse frictionless-section'}>
        <Container className={'section'}>
          <Visible xs sm md lg xl>
            <div className='frictionless-picture-mobile'>
              {/* <img src={FrictionlessImage} className='frictionless-image-mobile' /> */}
              <FrictionlessImage className='frictionless-image-mobile' />

            </div>
            <Row justify={'center'}>
              <Block
                className='frictionless-head'
                title={
                  <Text.Title level={2} align='center' style={{ marginBottom: '12px' }}>
                    {frictionlessData.title}
                  </Text.Title>
                }
                text={
                  <Text.Paragraph align='center' weight={400} style={{ fontSize: '13px' }}>
                    {frictionlessData.text}
                  </Text.Paragraph>
                }
              />
            </Row>
            <Row justify={'start'}>
              <Text.Category uppercase size={'md'} color={'secondary'} style={{ marginBottom: '8px' }}>
                Features
              </Text.Category>
              <div className={classes.root}>
                {frictionlessData.acordion.map(({ title, text }, index) => {
                  return (
                    <Accordion
                      key={index}
                      classes={{
                        root: classes.MuiAccordionroot,
                      }}
                      style={{
                        margin: '0',
                        backgroundColor: 'transparent',
                        color: '#fff',
                        border: 'none',
                        boxShadow: 'none',
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ fill: '#fff' }} />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                        style={{ padding: '0' }}
                      >
                        <Text.Paragraph font={'primary'} style={{ fontSize: '16px' }} weight={600}>
                          {title}
                        </Text.Paragraph>
                      </AccordionSummary>
                      <AccordionDetails style={{ padding: '0' }}>
                        <Col>
                          <Row className='frictionless-accordion-details'>
                            {text &&
                              text.length &&
                              text.split('\n').map((paragraph, index) => (
                                <Text.Paragraph key={index} opacity={0.9}>
                                  {paragraph}
                                </Text.Paragraph>
                              ))}
                          </Row>
                        </Col>
                      </AccordionDetails>
                    </Accordion>
                  )
                })}
              </div>
            </Row>
          </Visible>
          <Visible xxl>
            <Row justify={'center'} style={{ marginBottom: '100px' }}>
              <Block
                style={{ width: '100%', alignItems: 'center' }}
                title={
                  <Text.Title level={3} weight={700} align='center' style={{ marginBottom: '41px' }}>
                    {frictionlessData.title}
                  </Text.Title>
                }
                text={
                  <Text.Paragraph align='center' weight={400} style={{ fontSize: '20px', width: '773px' }}>
                    {frictionlessData.text}
                  </Text.Paragraph>
                }
              />
            </Row>
            <Row>
              <div className='animated-frictionless-part'>
                {frictionlessData.acordion.map((item, index) => {
                  return (
                    <div key={index} className='content-part-wrapper'>
                      <Row align='start'>
                        <Col lg={4} className='category-col category-col-left' width={160}>
                          <Text.Category uppercase size={'md'} color={'secondary'}>
                            Features
                          </Text.Category>
                        </Col>
                        <Col lg={20}>
                          <div className='content-part'>
                            <Block
                              type='secondary'
                              title={
                                <Text.Title level={3} style={{ marginBottom: '22px' }}>
                                  {item.title}
                                </Text.Title>
                              }
                              text={item.text.split('\n').map((paragraph, index) => (
                                <Text.Paragraph key={index} opacity={0.9} style={{ fontSize: 16 }}>
                                  {paragraph}
                                </Text.Paragraph>
                              ))}
                              style={{ marginBottom: '30px' }}
                            />
                            {item.description && item.description.length > 0 && (
                              <ul className='frictionless-list'>
                                {item.description.map(({ title, text }, index) => (
                                  <li key={index} className='frictionless-list-item'>
                                    <Row style={{ margin: '34px 0' }}>
                                      <Col lg={7} style={{ padding: '0', marginRight: '18px' }}>
                                        <Text.Title weight={600} style={{ fontSize: '14px' }}>
                                          {title}
                                        </Text.Title>
                                      </Col>
                                      <Col lg={16} style={{ padding: '0' }}>
                                        <Text.Paragraph style={{ fontSize: '14px' }}>{text}</Text.Paragraph>
                                      </Col>
                                    </Row>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  )
                })}
              </div>
              <div className='frictionless-image-part'>
                {/* <img src={FrictionlessImage} className='frictionless-image'/> */}
                <FrictionlessImage className='frictionless-image' />
              </div>
            </Row>
          </Visible>
        </Container>
      </Container>

      <PartnerSection />
      <GetBuildingSection />
    </Page>
  )
}

export { CardIssuing as default }
