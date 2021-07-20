
import React from 'react';
import METADATA from 'src/constants/metadata';

const propTypes = {
	// title: PropTypes.string.isRequired,
};

const defaultProps = {
	// title: '',
};

const Meta = (props) => {
	return (
		<>
			<meta name="description" content={METADATA.APP_DESCRIPTION}/>
			<meta content={METADATA.KEY_WORDS} name="keywords"/>
		</>
	);
};

// Meta.propTypes = propTypes;

// Meta.defaultProps = defaultProps;

export default Meta;
