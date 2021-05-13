import React, { useState, useEffect } from 'react';
import './App.css';





function PracticeUseEffect() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0, y: 0
  })


const mouseMoveHandler = event => {
  setPos( {
    x: event.clientX,
    y: event.clientY,
  })
}


useEffect( () => {
  fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(json => setData(json))


  return () => {
    console.log('Clean type')
  }
}, [type])


useEffect( () => {
  window.addEventListener('mousemove', mouseMoveHandler)
  return () => {
    window.removeEventListener('mousemove', mouseMoveHandler)
  }
}, [])


  return (
    <div>

        <h1>Ресурс: {type}</h1>
        <button onClick={ () => setType('users') }  className="btn btn-success">USERS</button>
        <button onClick={ () => setType('todos') } className="btn btn-danger">TODO</button>
        <button onClick={ () => setType('posts') } className="btn btn-dark">POSTS</button>
        

        <pre>
        {JSON.stringify(pos, null, 2)}
      </pre>


    </div>
  )
}


export default PracticeUseEffect;
