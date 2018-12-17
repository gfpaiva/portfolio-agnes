import React from 'react';

import Slider from 'react-slick';

import Presentation from '../Presentation/Presentation';

import './Project.scss';

const Project = ( { project } ) => {

	const { projectName, projectLocation, projectFirstLink, projectSecondLink, text, projectGallery } = project;

	return (
		<div className='project'>
			<Presentation
				firstColumnText={projectName}
				firstColumnSupportText={projectLocation}
				firstColumnSupportHTML={`
					${projectFirstLink ? `<a href='${projectFirstLink.linkHref}' target='_blank' rel='noopener noreferrer'>${projectFirstLink.linkTitle}</a><br />` : ''}
					${projectSecondLink ? `<a href='${projectSecondLink.linkHref}' target='_blank' rel='noopener noreferrer'>${projectSecondLink.linkTitle}</a>` : ''}
				`}
				secondColumnText={text}
			/>

			<Slider
				className='project-slider'
				centerMode={true}
				centerPadding={25}
				slidesToShow={1}
			>
				{projectGallery.map(({ image, imageAlt }, idx) => (
					<div key={idx} className='project-slider__item'>
						<div className='project-slider__wrapper'>
							<img className='fluid-img project-slider__image' src={image} alt={imageAlt} title={imageAlt} />
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Project;
