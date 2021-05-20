import React from 'react';
import {useAlert} from './AlertContext'

export default function Alert() {
    const alert = useAlert();

    if (!alert) return null;

    return (
        <div className={'alert alert-danger'}>
             Це важливе і дуже важливе повідомлення
        </div>
    )
}