import { connect } from 'react-redux';
import SearchTable from './SearchTable';

const mapStateToProps = state => ({
    users: state.search.data,
    loading: state.search.isFetching
});

export default connect(mapStateToProps)(SearchTable);
