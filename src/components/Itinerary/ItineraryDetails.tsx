import { useState } from 'react';

import { ItineraryItem } from '../StructureElements';

import { planeIcon } from '../../assets/icons/planeIcon';
import { calendarIcon } from '../../assets/icons/calendarIcon';
import { personIcon } from '../../assets/icons/personIcon';

const ItineraryDetails = () => {
	const [origin, setOrigin] = useState('Reykjavík, KEF');
	const [destination, setDestination] = useState('San Francisco, SFO');
	const [dates, setDates] = useState('Jul 03 – Jul 11');
	const [passengers, setPassengers] = useState('2');

	return (
		<div className='itinerary-details'>
			<ItineraryItem
				value={origin}
				onChange={(e) => setOrigin(e.target.value)}
				placeholder='Origin'
			/>

			<div className='itinerary-details__plane'>{planeIcon}</div>

			<ItineraryItem
				className='itinerary-details__destination'
				value={destination}
				onChange={(e) => setDestination(e.target.value)}
				placeholder='Destination'
			/>

			<ItineraryItem
				className='itinerary-details__date'
				icon={calendarIcon}
				value={dates}
				onChange={(e) => setDates(e.target.value)}
				placeholder='Dates'
				type='text'
			/>

			<ItineraryItem
				className='itinerary-details__persons'
				icon={personIcon}
				value={passengers}
				onChange={(e) => setPassengers(e.target.value)}
				placeholder='2'
				type='number'
			/>
		</div>
	);
};

export default ItineraryDetails;
