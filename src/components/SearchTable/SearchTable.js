import React, { Fragment, useState } from 'react';
import SearchTableRow from './components/SearchTableRow';
import SearchTableHeaderRow from './components/SearchTableHeaderRow/SearchTableHeaderRow';
import SearchTableColumnHeader from './components/SearchTableColumn/SearchTableColumnHeader';
import SearchTableColumnBody from './components/SearchTableColumn/SearchTableColumnBody';
import columns from '../../constants/searchTableColumns';
import SearchTablePagination from './components/SearchTablePagination/SearchTablePagination';
import { paginationStep } from '../../constants/pagination';

export default ({ users = [], loading }) => {
    const [startPagination, setStartPagination] = useState(0);
    return loading ?
        <h3>Loading...</h3> :
        !users.length ?
            <h3>No results</h3>:
            <Fragment>
                <table>
                    <thead>
                        <SearchTableHeaderRow>
                            {() => columns.map(column => <SearchTableColumnHeader data={column} />)}
                        </SearchTableHeaderRow>
                    </thead>
                    <tbody>
                    {users.slice(startPagination, startPagination + paginationStep).map(item =>
                        <SearchTableRow id={item.id}>
                            {() => columns.map(field => <SearchTableColumnBody data={item[field.code]} />)}
                        </SearchTableRow>
                    )}
                    </tbody>
                </table>
                <SearchTablePagination
                    startPagination={startPagination}
                    setStartPagination={setStartPagination}
                    paginationStep={paginationStep}
                    data={users}
                />
            </Fragment>
};
