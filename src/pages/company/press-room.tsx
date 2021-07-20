import React, { FC } from 'react'
import Blog from '../../containers/PressRoom/PressRoom'
import { getMenuCategories } from '../../api/categories'
import { getPostsByCategoryId } from '../../api/categories'
import Layout from '../../components/Layout/MainLayout/index';
import { PageSeo } from '../../components/Seo'
import Loader from '../../components/Loader'


const PressRoomPage: FC<any> = ({ page, menu, loader=true}) => {

    const { seo } = page
      if(loader) return <Loader/>
      return (
          <Layout menu={menu}>
              {
              seo && <PageSeo metaData= {seo}/>
              }
          <Blog title="Press Room" page={page} />
  
          </Layout>
        )
}

  
  export async function getServerSideProps(context) {
  
    return getMenuCategories().then(response => {
           const {data: menu} = response;
           return getPostsByCategoryId(6).then(resp => {
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

export default PressRoomPage
