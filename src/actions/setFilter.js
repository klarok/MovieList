var setFilter = {};

setFilter.Search = (term) => {
	return {
		type: 'SEARCH_FILTER',
		searchBy: term.toLowerCase()
	};
};

setFilter.Watch = (watchStatus) => {
	return {
		type: 'WATCH_FILTER',
		showWhich: watchStatus
	};
}

export default setFilter;