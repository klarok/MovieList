import { combineReducers } from 'redux';
import filterMoviesBy from './filterMoviesBy';
import onAllMovies from './onAllMovies';

export default combineReducers({
	movies: onAllMovies,
	searchFilter: filterMoviesBy.Search,
	watchFilter: filterMoviesBy.Watch
});