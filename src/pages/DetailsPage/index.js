import { connect } from 'react-redux';
import DetailsPage from './DetailsPage';
import {bindActionCreators} from "redux";
import {requestUser} from "../../sagas/details/actions";

const mapStateToProps = state => ({
    user: state.details.data,
    loading: state.details.isFetching
});

const mapDispatchToProps = dispatch => bindActionCreators({
    requestUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
