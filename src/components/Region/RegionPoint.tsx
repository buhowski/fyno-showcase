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
		<div className={`region-point ${regionClassName} `}>
			<div className='region-point__title'>
				<div className='region-point__icon'>{icon && <span>{icon}</span>}</div>

				{title && <H2Component text={title} className='region__title' />}

				{button}
			</div>

			<div className='region-padding'>
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
