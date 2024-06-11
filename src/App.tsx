import './App.scss';

import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Overall from './components/Overall/Overall';
import Highlights from './components/Highlights/Highlights';
import Itinerary from './components/Itinerary/Itinerary';

const App = () => {
	return (
		<div className='page'>
			<div className='wrapper'>
				<Header />
				<Gallery />
				<Overall />
				<Highlights />
				<Itinerary />
			</div>
		</div>
	);
};

export default App;
