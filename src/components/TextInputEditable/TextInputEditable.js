import React, { Fragment }  from 'react';
import { Label, TextInputForm } from "../../styles/main";

export default ({ title = 'Input title', required, field, editable, value, changeCb }) => {
    const toggleEditable = () => changeCb({type: 'TOGGLE_EDITABLE', field, value: !editable});
    const changeValue = (e) => changeCb({type: 'EDIT_FIELD', field, value: e.target.value});

    return (
        <TextInputForm>
            <Label>{title}: </Label>
            {!editable ?
                <Fragment><span>{value}</span> | <span onClick={toggleEditable}>edit</span></Fragment>:
                <Fragment><input type="text" onChange={changeValue} value={value} required={required} /> | <span onClick={toggleEditable}>close</span></Fragment>
            }
        </TextInputForm>
    );
};
