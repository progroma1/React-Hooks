import React, { useState, useEffect, useMemo } from 'react';
import './App.css';


function PracticeUseMemo(num) {
  let i = 0;
  while (i<100000000) i++;
  return num * 2;
}

function App() {
  const [number, setNumber] = useState( 42 );
  const [colored, setColored] = useState(false)
  const computed = useMemo( () => {
    return complexComputed(number)
  }, [number]) ;

  const styles = useMemo( () => {
    return {
      color: colored ? 'darkred' : 'black'
    }
  }, [colored]) 

  useEffect( () => {
      console.log('Styles changed... ')
  }, [styles])

  return (
    <div>
        <h1 style={styles}>Число що вираховуємо: {computed}</h1>
        <button className="btn btn-success" 
          onClick={ () => setNumber( prev => prev + 1)}
        > Добавити </button>

        <button className="btn btn-danger" 
          onClick={ () => setNumber( prev => prev - 1)}
        > Відняти </button>

        <button className="btn btn-warning" 
          onClick={ () => setColored( prev => !prev)}
        > Змінити </button>

    </div>
  )
}


export default PracticeUseMemo;
