import { SliderComponent } from '../Slider/Slider';

import { starsIcon } from '../../assets/icons/starsIcon';
import { bedIcon } from '../../assets/icons/bedIcon';
import { modalIcon } from '../../assets/icons/modalIcon';

import { sliderA, sliderB, sliderC, sliderD } from '../Slider/SliderData';

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
		modalDailyPlan: sliderA,
	},

	{
		regionClassName: 'region-point--rent',
		icon: bedIcon,
		title: 'Where to stay',

		itemSlider: <SliderComponent slides={sliderB} />,
	},
];

export const dataRegionB = [
	{
		regionClassName: 'region-point--name',
		icon: 'B',
		title: 'South & Highlands',
		subtitles: ['Geysers', 'Waterfalls', 'Crater lakes'],
		description:
			'The South & Highlands of Iceland offer a breathtaking landscape of diverse natural wonders, from expansive glaciers and active volcanoes to serene waterfalls and black sand beaches. This region is also a haven for adventurers, featuring numerous hiking trails, hidden hot springs, and vast lava fields waiting to be explored. Visitors will be captivated by the blend of tranquility and raw, untamed beauty that defines this unique part of Iceland.',
	},

	{
		regionClassName: 'region-point--highlights',
		icon: starsIcon,
		title: 'Region highlights',
		buttonId: 'modal1',
		btnModalIcon: modalIcon,
		btnText: 'Show daily plan',
		itemSlider: <SliderComponent slides={sliderC} />,
		modalDailyPlan: sliderC,
	},

	{
		regionClassName: 'region-point--rent',
		icon: bedIcon,
		title: 'Where to stay',

		itemSlider: <SliderComponent slides={sliderD} />,
	},
];
