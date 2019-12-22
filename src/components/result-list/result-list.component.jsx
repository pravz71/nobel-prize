import React from 'react';

import SearchMessage from '../search-message/search-message.component';
import Result from '../result/result.component';

import './result-list.styles.scss';

const ResultList = ({ searchResults = [] }) => {
	return (
		<div className="results">
			<SearchMessage totalResults={0} searchQuery={"Kazuo"} />
			<div className="result-list">
				{
					searchResults.map((result, index) => (
						<Result key={index} result={result} />
					))
				}
			</div>
		</div>
	);
};

export default ResultList;