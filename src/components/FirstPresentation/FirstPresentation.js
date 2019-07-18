import React from 'react';
import Presentation from '../Presentation/Presentation';

const FirstPresentation = ( { email, linkedin, ...rest } ) => (
	<Presentation
		className='presentation--first container'
		firstColumnText={`agnes pinhanelli`}
		firstColumnSupportHTML={`<a href='${linkedin}' target='_blank' rel='noopener noreferrer'>linkedin</a><br /><a href='mailto:${email}'>email</a>`}
		{...rest}
	/>
);

export default FirstPresentation;
