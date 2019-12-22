import SearchActionTypes from './search.types';

export const addSearchQuery = (searchQuery) => ({
	type: SearchActionTypes.ADD_SEARCH_QUERY,
	payload: searchQuery
});

export const startFetchingData = () => ({
	type: SearchActionTypes.START_FETCHING_DATA
});

export const stopFetchingData = () => ({
	type: SearchActionTypes.STOP_FETCHING_DATA
});

export const addSearchResults = (searchResults = []) => ({
	type: SearchActionTypes.ADD_SEARCH_RESULTS,
	payload: searchResults
});
