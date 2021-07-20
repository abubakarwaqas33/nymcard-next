// import { useResource } from '@rest-hooks/core'
import gsap from 'gsap'
import Image from 'next/image'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { createRef, FC, useEffect } from 'react'
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
import sanitize from 'sanitize-html'
import dynamic from 'next/dynamic'
import { ReactComponent as  PciWidgetsBackgroundDesktop } from 'public/assets/images/pci-widgets-bg-desktop.svg'
import { ReactComponent as  PciWidgetsBackgroundMobile  }  from 'public/assets/images/pci-widgets-bg-mobile.svg'
import { ReactComponent as PciWidgetsSchemaDesktop  } from 'public/assets/images/pci-widgets-schema-desktop.svg'
import { ReactComponent as  PciWidgetsSchemaMobile  } from 'public/assets/images/pci-widgets-schema-mobile.svg'
import { Page } from '../../../components/page/Page'
import { Block } from '../../../components/blocks/Block'
import { AntButton } from '../../../components/form/Button'
import { Icon } from '../../../components/icon/Icon'
import { ReactComponent as Icon3 } from '../../../components/icon/images/iconImage10.svg'
import { ReactComponent as Icon1 } from '../../../components/icon/images/iconImage8.svg'
import { ReactComponent as Icon2 } from '../../../components/icon/images/iconImage9.svg'
import { ReactComponent as RightArrow } from '../../../components/icon/images/RightArrow.svg'
import { Card } from '../../../components/page/Card'
import { GetBuildingSection } from '../../../components/page/GetBuildingSection'
import { CustomPagination } from '../../../components/slider/CustomPagination/CustomPagination'
import Text from '../../../components/typography'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/components/pagination/pagination.less'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.less'
// import { PageEntity } from '../../models/page'
import './PciWidgets.less'


SwiperCore.use([Pagination])

gsap.registerPlugin(ScrollTrigger)

