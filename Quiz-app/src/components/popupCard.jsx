export default function PopupCard({ answer, onClose, isWrong }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="feedback-title"
        className="bg-white rounded-xl shadow-lg p-6 w-80 text-center"
      >
        <h2 id="feedback-title" className="text-xl font-bold mb-4">
          {isWrong ? 'Your answer is wrong' : 'Correct!'}
        </h2>
        <p className="mb-4">Correct answer: {answer}</p>
        <button
          autoFocus
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
        >
          Close
        </button>
      </div>
    </div>
  )
}
