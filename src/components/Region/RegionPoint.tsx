import React from 'react';
import { RegionPointProps } from '../StructureTypes';
import { H2Component } from '../StructureElements';

export const RegionPoint: React.FC<RegionPointProps> = ({
	regionClassName,
	icon,
	title,
	subtitles,
	description,
	button,
	itemSlider,
}) => {
	return (
		<div className={`region-block ${regionClassName} `}>
			<div className='region-block__line'>{icon && <span>{icon}</span>}</div>

			<div className='region-point'>
				<div className='region-point__title'>
					{title && <H2Component text={title} className='region__title' />}

					{button}
				</div>

				{subtitles && (
					<div className='region-point__subtitle'>
						{subtitles?.map((subtitle) => (
							<h4 className='default-h4' key={subtitle}>
								{subtitle}
							</h4>
						))}
					</div>
				)}

				{description && <p className='region-point__text'>{description}</p>}
				{itemSlider && itemSlider}
			</div>
		</div>
	);
};
