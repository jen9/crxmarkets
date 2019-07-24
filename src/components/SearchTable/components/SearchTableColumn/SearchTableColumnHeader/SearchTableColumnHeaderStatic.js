import React   from 'react';
import { TH } from "../../../../../styles/main";

export default ({ data}) => {
    return (
        <TH>
            {data.name}
        </TH>
    );
};
