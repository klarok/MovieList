import { connect } from 'react-redux';
import Search from '../components/Search.js';
import setFilter from '../actions/setFilter.js';

const mapDispatchToProps = dispatch => ({
	onSearchHandler: e => dispatch(setFilter.Search(e.target.value))
});

var SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;