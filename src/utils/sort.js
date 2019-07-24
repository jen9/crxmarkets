import {ASCENDING, DESCENDING} from "../constants/sortingTypes";

function ascending(a, b) {
    if ( a.last_name < b.last_name ){
        return -1;
    }
    if ( a.last_name > b.last_name ){
        return 1;
    }
    return 0;
}

function descending(a, b) {
    if ( a.last_name < b.last_name ){
        return 1;
    }
    if ( a.last_name > b.last_name ){
        return -1;
    }
    return 0;
}

const applySorting = (list, type) => {
    if (type === ASCENDING) {
        list.sort(ascending)
    } else if (type === DESCENDING) {
        list.sort(descending);
    }

    return list;
};

export default applySorting;
