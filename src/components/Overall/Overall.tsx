import { H3Component } from '../StructureElements';

import './Overall.scss';

const overallItemData = [
	{
		title: 'Trip duration',
		value: '7 days',
	},

	{
		title: 'Exploration',
		value: '4 regions',
	},

	{
		title: 'Flight',
		value: '7h 20m from SFO',
	},
];

const Overall: React.FC = () => {
	return (
		<section className='overall'>
			<div className='overall-grid'>
				{overallItemData.map((item, index) => (
					<div className='overall-item' key={index}>
						<H3Component className='default-h4' text={item.title} />
						<H3Component className='default-h3' text={item.value} />
					</div>
				))}

				<a href='#itinerary' className='itinerary-btn'>
					View itinerary
				</a>
			</div>
		</section>
	);
};

export default Overall;
