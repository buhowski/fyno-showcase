import React from 'react';
import { SliderProps } from '../StructureTypes';
import Slider from 'react-slick';
import ItineraryItem from '../Region/ItineraryItem';
import { sliderArrow } from '../../assets/icons/sliderArrow';

import './Slider.scss';

interface ArrowProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	className?: string;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick, className }) => {
	return (
		<button
			className={`slider-arrow slider-arrow--next ${className}`}
			type='button'
			onClick={onClick}
		>
			{sliderArrow}
		</button>
	);
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick, className }) => {
	return (
		<button
			className={`slider-arrow slider-arrow--prev ${className}`}
			type='button'
			onClick={onClick}
		>
			{sliderArrow}
		</button>
	);
};

export const SliderComponent: React.FC<SliderProps> = ({ id, className, slides }) => {
	const settings = {
		// centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		variableWidth: true,
		// initialSlide: 1,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
	};

	return (
		<div
			className={`carousel ${slides.length <= 2 && 'disabled'} ${className}`}
			id={id}
		>
			{slides.length > 2 ? (
				<Slider {...settings}>
					{slides.map((slide, index) => (
						<ItineraryItem
							key={index}
							image={slide.image}
							imageAlt={slide.imageAlt}
							curatorsPick={slide.curatorsPick}
							bookmark={slide.bookmark}
							title={slide.title}
							pointRent={slide.pointRent}
							subtitles={slide.subtitles}
						/>
					))}
				</Slider>
			) : (
				slides.map((slide, index) => (
					<ItineraryItem
						key={index}
						image={slide.image}
						imageAlt={slide.imageAlt}
						curatorsPick={slide.curatorsPick}
						bookmark={slide.bookmark}
						title={slide.title}
						pointRent={slide.pointRent}
						subtitles={slide.subtitles}
					/>
				))
			)}
		</div>
	);
};
