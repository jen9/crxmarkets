import React, { Fragment } from 'react';
import NavBar from './components/NavBar/NavBar';
import Routes from './routes';

export default () => {
    return (
        <Fragment>
          <NavBar/>
          <Routes/>
        </Fragment>
    );
}
