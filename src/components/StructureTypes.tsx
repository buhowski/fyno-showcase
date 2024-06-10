interface BaseProps {
	id?: string;
	className?: string;
}

export interface RegionPointProps {
	regionClassName?: string;
	icon?: string | React.ReactNode;
	title?: string;
	subtitles?: string[];
	description?: string;
	button?: React.ReactNode;
	itemSlider?: React.ReactNode;
}

export interface RegionProps extends BaseProps {
	points: RegionPointProps[];
}

export interface ItineraryItemProps {
	image: string;
	imageAlt: string;
	curatorsPick?: string;
	bookmark?: React.ReactNode;
	title?: string;
	subtitles?: string[];
}

export interface SliderProps extends BaseProps {
	slides: ItineraryItemProps[];
}
