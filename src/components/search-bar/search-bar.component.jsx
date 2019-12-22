import React from 'react';

import './search-bar.styles.scss';

class SearchBar extends React.Component {
	state = {
		searchQuery : ''
	}

	handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		console.log(event.target.value);
		this.setState(() => ({
			[name] : value
		}));
	}
	
	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state.searchQuery);
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

export default SearchBar;