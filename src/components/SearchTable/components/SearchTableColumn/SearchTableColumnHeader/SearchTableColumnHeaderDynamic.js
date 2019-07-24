import React, { useCallback }  from 'react';
import { ASCENDING, DESCENDING } from "../../../../../constants/sortingTypes";
import { TH } from "../../../../../styles/main";
import styled from 'styled-components';

const THInteractive = styled(TH)`
    :hover {
      cursor: pointer;
    }
`;

export default ({ data, setSorting, sorting }) => {
    const cb = useCallback(() => setSorting(sorting === ASCENDING ? DESCENDING : ASCENDING), [setSorting, sorting]);

    return (
        <THInteractive onClick={cb}>
            {data.name}
        </THInteractive>
    );
};
