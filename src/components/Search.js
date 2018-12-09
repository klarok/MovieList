import React from 'react';

var Search = ({onSearchHandler}) => (
	<form>
		<input type="text" 
			id="searchInput"
			 onChange={onSearchHandler}
	 	/>
	</form>
);

export default Search;