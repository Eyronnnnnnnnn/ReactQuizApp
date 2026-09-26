export default function Button({label,onClick,className}){
 
return(
   <button
     className={`bg-amber-950 text-white p-3 rounded-2xl 
                 cursor-pointer transition-all duration-200 
                 hover:bg-amber-800 hover:scale-[1.02] 
                 hover:shadow-lg active:scale-[0.98] ${className}`}
   onClick={onClick}
   
   >
    {label}
   </button>
)
}