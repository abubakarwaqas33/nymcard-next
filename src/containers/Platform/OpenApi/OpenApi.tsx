// import { useResource } from '@rest-hooks/core'
import Image from 'next/image'
import { createRef, FC, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
import { ReactComponent as  ApiBenefitsBgDesktop  } from 'public/assets/images/api-benefits-bg-desktop.svg';
import { ReactComponent as  ApiBenefitsBgMobile } from 'public/assets/images/api-benefits-bg-mobile.svg'
import { ReactComponent as  ApiTopBackgroundDesktop } from 'public/assets/images/api-top-bg-desktop.svg'
import { ReactComponent as  ApiTopBackgroundMobile } from 'public/assets/images/api-top-bg-mobile.svg'
// import ApiTopBackgroundDesktop from '../../../components/Svg/ApiTopBackgroundDesktop';
// import ApiTopBackgroundMobile from '../../../components/Svg/ApiTopBackgroundMobile';
// import { ReactComponent as  CanFindBg1Desktop } from 'public/assets/images/you-can-find-bg-1-desktop.svg'
// import { ReactComponent as  CanFindBg2Desktop }  from 'public/assets/images/you-can-find-bg-2-desktop.svg'
import CanFindBg1Desktop from '../../../components/Svg/CanFindBg1Desktop';
import CanFindBg2Desktop from '../../../components/Svg/CanFindBg2Desktop';
import canFindBgMobile from 'public/assets/images/you-can-find-bg-mobile.png'
import { Block } from '../../../components/blocks/Block'
import { AntButton } from '../../../components/form/Button'
import { Icon } from '../../../components/icon/Icon'
import Cube9 from 'src/components/icon/images/cube9.svg'
import RightArrow from 'src/components/icon/images/RightArrow.svg'
import { GetBuildingSection } from '../../../components/page/GetBuildingSection'
import { Page } from '../../../components/page/Page'
import { CustomPagination } from '../../../components/slider/CustomPagination/CustomPagination'
import Text from '../../../components/typography'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/components/pagination/pagination.less'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.less'
import { ReactComponent as  Cube10 } from '../../../components/icon/images/cube10.svg'
import { ReactComponent as  Cube5 } from '../../../components/icon/images/cube5.svg'
import { ReactComponent as  Cube6 } from '../../../components/icon/images/cube6.svg'
import { ReactComponent as  Cube7 } from '../../../components/icon/images/cube7.svg'
import { ReactComponent as  Cube8 } from '../../../components/icon/images/cube8.svg'
import { PageEntity } from '../../../models/page'
import { BenefitCard } from './BenefitsCard'
import { EasyToBuildCard } from './EasyToBuildCard'
import { HeroBlock } from './HeroBlock'
import { MainDirectionCard } from './MainDirectionCard'
import './OpenApi.less'

SwiperCore.use([Pagination])

gsap.registerPlugin(ScrollTrigger)

const OpenApi: FC<any> = ({page}) => {
 // debugger
//   const { data:page, error} = getPagesCategories(2)
//   console.log(page)
//  // debugger
//   if(error) return <h1>Something wrong happened</h1>
// 	if (!page ) return <h1>Loading ...</h1>

  const sm = useMediaQuery({ minWidth: '576px' })
  // const page: PageEntity = useResource(PageEntity.detailShape(), { id: 2 })

  const imagesWrapperRef = createRef<HTMLDivElement>()

  useEffect(() => {
    const apiTerminal = document.querySelector('.api-terminal-element')
    const apiFormElement = document.querySelector('.api-form-element')
    const apiOrangeCardElement = document.querySelector('.api-orange-card-element')
    const apiSandboxElement = document.querySelector('.api-sandbox-element')
    const apiEnvironmentElement = document.querySelector('.api-live-environment-element')
    const apiVisaElement = document.querySelector('.api-visa-element')
    const apiAnimatedElements = Array.from([
      apiTerminal,
      apiFormElement,
      apiOrangeCardElement,
      apiSandboxElement,
      apiEnvironmentElement,
      apiVisaElement,
    ]) as Element[]

    ScrollTrigger.matchMedia({
      '(min-width: 1200px)': () => {
        apiAnimatedElements.forEach(item => {
          gsap.set(item, {
            autoAlpha: 0,
            scale: 0.5,
          })
          gsap.to(item, {
            duration: 0.5,
            delay: 0.3,
            scrollTrigger: {
              trigger: item,
              toggleActions: 'restart reset restart reset',
              start: 'top 92%',
              end: 'bottom -5%',
            },
            scale: 1,
            autoAlpha: 1,
          })
        })
      },
    })
  }, [imagesWrapperRef])

  useEffect(() => {
    setTimeout(() => {
      const apiLinesTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.api-top-background-wrapper',
          start: '35% 80%',
          end: '75% top',
          toggleActions: 'restart reset restart reset',
          scrub: 2,
        },
      })

      apiLinesTl.set('.api-line-1', {
        strokeDasharray: 2500,
      })

      apiLinesTl.set('.api-line-2', {
        strokeDasharray: 2000,
      })

      apiLinesTl.set('.api-line-3', {
        strokeDasharray: 2000,
      })

      apiLinesTl.set('.api-line-4', {
        strokeDasharray: 900,
      })

      apiLinesTl.set('.api-line-5', {
        strokeDasharray: 900,
      })

      apiLinesTl.set('.api-line-6', {
        strokeDasharray: 700,
      })

      apiLinesTl.set('.api-line-7', {
        strokeDasharray: 660,
      })

      apiLinesTl.set('.api-line-8', {
        strokeDasharray: 350,
      })

      apiLinesTl.to('.api-line-group-1', {
        strokeDashoffset: 0,
      })

      apiLinesTl.to('.api-line-group-2', {
        strokeDashoffset: 0,
      })

      apiLinesTl.to('.api-line-8', {
        strokeDashoffset: 0,
      })
    }, 500)
  }, [])

  useEffect(() => {
    const apiTerminal = document.querySelector('.api-terminal-element')
    const apiFormElement = document.querySelector('.api-form-element')
    const apiOrangeCardElement = document.querySelector('.api-orange-card-element')
    const apiSandboxElement = document.querySelector('.api-sandbox-element')
    const apiEnvironmentElement = document.querySelector('.api-live-environment-element')
    const apiVisaElement = document.querySelector('.api-visa-element')
    const apiAnimatedElements = Array.from([
      apiTerminal,
      apiFormElement,
      apiOrangeCardElement,
      apiSandboxElement,
      apiEnvironmentElement,
      apiVisaElement,
    ]) as Element[]

    ScrollTrigger.matchMedia({
      '(min-width: 1200px)': () => {
        apiAnimatedElements.forEach(item => {
          gsap.set(item, {
            autoAlpha: 0,
            scale: 0.5,
          })
          gsap.to(item, {
            duration: 0.5,
            delay: 0.3,
            scrollTrigger: {
              trigger: item,
              toggleActions: 'restart reset restart reset',
              start: 'top 92%',
              end: 'bottom -5%',
            },
            scale: 1,
            autoAlpha: 1,
          })
        })
      },
    })
  }, [imagesWrapperRef])

  const cubeSizes = {
    width: sm ? 105 : 96,
    height: sm ? 73 : 69,
  }

  const mainIcons = [Cube5, Cube6, Cube7, Cube8, Cube9, Cube10]

  const mainDirectionsData = {
    title: page.sections[2].title,
    subtitle: 'Features',
    list: page.sections[2].cards.map((card, index) => ({
      icon: mainIcons[index],
      itemTitle: card.title,
      itemText: card.description,
    })),
  }

  const benefitsData = {
    subtitle: 'benefits',
    list: page.sections[3].cards.map(card => ({ title: card.title, text: card.description })),
  }

  const youCanFindData = {
    buttonText: 'API Catalog ',
  }

  const youCanFindBlockProps: typeof Block.defaultProps = {
    type: 'tertiary',
    title: (
      <Text.Title level={2}>
        <span className={'you-can-find-span'}>Our new generation APIs</span> make embedding Finance into Apps as simple
        as
        <br />
        Plug and Play
        <br />
      </Text.Title>
    ),
    button: (
      <AntButton
        href={'/docs/api'}
        icon={
          <Icon color={'secondary'} type={'default'} width={32} height={32} shape={'circle'} gap={14} padding={10}>
            <RightArrow/>
            {/* <Image  src={RightArrow} width="10" height="10" color="#fff"/> */}
          </Icon>
        }
        type={'ghost'}
      >
        <Text.Paragraph font='primary' color={'secondary'} style={{ fontSize: '17px' }} weight={500}>
          {youCanFindData.buttonText}
        </Text.Paragraph>
      </AntButton>
    ),
  }

  return (
    <Page title={'Open API’s'}>
      <Container>
        <div ref={imagesWrapperRef} className='api-top-background-wrapper'>
          {sm ? (
            <ApiTopBackgroundDesktop  className='api-top-background-image desktop'/>
          ) : (
            <ApiTopBackgroundMobile className='api-top-background-image mobile'/>
          )}

          <Container>
            <Row className='section api-hero'>
              <Col xs={24} md={13} lg={12} xl={12} xxl={9}>
                <Row>
                 { page && page.sections.length>0 &&
                 <HeroBlock data={page.sections[0]} />
                 }
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
          {page.sections.length>0 && page.sections[1] && (
            <Container>
              <Row className={'section easy-to-build'}>
                <Col width={160} xs={24} xl={4} className='category-col category-col-center'>
                  <Row>
                    <Text.Category size={'md'} color={'secondary'}>
                      {page.sections[1].subtitle}
                    </Text.Category>
                  </Row>
                </Col>
                <Col xl={20}>
                  <Row gutterWidth={40}>
                    <Col xl={18} xxl={14} className={'block-wrapper'}>
                      <Row>
                        <Block
                          type={'primary'}
                          title={<Text.Title level={3}>{page.sections[1].title}</Text.Title>}
                          text={
                            <Text.Paragraph size={'lg'}>
                              <span dangerouslySetInnerHTML={{ __html: `${page.sections[1].description}` }} />
                            </Text.Paragraph>
                          }
                        />
                      </Row>
                    </Col>
                    <Col sm={24}>
                      <Hidden xs sm>
                        <Row>
                          <div className='easy-to-build-list'>
                            {page.sections[1].cards.map((item, index) => (
                              <EasyToBuildCard key={item.id} data={item} index={index} />
                            ))}
                          </div>
                        </Row>
                      </Hidden>
                      <Visible xs sm>
                        <Row>
                          <Swiper
                            pagination={{
                              clickable: true,
                              el: '.custom-pagination.easy-to-build',
                              type: 'bullets',
                            }}
                            spaceBetween={28}
                            className='easy-to-build-slider'
                            loop={true}
                            loopedSlides={4}
                            slidesPerView='auto'
                            centeredSlides={false}
                          >
                            {page.sections[1].cards.map((item, index) => (
                              <SwiperSlide key={item.id}>
                                <EasyToBuildCard data={item} index={index} />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <CustomPagination className='easy-to-build' />
                        </Row>
                      </Visible>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          )}

       <Container fluid className='inverse'>
        <Container>
          <Row className={'section main-directions'}>
            <Col width={160} xs={24} xl={4} className='category-col category-col-center'>
              <Row>
                <Text.Category size={'md'} color={'secondary'}>
                  {mainDirectionsData.subtitle}
                </Text.Category>
              </Row>
            </Col>
            <Col xl={20}>
              <Row gutterWidth={40}>
                <Col xl={18} xxl={14} className={'title-wrapper'}>
                  <Row>
                    <Text.Title maxWidth={400} level={3}>
                      {mainDirectionsData.title}
                    </Text.Title>
                  </Row>
                </Col>
                <Col xs={24}>
                  <Hidden xs sm>
                    <Row>
                      <div className='main-directions-list'>
                        {page.sections[2].cards.map((item, index) => {
                          const Icon = mainIcons[index]
                       // return <MainDirectionCard data={item} key={index} icon={<Image src={Icon} width='105' height='73' className={'openapi-img'}/>} />
                        return <MainDirectionCard data={item} key={index} icon={<Icon {...cubeSizes} />} />

                        })}
                      </div>
                    </Row>
                  </Hidden>
                  <Visible xs sm>
                    <Row>
                      <Swiper
                        pagination={{
                          clickable: true,
                          el: '.custom-pagination.main-directions',
                          type: 'bullets',
                        }}
                        loop
                        spaceBetween={24}
                        slidesPerView={1}
                        loopedSlides={2}
                        className='main-directions-slider'
                      >
                        {page.sections[2].cards.map((item, index) => {
                          const Icon = mainIcons[index]
                          return (
                            <SwiperSlide key={item.id}>
                              <MainDirectionCard
                                className={'main-directions-card'}
                                data={item}
                                key={index}
                                //icon={<Image src={Icon} width='105' height='73' className={'openapi-img'}/>}
                                icon={<Icon {...cubeSizes} />}
                              />
                            </SwiperSlide>
                          )
                        })}
                      </Swiper>
                      <CustomPagination type='inversed' className='main-directions' />
                    </Row>
                  </Visible>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

      </Container>


      <div className='open-api-benefits-background-wrapper'>
      {sm ? (
          <ApiBenefitsBgDesktop className='open-api-benefits-background-image desktop' />
        ) : (
          <ApiBenefitsBgMobile className='open-api-benefits-background-image mobile' />
        )}
        <Container>
          <Row className={'section open-api-benefits'}>
            <Col width={160} xs={24} xl={4} className='category-col category-col-center'>
              <Text.Category size={'md'} color={'secondary'}>
                {benefitsData.subtitle}
              </Text.Category>
            </Col>
            <Col xl={20}>
              <Row>
                <Col xs={24}>
                  <Hidden xs sm>
                    <Row>
                      <div className='open-api-benefits-list'>
                        {page.sections[3].cards.map((value, index) => (
                          <BenefitCard key={value.id} data={value} index={index} />
                        ))}
                      </div>
                    </Row>
                  </Hidden>
                  <Visible xs sm>
                    <Swiper
                      pagination={{
                        clickable: true,
                        el: '.custom-pagination.open-api-benefits',
                        type: 'bullets',
                      }}
                      spaceBetween={24}
                      slidesPerView={1}
                      loopedSlides={2}
                      loop
                      className='open-api-benefits-slider'
                    >
                      {page.sections[3].cards.map((data, index) => (
                        <SwiperSlide key={index}>
                          <BenefitCard data={data} index={index} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <CustomPagination className='open-api-benefits' />
                  </Visible>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

       <div className='you-can-find-background-wrapper'>
        {sm ? (
          <>
          <CanFindBg1Desktop className='you-can-find-background-image image-primary desktop' />
          <CanFindBg2Desktop className='you-can-find-background-image image-secondary desktop' />
          </>
        ) : (
          <img src={canFindBgMobile} alt='backgroundg-image' className='you-can-find-background-image mobile' />
        )}

        <Container>
          <Row className={'section you-can-find'}>
            <Col md={13}>
              <Block
                type={youCanFindBlockProps.type}
                title={youCanFindBlockProps.title}
                button={youCanFindBlockProps.button}
              />
            </Col>
            <Col md={11} />
          </Row>
        </Container>

      </div>

      {/* <GetBuildingSection /> */}
    </Page>
  )
}

export default OpenApi
