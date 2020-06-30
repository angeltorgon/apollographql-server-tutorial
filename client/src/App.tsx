import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [ greeting, setGreeting ]  = useState("")

  useEffect(() => {
    axios.post('http://localhost:9000', {
      query: `
        query {
          greeting
        } 
      `
    })
    .then((res) => {
      console.log("res - ", res)
      setGreeting(res.data.data.greeting)
    })
  }, [])

  if (!greeting) return <div>Loading...</div>

  return (
    <div className="App">
      {greeting}
    </div>
  );
}

export default App;
