import React from 'react';
import { H2Component } from '../StructureElements';

interface RegionPointProps {
	icon?: string | React.ReactNode;
	regionClassName?: string;
	title?: string;
	button?: React.ReactNode | null;
	subtitles?: string[] | null;
	description?: string;
	imageSlider?: React.ComponentType<any>;
}

export const RegionPoint: React.FC<RegionPointProps> = ({
	regionClassName,
	icon,
	title,
	button,
	subtitles,
	description,
}) => {
	return (
		<div className={`region-block ${regionClassName} `}>
			<div className='region-block__line'>{icon && <span>{icon}</span>}</div>

			<div className='region-point'>
				<div className='region-point__title'>
					{title && <H2Component text={title} className='region__title' />}

					{button}
				</div>

				<div className='region-point__subtitle'>
					{subtitles?.map((subtitle) => (
						<h4 className='default-h4' key={subtitle}>
							{subtitle}
						</h4>
					))}
				</div>

				{description && <p className='region-point__text'>{description}</p>}
				{/* {imageSlider && <ItemSlider />} */}
			</div>
		</div>
	);
};
