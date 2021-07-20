import Image from 'next/image'
import { Modal } from 'antd'
import 'antd/lib/modal/style/index.less'
import { FC, useState } from 'react'
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/components/pagination/pagination.less'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.less'
import neoCard from 'public/assets/images/neo-card.png'
import videoImage from 'public/assets/images/video.png'
import partner1 from 'public/assets/logos/partner1.png'
import partner2 from 'public/assets/logos/partner2.png'
import partner3 from 'public/assets/logos/partner3.png'
import partner4 from 'public/assets/logos/partner4.png'
import personImage from 'public/assets/testimonials/person1.png'
import { Block } from '../blocks/Block'
import { CustomPagination } from '../slider/CustomPagination/CustomPagination'
import Text from '../typography'
import './PartnerSection.less'

SwiperCore.use([Pagination])

const PartnerSection: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
    document.head.parentElement?.classList.add('html-scroll')
  }

  const handleOk = () => {
    setIsModalVisible(false)
    document.head.parentElement?.classList.remove('html-scroll')
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    document.head.parentElement?.classList.remove('html-scroll')
  }

  const sm = useMediaQuery({
    query: '(max-width: 576px)',
  })
  const yourTrustedPaymentData = {
    title: 'Your Trusted Payment Partner',
    text:
      '“NymCard has helped us tremendously with digital Visa card delivery for our new clients. This is the optimal solution for those in the MENA markets who are seeking a state-of-the-art payment issuing platform.”',
    category: 'Reviews',
    person: {
      iconUrl: personImage,
      name: 'Zaid Fawzi',
      position: 'CEO, NEO',
    },
    partnersList: [partner1, partner2, partner3, partner4],
  }
  const blockProps: typeof Block.defaultProps = {
    type: 'primary',
    title: (
      <Text.Title maxWidth={sm ? 231 : undefined} level={2}>
        {yourTrustedPaymentData.title}
      </Text.Title>
    ),
    text: (
      <Text.Paragraph size='xl' font='primary'>
        {yourTrustedPaymentData.text}
      </Text.Paragraph>
    ),
  }
  return (
    <Container>
      <Row className='section payment-partner'>
        <Col width={152} xs={24} xl={4} className='category-col category-col-center'>
          <Text.Category size={'md'} color={'secondary'}>
            {yourTrustedPaymentData.category}
          </Text.Category>
        </Col>
        <Col xl={20}>
          <Row className='payment-partner-content'>
            <Col xs={24} lg={12}>
              <Row className='block-wrapper'>
                <Col>
                  <Block type={blockProps.type} title={blockProps.title} text={blockProps.text} />
                </Col>
              </Row>
            </Col>
            <Col lg={12}>
              <div className='payment-partner-pictures'>
                <img src={neoCard} alt='card' className='payment-partner-neo-card' />
                <img
                  onClick={showModal}
                  src={videoImage}
                  alt='video'
                  className={`payment-partner-video ${isModalVisible ? 'active' : ''}`}
                />
                {isModalVisible && (
                  <Modal
                    className='video-modal'
                    forceRender={true}
                    footer={null}
                    width='80%'
                    bodyStyle={{ height: '36vw', maxHeight: '100%' }}
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <video className='partners-video' autoPlay controls>
                      <source src={`${process.env.PUBLIC_URL}/media/video/neo.mp4`} type='video/mp4' />
                    </video>
                  </Modal>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Hidden xs sm>
                <div className='payment-partner-list'>
                  {yourTrustedPaymentData.partnersList.map((logo, index) => (
                    <div key={index} className='payment-partner-list-item'>
                      <img className='payment-partner-logo' src={logo} alt='logo' />
                    </div>
                  ))}
                </div>
              </Hidden>
              <Visible xs sm>
                <Swiper
                  pagination={{
                    clickable: true,
                    el: '.custom-pagination.partners',
                    type: 'bullets',
                  }}
                  spaceBetween={42}
                  className='partners-slider'
                >
                  {yourTrustedPaymentData.partnersList.map((logo, index) => (
                    <SwiperSlide className='partners-slide' key={index}>
                      <img src={logo} className='partners-slide-image' alt='logo' />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <CustomPagination className='partners' />
              </Visible>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export { PartnerSection }
