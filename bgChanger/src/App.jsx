import { useState } from "react";


function App() {
  const [color,setColor] = useState("olive");

  const handleColorChange=(newColor)=>{
  setColor(newColor);
  };

  return (
    <>
  <div className="w-screen h-screen duration-200  " style={{backgroundColor: color}}> </div>
  <div className="fixed bottom-4 left-0 right-0 flex flex-wrap justify-center gap-4 p-4 bg-opacity-70 bg-white rounded-full">
 <button className="outline-none px-4 py-4  rounded-full " style={{backgroundColor:"red"}} onClick={()=>handleColorChange("red")}>Red</button>  
 <button className="outline-none px-4 py-4  rounded-full " style={{backgroundColor:"green"}} onClick={()=> handleColorChange("green")}>Green</button>  
 <button className="outline-none px-4 py-4  rounded-full" style={{backgroundColor:"blue"}} onClick={()=> handleColorChange("blue")}>Blue</button>  
 <button className="outline-none px-4 py-4  rounded-full" style={{backgroundColor:"olive"}} onClick={()=> handleColorChange("olive")}>Olive</button>  
 <button className="outline-none px-4 py-4  rounded-full" style={{backgroundColor:"grey"}} onClick={()=> handleColorChange("grey")}>Grey</button> 
 <button className="outline-none px-4 py-4  rounded-full" style={{backgroundColor:"yellow"}} onClick={()=> handleColorChange("yellow")}>yellow</button>  
 <button className="outline-none px-4 py-4  rounded-full" style={{backgroundColor:"pink"}} onClick={()=> handleColorChange("pink")}>Pink</button>  
 <button className="outline-none px-4 py-4  rounded-full text-white" style={{backgroundColor:"purple"}} onClick={()=> handleColorChange("purple")}>Purple</button>  
 <button className="outline-none px-4 py-4  rounded-full" style={{backgroundColor:"lavender"}} onClick={()=> handleColorChange("lavender")}>Lavender</button>  
 <button className="outline-none px-4 py-4  rounded-full" style={{backgroundColor:"white"}} onClick={()=> handleColorChange("white")}>White</button>
 <button className="outline-none px-4 py-4  rounded-full text-white" style={{backgroundColor:"black"}} onClick={()=> handleColorChange("black")}>Black</button>     
  
</div>
  </>

)
}

export default App
