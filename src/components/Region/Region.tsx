// Elements
import { RegionPoint } from './RegionPoint';
import { Button } from '../StructureElements';

// Icons
import { modalIcon } from '../../assets/icons/modalIcon';

// Styles
import './Region.scss';

const Region = () => {
	return (
		<div className='region region--a' id='itinerary'>
			<RegionPoint
				regionClassName={`region-block--name`}
				icon={`A`}
				title={`Golden Circle Region`}
				// button={
				// 	<Button className='region-modal' icon={modalIcon} text='Show daily plan' />
				// }
				subtitles={['Geysers', 'Waterfalls', 'Crater lakes']}
				description={`The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament.`}
			/>
		</div>
	);
};

export default Region;
