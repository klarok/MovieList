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
		let term = event.target.value.toLowerCase();
		let results = this.state.movies.filter(movie => 
			movie.title.toLowerCase().indexOf(term) > -1
		);
	}

	render() {
		return (
			<div>
				<Search onChangeHandler={this.runSearch.bind(this)}/>
	  			<MovieList movies={this.state.movies}/>
	  		</div>
	  	);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);