import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import DetailsPage from './pages/DetailsPage';
import PrivateRouter from './components/PrivateRouter';

export default () =>  {
    return (
        <Switch>
            <Route exact path="/login" component={LoginPage}/>
            <PrivateRouter exact path="/" component={SearchPage}/>
            <PrivateRouter exact path="/details/:id" component={DetailsPage}/>
        </Switch>
    );
}
