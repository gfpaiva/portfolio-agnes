import React from 'react';

import Slider from 'react-slick';

import Presentation from '../presentation/presentation';

import imagePlaceholder from '../../images/placeholder.png';

import './Project.scss';

const Project = () => (
	<div className='project'>
		<Presentation
			firstColumnText={`Youtube`}
			firstColumnSupportText={`2018, Work & Co`}
			firstColumnSupportHTML={`<a href='https://linkedin.com/' target='_blank' rel='noopener noreferrer'>Expanding Community on YouTube</a><br /><a href='mailto:agnespinhanelli@gmail.com'>YouTube is launching ‘Reels’</a>`}
			secondColumnText={`By expanding their creative toolset to include new and innovative effects, YouTube expanded their platform for creators which increased engagement for viewers, and solidified YouTube as a daily destination. My role was to create effects, filters, and stickers for the YouTube Reels as part of the design team.`}
		/>

		<Slider
			className='project-slider'
			centerMode={true}
			centerPadding={25}
			slidesToShow={1}
		>
			<div className='project-slider__item'>
				<div className='project-slider__wrapper'>
					<img className='fluid-img project-slider__image' src={imagePlaceholder} alt='Placeholder' title='Placeholder' />
				</div>
			</div>

			<div className='project-slider__item'>
				<div className='project-slider__wrapper'>
					<img className='fluid-img project-slider__image' src={imagePlaceholder} alt='Placeholder' title='Placeholder' />
				</div>
			</div>

			<div className='project-slider__item'>
				<div className='project-slider__wrapper'>
					<img className='fluid-img project-slider__image' src={imagePlaceholder} alt='Placeholder' title='Placeholder' />
				</div>
			</div>

			<div className='project-slider__item'>
				<div className='project-slider__wrapper'>
					<img className='fluid-img project-slider__image' src={imagePlaceholder} alt='Placeholder' title='Placeholder' />
				</div>
			</div>
		</Slider>
	</div>
);

export default Project;
