import React from 'react';
import styled from 'styled-components';

const Pagination = styled.section`
  margin: 20px 0;
`;

const Control = styled.span`
  :hover {
    cursor: pointer;
  }
`;

export default ({ startPagination, setStartPagination, data, paginationStep = 10 }) => {
    return <Pagination>
            <span>Navigating</span>
            {startPagination > 0 && <Control onClick={() => setStartPagination(Math.max(startPagination - paginationStep, 0))}>  || Back  </Control>}
            {startPagination + paginationStep <= data.length && <Control onClick={() => setStartPagination(startPagination + paginationStep)}> || Front</Control>}
        </Pagination>
};
