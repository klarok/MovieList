import React from 'react';
import ReactDOM from 'react-dom';
import MovieListContainer from '../containers/MovieListContainer.js';
import SearchContainer from '../containers/SearchContainer.js';
import InputContainer from '../containers/InputContainer.js';
import '../styles/styles.scss';

var App = () => (
			<div>
				<div className="header">MovieList</div>
				<InputContainer />
				<SearchContainer />
	  			<MovieListContainer />
	  		</div>
	  	);
export default App;