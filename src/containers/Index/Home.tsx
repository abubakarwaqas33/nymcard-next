import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import { useResource } from '@rest-hooks/core'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { isFirefox, isSafari } from 'react-device-detect'
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/components/pagination/pagination.less'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.less'
import buildWithUsDesktop1 from '/public/assets/images/build-with-us-desktop-1.svg'
// const buildWithUsDesktop1 = require('/public/assets/images/build-with-us-desktop-1.svg')
import buildWithUsDesktop2 from 'public/assets/images/build-with-us-desktop-2.svg'
import buildWithUsMobile from 'public/assets/images/build-with-us-mobile.svg'
import { ReactComponent as HomeTopBackgroundDesktop } from 'public/assets/images/home-top-bg-desktop.svg'
import homeTopBackgroundMobile from 'public/assets/images/home-top-bg-mobile.png'
// import  ModernCardImage from '../../components/page/modern-card-image'
import { ReactComponent as ModernCardImage } from 'public/assets/images/modern-card-image.svg'
import { ReactComponent as WeBuildMoreDesktop } from 'public/assets/images/we-build-more-desktop.svg'
// import WeBuildMoreDesktop from '../../components/page/WeBuildMoreDesktop'
import weBuildMoreMobile from 'public/assets/images/we-build-more-mobile.png'
import { ReactComponent as Cube1 } from '../../components/icon/images/cube1.svg'
import { ReactComponent as Cube2 } from '../../components/icon/images/cube2.svg'
import { ReactComponent as Cube3 } from '../../components/icon/images/cube3.svg'
import { ReactComponent as Cube4 } from '../../components/icon/images/cube4.svg'
import { ReactComponent as IconImage1 } from '../../components/icon/images/iconImage1.svg'
import { ReactComponent as IconImage2 } from '../../components/icon/images/iconImage2.svg'
import { ReactComponent as IconImage3 } from '../../components/icon/images/iconImage3.svg'
import { ReactComponent as IconImage4 } from '../../components/icon/images/iconImage4.svg'
import { ReactComponent as RightArrow } from '../../components/icon/images/RightArrow.svg'
import { Page } from '../../components/page/Page'
import { Block } from '../../components/blocks/Block'
import { Hero } from '../../components/blocks/Hero'
import { AntButton } from '../../components/form/Button'
import { FormModal } from '../../components/form/FormModal'
import { Icon } from '../../components/icon/Icon'
import { Card } from '../../components/page/Card'
import { GetBuildingSection } from '../../components/page/GetBuildingSection'
import { PartnerSection } from '../../components/page/PartnerSection'
import { CustomPagination } from '../../components/slider/CustomPagination/CustomPagination'
import Text from '../../components/typography'
import { PageEntity } from '../../models/page'
import './Home.less'

const staticImages = {
  HomeTopBackgroundDesktop: '/assets/images/home-top-bg-desktop.svg',
  ModernCardImage: '/assets/images/modern-card-image.svg',
  WeBuildMoreDesktop: '/assets/images/we-build-more-desktop.svg'
}


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

SwiperCore.use([Pagination])
gsap.registerPlugin(ScrollTrigger)
gsap.timeline({ defaults: { lazy: false } })

