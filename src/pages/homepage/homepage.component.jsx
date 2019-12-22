import React from 'react';

import Header from '../../components/header/header.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import ResultList from '../../components/result-list/result-list.component';

import './homepage.styles.scss';

const HomePage = () => {
	return (
		<div>
			<Header />
			<div className="container">
				<SearchBar />
				<ResultList searchResults={searchResults}/>
			</div>
		</div>
	);
};

const searchResults = [{
  name: "John",
  field: "Chemistry",
  year: 2019,
  country: "India",
  sharedWith: [
    "Ram", "Raj", "Laxman"
  ]
}];

export default HomePage;