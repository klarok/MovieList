import { combineReducers } from 'redux';
import filterBySearch from './filterBySearch';
import listAllMovies from './listAllMovies';

export default combineReducers({
	movies: listAllMovies,
	searchFilter: filterBySearch
});