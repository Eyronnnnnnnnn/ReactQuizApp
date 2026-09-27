import { useState } from 'react'
import Header from './components/Header'
import QuestionCard from './components/QuestionCard'
import Question from './data/Question'
import PopupCard from './components/popupCard'
import Result from './components/Result'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showPopup, setShowPopup] = useState(false)
  const [isWrong, setIsWrong] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const handleAnswer = (choice) => {
    if (showPopup || isFinished) return

    const userChoice = choice.trim().toLowerCase()
    const correctAnswer = Question[currentIndex].answer.trim().toLowerCase()
    const isCorrect = userChoice === correctAnswer

    setIsWrong(!isCorrect)
    if (isCorrect) {
      setScore(previousScore => previousScore + 1)
    }
    // Keep this question selected until its feedback is dismissed.
    setShowPopup(true)
  }

  const closeFeedback = () => {
    setShowPopup(false)
    setIsWrong(false)

    if (currentIndex === Question.length - 1) {
      setIsFinished(true)
    } else {
      setCurrentIndex(previousIndex => previousIndex + 1)
    }
  }

  const restartQuiz = () => {
    setCurrentIndex(0)
    setScore(0)
    setShowPopup(false)
    setIsWrong(false)
    setIsFinished(false)
  }

  return (
    <div>
      <Header />
      <div className="w-full h-140 flex justify-center items-center">
        {isFinished ? (
          <Result score={score} total={Question.length} restartQuiz={restartQuiz} />
        ) : (
          <QuestionCard
            question={Question[currentIndex].question}
            choices={Question[currentIndex].choices}
            handleAnswer={handleAnswer}
            restartQuiz={restartQuiz}
          />
        )}
      </div>
      {showPopup && (
        <PopupCard
          answer={Question[currentIndex].answer}
          onClose={closeFeedback}
          isWrong={isWrong}
        />
      )}
    </div>
  )
}

export default App
