import Dropdown from '../Dropdown/Dropdown';
import { crossIcon } from '../../assets/icons/crossIcon';

import './Header.scss';

interface DropdownItem {
	label: string;
	value: number;
}

// Dropdown items data
const options: DropdownItem[] = [
	{ label: '5 days', value: 5 },
	{ label: '6 days', value: 6 },
	{ label: '7 days', value: 7 },
	{ label: '8 days', value: 8 },
	{ label: '9 days', value: 9 },
	{ label: '10 days', value: 10 },
];

const Header = () => {
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

					<Dropdown options={options} />
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
