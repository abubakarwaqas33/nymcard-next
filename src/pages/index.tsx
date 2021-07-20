import React, {FC} from 'react';
import Home from '../containers/Index/Home';
import { getPagesByCategory } from '../api/pages'
import { getMenuCategories } from '../api/categories'
import Layout from '../components/Layout/MainLayout/index';
import { PageSeo } from '../components/Seo'
import Loader from '../components/Loader'

const IndexPage:FC<any> = ({ page, menu, loader=true}) => {
  const { seo } = page
  if(loader) return <Loader/>

	return (
    <Layout menu={menu}>
    {
    seo && <PageSeo metaData= {seo}/>
    }

		<Home page={page}/>
    </Layout>
		
	);
};



export async function getServerSideProps(context) {

  return getMenuCategories().then(response => {
         const {data: menu} = response;
         return getPagesByCategory(1).then(resp => {
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


export default IndexPage;
