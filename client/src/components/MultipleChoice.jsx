import React from 'react'
import { useState } from 'react'
import AudioPlayer from './AudioPlayer'
import './MultipleChoice.scss'
import CorrectAnswer from './CorrectAnswer'

export const MultipleChoice = ({ frogSounds }) => {
    const [currentFrog, setCurrentFrog] = useState(frogSounds[0])
    const [correctAnswer, setCorrectAnswer] = useState(' ')
    const [showAnswer, setShowAnswer] = useState(false)
    const [totalGuesses, setTotalGuesses] = useState(0)
    const [correctGuesses, setCorrectGuesses] = useState(0)

    function checkAnswer(event) {
        console.log(`Clicked ${event.target.id}. Correct answer is ${currentFrog.species}, with id ${currentFrog.id}`)
        setTotalGuesses(totalGuesses + 1)
        console.log(`Frogs guessed: ${totalGuesses}`)
        if (event.target.id == currentFrog.id) {
            setCorrectAnswer("true")
            setShowAnswer(true)
            setCorrectGuesses(correctGuesses + 1)
        } else {
            setCorrectAnswer("false")
            setShowAnswer(true)
        }
        console.log(`Correct: ${correctGuesses} / ${totalGuesses}`)
    }

    function nextFrog() {
        let increment = currentFrog.id;
        if (currentFrog.id == 11) {
            increment = 0; // Prevents app from breaking after last frog is reached
        } else {
             increment = currentFrog.id + 1;
        } 
        setCurrentFrog(frogSounds[increment])
        setShowAnswer(false);
        const allButtons = document.querySelectorAll("input")
        allButtons.forEach(button => {
            button.checked = false;
        })
        setCorrectAnswer(' ')
    }

    function randomFrog() {
        let randomId = Math.floor(Math.random() * 11)
        console.log(randomId)
        setCurrentFrog(frogSounds[randomId])
        setShowAnswer(false);
        const allButtons = document.querySelectorAll("input")
        allButtons.forEach(button => {
            button.checked = false;
        })
        setCorrectAnswer(' ')
    }

    // function correctOrIncorrect() {
    //     if (correctAnswer === "true") {
    //         return <h2 className="correct">Correct!</h2>
    //     } else if (correctAnswer === "false") {
    //         return <h2 className="incorrect">Incorrect</h2>
    //     }
    // }

    // function correctOrIncorrect() {
    //     if (correctAnswer === "true") {
    //         return (
    //             <>
    //                 <div className="result">
    //                     <img src="../assets/check-icon.svg" className="answer-icon green" />
    //                     <h2 className="correct">Correct!</h2>
    //             </div>
    //             <p>Your score: {correctGuesses} / {totalGuesses}</p>
    //             </>
    //         ) 
    //     } else if (correctAnswer === "false") {
    //         return (
    //             <>
    //              <div className="result">
    //                 <img src="../assets/x-icon.svg" className="answer-icon red" />
    //                 <h2 className="incorrect">Incorrect</h2>
    //             </div>
    //             <p>Your score: {correctGuesses} / {totalGuesses}</p>
    //             </>
    //         ) 
    //     }
    // }

  return (
    <div>
        <AudioPlayer currentFrog={currentFrog} />

        <div className={showAnswer ? "hidden" : "show"}>
            <div className="radio-buttons">
                <label> 
                    <input type="radio" value={frogSounds[8].species} name="frog" onClick={checkAnswer} id={frogSounds[8].id} /> 
                    American Bullfrog
                </label>
                <label>
                    <input type="radio" value={frogSounds[3].species} name="frog" onClick={checkAnswer} id={frogSounds[3].id} />
                    American Toad
                </label>
                <label>  
                    <input type="radio" value={frogSounds[1].species} name="frog" onClick={checkAnswer} id={frogSounds[1].id}/> 
                    Cricket Frog
                </label>
                <label>  
                    <input type="radio" value={frogSounds[0].species} name="frog" onClick={checkAnswer} id={frogSounds[0].id}/> 
                    Cope's Gray Treefrog
                </label>
                <label>  
                    <input type="radio" value={frogSounds[5].species} name="frog" onClick={checkAnswer} id={frogSounds[5].id}/> 
                    Eastern Gray Treefrog
                </label>
                <label>  
                    <input type="radio" value={frogSounds[7].species} name="frog" onClick={checkAnswer} id={frogSounds[7].id}/> 
                    Green Frog
                </label>
                <label>  
                    <input type="radio" value={frogSounds[10].species} name="frog" onClick={checkAnswer} id={frogSounds[10].id}/> 
                    Mink Frog
                </label>
                <label>  
                    <input type="radio" value={frogSounds[4].species} name="frog" onClick={checkAnswer} id={frogSounds[4].id}/> 
                    Northern Leopard Frog
                </label>
                <label>  
                    <input type="radio" value={frogSounds[9].species}  name="frog" onClick={checkAnswer} id={frogSounds[9].id} /> 
                    Spring Peeper
                </label>
                <label>  
                    <input type="radio" value={frogSounds[2].species} name="frog" onClick={checkAnswer} id={frogSounds[2].id}/> 
                    Western Chorus Frog
                </label>
                <label>  
                    <input type="radio" value={frogSounds[6].species}  name="frog" onClick={checkAnswer} id={frogSounds[6].id} /> 
                    Wood Frog
                </label>
            </div>
        </div>

        {/* {correctOrIncorrect()} */}
        <CorrectAnswer currentFrog={currentFrog} showAnswer={showAnswer} correctAnswer={correctAnswer} correctGuesses={correctGuesses} totalGuesses={totalGuesses} />

        <button onClick={nextFrog}>Next</button> {/* If onClick is nextFrog, will go through in array order. If randomFrog, will go in random order. */}

    </div>
  )
}

export default MultipleChoice;