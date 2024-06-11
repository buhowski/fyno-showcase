import { PictureComponent } from '../StructureElements';
import { galleryIcon } from '../../assets/icons/galleryIcon';

import pic1 from '../../assets/images/image_10.webp';
import pic2 from '../../assets/images/image_2.webp';
import pic3 from '../../assets/images/image_5.webp';
import pic4 from '../../assets/images/image_3.webp';
import pic5 from '../../assets/images/image_8.webp';

import './Gallery.scss';

const Gallery = () => {
	// Example of using picture tag
	const sources = [{ srcSet: pic1, media: '(min-width: 320px)' }];

	const images = [
		{ src: pic2, alt: 'Landscape 1' },
		{ src: pic3, alt: 'Landscape 1' },
		{ src: pic4, alt: 'Landscape 1' },
		{ src: pic5, alt: 'Landscape 1' },
		// TODO: Add more images here for image gallery
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
						<div key={index} className='gallery-item gallery-item--small'>
							<div>
								<img src={image.src} alt={image.alt} />
							</div>
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
