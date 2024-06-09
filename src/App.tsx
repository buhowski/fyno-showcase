import { useState } from 'react';

import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Overall from './components/Overall/Overall';

import './App.scss';

const App = () => {
	return (
		<div className='page'>
			<div className='wrapper'>
				<Header />
				<Gallery />
				<Overall />
			</div>
		</div>
	);
};

export default App;
