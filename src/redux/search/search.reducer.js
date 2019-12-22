import SearchActionTypes from './search.types';

const INITIAL_STATE = {
	searchQuery: '',
	fetchingData: null,
	searchResults: []
}

const searchReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SearchActionTypes.ADD_SEARCH_QUERY :
			return {
				...state,
				searchQuery: action.payload
			};
		case SearchActionTypes.START_FETCHING_DATA :
			return {
				...state,
				fetchingData: true
			}
		case SearchActionTypes.STOP_FETCHING_DATA : 
			return {
				...state,
				fetchingData: false
			}
		case SearchActionTypes.ADD_SEARCH_RESULTS : 
			return {
				...state,
				searchResults: action.payload
			}
		default:
			return state;
	};
};

export default searchReducer;