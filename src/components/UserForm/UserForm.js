import React, { useReducer } from 'react';
import TextInputEditable from '../TextInputEditable/TextInputEditable';

const initialState = {
    last_name: {
        value: '',
        isValid: false,
        editable: false
    },
    country: {
        value: '',
        isValid: false,
        editable: false
    },
    gender: {
        value: '',
        isValid: false,
        editable: false
    },
    birthday: {
        value: '',
        isValid: false,
        editable: false
    }
};

const isValid = (field, value) => {
    switch (field) {
        case 'last_name':
            return new RegExp(/^[a-zA-Z]+$/).test(value);
        case 'country':
        case 'gender':
        case 'birthday':
        default:
            return !!value.length;
    }
};

function reducer(state, action) {
    switch (action.type) {
        case 'EDIT_FIELD':
            const prevValue = state[action.field].value;
            return Object.assign({}, state, {[action.field]: {...state[action.field], value: isValid(action.field, action.value) ? action.value : prevValue, isValid: isValid(action.field, action.value)}});
        case 'TOGGLE_EDITABLE':
            return Object.assign({}, state, {[action.field]: {...state[action.field], editable: action.value }});
        default:
            return state;
    }
}

const populateState = (state, values) => {
    Object.keys(state).forEach(key => state[key].value = values[key]);
};

export default ({ user, loading }) => {
    populateState(initialState, user);
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    return loading ?
        <h2>Fetching user...</h2> :
        <form>
            <TextInputEditable
                title="Last name"
                field="last_name"
                editable={state.last_name.editable}
                value={state.last_name.value}
                required={state.last_name.required}
                changeCb={dispatch}
            />
            <TextInputEditable
                title="Last name"
                field="country"
                editable={state.country.editable}
                value={state.country.value}
                required={state.country.required}
                changeCb={dispatch}
            />
            <TextInputEditable
                title="Gender"
                field="gender"
                editable={state.gender.editable}
                value={state.gender.value}
                required={state.gender.required}
                changeCb={dispatch}
            />
            <TextInputEditable
                title="Birthday"
                field="birthday"
                editable={state.birthday.editable}
                value={state.birthday.value}
                required={state.birthday.required}
                changeCb={dispatch}
            />
        </form>
};
