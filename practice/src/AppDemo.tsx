import { useState } from "react"


export const App2 = ()=>{
     const [text,setText] = useState('sdfdsf') ;


     return(
      <>
      <input  value={text} onChange={(e)=>setText(e.target.value)} />
      <h1>{text}</h1>
      </>
     )
}
