import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import MultipleChoice from './components/MultipleChoice'

function App() {
  const [frogSounds, setFrogSounds] = useState([])

  const getFrogSounds = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/frogs"
      )
      setFrogSounds(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFrogSounds()
  }, [])

  return (
    <>
      <div className="content">
        <h1>Ribbit</h1>
        <p>Test your frog knowledge!</p>
        <MultipleChoice frogSounds={frogSounds}/>
      </div>
    </>
  )
}

export default App
