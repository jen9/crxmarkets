import React  from 'react';

export default ({ children, id, history }) => {
    return (
        <tr key={id} onClick={() => history.push(`details/${id}`)}>
            {children()}
        </tr>
    );
};
