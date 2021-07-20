import React, { FC, useEffect } from 'react';
import OpenApi from '../../containers/Platform/OpenApi/OpenApi'
import { getPagesByCategory } from '../../api/pages'
import { getMenuCategories } from '../../api/categories'
import Layout from '../../components/Layout/MainLayout/index';
import { PageSeo } from '../../components/Seo'
import Loader from '../../components/Loader'

const OpenApiPage: FC<any> = ({ page, menu, loader=true}) => {
  const { seo } = page
  if(loader) return <h1>Loading ....</h1>
  return (
      <Layout menu={menu}>
        <PageSeo metaData= {seo}/>
        <OpenApi page={page}/>       
      </Layout>
    )
}

export async function getServerSideProps(context) {

 return getMenuCategories().then(response => {
        const {data: menu} = response;
        return getPagesByCategory(2).then(resp => {
          const { data:page } = resp
          return {
            props: { 
              page,
              menu,
              loader:false
             }, 
          }
          }).catch(() => {
              return {
                notFound: true,
              }   
          })

  }).catch(() => {
    return {
      notFound: true,
    }

  })
}

export default OpenApiPage
