import React from 'react';
import styled from 'styled-components'
import { Wrapper } from "../../styles/main";

const NavBar = styled(Wrapper)`
    color: white;
    background: rgb(50,48,85);
    background: linear-gradient(90deg, rgba(50,48,85,0.6) 0%, rgba(157,255,156,1) 100%);
    margin: 0;
    text-align: left;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export default () => {
    return (
        <NavBar>
            <h2>Crxmarkets</h2>
        </NavBar>
    );
};
