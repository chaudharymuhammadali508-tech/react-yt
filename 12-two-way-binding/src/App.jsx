import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setname] = useState("")
     const change=(e)=>{
         setname(e.target.value)
         
       
     }
  return (
    <div>
       <form onSubmit={(e)=>{
            e.preventDefault();
                alert(`Hello ${name}!`);
            
       }}>
        <input type="text" value={name} onChange={change} placeholder='enter your name'  />
        <button>submit</button>
       </form>
       <p>{name}</p>
    </div>
  )
}

export default App
