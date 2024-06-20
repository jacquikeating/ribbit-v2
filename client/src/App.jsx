import { useState, useEffect, Suspense, lazy } from 'react'
import axios from 'axios'
import './App.css'
const MultipleChoice = lazy(() => import("./components/MultipleChoice.jsx"))

function App() {
  const [frogSounds, setFrogSounds] = useState([])

  const getFrogSounds = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/frogs"
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
        <Suspense fallback={<p>Loading...</p>}>
          <MultipleChoice frogSounds={frogSounds} />
        </Suspense>
      </div>
    </>
  )
}

export default App
