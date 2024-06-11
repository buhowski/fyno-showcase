import React, { useState } from 'react';
import { RegionPointProps } from '../StructureTypes';
import { H2Component, Button } from '../StructureElements';
import Modal from '../Modal/Modal';

import { sliderA } from '../Slider/SliderData';

export const RegionPoint: React.FC<RegionPointProps> = ({
	regionClassName,
	icon,
	title,
	subtitles,
	description,
	buttonId,
	itemSlider,
	modalDailyPlan,
	btnModalIcon,
	btnText,
}) => {
	const [showModal, setShowModal] = useState<boolean>(false);

	const openModal = () => {
		setShowModal(!showModal);
		console.log('click');
	};

	return (
		<>
			<div className={`region-point ${regionClassName} ${showModal && 'modal-open'} `}>
				<div className='region-point__title'>
					<div className='region-point__icon'>{icon && <span>{icon}</span>}</div>

					<H2Component text={title} className='region__title' />

					{buttonId && (
						<Button
							buttonId={buttonId}
							className='region-modal'
							icon={btnModalIcon}
							text={btnText}
							onButtonClick={openModal}
						/>
					)}
				</div>

				<div className='region-padding'>
					{subtitles && (
						<div className='region-point__subtitle'>
							{subtitles?.map((subtitle) => (
								<h4 className='default-h4' key={subtitle}>
									{subtitle}
								</h4>
							))}
						</div>
					)}

					{description && <p className='region-point__text'>{description}</p>}

					{itemSlider && itemSlider}
				</div>
			</div>

			{showModal && modalDailyPlan && (
				<Modal slides={sliderA} onButtonClick={openModal} />
			)}
		</>
	);
};
