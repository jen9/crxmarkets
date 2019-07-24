import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  appearance: none;
  padding: 10px;
  border: 2px solid rgba(157,255,156,.6);
  height: 60px;
  width: 250px;
  font-size: 16px;
  margin: 20px 0;
  box-sizing: border-box;
`;

export default ({ placeholder = 'Search user last name', requestSearch }) => {
    const [searchTherm, setSearchTherm] = useState('');

    useEffect(() => { requestSearch(searchTherm) }, [requestSearch, searchTherm]);

    return (
        <Input placeholder={placeholder} type="search" onChange={ e => setSearchTherm(e.target.value)} value={searchTherm}/>
    );
};
