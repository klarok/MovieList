import React from 'react';

var Movie = ({movie, toggleStatusHandler}) => (
	<li 
		className="movie-entry"
		onClick={toggleStatusHandler}
		value={movie.title}
		data-movie-id={movie.id}>
			{movie.title} {(movie.watched) ? 'watched' : 'to watch'}
	</li>
);

export default Movie;