import React from 'react';
import PropTypes from 'prop-types';

import { HomeTemplate } from '../../pages/index';

const HomePagePreview = ({ entry }) => {
	const home = entry.getIn(['data']).toJS();
	return <HomeTemplate home={home} />;
};

HomePagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
};

export default HomePagePreview;
