import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList.js';
import Search from './Search.js';
import Input from './Input.js';
import '../styles/appStyles.scss';

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
	constructor() {
		super();
		this.state = {
			allMovies: sampleMovies,
			movies: sampleMovies
		}
		
	}

	runSearch(event) {
		event.preventDefault();
		let term = document.getElementById('searchInput')
					.value.toLowerCase();
		// let term = event.target.value;
		let results = (term === '') ? this.state.allMovies : 
			this.state.allMovies.filter(movie => 
				movie.title.toLowerCase().indexOf(term) > -1
		);
		this.setState({movies: results});
		console.log(this.state.movies);
	}

	addMovie(event) {
		event.preventDefault();
		let newMovie = {title: document
								.getElementById('movieInput')
								.value
		};
		this.setState({
			allMovies: (this.state.allMovies.push(newMovie))
		});
		//If filter on, add newMovie to movies if qualifies
		console.log(this.state.allMovies);
	}

	render() {
		return (
			<div>
				<div className="header">MovieList</div>
				<Input onInputHandler={this.addMovie.bind(this)}/>
				<Search onSearchHandler={this.runSearch.bind(this)}/>
	  			<MovieList movies={this.state.movies}/>
	  		</div>
	  	);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);