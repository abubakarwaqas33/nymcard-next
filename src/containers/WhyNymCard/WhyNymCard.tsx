// import { useResource } from '@rest-hooks/core'
import { Carousel } from 'antd'
import 'antd/lib/carousel/style/index.less'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { createRef, FC, useEffect } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
import sanitize from 'sanitize-html'
import { ReactComponent as NavArrow } from 'public/assets/icons/bold-nav-arrow.svg'
import stackMb from 'public/assets/images/payments-stack-mobile.svg'
import { ReactComponent as NymCardHeroImage } from 'public/assets/images/why-nymcard-image.svg'
import SvgComponent3  from '../../components/page/GetBuildingBg3'
import { ReactComponent as StackImageDesktop } from 'public/assets/images/payments-stack-desktop.svg'
import SvgComponent4  from '../../components/page/GetBuildingBg4'
import { Page, Text } from '../../components'
import { Block } from '../../components/blocks/Block'
import { GetBuildingSection } from '../../components/page/GetBuildingSection'
import { PartnerSection } from '../../components/page/PartnerSection'
import { PageEntity } from '../../models/page'
import './WhyNymCard.less'

gsap.registerPlugin(ScrollTrigger)

const WhyNymCard: FC<any> = ({page}) => {
  // const page: PageEntity = useResource(PageEntity.detailShape(), { id: 9 })
  
  
  const xl = useMediaQuery({ maxWidth: 1200 })
  const md = useMediaQuery({ minWidth: 768 })

  const stackRef = createRef<HTMLDivElement>()

  useEffect(() => {
    const paymentsCard1 = document.querySelector('.payments-card-1') as Element
    const paymentsCard2 = document.querySelector('.payments-card-2') as Element
    const paymentsCard3 = document.querySelector('.payments-card-3') as Element
    const paymentsImage = document.querySelector('.stack-image') as SVGAElement

    ScrollTrigger.matchMedia({
      '(min-width: 1200px)': () => {
        const paymentsTl = gsap.timeline({
          duration: 0.8,
          ease: 'sine.inOut',
          scrollTrigger: {
            trigger: paymentsImage,
            toggleActions: 'restart reset restart reset',
            start: 'top center',
            end: '130% center',
          },
        })
        paymentsTl
          .fromTo(
            paymentsCard3,
            {
              autoAlpha: 0,
              x: 100,
              y: -40,
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
            },
          )
          .fromTo(
            paymentsCard2,
            {
              autoAlpha: 0,
              x: 100,
              y: -40,
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
            },
          )
          .fromTo(
            paymentsCard1,
            {
              autoAlpha: 0,
              x: 100,
              y: -40,
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
            },
          )
      },
    })
  }, [stackRef])

  useEffect(() => {
    const paymentLine1 = document.querySelector('.payment-line-1')
    const paymentLine2 = document.querySelector('.payment-line-2')

    gsap.fromTo(
      paymentLine1,
      {
        width: 0,
      },
      {
        width: 100,
        repeat: -1,
        duration: 5,
      },
    )

    gsap.fromTo(
      paymentLine2,
      {
        width: 0,
      },
      {
        duration: 3,
        width: 80,
        repeat: -1,
      },
    )

    gsap.to('.payment-circles-group g', {
      stagger: 1,
      display: 'block',
      repeat: -1,
    })
  }, [])   

  useEffect(() => {
    gsap.to('.stack-code-area path', {
      stagger: 0.07,
      display: 'block',
      repeat: -1,
    })
  }, [])

  // const { data:page, error } = getPagesCategories(9);
  // if(error) return <h1>Something wrong happened</h1>
	// if (!page ) return <h1>Loading ...</h1>

  return (
    <Page title={page.title}>
      {/* <Head>
			<meta property="og:image" content={LINK.NEXT_PUBLIC_API_URL + 'Post_2_70910c2cca.png'} key='ogimage'/>
			<meta name="twitter:image" content={LINK.NEXT_PUBLIC_API_URL + 'Post_2_70910c2cca.png'} key='twitterimage'/>
			<meta property="og:title" content={'WhyNymCard'} key='title'/>
			</Head>
       */}
        <Container fluid className={'inverse built-container'}>
          <Text.SubTitle className={'why-subtitle'}>{page.sections[0].subtitle}</Text.SubTitle>
          <Text.Title
            align={(page.sections[0].align ?? 'left') as 'left' | 'center' | 'right'}
            weight={700}
            className={'why-title'}
          >
            {page.sections[0].title}
          </Text.Title>
          <div className='why-background-wrapper'>
            {/* <NymCardHeroImage className='why-image' /> */}
            <SvgComponent3 className="why-image" />
          </div>
          <Text.Paragraph align='center' className={'mission-paragraf'}>
            <span dangerouslySetInnerHTML={{ __html: page.sections[0].description }} />
          </Text.Paragraph>
        </Container>
      
      {/* benefits */}
      
        <Container className={'section'}>
          <Block
            subtitle={
              <Text.Category color={'secondary'} style={xl ? { marginBottom: '16px' } : undefined}>
                {page.sections[1].subtitle}
              </Text.Category>
            }
            title={
              <Text.Title
                level={3}
                className={'payment-title'}
                style={
                  xl
                    ? { marginBottom: '24px' }
                    : {
                        width: '522px',
                        maxWidth: '570px',
                      }
                }
              >
                {page.sections[1].title}
              </Text.Title>
            }
            text={
              <Text.Paragraph
                opacity={0.9}
                style={xl ? { marginBottom: 24, fontSize: 13 } : { width: 470, fontSize: 18 }}
              >
                {sanitize(page.sections[1].description, { allowedTags: [] })}
              </Text.Paragraph>
            }
            style={!xl ? { flexDirection: 'initial', justifyContent: 'space-between', marginBottom: 50 } : {}}
          />
          <Carousel
            arrows={!xl}
            nextArrow={
              <div>
                <NavArrow className='nav-arrow-icon' />
              </div>
            }
            prevArrow={
              <div>
                <NavArrow className='nav-arrow-icon' />
              </div>
            }
            draggable
            dots
            swipeToSlide={true}
            className='payment-slider'
          >
            {page.sections[1].cards.map((item, index) => (
              <div key={index}>
                <div className='payment-slider-slide'>
                  <div className='payment-slider-item'>
                    <div className='user-experience' style={{ backgroundImage: `url(${item.image?.url})` }}>
                      <Block
                        title={
                          <Text.Title level={2} style={xl ? { marginBottom: '10px' } : { marginBottom: '148px' }}>
                            {item.title}
                          </Text.Title>
                        }
                        text={
                          <Text.Paragraph align='center' style={!xl ? { width: '251px' } : undefined}>
                            {item.description}
                          </Text.Paragraph>
                        }
                        style={{ alignItems: 'center' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </Container>
      
      {/* payments stack */}
      <Container fluid className={'inverse'}>
        <div ref={stackRef} className='stack-background'>
          {md ? (
            <StackImageDesktop className='stack-image desktop' />
          ) : (
            <img alt={'img'} src={stackMb} className='stack-image mobile' />
          )}
          <Container className='section stack'>
            <Row justify='center' className='stack-head'>
              <Col md={20} xl={12} xxl={12}>
                <Block
                  title={
                    <Text.Title level={2} className={'stack-title'}>
                      {page.sections[2].title}
                    </Text.Title>
                  }
                  text={
                    <Text.Paragraph className={'stack-text'}>
                      <span dangerouslySetInnerHTML={{ __html: `${page.sections[2]?.description}` }} />
                    </Text.Paragraph>
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg={11} xxl={7}>
                {page.sections[2]?.cards.map((item, index) => (
                  <Block
                    key={index}
                    title={<Text.Title className={'stack-item-title'}>{item.title}</Text.Title>}
                    text={<Text.Paragraph className={'stack-item-text'}>{item.description}</Text.Paragraph>}
                    style={{
                      marginBottom: index !== page.sections[2]?.cards.length - 1 ? (xl ? '48px' : '78px') : '0px',
                    }}
                  />
                ))}
              </Col>
            </Row>
          </Container>
        </div>
      </Container>

      <PartnerSection />
      <GetBuildingSection />
    </Page>
  )
}

export default WhyNymCard
