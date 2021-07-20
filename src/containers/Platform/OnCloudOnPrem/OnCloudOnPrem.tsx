import { useResource } from '@rest-hooks/core'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { FC, useEffect } from 'react'
import { isFirefox, isSafari } from 'react-device-detect'
import { Col, Container, Row } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
import sanitize from 'sanitize-html'
import checkIcon from 'public/assets/icons/green-check-icon.png'
// import OnCloudBenefitsBgDesktop from 'public/assets/images/on-cloud-benefits-bg-desktop.svg'
// import OnCloudBenefitsBgMobile from 'public/assets/images/on-cloud-benefits-bg-mobile.svg'
// import OnCloudTopBackgroundDesktop from 'public/assets/images/on-cloud-top-bg-desktop.svg'
import { ReactComponent as OnCloudBenefitsBgDesktop } from 'public/assets/images/on-cloud-benefits-bg-desktop.svg'
import  { ReactComponent as  OnCloudBenefitsBgMobile } from 'public/assets/images/on-cloud-benefits-bg-mobile.svg'
import  { ReactComponent as OnCloudTopBackgroundDesktop } from 'public/assets/images/on-cloud-top-bg-desktop.svg'
import OnCloudTopBackgroundMobile from 'public/assets/images/on-cloud-top-bg-mobile.png'

import { Page } from '../../../components/page/Page'
import { Block } from '../../../components/blocks/Block'
import { AntButton } from '../../../components/form/Button'
import { Icon } from '../../../components/icon/Icon'
// import { ReactComponent as Cube11 } from '../../components/icon/images/cube11.svg'
import  { ReactComponent as  Cube11 }  from '../../../components/icon/images/cube11.svg'
import  { ReactComponent as  Cube12 } from '../../../components/icon/images/cube12.svg'
import  { ReactComponent as  Cube13 } from '../../../components/icon/images/cube13.svg'
import  { ReactComponent as  RightArrow } from '../../../components/icon/images/RightArrow.svg'
import { Card } from '../../../components/page/Card'
import { GetBuildingSection } from '../../../components/page/GetBuildingSection'
import Text from '../../../components/typography'
//import { PageEntity } from '../../models/page'
import './OnCloudOnPrem.less'

gsap.registerPlugin(ScrollTrigger)

