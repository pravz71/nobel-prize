import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/header/header.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import ResultList from '../../components/result-list/result-list.component';

import './homepage.styles.scss';

const HomePage = ({ fetchingData }) => {
	return (
		<div>
			<Header />
			<div className="container">
				<SearchBar />
				{fetchingData !== null && <ResultList />}
			</div>
		</div>
	);
};

const mapStateToProps = ({ search }) => ({
	fetchingData: search.fetchingData
});

export default connect(mapStateToProps)(HomePage);