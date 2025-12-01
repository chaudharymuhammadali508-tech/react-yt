
import React from 'react'

const App = () => {
  const submitHandler =(e)=>{
    console.log(e)
    console.log("form submit");
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
          <input type="text" placeholder='Enter Your Name' />
          <button >Submit</button>
      </form>
    </div>
  )
}

export default App
