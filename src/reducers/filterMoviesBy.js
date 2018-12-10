var filterMoviesBy = {};

filterMoviesBy.Search = (state = '', action) => {
	switch (action.type) {
		case 'SEARCH_FILTER':
			return action.searchBy;
		default:
			return state;
	}
};

filterMoviesBy.Watch = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case 'WATCH_FILTER':
			return action.showWhich;
		default:
			return state;
	}
};

export default filterMoviesBy;