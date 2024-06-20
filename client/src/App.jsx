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
        <header>
          <img src="./assets/frog-icon.svg" alt="Simple icon of a frog" className="frog-icon" />
          <div className="text">          
            <h1>Ribbit</h1>
            <p className="subtitle">Test your frog knowledge!</p>
          </div>
        </header>
        <MultipleChoice frogSounds={frogSounds}/>
      </div>
    </>
  )
}

export default App
