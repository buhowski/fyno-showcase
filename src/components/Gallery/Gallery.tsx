import { PictureComponent } from '../StructureElements';

import { galleryIcon } from '../../assets/icons/galleryIcon';
import pic1 from '../../assets/images/image_10.jpg';

import './Gallery.scss';

const Gallery = () => {
	// Example of using picture tag
	const sources = [{ srcSet: pic1, media: '(min-width: 320px)' }];

	const images = [
		{ src: pic1, alt: 'Landscape 1' },
		{ src: pic1, alt: 'Landscape 1' },
		{ src: pic1, alt: 'Landscape 1' },
		{ src: pic1, alt: 'Landscape 1' },
		// Add more images here
	];

	return (
		<section className='gallery'>
			<div className='gallery-grid'>
				<div className='gallery-item gallery-main'>
					<PictureComponent
						alt='A responsive image example'
						defaultSrc={pic1}
						sources={sources}
					/>
				</div>

				<div className='gallery-list'>
					{images.map((image, index) => (
						<div className='gallery-item gallery-item--small' key={index}>
							<img src={image.src} alt={image.alt} />
						</div>
					))}
				</div>
			</div>

			<button className='gallery__action' type='button'>
				{galleryIcon} All photos
			</button>
		</section>
	);
};

export default Gallery;
