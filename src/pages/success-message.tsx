import React, { FC } from "react";
import Head from "../components/Head";
import { getMenuCategories } from '../api/categories'
import Layout from '../components/Layout/MainLayout/index';
import SuccessMessage from "../components/ContactUs/SuccessMessage";

const SuccessMessagePage:FC<any> = ({ menu }) => {
	return (
		<Layout menu={menu}>
			<SuccessMessage />
		</Layout>
	);
};

export async function getStaticProps(context) {
	return getMenuCategories().then(response => {
		   const {data: menu} = response;
		   return {
			  props: { 
				menu,
				loader:false
			   }, 
			}
   
	 }).catch(() => {
	   return {
		 notFound: true,
	   }
   
	 })
   }
export default SuccessMessagePage;
