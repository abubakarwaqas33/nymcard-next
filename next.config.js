/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');

const lessToJS = require('less-vars-to-js');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const withCSS = require('@zeit/next-css');

const { parsed: env } = require('dotenv').config();

const withAntd = require('./next-antd.config');

const antdVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, 'src/theme/variables.less'), 'utf8'));
const withImages = require('next-images')
//const withReactSvg = require('next-react-svg')
//const withSvgr = require("next-svgr");

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
	require.extensions['.less'] = file => { };
}

module.exports = withPlugins([
	[withFonts],
	withImages({
		exclude: path.resolve(__dirname, 'src/assets/svg'),
		webpack(config, options) {
			return config
		}
	}),
	[withCSS],
	[
		withAntd,
//		withImages,
		{
			cssModules: false,
			cssLoaderOptions: {
				sourceMap: process.env.NODE_ENV !== 'production',
				importLoaders: 1,
				localIdentName: process.env.NODE_ENV !== 'production' ? '[folder]__[local]__[hash:base64:5]' : '[hash:base64]',
				context: path.resolve(__dirname, 'src'),
			},
			lessLoaderOptions: {
				javascriptEnabled: true,
				sourceMap: process.env.NODE_ENV !== 'production',
				modifyVars: {
					'hack': 'true;@import "~antd/lib/style/color/colors.less";',
					...antdVariables,
				},
			},
		},
	],
],
{
	// target: 'serverless', // for serverless
	webpack: config => {
		
		config.module.rules.push({
			test: /\.md$/,
			use: 'frontmatter-markdown-loader',
		});
		config.plugins.push(
			new FilterWarningsPlugin({
				// ignore ANTD chunk styles [mini-css-extract-plugin] warning
				exclude: [/mini-css-extract-plugin[^]*Conflicting order between:/],
			}),
		);

		config.plugins.push(
			new AntdDayjsWebpackPlugin(),
		);

		config.plugins.push(
			new webpack.EnvironmentPlugin({ ...env, ...process.env }),
		);

		return config;
	},
});

// module.exports = withImages()