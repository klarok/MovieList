var sampleMovies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'Paprika'}
];

var listAllMovies = (state = [], action) => {
	switch (action.type) {
		case 'ADD_MOVIE':
			let newMovie = {title: action.movie};
			return [...state, newMovie];
		default:
			return state;
	}
}

export default listAllMovies;