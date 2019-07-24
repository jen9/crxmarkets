import React, { useState, useEffect } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import {CRUD_ADMIN, READ_ONLY_ADMIN} from "../../constants/roles";
import { Redirect } from 'react-router-dom';

export default ({ requestLogin, loginState }) => {
    const checkIfFormValid = (login, password) => !!login.length && !!password.length;
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setFormValidationStatus] = useState(checkIfFormValid(login, password));

    useEffect(() => {
        setFormValidationStatus(checkIfFormValid(login, password));
    }, [login, password]);

    const onSubmit = (e) => {
        e.preventDefault();

        requestLogin({login, password});
    };

    return loginState.role === CRUD_ADMIN || loginState.role === READ_ONLY_ADMIN ?
        <Redirect to="/" /> :
        <form onSubmit={onSubmit}>
            <TextInput title="Login" changeCb={setLogin}/>
            <TextInput title="Password" changeCb={setPassword}/>

            {loginState.error && <section>{loginState.error}</section>}

            <button type="submit" disabled={!isFormValid}>Submit</button>
        </form>
};
