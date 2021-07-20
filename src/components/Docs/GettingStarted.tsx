import { Layout, Space } from 'antd'
import 'antd/lib/table/style/index.less'
import React, { FC, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Page, Text } from '../../components'
import { AntButton } from '../../components/form/Button'
import { Icon } from '../../components/icon/Icon'
import { ReactComponent as RightArrow } from '../../components/icon/images/RightArrow.svg'
import { PageEntity } from '../../models/page'
import './GettingStarted.less'
import readingTime from 'reading-time'

const DeveloperPortalPage: FC<any> = ({ pages }) => {
  const { asPath } = useRouter()
  const [pathname, hash = ''] = asPath.split(/(?=#)/)
  const ref = useRef<HTMLSpanElement>(null)
  const scrollToHeader = () => ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  useEffect(() => {
    hash.endsWith(`${ref.current?.id}`) && scrollToHeader()
  }, [hash, ref])

  if(!pages) return (<div>Loading...</div>)
  const page = pages.find(value => (pathname ? pathname.endsWith(value.uri) : value.uri.endsWith('/getting-started')))
  
  let sectionDescReadingTime = ''
  if (page) {
    sectionDescReadingTime = readingTime(page?.sections?.map(item => item?.description).join(','), {
      wordsPerMinute: 120,
    }).text
  }

  return page ? (
    <Page title={page.title}>
      <Space direction={'vertical'} size={'large'}>
        <div className='getting-started-head'>
          <Text.Title level={3}>{page.title}</Text.Title>
          <div className='info-box'>
            <div className='info-item read-time'>
              <Text.Paragraph>{sectionDescReadingTime}</Text.Paragraph>
            </div>
            <div className='info-item statistic'>
              <Text.Paragraph>15 people viewed</Text.Paragraph>
            </div>
          </div>
        </div>
        {page.sections.map(
          section =>
            section && (
              <Space key={section.id} direction={'vertical'} size={'middle'}>
                {section.title && (
                  <span ref={hash.endsWith(`${section.id}`) ? ref : undefined}>
                    <Text.Title level={4}>{section.title}</Text.Title>
                  </span>
                )}
                <Layout.Content id={'documentation'} dangerouslySetInnerHTML={{ __html: section.description }} />
                {section.button !== null && (
                  <AntButton
                    style={{
                      maxWidth: '727px',
                      width: '100%',
                      border: '1px solid rgba(197, 197, 197, 0.4)',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                    icon={
                      <Icon type={'default'} orderReversed={true} gap={8} padding={0} width={'unset'}>
                        <RightArrow color={'#35488F'} />
                      </Icon>
                    }
                    type={'ghost'}
                  >
                    <Text.Link
                      uppercase
                      weight={700}
                      url={section?.button?.uri}
                      style={{ color: '#35488F', padding: '0' }}
                    >
                      {section.button.title}
                    </Text.Link>
                  </AntButton>
                )}
              </Space>
            ),
        )}{' '}
      </Space>
    </Page>
  ) : (
    <div>Loaading...</div>
  )
}

export { DeveloperPortalPage as default }
