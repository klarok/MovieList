var filterBySearch = (state = '', action) => {
	switch (action.type) {
		case 'SEARCH_FILTER':
			return action.searchBy;
		default:
			return state;
	}
};

export default filterBySearch;