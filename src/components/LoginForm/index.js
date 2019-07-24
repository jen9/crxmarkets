import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestLogin } from "../../sagas/logIn/actions";
import LoginForm from './LoginForm';

const mapStateToProps = (state) => {
    return ({
        loginState: state.login
    });
};

const mapDispatchToProps = dispatch => bindActionCreators({
    requestLogin
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

