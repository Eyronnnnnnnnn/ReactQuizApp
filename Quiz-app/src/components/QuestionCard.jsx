   export default function QuestionCard({question,choices,handleAnswer}){
   return (
      <div className="bg-blue-600 w-200 h-99 rounded-2xl p-10">
         <h1
         className="text-white text-2xl font-bold mb-6"
         >{question}</h1>

         <div className="flex flex-col gap-3">
         {choices.map((choice,i)=>(
            <button
            className=" bg-amber-950 text-white p-3 rounded-2xl
             cursor-pointer
              transition-all
              duration-200
              hover:bg-amber-800
              hover:scale-[1.02]
              hover:shadow-lg
              active:scale-[0.98]   
            "
            onClick={()=> handleAnswer(choice)}
            key={i}>{choice}
            </button>
         ))}
         

         </div>
       
      </div>
   )
   }