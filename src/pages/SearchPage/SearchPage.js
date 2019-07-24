import React from 'react';
import SearchInput from '../../components/SearchInput';
import SearchTable from '../../components/SearchTable';
import { Wrapper } from "../../styles/main";

export default () => {
    return (
        <Wrapper>
            <SearchInput/>
            <SearchTable/>
        </Wrapper>
    );
};
