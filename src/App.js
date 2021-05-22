import React, { useEffect, useState } from 'react';


function useLogger(value) {
  useEffect( () => { 
    if (value==='roman') {
      console.log('Someone wrote roman')
    }
  }, [value])
}

function useInput(initialValue) {
  const [value,setValue] = useState(initialValue);
  const onChange = event => {
    setValue(event.target.value)
  }

  return {
    value, onChange
  }

}

function App() {

  const input = useInput('')
  const lastName = useInput('')
  useLogger(input.value);

  return (
    <div div className={'container pt-3'}>
      <input type="text" {...input} />
      <input type="text" {...lastName} />
      <hr />
      <h1>{input.value} {lastName.value}</h1>
    </div>
  )
}

export default App;
