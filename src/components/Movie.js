import React from 'react';

var Movie = ({movie}) => (
	<li className="movie-entry">{movie.title}</li>
);

export default Movie;