import ItineraryItem from '../Region/ItineraryItem';
import { SliderProps } from '../StructureTypes';
import { H2Component, Button } from '../StructureElements';

import { menuIconWhite } from '../../assets/icons/menuIcon';
import { starsIconBlack } from '../../assets/icons/starsIcon';

import './Modal.scss';

const Modal: React.FC<SliderProps> = ({ slides, onButtonClick }) => {
	return (
		<div className={`modal `}>
			<div className='region-point__title'>
				<div className='region-point__icon'>
					<span>{menuIconWhite}</span>
				</div>

				<H2Component text={'2 days plan'} className='region__title' />

				<Button
					buttonId={'buttonId'}
					className='region-modal'
					icon={starsIconBlack}
					text={'Show highlights'}
					onButtonClick={onButtonClick}
				/>
			</div>

			{slides.map((item, index) => (
				<ItineraryItem
					key={index}
					image={item.image}
					imageAlt={item.imageAlt}
					curatorsPick={item.curatorsPick}
					bookmark={item.bookmark}
					title={item.title}
					pointRent={item.pointRent}
					modalSubtitles={item.modalSubtitles}
				/>
			))}
		</div>
	);
};

export default Modal;
