import React from 'react';
import { SliderProps } from '../StructureTypes';
import Slider from 'react-slick';
import ItineraryItem from '../Region/ItineraryItem';
import './Slider.scss';

export const SliderComponent: React.FC<SliderProps> = ({ id, className, slides }) => {
	const settings = {
		slidesToShow: 2.8,
		slidesToScroll: 1,
		infinite: false,
		variableWidth: true,
	};

	return (
		<div className={`carousel ${className}`} id={id}>
			<Slider {...settings}>
				{slides.map((slide, index) => (
					<ItineraryItem
						key={index}
						image={slide.image}
						imageAlt={slide.imageAlt}
						curatorsPick={slide.curatorsPick}
						bookmark={slide.bookmark}
						title={slide.title}
						subtitles={slide.subtitles}
					/>
				))}
			</Slider>
		</div>
	);
};
