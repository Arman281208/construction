import React from 'react';
import "./inputs.css";
import { useTranslation } from 'react-i18next';

function Inputs(props) {
    const { t } = useTranslation("global");

    return (
            <input className='inputs' type="text" placeholder={t(props.name)} />
    );
}

export default Inputs;
