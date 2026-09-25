import { useState } from 'react'
import Header from './components/Header'
import QuestionCard from './components/QuestionCard'
import Question from './data/Question'


function App() {
const [currentIndex , setcurrentIndex] = useState(0)
const [score , setcurrentScore] = useState(0);

const handleAnswer = (choice)=>{

  const userChoice = choice.trim().toLowerCase()
  const CorrectAnswer = Question[currentIndex].answer.trim().toLowerCase();

  if(userChoice === CorrectAnswer){
    alert("correct");
    setcurrentScore(score + 1);
   
  }else{
    alert("wrong")
  }

 if (currentIndex < Question.length - 1) {
    setcurrentIndex(prevIndex => prevIndex + 1)
  } else {
    alert(`Quiz Finished! Your score: ${score + 1}/${Question.length}`)
  }
  
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
