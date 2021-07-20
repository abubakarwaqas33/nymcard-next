import React, { FC } from "react";
import { ContactUs } from "../components/ContactUs/ContactUs";
import { getMenuCategories } from '../api/categories'
import Layout from '../components/Layout/MainLayout/index';
import { PageSeo } from '../components/Seo'
import Loader from '../components/Loader'

const ContactUsPage:FC<any> = ({ menu, loader=true}) => {
	// const { seo } = page
	if(loader) return <Loader/>

	  return (
	  <Layout menu={menu}>
	  {/* {
	  seo && <PageSeo metaData= {seo}/>
	  } */}
  
	   <ContactUs/>
	  </Layout>
	  );
};


export async function getStaticProps() {

  return getMenuCategories().then(response => {
         const {data: menu} = response;
		 return {
			props: { 
			  menu,
			  loader:false
			 }, 
			 revalidate:200
		  }
 
   }).catch(() => {
     return {
       notFound: true,
     }
 
   })
 }

export default ContactUsPage;
