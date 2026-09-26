import Button from "./Button";
export default function QuestionCard({ question, choices, handleAnswer }) {
  return (
    <div className="bg-blue-600 w-200 h-99 rounded-2xl p-10">
      <h1 className="text-white text-2xl font-bold mb-6">{question}</h1>

      <div className="flex flex-col gap-3">
        {choices.map((choice, i) => (
          <Button label={choice} onClick={() => handleAnswer(choice)} key={i}>
            {choice}
          </Button>
        ))}
      </div>

      <div className=" w-full flex flex-col pt-3 gap-2 w-40 items-center justify-center gap-3">
         <div>
                <Button label={"Next Question"} 
        className= " bg-green-600 hover:bg-green-800" 
        ></Button>
         <Button label={"Remove"}
         className="bg-red-700 hover:bg-red-950" 
         ></Button>
         </div>
     
      </div>
    </div>
  );
}
