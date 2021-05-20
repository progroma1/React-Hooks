import React from 'react';
import {useAlertToggle} from './alert/AlertContext'

export default function Main() {
    const toggle = useAlertToggle();
    return (
        <>
        <h1>Привіт у прикладі з Context</h1>
        <button className="btn btn-success" onClick={toggle}
        > Показати alert!</button>
        </>
    )
}