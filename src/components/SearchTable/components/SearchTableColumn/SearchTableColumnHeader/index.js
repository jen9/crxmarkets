import React from 'react';
import { connect } from 'react-redux';
import SearchTableColumnHeaderDynamic from './SearchTableColumnHeaderDynamic';
import SearchTableColumnHeaderStatic from './SearchTableColumnHeaderStatic';
import { bindActionCreators } from "redux";
import { setSorting } from "../../../../../sagas/search/actions";

const mapStateToProps = state => ({
    sorting: state.search.sorting
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setSorting
}, dispatch);

const SortableTH = connect(mapStateToProps, mapDispatchToProps)(SearchTableColumnHeaderDynamic);

export default (props) => {
    return props.data.sortable ?
        <SortableTH {...props}/> :
        <SearchTableColumnHeaderStatic {...props}/>
}