const PciWidgets: FC<any>= ({ page }) => {
  const xs = useMediaQuery({ minWidth: '480px' })
  const sm = useMediaQuery({ minWidth: '576px' })

  const backgroundRef = createRef<HTMLDivElement>()

  useEffect(() => {
    const pciLoadingLine = document.querySelector('.pci-loading-line')
    const pciLoadingCircle = document.querySelector('.pci-loading-circle')

    gsap.fromTo(
      pciLoadingLine,
      {
        width: 0,
      },
      {
        duration: 4,
        width: 123,
        repeat: -1,
      },
    )

    gsap.fromTo(
      pciLoadingCircle,
      {
        x: -59,
        y: -34,
      },
      {
        duration: 4,
        x: 42,
        y: 24,
        repeat: -1,
      },
    )
  }, [backgroundRef.current])

  useEffect(() => {
    setTimeout(() => {
      const backgroundImage = document.querySelector('.pci-widgets-top-background-wrapper') as Element
      const pciHeroLinesTl = gsap.timeline({
        scrollTrigger: {
          trigger: backgroundImage,
          start: '4% 20%',
          end: '30% 20%',
          scrub: 2,
          toggleActions: 'restart reset restart reset',
        },
      })

      pciHeroLinesTl.set('.pci-hero-line', {
        strokeDashoffset: 370,
      })

      pciHeroLinesTl.to('.pci-hero-line-group-1', {
        strokeDashoffset: 0,
      })

      pciHeroLinesTl.to('.pci-hero-line-group-2', {
        strokeDashoffset: 0,
      })
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const pciSchema = document.querySelector('.schema-image.desktop') as SVGElement
      const pciSchemaTl = gsap.timeline({
        ease: 'Linear.easeNone',
        scrollTrigger: {
          trigger: pciSchema,
          start: 'top 80%',
          end: 'bottom 10%',
        },
      })

      pciSchemaTl.to('.pci-line-1', {
        strokeDashoffset: 0,
        duration: 1,
      })
      pciSchemaTl.to('.pci-arrow-1', {
        strokeDashoffset: 0,
        duration: 0.1,
      })

      pciSchemaTl.to('.pci-line-2', {
        strokeDashoffset: 0,
        duration: 0.5,
      })
      pciSchemaTl.to('.pci-arrow-2', {
        strokeDashoffset: 0,
        duration: 0.1,
      })

      pciSchemaTl.to('.pci-line-3', {
        strokeDashoffset: 0,
        duration: 1.5,
      })

      pciSchemaTl.to('.pci-arrow-3', {
        strokeDashoffset: 0,
        duration: 0.1,
      })

      pciSchemaTl.to(
        '.pci-line-4',
        {
          strokeDashoffset: 0,
          duration: 1.5,
        },
        '=-1.5',
      )

      pciSchemaTl.to('.pci-arrow-4', {
        strokeDashoffset: 0,
        duration: 0.1,
      })

      pciSchemaTl.to('.pci-line-5', {
        strokeDashoffset: 0,
        duration: 1,
      })

      pciSchemaTl.to('.pci-arrow-5', {
        strokeDashoffset: 0,
        duration: 0.1,
      })
    }, 500)
  }, [backgroundRef])

  // const page: PageEntity = useResource(PageEntity.detailShape(), { id: 5 })

  const cardIconsSizes = {
    width: sm ? 40 : 36,
    height: sm ? 40 : 36,
  }

  const heroData = {
    type: 'hero',
    category: page.sections[0]?.subtitle,
    title: page.sections[0].title,
    text:page.sections[0]?.description,
    buttonText: page.sections[0].button?.title,
  }

  const heroBlockProps: typeof Block.defaultProps = {
    type: 'hero',
    subtitle: (
      <Text.Category opacity={0.3} size={'md'} color={'primary'}>
        {heroData.category}
      </Text.Category>
    ),
    title: <Text.Title level={1}>{heroData.title}</Text.Title>,
    text: (
      <Text.Paragraph size={'xl'}>
        {<span dangerouslySetInnerHTML={{ __html: sanitize(heroData.text, { allowedTags: [] }) }} />}
      </Text.Paragraph>
    ),
    button: (
      <AntButton
        href={page.sections[0].button?.url}
        icon={
          <Icon color={'secondary'} type={'default'} width={32} height={32} shape={'circle'} gap={14} padding={10}>
            <RightArrow color={'#fff'} />
            {/* <Image src={RightArrow} width="10" height="10" color="#fff"/> */}
          </Icon>
        }
        type={'ghost'}
      >
        <Text.Paragraph font='primary' color={'secondary'} style={{ fontSize: '17px' }} weight={500}>
          {heroData.buttonText}
        </Text.Paragraph>
      </AntButton>
    ),
  }
  const icons = [Icon1, Icon2, Icon3]
  const buildWithoutBurdenData = {
    category: page.sections[1]?.subtitle,
    title: page.sections[1]?.title,
    list: page.sections[1]?.cards.map((card, index) => ({
      icon: icons[index],
      itemTitle: card.title,
      itemText: card.description,
    })),
  }

  const securePaymentsData = {
    type: 'hero',
    category: page.sections[2].subtitle,
    title: page.sections[2].title,
  }

  const securePaymentsBlockProps: typeof Block.defaultProps = {
    type: 'hero',
    title: <Text.Title level={3}>{securePaymentsData.title}</Text.Title>,
    text: (
      <Text.Paragraph size='lg'>
        <span dangerouslySetInnerHTML={{ __html: page.sections[2].description }} />
      </Text.Paragraph>
    ),
  }

  return (
    <Page title={'PCI Widgets'}>
      <div ref={backgroundRef} className='pci-widgets-top-background-wrapper'>
        {xs ? (
          <>
            <PciWidgetsBackgroundDesktop className='pci-widgets-top-background-image primary-image desktop' />
            {/* <PciWidgetsSchemaDesktop className='pci-widgets-top-background-image schema-image desktop'/> */}
            {/* <img src={PciWidgetsBackgroundDesktop} className='pci-widgets-top-background-image primary-image desktop' alt='desktop' /> */}
            {/* <img src={PciWidgetsSchemaDesktop} className='pci-widgets-top-background-image schema-image desktop' alt='desktop' /> */}
          </>
        ) : (
          <>
          {/* <img src={PciWidgetsBackgroundMobile} className='pci-widgets-top-background-image primary-image mobile' alt='desktop'/> */}
          {/* <img src={PciWidgetsSchemaMobile} className='pci-widgets-top-background-image schema-image mobile' alt='desktop'/> */}
            <PciWidgetsBackgroundMobile className='pci-widgets-top-background-image primary-image mobile'  />
            <PciWidgetsSchemaMobile className='pci-widgets-top-background-image schema-image mobile' />
          </>
        )}
         <Container>
          <Row className={'section pci-widgets-hero'}>
            <Col xs={24} sm={12} lg={13} xxl={11}>
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
          <Row className={'section build-without-burden'}>
            <Col width={160} xs={24} xl={4} className='category-col category-col-center'>
              <Text.Category size={'md'} color={'secondary'}>
                {buildWithoutBurdenData.category}
              </Text.Category>
            </Col>
            <Col xl={20}>
              <Row gutterWidth={40}>
                <Col xxl={16} className={'title-wrapper'}>
                  <Text.Title level={2}>{buildWithoutBurdenData.title}</Text.Title>
                </Col>
                <Col xs={24}>
                  <Hidden xs sm>
                    <div className='build-without-burdent-list'>
                      {buildWithoutBurdenData.list.map((item, index) => {
                        const Icon = item.icon
                        return (
                          <Card
                            key={index}
                            size='small'
                            type='ghost'
                            icon={<Icon {...cardIconsSizes} />}
                            // icon={<Image src={Icon} width='40' height='40' className={'pciwidget-img'}/>}
                            title={item.itemTitle}
                            description={item.itemText}
                          />
                        )
                      })}
                    </div>
                  </Hidden>
                  <Visible xs sm>
                    <Swiper
                      pagination={{
                        clickable: true,
                        el: '.custom-pagination.build-without-burden-pagination',
                        type: 'bullets',
                      }}
                      spaceBetween={32}
                      slidesPerView={1}
                      loop
                      loopedSlides={2}
                      className={'build-without-burden-slider'}
                    >
                      {buildWithoutBurdenData.list.map((item, index) => {
                        const Icon = item.icon

                        return (
                          <SwiperSlide key={index}>
                            <Card
                              key={index}
                              size='small'
                              type='ghost'
                              icon={<Icon {...cardIconsSizes} />}
                              // icon={<Image src={Icon} width='105' height='73' className={'pciwidget-img'}/>}
                              title={item.itemTitle}
                              description={item.itemText}
                            />
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                    <CustomPagination className='build-without-burden-pagination' />
                  </Visible>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className={'section build-without-burden'}>
            <Col width={160} xs={24} xl={4} className='category-col category-col-center'>
              <Text.Category size={'md'} color={'secondary'}>
                {securePaymentsData.category}
              </Text.Category>
            </Col>
            <Col xl={20}>
              <Block
                style={{ maxWidth: 890 }}
                type={securePaymentsBlockProps.type}
                title={securePaymentsBlockProps.title}
                text={securePaymentsBlockProps.text}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <GetBuildingSection />
    </Page>
  )
}

export { PciWidgets as default }
