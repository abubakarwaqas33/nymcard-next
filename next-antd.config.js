/* eslint-disable no-param-reassign */
const cssLoaderConfig = require('@zeit/next-css/css-loader-config');
const path = require('path');

module.exports = (nextConfig = {}) => ({
	...nextConfig,
	...{
		webpack(config, options) {
			if (!options.defaultLoaders) {
				throw new Error(
					'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade',
				);
			}

			const { dev, isServer } = options;
			const { cssModules, cssLoaderOptions, postcssLoaderOptions, lessLoaderOptions = {} } = nextConfig;

			// for all less in clint
			const baseLessConfig = {
				extensions: ['less'],
				cssModules: false,
				cssLoaderOptions,
				postcssLoaderOptions,
				dev,
				isServer,
				loaders: [
					{
						loader: 'less-loader',
						options: lessLoaderOptions,
					},
				],
			};

			config.module.rules.push({
				test: /\.less$/,
				exclude: [/node_modules/, path.resolve(__dirname, 'src/theme')],
				use: cssLoaderConfig(config, baseLessConfig),
			});

			// for antd less in client
			const antdLessConfig = {
				...baseLessConfig,
				...{ cssModules: false, cssLoaderOptions: {}, postcssLoaderOptions: {} },
			};

			config.module.rules.push({
				test: /\.less$/,
				include: [/node_modules/, path.resolve(__dirname, 'src/theme')],
				use: cssLoaderConfig(config, antdLessConfig),
			});

			// for antd less in server (yarn build)
			if (isServer) {
				const antdStyles = /antd\/.*?\/style.*?/;
				const rawExternals = [...config.externals];

				config.externals = [
					(context, request, callback) => {
						if (request.match(antdStyles)) {
							return callback();
						}

						if (typeof rawExternals[0] === 'function') {
							rawExternals[0](context, request, callback);
						} else {
							callback();
						}
					},
					...(typeof rawExternals[0] === 'function' ? [] : rawExternals),
				];

				config.module.rules.unshift({
					test: antdStyles,
					use: 'null-loader',
				});
			}

			if (typeof nextConfig.webpack === 'function') {
				return nextConfig.webpack(config, options);
			}

			// Fixes npm packages that depend on `fs` module
			config.node = {
				fs: 'empty',
			};

			return config;
		},
	},
});
