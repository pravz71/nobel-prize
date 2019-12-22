import React from 'react';
import {connect} from 'react-redux'; 

import { getSearchResults } from '../../utils/utils';
import {
	addSearchQuery,
	startFetchingData,
	stopFetchingData,
	addSearchResults
} from '../../redux/search/search.actions';

import './search-bar.styles.scss';

class SearchBar extends React.Component {
	state = {
		searchQuery : ''
	}

	handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState(() => ({
			[name] : value
		}));
	}
	
	handleSubmit = async (event) => {
		event.preventDefault();
		this.props.addSearchQuery(this.state.searchQuery);
		this.props.startFetchingData();
		const searchResults = await getSearchResults(this.state.searchQuery);
		this.props.stopFetchingData();
		this.props.addSearchResults(searchResults);
		this.setState(() => ({
			searchQuery: ''
		}));

	}

	render() {
		return (
			<div className="search-bar">
				<form onSubmit={this.handleSubmit}>
					<input
						type="search"
						name="searchQuery"
						value={this.state.searchQuery}
						onChange={this.handleChange}
						required
						className="search-input"
						placeholder="Type a name"
					/>
					<button
						type="submit"
						className="search-button"
					>
						<i className="fa fa-search"></i>
					</button>
				</form>
			</div>
		);
	}
};

const mapDispatchToProps = (dispatch) => ({
	addSearchQuery: (searchQuery) => dispatch(addSearchQuery(searchQuery)),
	startFetchingData: () => dispatch(startFetchingData()),
	stopFetchingData: () => dispatch(stopFetchingData()),
	addSearchResults: (searchResults) => dispatch(addSearchResults(searchResults))
});

export default connect(undefined, mapDispatchToProps)(SearchBar);