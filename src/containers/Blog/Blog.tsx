import { useResource } from '@rest-hooks/core'
import { Pagination } from 'antd'
import moment from 'moment'
import { FC, useEffect, useState } from 'react'
import { Col, Container, Row, Visible } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
import { ReactComponent as BlogArrow } from 'public/assets/icons/thin-arrow.svg'
import { Text } from '../../components'
import { Block } from '../../components/blocks/Block'
import { MainButton } from '../../components/buttons/MainButton'
import { BlogSearch } from '../../components/form/BlogSearch'
import Page from '../../components/page'
import { CategoryEntity } from '../../models/category'
import { PageEntity } from '../../models/page'
// import { getBlogs } from '../../api/categories'
import './Blog.less'

type BlogProps = { categoryId: number; title: string }

const Blog: FC<any> = ({ title, categoryId, page }) => {
  const isMobileDevice = useMediaQuery({ maxWidth: 991 })

  // const { data, error } = getBlogs();
  // if(error) return <h1>Something wrong happened</h1>
	// if (!data ) return <h1>Loading ...</h1>
  // // console.log(data)

  const posts = page.pages

  // const category: CategoryEntity = useResource(CategoryEntity.detailShape(), { id: categoryId })
  // const [posts, setPosts] = useState<PageEntity[]>([])

  // useEffect(() => {
  //   setPosts(category.pages.sort((a, b) => (a.id < b.id ? 1 : -1)))
  // }, [categoryId])

  const notFoundMessage = 'Sorry, we couldn’t find the article you’re searching for'
  return (
    <Page title={title}>
      <Container className={'blog-wrapper'}>
        <Row
          justify='center'
          style={
            !isMobileDevice
              ? { paddingTop: '92px', paddingBottom: '104px' }
              : { paddingTop: '40px', paddingBottom: '48px' }
          }
        >
          <Col xl={18}>
            <Row style={{ marginBottom: '33px' }}>
              <Col xl={16}>
                <Block
                  subtitle={<Text.SubTitle className={'blog-subtitle'}>Nymcard</Text.SubTitle>}
                  title={<Text.Title className={'blog-title'}>{title}</Text.Title>}
                />
              </Col>
              <Col
                xl={8}
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}
              >
                {/*  search */}
                <BlogSearch data={posts} />
              </Col>
            </Row>

            <Row style={!isMobileDevice ? { marginBottom: '50px' } : {}} gutterWidth={24}>
              {posts?.map((item, index) => {
                let type = 24

                switch (index) {
                  case 0:
                    type = 8
                    break
                  case 1:
                    type = 8
                    break
                  case 2:
                    type = 8
                    break
                  case 3:
                    type = 8
                    break
                  case 4:
                    type = 8
                    break
                  case 5:
                    type = 8
                    break

                  default:
                    type = 24
                    break
                }

                return (
                  <Col xl={type} key={index}>
                    {/* index = 0 , index = 1 */}
                    {/* <Visible xl xxl>
                      <div
                        className={'blog-card'}
                        style={
                          (index === 1 && { height: '94.5%', padding: '20px 5px 20px', display: 'flex' }) ||
                          (index < 2 ? { padding: '20px 5px 20px', display: 'flex' } : { display: 'none' })
                        }
                      >
                        <Col xl={11} style={{ display: 'flex' }}>
                          <img
                            src={item.sections[0]?.images[0].url}
                            style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '3px' }}
                          />
                        </Col>
                        <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                          <Row>
                            <Col>
                              <Text.Paragraph
                                className={'card-text'}
                                style={{ fontSize: '23px', marginBottom: '23px' }}
                              >
                                {item.title}
                              </Text.Paragraph>
                              <Row>
                                <Col style={{ display: 'flex', marginBottom: '15px' }}>
                                  <img width='30' height='30' src='../../assets/icons/blog-icon.svg' style={{ marginRight: '8px' }} />
                                  <Block
                                    subtitle={<Text.SubTitle className={'card-logo'}>Nymcard</Text.SubTitle>}
                                    title={
                                      <Text.Title className={'card-date'}>
                                        {moment(item.publishedAt).format('DD MMM, YYYY')}
                                      </Text.Title>
                                    }
                                  />
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <MainButton
                                path={`/news${item.uri}`}
                                type='ghost'
                                text='Read more'
                                icon={<BlogArrow />}
                                orderReversed={true}
                                onClick= {() => {}}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </div>
                    </Visible> */}
                    {/* default */}
                    {/* <div className={'blog-card'} hidden={!isMobileDevice ? index === 0 || index === 1 : false}> */}
                    <div className={'blog-card'} 	
                    style={	
                      !isMobileDevice ? { height: '350px'} : {}	
                    }	
                    >
                      <Col style={{ display: 'flex', marginBottom: '15px' }}>
                        <img width={30} height={30} src='../../assets/icons/blog-icon.svg' style={{ marginRight: '8px' }} />
                        <Block
                          subtitle={<Text.SubTitle className={'card-logo'}>Nymcard</Text.SubTitle>}
                          title={
                            <Text.Title className={'card-date'}>
                              {moment(item.publishedAt).format('DD MMM, YYYY')}
                            </Text.Title>
                          }
                        />
                      </Col>
                      <Row style={{ marginBottom: '22px' }}>
                        <Col>
                          <img src={item.sections[0]?.images[0].url} style={{ width: '100%' }} />
                        </Col>
                      </Row>
                      <Col style={{ marginBottom: '7px' }}>
                        <Text.Paragraph className={'card-text'}>{item.title}</Text.Paragraph>
                      </Col>
                      <Col>
                        <MainButton
                          path={`/news${item.uri}`}
                          type='ghost'
                          text='Read more'
                          icon={<BlogArrow />}
                          orderReversed={true}
                          onClick= {() => {}}
                        />
                      </Col>
                    </div>
                  </Col>
                )
              })}
            </Row>
            <Visible xl xxl>
              <Row justify='center'>
                <Col xl={10}>
                  <Pagination
                    defaultPageSize={6}
                    showLessItems={false}
                    showSizeChanger={false}
                    total={posts.length}
                    itemRender={(page, type, originalElement) => {
                      switch (type) {
                        case 'jump-next':
                        case 'jump-prev':
                          return <span style={{ cursor: 'pointer' }}>...</span>
                        default:
                          return originalElement
                      }
                    }}
                    hideOnSinglePage={true}
                    className={'blog-pagination'}
                  />
                </Col>
              </Row>
            </Visible>
          </Col>
        </Row>
      </Container>
    </Page>
  )
}

export default Blog 
