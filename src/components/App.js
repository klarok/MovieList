import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList.js';
import Search from './Search.js';

var sampleMovies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			movies: sampleMovies
		}
		
	}

	runSearch(event) {
		event.preventDefault();
		let term = document.getElementById('searchInput')
					.value.toLowerCase();
		let results = this.state.movies.filter(movie => 
			movie.title.toLowerCase().indexOf(term) > -1
		);
		this.setState({movies: results});
		console.log(this.state.movies);
	}

	render() {
		return (
			<div>
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