const Home: FC<any> = ({ page }) => {
  const classes = useStyles()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 1200px)': () => {
          const modernParts = gsap.utils.toArray('.content-part-wrapper') as Element[]

          modernParts.forEach((part, index) => {
            const masterTl = gsap.timeline()
            const listItems = Array.from(part?.querySelectorAll('.modern-item'))
            const listElement = part?.querySelector('.modern-list')
            const modernButton = part?.querySelector('.ant-btn')
            if (listItems?.length && listElement && modernButton) {
              const highestItem = listItems.map(item => item.scrollHeight).reduce((a, b) => (a < b ? b : a))
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              listElement.style = `height: ${highestItem}px`
              gsap.set(listItems, { zIndex: (i, target, targets) => targets.length - i })
            }
            let endTrigger
            if (index === 0 || index === 1) {
              endTrigger = '300% top'
            } else {
              endTrigger = 'bottom top'
            }
            const image = document.querySelector('.modern-image') as HTMLElement
            const imageWrapper = document.querySelector('.modern-image-part') as HTMLElement
            ScrollTrigger.create({
              animation: masterTl,
              trigger: part,
              start: '-5% top',
              end: endTrigger,
              scrub: true,
              pin: true,
              onToggle: () => {
                if (index === 0) {
                  image?.classList.remove('second-step')
                  image?.classList.remove('fourth-step')
                  image?.classList.remove('third-step')
                } else if (index === 1) {
                  image?.classList.add('second-step')
                  image?.classList.remove('fourth-step')
                  image?.classList.remove('third-step')
                } else if (index === 2) {
                  image?.classList.add('third-step')
                  image?.classList.remove('second-step')
                  image?.classList.remove('fourth-step')
                } else if (index === 3) {
                  image?.classList.add('fourth-step')
                  image?.classList.remove('third-step')
                  image?.classList.remove('second-step')
                }
                part.classList.contains('active') ? part.classList.remove('active') : part.classList.add('active')
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

            const modernListAnimation = () => {
              const modernListTl = gsap.timeline({
                scrollTrigger: {
                  trigger: part,
                  start: 'top center',
                  end: 'bottom center',
                },
              })

              if (listItems && listItems.length) {
                listItems.forEach((item, index) => {
                  const isLastElement = index === listItems.length - 1
                  modernListTl
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
              }

              modernListTl.fromTo(
                modernButton,
                {
                  autoAlpha: 0,
                },
                {
                  autoAlpha: 1,
                },
              )

              return modernListTl
            }

            masterTl.add(modernListAnimation())
          })
        },
      })
    }, 500)
  }, [])

  useEffect(() => {
    gsap.set('.hero-code path', {
      display: 'none',
    })

    gsap.to('.hero-code path', {
      stagger: 0.07,
      display: 'block',
      repeat: -1,
    })

    if (!isFirefox && !isSafari) {
      gsap.to('.hero-code-small path', {
        display: 'none',
      })

      gsap.to('.hero-code-small path', {
        stagger: 0.12,
        display: 'block',
        repeat: -1,
      })
    }
  }, [])

  useEffect(() => {
    if (!isFirefox && !isSafari) {
      const heroCard1 = document.querySelector('.hero-card-1')
      const heroCard2 = document.querySelector('.hero-card-2')
      const heroCard3 = document.querySelector('.hero-card-3')

      ScrollTrigger.matchMedia({
        '(min-width: 1200px)': () => {
          const cardsTl = gsap.timeline({ duration: 0.8, ease: 'sine.inOut' })

          cardsTl
            .fromTo(
              heroCard1,
              {
                autoAlpha: 0,
                x: 170,
                y: -100,
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
              },
            )
            .fromTo(
              heroCard2,
              {
                autoAlpha: 0,
                x: 170,
                y: -100,
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
              },
            )
            .fromTo(
              heroCard3,
              {
                autoAlpha: 0,
                x: 170,
                y: -100,
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
              },
            )

          const moveCards = (e: MouseEvent) => {
            const el = e.target as Element

            const xPos = e.offsetX / el?.clientWidth - 0.5
            const yPos = e.offsetY / el?.clientHeight - 0.5

            const cards = gsap.utils.toArray('.hero-card') as Element[]

            const modifier = (index: number) => {
              if (index === 0) {
                return 2 * 1.2
              }
              if (index === 1) {
                return index * 1.2
              }
              if (index === 2) {
                return 0.5
              }
              return 0
            }

            cards.forEach((card, index) => {
              gsap.to(card, {
                duration: 1.8,
                x: isFinite(xPos) ? xPos * 15 * modifier(index) : 0,
                y: isFinite(yPos) ? yPos * 25 * modifier(index) : 0,
                rotationX: isFinite(yPos) ? yPos * 10 : 0,
                rotationY: isFinite(xPos) ? xPos * 40 : 0,
              })
            })
          }

          const homeHeroMovable = document.querySelector('.home-top-movable-area')

          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          homeHeroMovable?.addEventListener('mousemove', moveCards)
        },
      })
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (!isFirefox && !isSafari) {
        const homeLinesTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.what-we-do',
            start: '20% bottom',
            end: '85% top',
            toggleActions: 'restart reset restart reset',
            scrub: 2.5,
          },
        })
        homeLinesTl.set('.home-line.small', {
          strokeDashoffset: -1500,
        })
        homeLinesTl.set('.home-line.large', {
          strokeDashoffset: -2300,
        })

        homeLinesTl.to('.home-line', {
          strokeDashoffset: 0,
        })
      }
    }, 500)

    if (isFirefox || isSafari) {
      gsap.set('.home-line.small', {
        strokeDashoffset: 0,
      })
      gsap.set('.home-line.large', {
        strokeDashoffset: 0,
      })
    }
  }, [])

  useEffect(() => {
    const formModalTimer = setTimeout(() => {
      const modalStatus = localStorage.getItem('modalStatus')
      const modalStatusValue = 'visited'

      if (modalStatus !== modalStatusValue) {
        document.head.parentElement?.classList.add('html-scroll')
        localStorage.setItem('modalStatus', modalStatusValue)
        setIsModalOpen(true)
      }
    }, 30000)
    return () => clearTimeout(formModalTimer)
  }, [])

  const onModalClose = () => {
    document.head.parentElement?.classList.remove('html-scroll')
    setIsModalOpen(false)
  }

  const xs = useMediaQuery({ minWidth: '480px' })

  const sm = useMediaQuery({ minWidth: '576px' })

  const md = useMediaQuery({ minWidth: '768px' })

  const xl = useMediaQuery({ minWidth: '1200px' })

  const cubeSizes = {
    width: sm ? 94 : 55,
    height: sm ? 65 : 38,
  }

  const buildingWithIconsSizes = {
    width: sm ? 50 : 32,
    height: sm ? 50 : 32,
  }

  // const { data:page, error } = getPagesCategories(1);
  // if(error) return <h1>Something wrong happened</h1>
  // if (!page ) return <h1>Loading ...</h1>

  // const page = data;
  // const page: PageEntity = useResource(data.detailShape(), {})

  // const page: PageEntity = useResource(PageEntity.detailShape(), { id: 1 })

  const icons = [Cube1, Cube2, Cube3, Cube4]
  const whatWeDoData = {
    category: page.sections[1]?.subtitle,
    title: page.sections[1]?.title,
    text: page.sections[1]?.description,
    whatWeDoList: page.sections[1]?.cards,
  }

  const WhatWeDoSection = () => (
    <Block
      type={'primary'}
      title={<Text.Title level={3}>{whatWeDoData.title}</Text.Title>}
      text={
        <Text.Paragraph size='lg'>
          <span dangerouslySetInnerHTML={{ __html: whatWeDoData?.text }} />
        </Text.Paragraph>
      }
    />
  )

  const modernCardData = {
    title: page.sections[2].title,
    text: page.sections[2]?.description,
    acordion: [
      {
        title: page.sections[3].title,
        text: page.sections[3].description,
        description: page.sections[3].cards,
        path: '/platform/card-issuing',
      },
      {
        title: page.sections[4].title,
        text: page.sections[4].description,
        description: page.sections[4].cards,
        path: '/platform/open-api',
      },
      {
        title: page.sections[5].title,
        text: page.sections[5].description,
        description: page.sections[5].cards,
        path: '/platform/on-cloud-and-on-prem',
      },
      {
        title: page.sections[6].title,
        text: page.sections[6].description,
        description: page.sections[6].cards,
        path: '/platform/pci-widgets',
      },
    ],
  }

  const weBuildMoreData = {
    text: page.sections[8].title,
    description: page.sections[8].description,
    weBuildMoreList: page.sections[8].cards.map(card => card.description),
  }
  const isDesktop = useMediaQuery({ minWidth: 960 })

  const WeBuildMoreSection = () => (
    <Row>
      <Col md={14} xxl={14} className='block-wrapper'>
        <Block
          type='primary'
          title={
            <Text.Title level={2}>
              <span className={'build-more-span'}>We Build More</span> Than Just Card Programs, We Build Partnerships
            </Text.Title>
          }
          text={
            <>
              <Text.Paragraph size='lg' weight={700}>
                <span dangerouslySetInnerHTML={{ __html: `${weBuildMoreData.text}\n` }} />
              </Text.Paragraph>
              <Text.Paragraph>
                <span dangerouslySetInnerHTML={{ __html: `${weBuildMoreData.description}\n` }} />
              </Text.Paragraph>
            </>
          }
        />
      </Col>
      <Col xs={24} className={'we-build-more-list-wrapper'}>
        <div className='we-build-more-list' style={{ marginTop: isDesktop ? 24 : undefined }}>
          {page.sections[8].cards
            .map(card => card.description)
            .map((item, index) => (
              <div key={index}>
                <Text.Paragraph size='md'>{item}</Text.Paragraph>
              </div>
            ))}
        </div>
      </Col>
    </Row>
  )

  const modalFormData = {
    title: 'The Latest NymCard Updates!',
    text: 'NymCard is constantly innovating and evolving  ....Be the first to know whenever we launch something new.',
  }

  const BuildingWithUsSection = () => {
    const buildingWithUsIcons = [IconImage1, IconImage2, IconImage3, IconImage4]

    return (
      <Row className={'section build-with-us'}>
        <div className='container-small'>
          <Col>
            <Row key={'title-wrapper'} justify='center' className={'title-wrapper'}>
              <Col lg={20} xl={18} xxl={16}>
                <Text.Title align={sm ? 'center' : 'left'} level={2}>
                  {page.sections[7].title}
                </Text.Title>
              </Col>
            </Row>
            <Row>
              <div className='build-with-us-list'>
                {page?.sections[7].cards
                  .map((card, index) => ({
                    buildingWithUsItemTitle: card.title,
                    buildingWithUsItemText: card.description,
                    icon: buildingWithUsIcons[index],
                  }))
                  .map((item, index) => {
                    const Icon = item.icon
                    return (
                      <Card
                        key={index}
                        type='light'
                        size='medium'
                        icon={<Icon {...buildingWithIconsSizes} />}
                        title={item.buildingWithUsItemTitle}
                        description={item.buildingWithUsItemText}
                      />
                    )
                  })}
              </div>
            </Row>
            <div className='build-with-us-background-wrapper'>
              {xs ? (
                <>
                  <div className='building-with-us-image-wrapper'>
                    <img
                      alt={''}
                      src={buildWithUsDesktop1}
                      className={'build-with-us-background-image first floating-card-1 desktop'}
                    />
                    {/* <Image
                    src="/public/assets/images/build-with-us-desktop-1.svg"
                    width="83"
                    height="20"
                    className="build-with-us-background-image first floating-card-1 desktop"
                  >
                  </Image> */}
                    {/* <img src="https://nymcard.com/static/media/build-with-us-desktop-1.d4c0e6e5.svg" className="build-with-us-background-image first floating-card-1 desktop" alt="" /> */}
                  </div>
                  <img alt={''} src={buildWithUsDesktop2} className={'build-with-us-background-image second desktop'} />
                </>
              ) : (
                <img alt={''} src={buildWithUsMobile} className={'build-with-us-background-image mobile'} />
              )}
            </div>
          </Col>
        </div>
      </Row>
    )
  }

  return (
    <Page title={'Home'}>
      {isModalOpen && <FormModal onClose={onModalClose} title={modalFormData.title} text={modalFormData.text} />}
      <div className='home-top-background-wrapper'>

        {xl && <div className='home-top-movable-area' />}
        {xs ? (
          <HomeTopBackgroundDesktop className='home-top-background-image desktop' />
        ) : (
          <img src={homeTopBackgroundMobile} alt='background-image' className='home-top-background-image mobile' />
        )}
        <Container>
          <Row className={'section home-hero'}>
            <Col md={16} lg={16} xl={16} xxl={12}>
              <Hero data={page.sections[0]} />
            </Col>
          </Row> 
          <Row className={'section what-we-do'}>
            <Col width={160} xs={24} xl={4} className='category-col category-col-center'>
              <Text.Category size={'md'} color={'secondary'}>
                {whatWeDoData.category}
              </Text.Category>
            </Col>
            <Col xl={20}>
              <Row gutterWidth={40}>
                <Col xl={18} xxl={16} className={'block-wrapper'}>
                  <WhatWeDoSection />
                </Col>
                <Col xs={24}>
                  <Hidden xs sm>
                    <div className='what-we-do-list'>
                      {whatWeDoData.whatWeDoList.map((item, index) => {
                        const Icon = icons[index]
                        return (
                          <Card
                            key={item.id}
                            size='medium'
                            type='ghost'
                            icon={<Icon {...cubeSizes} />}
                            title={item.title}
                            description={item.description}
                          />
                        )
                      })}
                    </div>
                  </Hidden>
                  <Visible xs sm>
                    <Swiper
                      pagination={{
                        clickable: true,
                        el: '.custom-pagination.what-we-do-pagination',
                        type: 'bullets',
                      }}
                      spaceBetween={24}
                      loop
                      className='what-we-do-slider'
                      loopedSlides={2}
                      slidesPerView={'auto'}
                    >
                      {whatWeDoData.whatWeDoList.map((item, index) => {
                        const Icon = icons[index]
                        return (
                          <SwiperSlide key={item.id}>
                            <Card
                              size='small'
                              type='ghost'
                              icon={<Icon />}
                              title={item.title}
                              description={item.description}
                            />
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                    <CustomPagination className='what-we-do-pagination' />
                  </Visible>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>


      </div>

      <Container fluid className={'inverse modern'}>
        <Container className={'section'}>
          <Col>
            <Row>
              <Visible xs sm md lg xl>
                <Col>
                  <Row justify={'center'} style={{ marginBottom: '80vw' }}>
                    <Block
                      title={
                        <Text.Title level={2} align='center' style={{ marginBottom: '12px' }}>
                          {modernCardData.title}
                        </Text.Title>
                      }
                      text={
                        <Text.Paragraph
                          opacity={0.9}
                          align='center'
                          size={'sm'}
                          weight={400}
                          style={{ fontSize: '13px' }}
                        >
                          <span dangerouslySetInnerHTML={{ __html: modernCardData.text }} />
                        </Text.Paragraph>
                      }
                    />
                  </Row>
                  <Row justify={'center'}>
                    <div className={`${classes.root} modern-mobile-accordion`}>
                      {modernCardData.acordion.map(({ title, text, path }, index) => (
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
                            style={{ padding: 0 }}
                          >
                            <Text.Paragraph font={'primary'} size={'lg'} weight={600}>
                              {title}
                            </Text.Paragraph>
                          </AccordionSummary>
                          <AccordionDetails style={{ padding: '0' }}>
                            <div className='accordion-text-wrapper' dangerouslySetInnerHTML={{ __html: text }} />
                          </AccordionDetails>
                          <AntButton
                            href={path}
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
                          >
                            <Text.Paragraph font='primary' color={'secondary'} style={{ fontSize: 17 }} weight={500}>
                              Explore now
                            </Text.Paragraph>
                          </AntButton>
                        </Accordion>
                      ))}
                    </div>
                  </Row>
                </Col>
              </Visible>
              <Visible xxl>
                <Col>
                  <Row justify={'center'} style={{ marginBottom: '94px' }}>
                    <Block
                      className='modern-card-head'
                      style={{ width: '100%', alignItems: 'center' }}
                      title={
                        <Text.Title
                          level={3}
                          weight={700}
                          align='center'
                          style={{ width: '566px', marginBottom: '41px' }}
                        >
                          {modernCardData.title}
                        </Text.Title>
                      }
                      text={
                        <Text.Paragraph
                          opacity={0.9}
                          align='center'
                          weight={400}
                          style={{ fontSize: '20px', width: '773px' }}
                        >
                          <span dangerouslySetInnerHTML={{ __html: modernCardData.text }} />
                        </Text.Paragraph>
                      }
                    />
                  </Row>

                  <Row>
                    <Col className='animated-modern-part'>
                      {modernCardData.acordion.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className='content-part-wrapper'
                            style={{ paddingRight: '16px', paddingLeft: '16px' }}
                          >
                            <Row align='start'>
                              <Col lg={2} className='category-col category-col-center' width={160}>
                                <Text.Category size={'md'} color={'primary'} opacity={0.3}>
                                  {index + 1}
                                </Text.Category>
                              </Col>
                              <Col lg={22}>
                                <div key={index} className='content-part'>
                                  <Block
                                    type='secondary'
                                    title={
                                      <Text.Title level={3} style={{ marginBottom: '22px' }}>
                                        {item.title}
                                      </Text.Title>
                                    }
                                    text={
                                      <Text.Paragraph key={index} opacity={0.9} style={{ fontSize: 16 }}>
                                        <span dangerouslySetInnerHTML={{ __html: item.text }} />
                                      </Text.Paragraph>
                                    }
                                    style={{
                                      marginBottom: '28px',
                                    }}
                                  />
                                  {item.description && item.description?.length > 0 && (
                                    <ul className='modern-list'>
                                      {item.description.map(({ id, title, description }) => (
                                        <li key={id} className='modern-item'>
                                          <Row style={{ margin: '34px 0' }}>
                                            <Col lg={8} style={{ padding: '0' }}>
                                              <Text.Title weight={600} style={{ fontSize: '14px' }}>
                                                {title}
                                              </Text.Title>
                                            </Col>
                                            <Col lg={16}>
                                              <Text.Paragraph opacity={0.9} style={{ fontSize: '14px' }}>
                                                {description}
                                              </Text.Paragraph>
                                            </Col>
                                          </Row>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                  <AntButton
                                    href={item.path}
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
                                    style={{ marginTop: '20px' }}
                                  >
                                    <Text.Paragraph
                                      font='primary'
                                      color={'secondary'}
                                      style={{ fontSize: '17px' }}
                                      weight={500}
                                    >
                                      Explore now
                                    </Text.Paragraph>
                                  </AntButton>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        )
                      })}
                    </Col>
                  </Row>

                  <Row>
                    <div className='modern-image-part'>
                      <ModernCardImage className='modern-image' />
                      {/* <img src={staticImages.ModernCardImage} className="modern-image"></img> */}
                    </div>
                  </Row>
                </Col>
              </Visible>
            </Row>
          </Col>
        </Container>
      </Container>

      <Container>
        <BuildingWithUsSection />
      </Container>

      <Container fluid className='light-grey-container'>
        <Container>
          <Row className={'section we-build-more'}>
            <div className='we-build-more-background-wrapper'>
              {md ? (
                <WeBuildMoreDesktop className='we-build-more-background-image desktop' />
                // <img src={staticImages.WeBuildMoreDesktop} className="we-build-more-background-image desktop"></img>

              ) : (
                <img alt={'img'} src={weBuildMoreMobile} className='we-build-more-background-image mobile' />
              )}
            </div>
            <Col width={160} xs={24} xl={4} className='category-col category-col-center' />
            <Col xl={20}>
              <WeBuildMoreSection />
            </Col>
          </Row>
        </Container>
      </Container>
      <PartnerSection />
      <GetBuildingSection />
    </Page>
  )
}

export default Home