const OnCloudOnPrem: FC<any> = ({ page }) => {
  const xs = useMediaQuery({ minWidth: '480px' })
  const sm = useMediaQuery({ minWidth: '576px' })
  const md = useMediaQuery({ minWidth: '768px' })
  const xl = useMediaQuery({ minWidth: '1200px' })
  //const page: PageEntity = useResource(PageEntity.detailShape(), { id: 4 })

  useEffect(() => {
    gsap.to('.on-cloud-large-code-area path', {
      stagger: 0.07,
      display: 'block',
      repeat: -1,
    })
    gsap.to('.on-cloud-small-code-area path', {
      stagger: 0.1,
      display: 'block',
      repeat: -1,
    })
  }, [])

  useEffect(() => {
    if (!isSafari && !isFirefox) {
      const onCloudCard1 = document.querySelector('.on-cloud-card-1')
      const onCloudCard2 = document.querySelector('.on-cloud-card-2')

      ScrollTrigger.matchMedia({
        '(min-width: 1200px)': () => {
          const cardsTl = gsap.timeline({ duration: 0.8, ease: 'sine.inOut' })

          cardsTl
            .fromTo(
              onCloudCard1,
              {
                autoAlpha: 0,
                y: -75,
              },
              {
                autoAlpha: 1,
                y: 0,
              },
            )
            .fromTo(
              onCloudCard2,
              {
                autoAlpha: 0,
                y: -75,
              },
              {
                autoAlpha: 1,
                y: 0,
              },
            )

          const moveCards = (e: MouseEvent) => {
            const el = e.target as Element

            const xPos = e.offsetX / el?.clientWidth - 0.5
            const yPos = e.offsetY / el?.clientHeight - 0.5

            const cards = gsap.utils.toArray('.on-cloud-card') as Element[]

            const modifier = (index: number) => index * 1.15 + 0.5

            cards.forEach((card, index) => {
              gsap.to(card, {
                duration: 1.5,
                x: isFinite(xPos) ? xPos * 17 * modifier(index) : 0,
                y: isFinite(yPos) ? yPos * 27 * modifier(index) : 0,
                rotationX: isFinite(yPos) ? yPos * 10 : 0,
                rotationY: isFinite(xPos) ? xPos * 40 : 0,
              })
            })
          }

          const onCloudMovable = document.querySelector('.on-cloud-movable')

          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onCloudMovable?.addEventListener('mousemove', moveCards)
        },
      })
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const onCloudBenefitsTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.on-cloud-background-wrapper',
          start: 'top center',
          end: '70% center',
          scrub: 2,
        },
      })
      onCloudBenefitsTl.to('.on-cloud-benefits-line', {
        strokeDashoffset: 0,
      })
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 1200px)': () => {
          gsap.set('.on-cloud-benefits-item', {
            autoAlpha: 0,
            scale: 0.5,
          })
          gsap.to('.on-cloud-benefits-item', {
            duration: 0.9,
            delay: 0.3,
            scrollTrigger: {
              trigger: '.on-cloud-benefits-item',
              toggleActions: 'restart reset restart reset',
              start: '5% 94%',
              end: '150% -5%',
            },
            scale: 1,
            autoAlpha: 1,
          })
        },
      })
    }, 500)
  }, [])

  const singleCubeSizes = {
    width: sm ? 94 : 56,
    height: sm ? 65 : 39,
  }
  const cubeSizes = {
    width: sm ? 140 : 96,
    height: sm ? 88 : 69,
  }
 
  const heroData = {
    type: 'hero',
    subtitle: page.sections[0]?.subtitle,
    title: page.sections[0].title,
    text: sanitize(`${page.sections[0].description}`, { allowedTags: [] }),
    buttonText: page.sections[0].button?.title,
  }

  const benefitIcons = [Cube12, Cube13]
  const onCloudBenefitsData = {
    category: page.sections[2]?.subtitle,
    title: page.sections[2].title,
    list: page.sections[2].cards.map(value => value.title),
    cardsList: page.sections[3].cards,
  }
  const HeroSection = () => (
    <Row className={'section on-cloud-hero'}>
      <Col xs={24} sm={12} lg={15} xxl={12}>
        <Block
          type={'hero'}
          subtitle={
            <Text.Category opacity={0.3} size={'md'} color={'primary'}>
              {heroData.subtitle}
            </Text.Category>
          }
          title={
            <Text.Title maxWidth={430} level={1}>
              {heroData.title}
            </Text.Title>
          }
          text={
            <Text.Paragraph size={'xl'}>
              <span dangerouslySetInnerHTML={{ __html: `${heroData?.text}` }} />
            </Text.Paragraph>
          }
          button={
            <AntButton
              href={'/docs/getting-started'}
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
                  <RightArrow />
                  {/* <Image src={RightArrow} width="10" height="10" color="#fff"/> */}

                </Icon>
              }
              type={'ghost'}
            >
              <Text.Paragraph font='primary' color={'secondary'} style={{ fontSize: '17px' }} weight={500}>
                {heroData.buttonText}
              </Text.Paragraph>
            </AntButton>
          }
        />
      </Col>
    </Row>
  )
  const OnCloudBenefitsSection = () => (
    <Row className={'section on-cloud-benefits'}>
      <Col xs={24} className='on-cloud-benefits-head'>
        <Row>
          <Col xs={24} className='on-cloud-benefits-category-wrapper'>
            <Text.Category color='secondary' size='md'>
              {onCloudBenefitsData.category}
            </Text.Category>
          </Col>
          <Col xs={24} className='on-cloud-benefits-title-wrapper'>
            <Text.Title level={3}>{onCloudBenefitsData.title}</Text.Title>
          </Col>
          <Col xs={24}>
            <div className='on-cloud-benefits-list'>
              {onCloudBenefitsData.list.map((item, index) => (
                <div key={index} className='on-cloud-benefits-list-item'>
                  <img src={checkIcon} className='check-icon' alt='check-icon' />
                  <Text.Paragraph>{item}</Text.Paragraph>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={24}>
        <div className='on-cloud-benefits-card-list'>
          {onCloudBenefitsData.cardsList.map((item, index) => {
            const Icon = benefitIcons[index]
            return (
              <Card
                key={item.id}
                size='large'
                type='dark'
                icon={<Icon {...cubeSizes} />}
                //icon={<Image src={Icon} width='105' height='73' className={'openapi-img'}/>}
                title={item.title}
                description={item?.description}
              />
            )
          })}
        </div>
      </Col>
    </Row>
  )

  const TheFreedomSection = () => (
    <Row className={'section the-freedom'}>
      <Col xs={24} xxl={14}>
        <div className='the-freedom-icon-wrapper'>
          {/* <Image src={Cube11} color="#fff" {...singleCubeSizes}/> */}
          <Cube11 />

       </div>        
        {/* <div className='the-freedom-icon-wrapper'>{<Cube11 {...singleCubeSizes} />}</div> */}
        <div className='the-freedom-title-wrapper'>
          <Text.Title level={3}>{page.sections[1]?.title}</Text.Title>
        </div>
        <div className='the-freedom-text-wrapper'>
          <Text.Paragraph maxWidth={625} size='md'>
            <span dangerouslySetInnerHTML={{ __html: `${page.sections[1]?.description}` }} />
          </Text.Paragraph>
        </div>
      </Col>
    </Row>
  )
  return (
    <Page title={page.title}>
      <div className='on-cloud-top-background-wrapper'>
        {xl && <div className='on-cloud-movable' />}
        {xs ? (
          <OnCloudTopBackgroundDesktop className='on-cloud-top-background-image desktop' />
          // <img src={OnCloudTopBackgroundDesktop} 
          // className='on-cloud-top-background-image desktop' 
          // alt='background-image'
          // />
         ) : (
          <img
            src={OnCloudTopBackgroundMobile}
            alt='background-image'
            className='on-cloud-top-background-image mobile'
          />
        )}
        <Container>
          <HeroSection />
        </Container>
        <Container>
          <TheFreedomSection />
        </Container>
      </div>
    
      <Container fluid className='inverse'>
        <div className='on-cloud-background-wrapper'>
          {md ? (
            <OnCloudBenefitsBgDesktop className='on-cloud-background-image desktop' />
            // <img
            // src={onCloudTopBackgroundMobile}
            // alt='background-image'
            // className='on-cloud-background-image desktop'          
            // />
          ) : (
            <OnCloudBenefitsBgMobile className='on-cloud-background-image mobile' />
          //   <img
          //   src={onCloudTopBackgroundMobile}
          //   alt='background-image'
          //   className='on-cloud-background-image mobile'          
          //   />
          )}
          <Container>
            <OnCloudBenefitsSection />
          </Container>
        </div>
      </Container>
      <GetBuildingSection />
    </Page>
  )
}

export { OnCloudOnPrem as default }
