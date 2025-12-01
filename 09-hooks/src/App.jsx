import React, { useState } from 'react'

const App = () => {
     const [count, setCount] = useState(0)
     
        function increase(){
          setCount(count+1)
        }
        function decrease(){
           setCount(count-1)
        } 
        function increaseBy5(){
          setCount(count+5)
        }
         function decreaseBy5(){
          setCount(count-5)
        }
  return (
    <div className='parent'>
          <div className='counter'>
          <h1>{count}</h1>
        <button onClick={increase}>increae</button>
          <button onClick={decrease} >decrease</button>
          <button onClick={increaseBy5} >increae by 5</button>
           <button onClick={decreaseBy5} >decrease by 5</button>
           </div>
    </div>
  )
}

export default App
