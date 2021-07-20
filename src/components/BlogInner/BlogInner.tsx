import { Image } from 'antd'
import 'antd/lib/image/style/index.less'
import moment from 'moment'
import { FC, useEffect, lazy, Suspense } from 'react'
import { Col, Container, Row, Visible } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'
import { ReactComponent as ArrowBtn } from 'public/assets/icons/blog-inner-btn-arrow.svg'
import { ReactComponent as BlogArrow } from 'public/assets/icons/thin-arrow.svg'
import { Page, Text } from '../../components'
import { Block } from '../../components/blocks/Block'
import { MainButton } from '../../components/buttons/MainButton'
import { AntButton } from '../../components/form/Button'
//import TestPdf from './PPdfViewer';
import './BlogInner.less'

//const PdfViewer = lazy(() => import('./PdfViewer').then(({ PdfViewer }) => ({ default: PdfViewer })))

const BlogInner: FC<any> = ({ data }) => {
  const isMobileDevice = useMediaQuery({ maxWidth: 991 })
  // const [page] = useResource(PageEntity.listShape(), { uri: `/${uri}` })
  

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  //}, [location])

  // const router = useRouter()
  // const { uri } = router.query
  // const { data, error } = getPageByUri(`/${uri}`);
  // console.log('error', error)
  // if(error) return <h1>Something wrong happened</h1>
	// if (!data ) return <h1>Loading ...</h1>
  // console.log('data', data);
  
  const page = data[0]
  console.log('single post', page)

  return  (
    <Page title={'Blog-inner'}>
      {/* {page.seo && (
        <Helmet>
          <title>{page.seo.metaTitle}</title>
          <meta name='description' content={page.seo.metaDescription} />
          <meta property='og:title' content={page.seo.metaTitle} />
          <meta property='og:description' content={page.seo.metaDescription} />
        </Helmet>
      )} */}
      <Container fluid>
        <Row justify='center' style={isMobileDevice ? {} : { paddingBottom: '104px' }}>
          <Col xl={16}>
            <Row style={isMobileDevice ? { marginBottom: '12px', paddingTop: '40px' } : { marginBottom: '25px' }}>
              <Col>
                <MainButton
                  path={page.category.id === 4 ? '/company/blog' : '/company/press-room'}
                  size='small'
                  type='ghost-dark'
                  text={'All articles'}
                  icon={<ArrowBtn />}
                  onClick= {() => {}}
                />
              </Col>
            </Row>
            <Image className='blog-image' preview={false} src={page.sections[0]?.images[0]?.url} width={'100%'} />

            <Row justify='center' style={isMobileDevice ? { paddingBottom: '48px' } : {}}>
              <Col>
                <Row
                  justify='center'
                  style={isMobileDevice ? {} : { flexDirection: 'row-reverse', alignItems: 'baseline' }}
                >
                  <Col xl={19} style={{ marginBottom: isMobileDevice ? '32px' : 0 }}>
                    <Text.Paragraph className={'inner-title'} style={{ marginBottom: '24px' }}>
                      {page.sections[0].title}
                    </Text.Paragraph>
                    <Row style={isMobileDevice ? { marginBottom: '32px' } : { marginBottom: '40px' }}>
                      <Col style={{ display: 'flex', marginBottom: '15px' }}>
                        <img width='30' height='30' src='../../assets/icons/blog-icon.svg' style={{ marginRight: '8px' }} />
                        <Block
                          subtitle={<Text.SubTitle className={'card-logo'}>Nymcard</Text.SubTitle>}
                          title={
                            <Text.Title className={'card-date'}>
                              {moment(page.publishedAt).format('DD MMM, YYYY')}
                            </Text.Title>
                          }
                        />
                      </Col>
                    </Row>
                    <Row className={'blog-inner-text-wrapper'}>
                      <Col>
                        <Text.Paragraph className={'news-description'}>
                          <span dangerouslySetInnerHTML={{ __html: `${page.sections[0].description}\n` }} />
                          {/* {page.sections.document && (
                            <Suspense fallback={'Loading...'}>
                              <PdfViewer url={`${page.sections.document?.url}`} />
                            </Suspense>
                          )} */}
                        </Text.Paragraph>
                        {/* <Suspense fallback={'Loading...'}>
                              <PdfViewer url={`https://cmmsbucket.s3.amazonaws.com/pdf-test.pdf`} />
                              <PdfViewer url={`https://cmmsbucket.s3.amazonaws.com/project_overview_plan_aa.pdf`} />
                          </Suspense> */}
                      </Col>
                    </Row>

                    {page.sections.length > 0 && page.sections[0].button && (
                      <Row className={'blog-inner-button'}>
                        <Col
                          key={1}
                          width={'auto'}
                          style={isMobileDevice ? { paddingRight: '16px' } : undefined}
                          className={'blog-button'}
                        >
                          <AntButton style={{ width: '128px', height: '40px', borderRadius: '86px' }}>
                            <Text.Link
                              url={page.sections[0].button?.url}
                              size='sm'
                              uppercase
                              weight={700}
                              color={'inverse'}
                              style={{ margin: '0 auto' }}
                            >
                              {page.sections[0].button?.title}
                            </Text.Link>
                          </AntButton>
                        </Col>
                      </Row>
                    )}
                  </Col>
                  <Col xl={2.2} style={isMobileDevice ? {} : { display: 'flex', flexDirection: 'column' }}>
                    <Visible xs sm md lg>
                      <Text.Paragraph className={'share'}>Share:</Text.Paragraph>
                    </Visible>
                    <a
                      rel='noreferrer'
                      href='https://www.linkedin.com/sharing/share-offsite/?url=https://nymcard.com'
                      target='_blank'
                      style={isMobileDevice ? { marginRight: '22px' } : { marginBottom: '16px' }}
                    >
                      <img alt={'LinkedIn'} src='../../assets/icons/linked-in-dark.svg' width='32' height='32' />
                    </a>
                    <a
                      rel='noreferrer'
                      href='https://twitter.com/intent/tweet'
                      target='_blank'
                      style={isMobileDevice ? { marginRight: '22px' } : { marginBottom: '16px' }}
                    >
                      <img alt={'TwitterBtn'} src='../../assets/icons/twitter-dark.svg' width='32' height='32' />
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row
          justify='center'
          style={
            isMobileDevice
              ? { backgroundColor: '#F1F6FB', paddingTop: '48px', paddingBottom: '24px' }
              : { backgroundColor: '#F1F6FB', paddingTop: '104px', paddingBottom: '104px' }
          }
        >
          <Col xl={16} hidden>
            <Text.Paragraph className={'more'} style={{ marginBottom: '32px' }}>
              More Stories
            </Text.Paragraph>
            <Row>
              <Col style={!isMobileDevice ? { display: 'flex', justifyContent: 'space-between' } : {}}>
                {page?.category?.pages
                  ?.filter(it => it.id === page.id)
                  .map((it, index) => (
                    <div
                      className={'blog-card'}
                      key={it.uri}
                      hidden={isMobileDevice ? index > 1 : index > 2}
                      style={
                        isMobileDevice
                          ? {
                              paddingTop: '17px',
                              paddingBottom: '33px',
                              backgroundColor: '#fff',
                              marginBottom: '24px',
                              borderRadius: '3px',
                            }
                          : {
                              paddingTop: '17px',
                              paddingBottom: '33px',
                              backgroundColor: '#fff',
                              borderRadius: '3px',
                              maxWidth: '30%',
                            }
                      }
                    >
                      <Col style={{ display: 'flex', marginBottom: '15px' }}>
                        <img width='30' height='30' src='../../assets/icons/blog-icon.svg' style={{ marginRight: '8px' }} />
                        <Block
                          subtitle={<Text.SubTitle className={'card-logo'}>Nymcard</Text.SubTitle>}
                          title={
                            <Text.Title className={'card-date'}>
                              {moment(page.publishedAt).format('DD MMM, YYYY')}
                            </Text.Title>
                          }
                        />
                      </Col>
                      <Row style={{ marginBottom: '22px' }}>
                        <Col>
                          <img src={it.sections[0]?.images[0]?.url} style={{ width: '100%' }} />
                        </Col>
                      </Row>
                      <Col style={{ marginBottom: '7px' }}>
                        <Text.Paragraph className={'card-text'}>
                          <span dangerouslySetInnerHTML={{ __html: `${it.title}\n` }} />
                        </Text.Paragraph>
                      </Col>
                      <Col>
                        <MainButton
                          path={`${it?.category?.uri}/${it.uri}`}
                          type='ghost'
                          text='Read more'
                          icon={<BlogArrow />}
                          orderReversed={true}
                  onClick= {() => {}}
                        />
                      </Col>
                    </div>
                  ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Page>
  )
}

export default BlogInner
