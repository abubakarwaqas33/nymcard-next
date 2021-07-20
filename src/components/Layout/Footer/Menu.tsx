import { FC, Fragment } from 'react'
import { Col, Row, Visible, setConfiguration } from 'react-grid-system'
import Text from '../../../components/typography'
// import { CategoryEntity } from '../../../models/category'
import './Menu.less'
type MenuProps = {
  type: 'header' | 'footer'
}

const Menu: FC<MenuProps & { data: any[] }> = ({ data = [], type }) => {
  const isHeader = type === 'header'
  setConfiguration({
    gutterWidth: 32,
    gridColumns: 24,
    breakpoints: [480, 576, 768, 992, 1200],
    containerWidths: [420, 540, 740, 960, 1264],
  })

  return (
    <Row justify='between' className={isHeader ? 'header-menu-wrapper' : ''}>
      {data.map((parent, index) => {
        let order
        if (index === 0 && !isHeader) {
          order = 1
        } else if (index === 1 && !isHeader) {
          order = 3
        } else if (index === 2 && !isHeader) {
          order = 2
        }

        return (
          <Fragment key={parent.uri}>
            <Col
              xs={isHeader ? 24 : 12}
              md={12}
              lg={12}
              xl={8}
              className={'sections-wrapper'}
              style={{ order: order && order }}
            >
              <Text.Paragraph weight={600} uppercase className={'menu-sections'}>
                {parent.title}
              </Text.Paragraph>
              <Row className={'links-position'}>
                {parent.uri === '/docs' && (
                  <Fragment>
                    <Col xs={isHeader ? 12 : 24} md={24} className={'section-items-wrapper'}>
                      <Text.Link url={'/docs/api'} className={'section-items'}>
                        API Catalog
                      </Text.Link>
                    </Col>
                    <Col xs={isHeader ? 12 : 24} md={24} className={'section-items-wrapper'}>
                      <Text.Link url={'/docs/getting-started'} className={'section-items'}>
                        Getting Started
                      </Text.Link>
                    </Col>
                    <Visible xl xxl>
                      <Col>
                        <Text.Paragraph
                          weight={600}
                          uppercase
                          className={'menu-sections'}
                          style={{ marginTop: '30px' }}
                        >
                          Email
                        </Text.Paragraph>
                        <Text.Paragraph size={'sm'} weight={500} font='tertiary' className={'section-items'}>
                          <a href={'mailto:info@nymcard.com'}>info@nymcard.com</a>
                        </Text.Paragraph>
                      </Col>
                    </Visible>
                  </Fragment>
                )}
                {parent.pages.map(item => (
                  <Fragment key={item.id}>
                    <Col xs={isHeader ? 12 : 24} md={24} className={'section-items-wrapper'}>
                      <Text.Link url={`${parent.uri}/${item.uri}`} className={'section-items'}>
                        {item.title}
                      </Text.Link>
                    </Col>
                  </Fragment>
                ))}
              </Row>
            </Col>
            {index === 2 && !isHeader && (
              <Visible xs sm md lg>
                <Col style={{ order: 3, width: '50%' }}>
                  <Text.Paragraph weight={600} uppercase className={'menu-sections'}>
                    Email
                  </Text.Paragraph>
                  <Text.Link font='tertiary' className={'section-items'}>
                    info@nymcard.com
                  </Text.Link>
                </Col>
              </Visible>
            )}
          </Fragment>
        )
      })}
    </Row>
  )
}

export { Menu }
