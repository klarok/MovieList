import React from 'react';
import Movie from './Movie.js';

var MovieList = ({movies}) => (
	<div>
		<div className="header">MovieList</div>
		<div className="list">
			<ul>
				{
					movies.map(m => (
						<Movie 
							movie={m}/>
						)
					)
				}
			</ul>
		</div>
	</div>
);

export default MovieList;