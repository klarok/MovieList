import React from 'react';

var Search = ({onSearchHandler}) => (
	<form>
		<input type="text" 
			id="searchInput" 
		 />
		<button type="button" 
			value="Go" 
			onClick={onSearchHandler} />
	</form>
);

export default Search;