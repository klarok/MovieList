import React from 'react';

var Search = ({onChangeHandler}) => (
	<form>
		<input type="text" onChange={onChangeHandler} />
	</form>
);

export default Search;