var sampleMovies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'Paprika'}
];

var allMovies = (state = sampleMovies, action) => {
	switch (action.type) {
		case 'ADD_MOVIE':
			return [...state, action.movie];
		default:
			return state;
	}
}

export default allMovies;