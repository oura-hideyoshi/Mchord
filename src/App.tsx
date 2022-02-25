import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Map from './components/map/canon/map'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Map></Map>
  )
}

export default App
