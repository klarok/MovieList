import { connect } from 'react-redux';
import MovieList from '../components/MovieList.js';


let getMovies = ({movies, searchFilter}) => {
	return (searchFilter === '') ?
		movies : movies.filter(movie => 
			movie.title.toLowerCase()
				.indexOf(searchFilter) > -1);
};
const mapStateToProps = state => ({
	movies: getMovies(state)
});

var MovieListContainer = connect(mapStateToProps)(MovieList);

export default MovieListContainer;