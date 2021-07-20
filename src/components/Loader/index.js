import React, { FC } from 'react';

const Loading = () => {
	// const { } = props;
	return (
		<div
		  style={{
			alignItems: 'center',
			justifyContent: 'center',
			display: 'flex',
			marginTop: -24,
			width: '100%',
			height: '100vh',
		  }}
		>
		  <div className='loader'>
			<div className='spinner' />
			<div className='cube-container'>
			  <div className='cube'>
				<div className='front' />
				<div className='back' />
				<div className='right' />
				<div className='left' />
				<div className='top' />
				<div className='bottom' />
			  </div>
			</div>
		  </div>
		</div>
	  )
};

export default Loading;
