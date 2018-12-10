import { connect } from 'react-redux';
import Input from '../components/Input.js';
import addMovie from '../actions/addMovie.js';

const mapDispatchToProps = dispatch => {
	return {
		onInputHandler: e => {
			e.preventDefault();
			let title = document.getElementById('movieInput').value;
			dispatch(addMovie(title))
		}
	};
}
var InputContainer = connect(null, mapDispatchToProps)(Input);

export default InputContainer;