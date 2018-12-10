var searchMovies = (term) => {
	// let type = (term === '') ? 'SEARCH_ALL' : 'SEARCH_FILTER';
	// return {
	// 	type,
	// 	searchBy: term.toLowerCase()
	// };
	return {
		type: 'SEARCH_FILTER',
		searchBy: term.toLowerCase()
	};
};

export default searchMovies;