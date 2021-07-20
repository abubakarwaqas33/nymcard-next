import { Layout, Menu } from 'antd'
import { createRef, FC, useEffect, useState } from 'react'
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'
import { Text } from '..'
import { PageEntity } from '../../models/page'
// import ComingSoon from '../../pages/ComingSoon/ComingSoon'
import { GettingSearch } from '../form/GettingSearch'
import './DeveloperPortal.less'
import { Responsive } from '../Layout/Responsive'
import DeveloperPortalPage from './GettingStarted'

const HorizontalMenu: FC<{ data: PageEntity[] }> = ({ data }) => {
  const router = useRouter()
  return (
    <Menu mode='horizontal' style={{ marginBottom: 16 }}>
      {data.map(
        page =>
          page.title && (
            <Menu.SubMenu onTitleClick={() => router.push(`/docs${page.uri}`)} key={`/docs${page.uri}`} title={page.title}>
              {page.sections.map(section => (
                <Menu.Item key={section.id}>
                  <Text.Link url={`/docs/${page.uri}#section-${section.id}`}>{section.title}</Text.Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ),
      )}
    </Menu>
  )
}

const VerticalMenu: FC<{ data: PageEntity[] }> = ({ data }) => {
  const { pathname } = useRouter()
  const [openedKey, setOpenedKey] = useState(pathname)
  const router = useRouter()
  const handleTitleClick = (key: string) => {
    router.push(key)
    scrollTo({ top: 0, behavior: 'smooth' })
    setOpenedKey(key)
  }
  return (
    <Menu
      mode='inline'
      defaultSelectedKeys={['section-31']}
      defaultOpenKeys={[pathname]}
      openKeys={[openedKey]}
      className={'vertical-menu'}
    >
      {data.map(
        page =>
          page.title && (
            <Menu.SubMenu
              onTitleClick={() => handleTitleClick(`/docs${page.uri}`)}
              key={`/docs${page.uri}`}
              title={page.title}
            >
              {page.sections.map(
                section =>
                  section.title && (
                    <Menu.Item key={`section-${section.id}`}>
                      <Text.Link url={`/docs${page.uri}#section-${section.id}`}>{section.title}</Text.Link>
                    </Menu.Item>
                  ),
              )}
            </Menu.SubMenu>
          ),
      )}
    </Menu>
  )
}

const DeveloperPortal: FC<any> = ({ category, pages}) => {

  const footerRef = createRef<HTMLDivElement>()
  const md = useMediaQuery({ minWidth: '768px' })

  useEffect(() => {
    const asideMenu = document.querySelector('.aside-menu') as HTMLDivElement
    // const footerWrapper = document.querySelector('.footer-wrapper') as HTMLDivElement

    if (md && asideMenu) {
      const isInViewport = (elem: Element) => {
        const bounding = elem.getBoundingClientRect()

        return (
          bounding.top >= -bounding.height &&
          bounding.left >= 0 &&
          bounding.bottom <=
            (window.innerHeight + bounding.height || document.documentElement.clientHeight + bounding.height) &&
          bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
      }

      // const setFixedAside = () => {
      //   isInViewport(footerWrapper) ? asideMenu.classList.remove('shown') : asideMenu.classList.add('shown')
      // }

      // window.addEventListener('scroll', setFixedAside)
    }
  }, [footerRef])

  return category ? (
    <>
        <Hidden lg xl xxl>
          <GettingSearch data={category.pages} />
          <HorizontalMenu data={category.pages} />
        </Hidden>
        <Container style={{ paddingTop: md ? '116px' : 0 }}>
          <Row nowrap={true}>
            <Visible lg xl xxl>
              <div className={'aside-menu shown'}>
                <Col width={320}>
                  <GettingSearch data={category.pages} />
                  <VerticalMenu data={category.pages} />
                </Col>
              </div>
            </Visible>
            <div className='content-wrapper'>
              <Col className={'page-content'}>
                <DeveloperPortalPage  pages={pages}/>
              </Col>
            </div>
          </Row>
        </Container>
    </>
  ) : (
    <div>Loading...</div>
  )
}

export { DeveloperPortal }
