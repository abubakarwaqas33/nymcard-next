import React, { FC } from 'react';
import { BackTop } from 'antd';
import { Header } from '../NewHeader'
import Footer from '../Footer/Footer';
import CookieAlert from '../../../components/CookieAlert';

const MainLayout:FC<any> = ({children, menu}) => {
	return (
		<div className="nymcard d-flex flex-column w-100 min-vh-100">
			<Header menu={menu}/> 
			<div className="flex-1">
				{children}
			</div>
			<Footer menu={menu} />
			<BackTop />
			<CookieAlert />
		</div>
	);
};

export default MainLayout;
