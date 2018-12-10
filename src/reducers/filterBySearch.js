var filterBySearch = (state = '', action) => {
	switch (action.type) {
		// case 'SEARCH_FILTER':
		// 	return action.searchBy;
		// case 'SEARCH_ALL':
		// 	return '';
		case 'SEARCH_FILTER':
			return action.searchBy;
		default: //including 'SHOW ALL'
			return state;
	}
};

export default filterBySearch;