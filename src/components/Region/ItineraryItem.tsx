import React from 'react';
import { ItineraryItemProps } from '../StructureTypes';
import { scoreIcon } from '../../assets/icons/scoreIcon';
import { H3Component } from '../StructureElements';

import { dotsIcon, dragIcon } from '../../assets/icons/dotsIcon';

const ItineraryItem: React.FC<ItineraryItemProps> = ({
	image,
	imageAlt,
	curatorsPick,
	bookmark,
	title,
	pointRent,
	subtitles,
	modalSubtitles,
}) => {
	// Combine subtitles into a single array for rendering
	const combinedSubtitles = [...(subtitles || []), ...(modalSubtitles || [])];

	return (
		<div className={`carousel-item `}>
			<div className='carousel-img'>
				<img src={image} alt={imageAlt} />

				{!modalSubtitles && curatorsPick && (
					<div className='curators-pick'>{curatorsPick}</div>
				)}
				{!modalSubtitles && bookmark && (
					<div className='bookmark-itinerary'>{bookmark}</div>
				)}
			</div>

			<div className='itinerary-titles'>
				<H3Component className='itinerary-item__title' text={title} />

				{modalSubtitles && curatorsPick && (
					<div className='modal-curators'>{curatorsPick}</div>
				)}

				{pointRent && (
					<p className='itinerary-item__score'>
						<span className='icon'>{scoreIcon}</span>
						<span className='number'>{pointRent}</span>/10
					</p>
				)}

				{combinedSubtitles.length > 0 ? (
					<h3 className='itinerary-item__subtitle default-h4'>
						{combinedSubtitles.map((subtitle, index) => (
							<span key={index}>{subtitle}</span>
						))}
					</h3>
				) : null}
			</div>

			{modalSubtitles && (
				<>
					<div className='modal-drag'>{dragIcon}</div>

					<div className='day-plan__more'>{dotsIcon}</div>
				</>
			)}
		</div>
	);
};

export default ItineraryItem;
