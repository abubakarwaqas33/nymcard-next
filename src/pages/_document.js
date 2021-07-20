import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Meta from 'src/components/Head/Meta';
import METADATA from 'src/constants/metadata';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en" dir="ltr">
				<Head>
					<meta charSet="utf-8" />
					<link rel="manifest" href="/manifest.json" />

					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />

					<meta name="application-name" content={METADATA.APP_NAME} />
					<meta name="apple-mobile-web-app-title" content={METADATA.APP_NAME} />

					<meta name="apple-mobile-web-app-status-bar-style" content={'white-' + METADATA.PRIMARY_COLOR} />
					<meta name="msapplication-starturl" content="/" />

					<meta name="msapplication-navbutton-color" content={METADATA.PRIMARY_COLOR} />
					<meta name="theme-color" content={METADATA.PRIMARY_COLOR} />
					
					<link rel="preconnect" href='https://fonts.gstatic.com' />
                    <link href='https://fonts.googleapis.com/css2?family=Archivo:wght@600;700&family=IBM+Plex+Sans:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap' rel='stylesheet' />
				</Head>
			
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
