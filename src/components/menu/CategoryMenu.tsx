import { Dropdown, Menu } from 'antd'
import 'antd/lib/dropdown/style/index.less'
import 'antd/lib/menu/style/index.less'
import 'antd/lib/space/style/index.less'
import { FC } from 'react'
import { Col, Row } from 'react-grid-system'
//import { useLocation } from 'react-router-dom'
import { useRouter } from 'next/router'

// import neoIraq from '../../assets/icons/neo-iraq.svg'
//import { CategoryEntity } from '../../models/category'
// import { usePressRoomPages } from '../../models/page'
import { Text } from '../index'
import './CategoryMenu.less'

const CategoryMenu: FC<{ data: any[] }> = ({ data = [] }) => {
  const {pathname} = useRouter()
  return (
    <Row nowrap style={{ padding: '0 16px' }} gutterWidth={32} align={'center'}>
      {data.map((parent, index) => {
        //console.log(parent)
        const largeSizeLinks = parent.pages.length > 2
        return (
          <Col key={index}>
            <Dropdown
              mouseLeaveDelay={0.3}
              overlay={
                index === 1 ? (
                  <Menu className={largeSizeLinks ? 'large-links-wrapper' : ''}>
                    <Menu.Item key={'/docs/api'}>
                      <Text.Link
                        color={'primary'}
                        weight={500}
                        font={'secondary'}
                        url={'/docs/api'}
                        className={'category-item'}
                      >
                        API Catalog
                      </Text.Link>
                    </Menu.Item>
                    <Menu.Item key={'/docs/getting-started'}>
                      <Text.Link
                        color={'primary'}
                        weight={500}
                        font={'secondary'}
                        url={'/docs/getting-started'}
                        className={'category-item'}
                      >
                        Getting Started
                      </Text.Link>
                    </Menu.Item>
                  </Menu>
                ) : (
                  <Menu className={largeSizeLinks ? 'large-links-wrapper' : ''}>
                    {parent.pages.map(page => (
                    
                      <Menu.Item key={page.id}>
                        <Text.Link
                          color={'primary'}
                          weight={700}
                          font={'secondary'}
                          url={`${parent.uri}${page.uri}`}
                          className={'category-item'}
                        >
                          {page.title}
                        </Text.Link>
                      </Menu.Item>
                    ))}
                  </Menu>
                )
              }
              placement='bottomLeft'
            >
              <Text.Category
                weight={600}
                font={'tertiary'}
                size={'lg'}
                color={'primary'}
                uppercase
                className={'category-paragraph'}
              >
                <span className={pathname.endsWith('why-nymcard') ? 'pages-menu-item-inverse' : 'pages-menu-item'}>
                  {parent.title}
                </span>
              </Text.Category>
            </Dropdown>
          </Col>
        )
      })}
    </Row>
  )     
}

export { CategoryMenu }
