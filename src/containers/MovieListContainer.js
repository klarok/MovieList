import { connect } from 'react-redux';
import MovieList from '../components/MovieList.js';
import toggleWatch from '../actions/toggleWatch';
import setFilter from '../actions/setFilter';


let getMovies = ({movies, searchFilter, watchFilter}) => {
	// return (searchFilter === '') ?
	// 	movies : movies.filter(movie => 
	// 		movie.title.toLowerCase()
	// 			.indexOf(searchFilter) > -1);
	if (searchFilter === '') {
		return movies.filter(movie => {
			switch (watchFilter) {
				case 'watched':
					return movie.watched;
				case 'to-watch':
					return !movie.watched;
				default:
					return true;
			}
		});
	} else {
		return movies.filter(movie => {
			let searchedFor = movie.title.toLowerCase().indexOf(searchFilter) > -1;
			switch (watchFilter) {
				case 'watched':
					return movie.watched && searchedFor;
				case 'to-watch':
					return !movie.watched && searchedFor;
				default:
					return searchedFor;
			}
		});
	}
};
const mapStateToProps = state => ({
	movies: getMovies(state)
});
const mapDispatchToProps = dispatch => ({
	toggleStatusHandler: e => {
		return dispatch(toggleWatch.Status(e.target.getAttribute('data-movie-id')));
	},
	filterByWatchHandler: e => {
		console.log(e.target.value);
		return dispatch(setFilter.Watch(e.target.value));
	}
});

var MovieListContainer = connect(mapStateToProps, mapDispatchToProps)(MovieList);

export default MovieListContainer;