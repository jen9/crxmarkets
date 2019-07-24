import React from 'react';
import { Label, TextInputForm } from "../../styles/main";

export default ({ title = 'Input title', changeCb }) => {
    return (
        <TextInputForm>
            <Label>{title}</Label>
            <input type="text" onChange={(e) => changeCb(e.target.value)}/>
        </TextInputForm>
    );
};
