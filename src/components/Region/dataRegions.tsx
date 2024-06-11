import { SliderComponent } from '../Slider/Slider';

import { starsIcon } from '../../assets/icons/starsIcon';
import { bedIcon } from '../../assets/icons/bedIcon';
import { modalIcon } from '../../assets/icons/modalIcon';

import { sliderA, sliderB } from '../Slider/SliderData';

export const dataRegionA = [
	{
		regionClassName: 'region-point--name',
		icon: 'A',
		title: 'Golden Circle Region',
		subtitles: ['Geysers', 'Waterfalls', 'Crater lakes'],
		description:
			"The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament.",
	},

	{
		regionClassName: 'region-point--highlights',
		icon: starsIcon,
		title: 'Region highlights',
		buttonId: 'modal1',
		btnModalIcon: modalIcon,
		btnText: 'Show daily plan',
		itemSlider: <SliderComponent slides={sliderA} />,
		modalDailyPlan: true,
	},

	{
		regionClassName: 'region-point--rent',
		icon: bedIcon,
		title: 'Where to stay',

		itemSlider: <SliderComponent slides={sliderB} />,
	},
];
