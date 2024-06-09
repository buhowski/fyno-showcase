// PictureComponent
import React from 'react';

// Default <picture> Component
interface PictureComponentProps {
	alt: string;
	defaultSrc: string;
	sources: { srcSet: string; media: string }[];
}

export const PictureComponent: React.FC<PictureComponentProps> = ({
	alt,
	defaultSrc,
	sources,
}) => {
	return (
		<picture>
			{sources.map((source, index) => (
				<source key={index} srcSet={source.srcSet} media={source.media} />
			))}

			<img src={defaultSrc} alt={alt} />
		</picture>
	);
};

interface TagsProps {
	text?: string;
	className?: string;
	icon?: React.ReactNode | null;
}

// Default <h2> Component
export const H2Component: React.FC<TagsProps> = ({ text, className }) => {
	return <h2 className={`title ${className}`}>{text}</h2>;
};

// Default <h3> Component
export const H3Component: React.FC<TagsProps> = ({ text, className }) => {
	return <h3 className={className}>{text}</h3>;
};

// Default <button> Component
export const Button: React.FC<TagsProps> = ({ icon, text, className }) => {
	return (
		<button className={`btn-main ${className}`} type='button'>
			{icon} {text}
		</button>
	);
};

// Default <p> Component
export const Paragraph: React.FC<TagsProps> = ({ text, className }) => {
	return <p className={`text ${className}`}>{text}</p>;
};

// Trip Input fields
interface ItineraryItemProps {
	icon?: React.ReactNode;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	type?: string;
	className?: string;
}

export const ItineraryItem: React.FC<ItineraryItemProps> = ({
	icon,
	value,
	onChange,
	placeholder,
	type = 'text',
	className,
}) => (
	<label className={className}>
		{icon && <span> {icon} </span>}

		<input type={type} value={value} onChange={onChange} placeholder={placeholder} />
	</label>
);
