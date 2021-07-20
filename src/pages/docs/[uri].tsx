
import React, { FC } from 'react';
import { DeveloperPortal } from '../../components/Docs/DeveloperPortal'
import { getPages } from '../../api/pages'
import { getMenuCategories, getPostsByCategoryId } from '../../api/categories'
import Layout from '../../components/Layout/MainLayout/index';
import { PageSeo } from '../../components/Seo'
import Loader from '../../components/Loader'

const GettingStartedPage:FC<any> = ({ getStartedPages, menu, loader=true, pagecategories}) => {

	const { seo } = getStartedPages
    if(loader) return <Loader/>
    return (
        <Layout menu={menu}>
            {
            seo && <PageSeo metaData= {seo}/>
            }
          <DeveloperPortal category={pagecategories} pages={getStartedPages}/>       
        </Layout>
      )
};

export async function getServerSideProps() {

    return getMenuCategories().then(response => {
           const {data: menu} = response;
          return getPages().then(getStartedpage => {
              const {data: getStartedPages} = getStartedpage;
              return getPostsByCategoryId(5).then(resp => {
                const { data:pagecategories } = resp
                return {
                  props: { 
                    getStartedPages,
                    menu,
                    pagecategories,
                    loader:false
                   }                
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
     }).catch(() => {
       return {
         notFound: true,
       }
   
     })
   }



export default GettingStartedPage;
