import ItineraryItem from '../Region/ItineraryItem';
import { SliderProps } from '../StructureTypes';
import { H2Component, Button } from '../StructureElements';

import { menuIconWhite } from '../../assets/icons/menuIcon';
import { starsIconBlack } from '../../assets/icons/starsIcon';
import { turnIcon } from '../../assets/icons/turnIcon';
import { dotsIcon } from '../../assets/icons/dotsIcon';

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

			<div className='region-padding'>
				<div className='day-plan'>
					<H2Component text={'Day 1'} className='region__title' />

					<div className='day-plan__time'>
						{turnIcon}
						<span>40m</span>

						<div className='day-plan__more'>{dotsIcon}</div>
					</div>
				</div>

				{slides.slice(0, 2).map((item, index) => (
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

			<div className='region-padding'>
				<div className='day-plan'>
					<H2Component text={'Day 2'} className='region__title' />

					<div className='day-plan__time'>
						{turnIcon}
						<span>1h 40m</span>

						<div className='day-plan__more'>{dotsIcon}</div>
					</div>
				</div>

				{slides.slice(2, 4).map((item, index) => (
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
		</div>
	);
};

export default Modal;
