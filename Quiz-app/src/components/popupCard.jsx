
  import Question from "../data/Question"



  export default function PopupCard({answer,onClose,ifFinish,donequiz,score}){
      return(
          <div className="fixed inset-0 flex items-center justify-center bg-blend-overlay">
        {/* Overlay background (dim effect) */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
          {ifFinish ?(
  <h2 className="text-xl font-bold mb-4"> <span className="text-green-600">{donequiz} your total score is : {score } /{ Question.length} </span></h2>
          ) :
            <h2 className="text-xl font-bold mb-4">Correct ✅ : <span className="text-green-600">{answer} </span></h2>
        }

      
        
          
          <button
            onClick = { onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          >
            Close
          </button>
        </div>
      </div>
      )
  }