import React from 'react';
import { Route } from "react-router-dom";
import {CRUD_ADMIN, READ_ONLY_ADMIN} from "../../constants/roles";
import { Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    return rest.role === CRUD_ADMIN || rest.role === READ_ONLY_ADMIN ?
        <Route {...rest} component={Component} /> :
        <Redirect
            to="/login"
        />
}

export default PrivateRoute;
