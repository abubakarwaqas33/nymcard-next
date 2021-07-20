import React, { FC } from 'react'
import { Container } from 'react-grid-system'
import Page  from '../page'
import './ApiCatalog.less'


const ApiCatalog: FC = () => (
  <Page title={'API Catalog'}>
    <Container className={'frame-wrapper'} style={{ zIndex: 1, minHeight: '100vh' }} fluid>
      <iframe
        id={'api-catalog'}
        style={{ height: '100%', position: 'absolute' }}
        width={'100%'}
        src={'https://nymcard.com/docs/api'}
      />
    </Container>
  </Page>
)

export { ApiCatalog as default }
