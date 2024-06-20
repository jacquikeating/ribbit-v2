import './CorrectAnswer.scss'

function CorrectAnswer({ currentFrog, showAnswer, correctAnswer, correctGuesses, totalGuesses }) {

    function correctOrIncorrect() {
        if (correctAnswer === "true") {
            return (
                <div className="answer-card">
                        <div className="result">
                            <img src="../assets/check-icon.svg" className="answer-icon green" />
                            <h2 className="correct">Correct!</h2>
                    </div>
                    <p className="your-score">Your score: {correctGuesses} / {totalGuesses}</p>
                </div>
            ) 
        } else if (correctAnswer === "false") {
            return (
                <div className="answer-card">
                    <div className="result">
                        <img src="../assets/x-icon.svg" className="answer-icon red" />
                        <h2 className="incorrect">Incorrect</h2>
                    </div>
                    <p className="your-score">Your score: {correctGuesses} / {totalGuesses}</p>
                </div>
            ) 
        }
    }

    return (
        <div className={showAnswer ? "show" : "hidden"}>
            {correctOrIncorrect()}
            <p>The correct answer is: {currentFrog.species}!</p>
            <img src={currentFrog.image} />
        </div>
    )
}

export default CorrectAnswer;