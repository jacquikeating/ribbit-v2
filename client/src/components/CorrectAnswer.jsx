import './CorrectAnswer.scss'

function CorrectAnswer({ currentFrog, showAnswer }) {
    return (
        <div className={showAnswer ? "show" : "hidden"}>
            <p>The correct answer is: {currentFrog.species}!</p>
            <img src={currentFrog.image} />
        </div>
    )
}

export default CorrectAnswer;