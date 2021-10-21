import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='br3 pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder="Search Pokemon"
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;