import React from 'react';
import Head from 'next/head';
import 'src/theme/index.less';
import { SEO } from '../components/Seo'
import { DefaultSeo } from 'next-seo'
import { Responsive } from '../components/Layout/Responsive';

const MyApp = (props) => {
	const { Component, pageProps, router } = props;
	return (
		<Responsive>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, height=device-height, user-scalable=0" />
				<link
    href='https://fonts.googleapis.com/css2?family=Archivo:wght@600;700&family=IBM+Plex+Sans:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap'
    rel='stylesheet' 
	/>
	<link rel="icon" href="/favicon.svg"/>

			</Head>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} router={router} />
	</Responsive>
	);
};



export default MyApp ; // wrapperStore.withRedux(MyApp);
