import Dropdown from '../Dropdown/Dropdown';
import { crossIcon } from '../../assets/icons/crossIcon';

import './Header.scss';

interface DropdownItem {
	label: string;
	value: number;
}

// Dropdown items data
const options: DropdownItem[] = [
	{ label: '5 Days', value: 5 },
	{ label: '6 Days', value: 6 },
	{ label: '7 Days', value: 7 },
	{ label: '8 Days', value: 8 },
	{ label: '9 Days', value: 9 },
	{ label: '10 Days', value: 10 },
];

const Header = () => {
	const handleSelect = (selectedValue: number) => {
		console.log('Selected value:', selectedValue);
	};

	return (
		<header className='header'>
			<div className='navigation-menu'>
				<div className='navigation-list'>
					<button className='navigation-list__item' type='button'>
						Trips
					</button>

					<button
						className='navigation-list__item navigation-list__item--middle'
						type='button'
					>
						Iceland
					</button>

					<Dropdown options={options} onSelect={handleSelect} defaultSelected={7} />
				</div>

				<button className='navigation-create' type='button'>
					{crossIcon}
					Create
				</button>
			</div>
		</header>
	);
};

export default Header;
