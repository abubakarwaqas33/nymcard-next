import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import METADATA from 'src/constants/metadata';
import Meta from './Meta';
import { SEO } from '../../components/Seo'
import { DefaultSeo } from 'next-seo'
const propTypes = {
	title: PropTypes.string.isRequired,
};

const defaultProps = {
	title: '',
};

const HeadShare = (props) => {
	const { title, ...attr } = props;
	return (
		<Head>
			<title>{(title ? title + ' | ' : '') + METADATA.APP_NAME}</title>
			<DefaultSeo {...SEO} />
			<Meta {...attr} />
		</Head>
	);
};

HeadShare.propTypes = propTypes;

HeadShare.defaultProps = defaultProps;

export default HeadShare;
