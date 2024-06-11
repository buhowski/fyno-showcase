import React from 'react';
import { RegionProps } from '../StructureTypes';
import { RegionPoint } from './RegionPoint';

import './Region.scss';

const Region: React.FC<RegionProps> = ({ id, className, points }) => {
	return (
		<div className={`region ${className}`} id={id}>
			{points.map((point, index) => (
				<RegionPoint
					key={index}
					regionClassName={point.regionClassName}
					icon={point.icon}
					title={point.title}
					subtitles={point.subtitles}
					description={point.description}
					buttonId={point.buttonId}
					btnModalIcon={point.btnModalIcon}
					btnText={point.btnText}
					itemSlider={point.itemSlider}
					modalDailyPlan={point.modalDailyPlan}
				/>
			))}
		</div>
	);
};

export default Region;
