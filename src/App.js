import React, { useState } from 'react';
import './App.css';



function computeInitialCounter() {
  console.log('Some calculations ...')
  return Math.trunc( Math.random() * 20)
}


function App() {

  const [counter, setCounter] = useState( () => {
    return computeInitialCounter();
  });


  const [state, setState] = useState({
    title: 'Some crazy counter',
    date: Date.now()
  })

function increment() {
    setCounter( prevCounter => {
      return prevCounter + 1
    })
  }


  function decrement() {
    setCounter(counter - 1)
  }

  function updateTitle() {
    setState( prev => {
      return {
        ...prev,
        title: 'Romko Bomko'
      }


    })
  }



  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment} className="btn btn-success">ADD</button>
      <button onClick={decrement} className="btn btn-danger">REMOVE</button>
      <button onClick={ updateTitle } className="btn btn-default">CHANGE TITLE</button>


      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>



    </div>
  )
}


export default App;
