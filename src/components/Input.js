import React from 'react';

var Input = ({onInputHandler}) => (
	<form>
		<input type="text"
			id="movieInput"
			
		/>
		<input type="button" 
			className="add-movie"
			value="Add" 
			onClick={onInputHandler}
		/>
	</form>
);

export default Input;