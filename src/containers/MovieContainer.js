import { connect } from 'react-redux';
import Movie from '../components/Movie.js';
import toggleWatch from '../actions/toggleWatch';

const mapDispatchToProps = dispatch => ({
	onClickHandler: e => {
		console.log(e.target);
		return dispatch(toggleWatch(e.target.data-movie-id));
	}
});

var MovieContainer = connect(null, mapDispatchToProps)(Movie);