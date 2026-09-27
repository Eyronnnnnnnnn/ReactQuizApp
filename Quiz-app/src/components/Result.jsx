export default function Result({ score, total, restartQuiz }) {
  return (
    <div className="bg-blue-600 text-white rounded-2xl p-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz complete!</h2>
      <p className="mb-6">Your total score is: {score} / {total}</p>
      <button
        onClick={restartQuiz}
        className="bg-red-700 hover:bg-red-950 px-4 py-3 rounded-2xl"
      >
        Restart quiz
      </button>
    </div>
  )
}
