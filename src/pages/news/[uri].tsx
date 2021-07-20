
import React, { FC } from 'react';
import { useRouter } from 'next/router'
import { getPageByUri } from '../../api/pages'
import { getMenuCategories } from '../../api/categories'
import Head from '../../components/Head';
import BlogInner  from '../../components/BlogInner/BlogInner'
import Layout from '../../components/Layout/MainLayout/index';
import { PageSeo } from '../../components/Seo'
import Loader from '../../components/Loader'
// const router = useRouter()

const NewsPage: FC<any> = ({ page, menu, loader=true}) => {

	const { seo } = page
      if(loader) return <Loader/>
      return (
          <Layout menu={menu}>
              {
              seo && <PageSeo metaData= {seo}/>
              }
			  <Head />
          <BlogInner data={page} />
  
          </Layout>
        )
}

export async function getServerSideProps(ctx) {
	const {uri} = ctx.query

 return getMenuCategories().then(response => {
		const {data: menu} = response;
		return getPageByUri(`%2F${uri}`).then(resp => {
		  const { data:page } = resp
		//   console.log(page.sections)
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


export default NewsPage;
