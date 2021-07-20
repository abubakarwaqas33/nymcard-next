import React, { FC, useEffect } from 'react';
import PciWidgets from '../../containers/Platform/PciWidgets/PciWidgets'
import { getPagesByCategory } from '../../api/pages'
import { getMenuCategories } from '../../api/categories'
import Layout from '../../components/Layout/MainLayout/index';
import { PageSeo } from '../../components/Seo'
import Loader from '../../components/Loader'

const PciWidgetsPage:  FC<any> = ({ page, menu, loader=true}) => {
    const { seo } = page
    if(loader) return <Loader/>
    return (
        <Layout menu={menu}>
            {
            seo && <PageSeo metaData= {seo}/>
            }
          <PciWidgets page={page}/>       
        </Layout>
      )
}


export async function getServerSideProps(context) {

    return getMenuCategories().then(response => {
           const {data: menu} = response;
           return getPagesByCategory(5).then(resp => {
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

   
export default PciWidgetsPage
