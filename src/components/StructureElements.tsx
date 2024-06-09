// PictureComponent
import React from 'react';

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

interface H3Props {
	text: string;
	className?: string;
}

export const H3: React.FC<H3Props> = ({ text, className }) => {
	return <h3 className={className}>{text}</h3>;
};
