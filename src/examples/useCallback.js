import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './App.css';

import ItemsList from './itemsList'


function PracticeUseCallback() {
 const [colored, setColored] = useState(false);
 const [count, setCount] = useState(1);

const styles = {
  color: colored ? 'darkred' : 'black'
}

const generateItemsFromAPI = useCallback( () => {
  return new Array(count).fill('').map((_,i) => `Елемент ${i + 1}`)
}, [count]
) 

 


  return (
    <>
       <h1 style={styles}> Кількість елементів: {count}</h1>
       <button className={"btn btn-success"} 
          onClick={ () => setCount( prev => prev + 1)}
        > Добавити </button>
        <button className={"btn btn-warning"} 
          onClick={ () => setColored( prev => !prev)}
        > Змінити </button>

        <ItemsList getItems={generateItemsFromAPI} />
    </>
  )
}


export default PracticeUseCallback;