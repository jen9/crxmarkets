import React  from 'react';
import { TD } from "../../../../styles/main";

export default ({ data = {}}) => {
    return (
        <TD interactive>
            {data}
        </TD>
    );
};
