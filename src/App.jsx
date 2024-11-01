
import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  for(let i = 0; i<100; i++){

    console.log("se renderizó todo el app", i)
  }


  return (
    <>
      <NavBar count={count}/>
      <ItemListContainer saludo="hola tarea" setCount={setCount} count={count}/>
    </>
  )
}

export default App


