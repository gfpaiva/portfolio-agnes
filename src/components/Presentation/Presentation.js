import React, { Fragment } from 'react';

import './Presentation.scss';

const Presentation = ( { className, firstColumnText, firstColumnSupportText, firstColumnSupportHTML, secondColumnText, secondColumnSupportText } ) => (
	<div className={`presentation${className ? ` ${className}` : ''}`}>
		<div>
			<p className='mt-0'>
				{firstColumnText}
				{firstColumnSupportText && (
					<Fragment>
						<br />
						{firstColumnSupportText}
					</Fragment>
				)}
			</p>
			<div dangerouslySetInnerHTML={{__html: firstColumnSupportHTML}}></div>
		</div>

		<div className='text-container'>
			<p className={!secondColumnSupportText ? 'my-0' : 'mt-0'}>
				{secondColumnText}
			</p>

			{secondColumnSupportText && (
				<p className='mb-0'>
					{secondColumnSupportText}
				</p>
			)}
		</div>
	</div>
);

export default Presentation;
