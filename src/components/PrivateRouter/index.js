import { connect } from 'react-redux';
import PrivateRouter from './PrivateRouter';

const mapStateToProps = (state) => {
    return ({
        role: state.login.role
    });
};

export default connect(mapStateToProps)(PrivateRouter);

