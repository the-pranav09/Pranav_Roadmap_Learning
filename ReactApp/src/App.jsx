import { useState } from "react";


// export const App = () => {

//   let a = "gamer"
//   let b = "Shreeman Legend"

//   function tag(){
//     console.log("Hello Founding Member Of TEAM APEX GAMING"); // change on console not on screen.
//   }
//   return (
//     <div>
//     <h1>Hello {a} {b}</h1>
//     <button onClick={tag}>Mode Change</button>
//     </div>
//   )
// }


// Create Counter using hook.
// export const App = () => {
//   const [a, setA] = useState(0) // we create the variable using 'useState' hook 'a' is readable element hai & 'setA' writeable element hai jo hum value chnage karte time use krte hai & 'useState(value)' yaha value add krte hai.

//   return (
//     <div>
//       <h1>The Number is {a} </h1>
//       <button onClick={()=>setA(a+10)}>Increment</button>
//       <button onClick={()=>setA(a-10)}>Decrement</button>
//     </div>
//   )
// }


// Form Handling ----------------------------------------------------------------------------------------------------------------------------------------------------------------//

export const App = () => {
  return (
    <div>
      <form action="">
        <input className="px-4px py-3" type="text" placeholder="Enter the Name"/>
        <button className="px-4px py-3 text-xl font-monospace">Upload</button>
      </form>
    </div>
  )
}



export default App