import React from 'react';
import { connect } from 'react-redux';

import SearchMessage from '../search-message/search-message.component';
import Result from '../result/result.component';

import './result-list.styles.scss';

const ResultList = ({ searchResults }) => {
	return (
		<div className="results">
			<SearchMessage />
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

const mapStateToProps = (state) => ({
	searchResults: state.search.searchResults
});

export default connect(mapStateToProps)(ResultList);