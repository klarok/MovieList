import { combineReducers } from 'redux';
import filterBySearch from './filterBySearch';
import allMovies from './allMovies';

export default combineReducers({
	movies: allMovies,
	searchFilter: filterBySearch
});