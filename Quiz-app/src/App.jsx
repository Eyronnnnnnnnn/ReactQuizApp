import { useState } from 'react'
import Header from './components/Header'
import QuestionCard from './components/QuestionCard'
import Question from './data/Question'


function App() {
const [currentIndex , setcurrentIndex] = useState(0)
const [score , setcurrentScore] = useState(0);

const handleAnswer = (choice)=>{

  const us

  if(choice === Question[currentIndex].answer){
    alert("correct");
   
  }else{
    alert("wrong")
  }

   if (currentIndex < Question.length - 1) {
      setcurrentIndex(prevIndex => prevIndex + 1)
    } else {
      // end of quiz
      alert(`Quiz Finished! Your score: ${score + 1}/${Question.length}`)
    }

   setcurrentIndex( index=> index + 1);
}

  return (
   <div>
      <Header />

    <div className='w-full h-140 flex justify-center items-center '>
    <QuestionCard
     question={Question[currentIndex].question}
     choices={Question[currentIndex].choices}
     handleAnswer = {handleAnswer}
    />
    </div>
   </div>
    
  )
}

export default App
