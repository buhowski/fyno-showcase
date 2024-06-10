import { RegionProps } from '../StructureTypes';
import { RegionPoint } from './RegionPoint';

import './Region.scss';

const Region: React.FC<RegionProps> = ({ id, className, points }) => {
	return (
		<div className={`region ${className}`} id={id}>
			{points.map((point, index) => (
				<RegionPoint
					key={index}
					regionClassName={point.regionClassName}
					icon={point.icon}
					title={point.title}
					subtitles={point.subtitles}
					description={point.description}
					button={point.button}
					itemSlider={point.itemSlider}
				/>
			))}
		</div>
	);
};

export default Region;
