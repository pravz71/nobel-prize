import React from 'react';

import './search-message.styles.scss'

const SearchMessage = ({ totalResults, searchQuery }) => {
	return (
		<div className="search-message">
			{
				totalResults === 0 ? (
					<p className="search-message-info">No result found for "{searchQuery}". Please try again</p>
				) : (
					<p className="search-message-info">Displaying {totalResults} results for "{searchQuery}". </p>
				)
			}
		</div>
	);
};

export default SearchMessage;