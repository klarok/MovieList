import React from 'react';
import ReactDOM from 'react-dom';
import MovieListContainer from '../containers/MovieListContainer.js';
import SearchContainer from '../containers/SearchContainer.js';
import InputContainer from '../containers/InputContainer.js';
//import Search from './Search.js';
// import Input from './Input.js';
import '../styles/styles.scss';

var sampleMovies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'Paprika'},
  {title: 'End of Evangelion'}
];

class App extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		allMovies: [],
	// 		movies: []
	// 	}
		
	// }

	// runSearch(event) {
	// 	// event.preventDefault();
	// 	this._filterMoviesByTerm();
	// }

	// _filterMoviesByTerm() {
	// 	let term = document.getElementById('searchInput')
	// 				.value.toLowerCase();
	// 	let results = (term === '') ? this.state.allMovies : 
	// 		this.state.allMovies.filter(movie => 
	// 			movie.title.toLowerCase().indexOf(term) > -1
	// 	);
	// 	this.setState({movies: results});
	// 	console.log('Show movies', this.state.movies);
	// }

	// addMovie(event) {
	// 	event.preventDefault();
	// 	let newMovie = {title: document
	// 							.getElementById('movieInput')
	// 							.value
	// 	};
	// 	this.setState(
	// 		{
	// 			allMovies: this.state.allMovies.concat([newMovie])
	// 		},
	// 		this._filterMoviesByTerm
	// 	);
	// }

	render() {
		return (
			<div>
				<div className="header">MovieList</div>
				<InputContainer />
				<SearchContainer />
	  			<MovieListContainer />
	  		</div>
	  	);
	}
}
 export default App;