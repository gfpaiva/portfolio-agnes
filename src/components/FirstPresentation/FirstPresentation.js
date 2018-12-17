import React from 'react';
import Presentation from '../presentation/presentation';

const FirstPresentation = ( { email, linkedin, ...rest } ) => (
	<Presentation
		className='presentation--first'
		firstColumnText={`agnes pinhanelli`}
		firstColumnSupportHTML={`<a href='${linkedin}' target='_blank' rel='noopener noreferrer'>linkedin</a><br /><a href='mailto:${email}'>email</a>`}
		{...rest}
	/>
);

export default FirstPresentation;
