import React from 'react';

import '../scss/index.scss';
import FirstPresentation from '../components/FirstPresentation/FirstPresentation';
import Project from '../components/Project/Project';

const IndexPage = () => (
	<div className='main container'>
		<FirstPresentation />
		<Project />
	</div>
);

export default IndexPage;
