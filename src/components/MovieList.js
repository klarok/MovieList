import React from 'react';
import Movie from './Movie.js';

var MovieList = ({movies, toggleStatusHandler, filterByWatchHandler}) => (
	<div>
		<div className="show-watch">
			<input type="button"
				value="all" 
				onClick={filterByWatchHandler}/>
			<input type="button"
				value="watched"
				onClick={filterByWatchHandler}/>
			<input type="button"
				value="to-watch"
				onClick={filterByWatchHandler}/>
		</div>
		<div className="list">
			<ul className="movie-list">
				{
					movies.map(m => (
						<Movie movie={m} toggleStatusHandler={toggleStatusHandler}/>
						)
					)
				}
			</ul>
		</div>
	</div>
);

export default MovieList;