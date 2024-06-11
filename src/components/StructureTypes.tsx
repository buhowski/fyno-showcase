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
	buttonId?: string;
	btnText?: string;
	itemSlider?: React.ReactNode;
	btnModalIcon?: React.ReactNode;
	modalDailyPlan?: ItineraryItemProps[];
	onButtonClick?: () => void;
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
	pointRent?: string;
	subtitles?: string[];
	modalSubtitles?: string[];
}

export interface SliderProps extends BaseProps {
	slides: ItineraryItemProps[];
	onButtonClick?: () => void;
}
