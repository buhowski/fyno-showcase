import { H2Component } from '../StructureElements';
import ItineraryDetails from './ItineraryDetails';
import Region from '../Region/Region';
import { dataRegionA, dataRegionB } from '../Region/dataRegions';

import './Itinerary.scss';

const Itinerary = () => {
	return (
		<section className='itinerary'>
			<H2Component text='Iceland itinerary' className='itinerary__title' />

			<ItineraryDetails />

			<Region id='itinerary' className='region--a' points={dataRegionA} />

			<Region className='region--b' points={dataRegionB} />
		</section>
	);
};

export default Itinerary;
