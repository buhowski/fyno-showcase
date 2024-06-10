import React from 'react';
import { ItineraryItemProps } from '../StructureTypes';

import { H3Component } from '../StructureElements';

const ItineraryItem: React.FC<ItineraryItemProps> = ({
	image,
	imageAlt,
	curatorsPick,
	bookmark,
	title,
	subtitles,
}) => {
	return (
		<div className={`carousel-item `}>
			<div className='carousel-img'>
				<img src={image} alt={imageAlt} />

				{curatorsPick && <div className='curators-pick'>{curatorsPick}</div>}
				{bookmark && <div className='bookmark-itinerary'>{bookmark}</div>}
			</div>

			<H3Component className='itinerary-item__title' text={title} />

			<h3 className='itinerary-item__subtitle default-h4'>
				{subtitles?.map((subtitle, index) => (
					<span key={index}>{subtitle}</span>
				))}
			</h3>
		</div>
	);
};

export default ItineraryItem;
