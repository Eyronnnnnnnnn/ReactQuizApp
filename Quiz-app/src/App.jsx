  import { useState } from 'react'
  import Header from './components/Header'
  import QuestionCard from './components/QuestionCard'
  import Question from './data/Question'
  import PopupCard  from './components/popupCard'



  function App() {
  const [currentIndex , setcurrentIndex] = useState(0)
  const [score , setcurrentScore] = useState(0);
  const [showpopUp , setshowpopUp] = useState(false);



  const donequiz = [
    {qdone : "you are now done to your quiz congrats"}
  ]

  const handleAnswer = (choice)=>{

    const userChoice = choice.trim().toLowerCase()
    const CorrectAnswer = Question[currentIndex].answer.trim().toLowerCase();

    if(userChoice === CorrectAnswer){
      setcurrentScore(score + 1);
      setshowpopUp(true);
    
    }else{
      alert("wrong")
    }

  if (currentIndex < Question.length - 1) {
      setcurrentIndex(prevIndex => prevIndex + 1)
    } else {
      setshowpopUp(true);
      setcurrentIndex(0);
    
    }
    
  }

  const restartQuiz = ()=>{
    setcurrentIndex(0);
  
  }

    return (
    <div>
        <Header />

      <div className='w-full h-140 flex justify-center items-center '>
      <QuestionCard
      question={Question[currentIndex].question}
      choices={Question[currentIndex].choices}
      handleAnswer = {handleAnswer}
      restartQuiz = {restartQuiz}
      />
      </div>
      { showpopUp && (
        <PopupCard
        answer={Question[currentIndex].answer}
        onClose={()=>setshowpopUp(false)}
        donequiz = {donequiz[0].qdone}
        ifFinish = {currentIndex === Question.length - 1}
        score = {score}
      
        />
      )}
    </div>
      
    )
  }

  export default App
