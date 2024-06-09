import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';

import './App.scss';

const App = () => {
	return (
		<div className='page'>
			<div className='wrapper'>
				<Header />

				<Gallery />
			</div>
		</div>
	);
};

export default App;
