import React from 'react';
import Presentation from '../presentation/presentation';

const FirstPresentation = () => (
	<Presentation
		className='presentation--first'
		firstColumnText={`agnes pinhanelli`}
		firstColumnSupportHTML={`<a href='https://linkedin.com/' target='_blank' rel='noopener noreferrer'>linkedin</a><br /><a href='mailto:agnespinhanelli@gmail.com'>email</a>`}
		secondColumnText={`I work with digital & graphic design, branding and illustrations. I'm currently working at Work & Co, in São Paulo, Brazil. I work with digital & graphic design, branding and illustrations. I'm currently working at Work & Co, in São Paulo, Brazil.`}
		secondColumnSupportText={`Recent – Youtube, Elo, Submarino Viagens, Icatu Seguros, Vivo, Santander, Whirlpool.`}
	/>
);

export default FirstPresentation;
