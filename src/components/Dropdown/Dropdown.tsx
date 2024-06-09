import React, { useState, useEffect } from 'react';

import { dropArrowIcon } from '../../assets/icons/dropArrowIcon';

import './Dropdown.scss';

// Interface defining the structure of each option object
interface DropdownItem {
	label: string;
	value: number;
}

// Interface defining the props accepted by the Dropdown component
interface DropdownProps {
	options: DropdownItem[];
	defaultSelected?: number;
}

const Dropdown: React.FC<DropdownProps> = ({ options, defaultSelected = 7 }) => {
	// State variable to track if the dropdown is open
	const [isOpen, setIsOpen] = useState(false);

	// State variable to store the selected value
	const [selectedValue, setSelectedValue] = useState<number>(defaultSelected);

	// Fetch initial value from local storage on component mount
	useEffect(() => {
		const storedValue = localStorage.getItem('selectedDays');

		if (storedValue) {
			setSelectedValue(parseInt(storedValue));
		}
	}, []);

	// Function to handle opening/closing the dropdown
	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	// Function to handle selecting an option
	const handleSelect = (option: number) => {
		setSelectedValue(option);
		setIsOpen(false);

		localStorage.setItem('selectedDays', option.toString());
	};

	// Function to render the dropdown items
	const renderDropdownItems = () => {
		return options.map((item: DropdownItem) => (
			<li
				key={item.value}
				className='dropdown-item'
				onClick={() => handleSelect(item.value)}
			>
				{item.label}
			</li>
		));
	};

	// Render the dropdown component
	return (
		<div className='dropdown'>
			<button
				className={`navigation-list__item navigation-list__item--dropdown dropdown-toggle ${
					isOpen ? 'isOpened' : ''
				}`}
				onClick={handleClick}
			>
				<span>{options.find((o) => o.value === selectedValue)?.label}</span>

				{dropArrowIcon}
			</button>

			{isOpen && <ul className='dropdown-menu'>{renderDropdownItems()}</ul>}
		</div>
	);
};

export default Dropdown;
