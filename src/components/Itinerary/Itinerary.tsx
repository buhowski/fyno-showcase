import { H2Component } from '../StructureElements';

import ItineraryDetails from './ItineraryDetails';
import Region from '../Region/Region';

import './Itinerary.scss';

const Itinerary = () => {
	return (
		<section className='itinerary'>
			<H2Component text='Iceland itinerary' className='itinerary__title' />

			<ItineraryDetails />

			<Region />

			<div className='itinerary-overview'></div>
		</section>
	);
};

export default Itinerary;
