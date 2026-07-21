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

// export const App = () => {
  
  //   const submitHandler = (e) => {
    //     e.preventDefault() // 'preventDefault()' method that is part of 'Event interface' and use for "stop" browser default behavior.(browser ke default behavior ko band krta hai).
    
    //     console.log("Hare Krishna")
    //   }
    
    //   return (
      //     <div>
      //       <form onSubmit={(e)=>{
        //         submitHandler(e)
        //       }}>
        //         <input className="px-4px rounded py-3 text-xl m-5 bg-white text-black" type="text" placeholder="Enter the Name"/>
        //         <button className="px-4px py-3 w-50 text-xl text-white bg-emerald-600 rounded">Upload</button>
        //       </form>
        //     </div>
        //   )
        // }
        
        
// Two-way Bainding----------------------------------------------------------------------------------------------------------------------------------------------------------------//
// it's like two-way communication (UI mein input change hua to state bhi update ho jaata hai) and (state change hua to UI apne aap update ho jaata hai).
// export const App = () => {

//   const [getUser, setGetUser] = useState("")

//   const submitHandler = (e) =>{
//     e.preventDefault()
//     console.log(getUser)

//     setGetUser("")
//   }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
          <input value={getUser} 
          onChange={(e)=>{
            setGetUser(e.target.value)
          }} 
          className="px-4px rounded py-3 text-xl m-5 bg-white text-black" type="text" placeholder="Enter the Name"/>
          <button className="px-4px py-3 w-50 text-xl text-white bg-emerald-600 rounded">Upload</button>
      </form>
    </div>
  )
}       
        


export default App