import { connect } from 'react-redux';
import SearchInput from './SearchInput';
import { bindActionCreators } from 'redux';
import { requestSearch } from '../../sagas/search/actions';

const mapDispatchToProps = dispatch => bindActionCreators({
    requestSearch
}, dispatch);



export default connect(null, mapDispatchToProps)(SearchInput);
