import { H2Component, H3Component, Button, Paragraph } from '../StructureElements';

import photo from '../../assets/images/image_1.jpg';
import { wishIcon } from '../../assets/icons/wishIcon';
import { shareIcon } from '../../assets/icons/shareIcon';

import './Highlights.scss';

const Highlights: React.FC = () => {
	return (
		<section className='highlights'>
			<div className='highlights-top'>
				<H2Component className='highlights__title' text={`Iceland’s Highlights`} />

				<div className='highlights-actions'>
					<Button icon={wishIcon} text='Add to wishlist' />
					<Button icon={shareIcon} text='Share' />
				</div>
			</div>

			<div className='highlights-person'>
				<div className='highlights-person__photo'>
					<img src={photo} alt='portrait' />
				</div>

				<div className=''>
					<H3Component className='default-h3' text='Curated by Sandra' />
					<H3Component className='default-h4' text='Fyno expert' />
				</div>
			</div>

			<Paragraph
				text={`Welcome to Iceland, a land of breathtaking landscapes and unspoiled natural beauty. From its majestic waterfalls and geothermal wonders to the vibrant culture and rich history, Iceland promises an unforgettable adventure for every traveler.`}
			/>
		</section>
	);
};

export default Highlights;
