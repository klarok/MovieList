import { connect } from 'react-redux';
import Search from '../components/Search.js';
import searchMovies from '../actions/searchMovies.js';

const mapDispatchToProps = dispatch => ({
	onSearchHandler: e => dispatch(searchMovies(e.target.value))
});

var SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;