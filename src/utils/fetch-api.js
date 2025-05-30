
import merge from 'lodash/merge';
import queryString from 'query-string';

import { notification } from 'antd';
// import Router from 'next/router';

import CONSTANTS from 'src/constants/urls';

import AuthStorage from './auth-storage';

const mandatory = () => {
	return Promise.reject(new Error('Fetch API Missing parameter!'));
};

const { NEXT_PUBLIC_API_URL } = CONSTANTS;

const fetchApi = async ({ url, options, payload = {}, dispatch = f => f } = mandatory(), cb = f => f) => {
	try {
		const defaultOptions = {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		};

		const opts = merge(defaultOptions, options);

		// set token
		if (await AuthStorage.token) {
			opts.headers.Authorization = AuthStorage.token;
		}

		let uri = NEXT_PUBLIC_API_URL + url;

		if (payload && Object.keys(payload).length > 0) {
			if (opts && opts.method === 'GET') {
				uri = queryString.stringifyUrl({ url: uri, query: payload });
			} else {
				if (opts.headers['Content-Type'] === 'multipart/form-data') {
					delete opts.headers['Content-Type'];

					const formData = new FormData();
					Object.entries(payload).forEach(([key, val]) => {
						if (val) {
							if (key === 'assetFiles' || key === 'pdfFiles' || key === 'images' || key === 'newImages' || key === 'newPdfFiles' || key === 'newMediaFiles' || key === 'deleteImages' || key === 'deletePdfFiles' || key === 'deleteMediaFiles') {
								val.forEach((file) => {
									formData.append(key, file);
								});
							} else {
								formData.append(key, val);
							}
						}
					});

					opts.body = formData;
				} else {
					opts.body = JSON.stringify(payload);
				}
			}
		}

		if (process.env.NODE_ENV === 'development') {
			console.log('------');
			console.log('Call API: url, options, payload', uri, opts, payload);
		}

		const response = await fetch(uri, opts);

		if (process.env.NODE_ENV === 'development') {
			console.log('------');
		}

		if (response.ok && (response.status === 204 || response.statusText === 'No Content')) {
			cb(null, {});
			return {};
		}

		const data = await response.json();

		if (response.status !== 200) {
			throw data;
		}

		cb(null, data);
		return data;
	} catch (err) {
		if (process.env.NODE_ENV === 'development') {
			console.log('Call API Error: ', err);
		}

		if (process.browser) {
			notification.error({
				message: 'Oops!',
				description: err.error?.message || err.message || err.toString(),
			});
		}

		// if (err.status === 403 || err.status === 401) {
		// 	AuthStorage.destroy();
		// 	dispatch({ type: 'LOGOUT_SUCCESS' });
		// 	if (process.browser) {
		// 		Router.push('/login');
		// 	}
		// }

		cb(err);
		throw err;
	}
};

export default fetchApi;
