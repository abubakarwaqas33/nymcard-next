import React, { FC } from 'react'
import TagManager from 'react-gtm-module'
import './Page.less'

type PageProps = {
  title: string
}

const Page: FC<Partial<PageProps>> = ({ title, children }) => {
  const dataLayerArgs = {
    dataLayer: {
      page: title,
    },
    dataLayerName: 'PageDataLayer',
  }

  if (typeof window !== 'undefined') {
    TagManager.dataLayer(dataLayerArgs)
  }
  
  return (
    <main className={'page'}>
      {children}
    </main>
  )
}
export { Page }
