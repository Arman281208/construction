import React from 'react';
import "./buttons.css";
import { useTranslation } from 'react-i18next';

function Buttons(props) {
    const { t } = useTranslation("global");

    return (
            <button className='buttons'>{t(props.name)}</button>
    );
}

export default Buttons;
