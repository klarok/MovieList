var sampleMovies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'Paprika'}
];

var onAllMovies = (state = [], action) => {
	switch (action.type) {
		case 'ADD_MOVIE':
			let newMovie = {
				title: action.movie,
				id: state.length,
				watched: false
			};
			return [...state, newMovie];

		case 'TOGGLE_WATCH':
			return state.map((movie, index) => {
				return (index === action.id) ?
					{...movie, watched: !movie.watched} : movie;
			});

		default:
			return state;
	}
}

export default onAllMovies;