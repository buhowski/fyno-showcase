import { modalIcon } from '../../assets/icons/modalIcon';
import { Button } from '../StructureElements';
import { SliderComponent } from '../Slider/Slider';

import { bookmarkIcon } from '../../assets/icons/bookmarkIcon';
import { starsIcon } from '../../assets/icons/starsIcon';
import { bedIcon } from '../../assets/icons/bedIcon';

import image1 from '../../assets/images/image_2.jpg';
import image2 from '../../assets/images/image_5.jpg';
import image3 from '../../assets/images/image_6.jpg';

const sliderA = [
	{
		image: image1,
		imageAlt: 'alt',
		curatorsPick: `Curator’s pick`,
		bookmark: bookmarkIcon,
		title: 'Gullfoss Waterfall',
		subtitles: [`1h`, `Waterfall`],
	},
	{
		image: image2,
		imageAlt: 'alt',
		curatorsPick: `Curator’s pick`,
		bookmark: bookmarkIcon,
		title: 'Gullfoss Waterfall',
		subtitles: [`1h`, `Waterfall`],
	},
	{
		image: image3,
		imageAlt: 'alt',
		curatorsPick: ``,
		bookmark: bookmarkIcon,
		title: 'Gullfoss Waterfall',
		subtitles: [`1h`, `Waterfall`],
	},
	{
		image: image1,
		imageAlt: 'alt',
		curatorsPick: `Curator’s pick`,
		bookmark: bookmarkIcon,
		title: 'Gullfoss Waterfall',
		subtitles: [`1h`, `Waterfall`],
	},
];

const sliderB = [
	{
		image: image1,
		imageAlt: 'alt',
		curatorsPick: `Curator’s pick`,
		bookmark: bookmarkIcon,
		title: 'Gullfoss Waterfall',
		pointRent: '9.1',
		subtitles: [`1h`, `Waterfall`],
	},
	{
		image: image1,
		imageAlt: 'alt',
		curatorsPick: `Curator’s pick`,
		bookmark: bookmarkIcon,
		title: 'Frost and Fire Hotel',
		pointRent: '9.1',
		subtitles: [`$180+`, `Boutique hotel`],
	},
	{
		image: image1,
		imageAlt: 'alt',
		bookmark: bookmarkIcon,
		title: 'Gullfoss Waterfall',
		pointRent: '9.1',
		subtitles: [`1h`, `Waterfall`],
	},
];
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
		button: <Button className='region-modal' icon={modalIcon} text='Show daily plan' />,
		itemSlider: <SliderComponent slides={sliderA} />,
	},

	{
		regionClassName: 'region-point--rent',
		icon: bedIcon,
		title: 'Where to stay',

		itemSlider: <SliderComponent slides={sliderB} />,
	},
];
