import { modalIcon } from '../../assets/icons/modalIcon';
import { Button } from '../StructureElements';
import { SliderComponent } from '../Slider/Slider';

import { bookmarkIcon } from '../../assets/icons/bookmarkIcon';
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
		image: image1,
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
	{
		image: image1,
		imageAlt: 'alt',
		curatorsPick: ``,
		bookmark: bookmarkIcon,
		title: 'Gullfoss Waterfall',
		subtitles: [`1h`, `Waterfall`],
	},
];

export const dataRegionA = [
	{
		regionClassName: 'region-block--name',
		icon: 'A',
		title: 'Golden Circle Region',
		subtitles: ['Geysers', 'Waterfalls', 'Crater lakes'],
		description:
			"The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament.",
	},

	{
		regionClassName: 'region-block--highlights',
		icon: '2',
		title: 'Region highlights',
		button: <Button className='region-modal' icon={modalIcon} text='Show daily plan' />,
		itemSlider: <SliderComponent slides={sliderA} />,
	},
];
