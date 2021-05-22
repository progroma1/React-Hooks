import React from 'react';
import {useAlert} from './alert/AlertContext'

export default function Main() {
    const {show} = useAlert();
    return (
        <>
        <h1>Привіт у прикладі з Context</h1>
        <button className="btn btn-success" 
        onClick={ () => show('Цей текст із Main.js')}
        > Показати alert!</button>
        </>
    )
}