import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
       < Card user="Ali" age={24} img="https://plus.unsplash.com/premium_photo-1752159592012-4ba06ccec624?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932"/>
      
        < Card user="Akbar" age={26} img="https://plus.unsplash.com/premium_photo-1736544095568-701023fee17c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" />
        <Card user="Amir" age={25} img="https://images.unsplash.com/photo-1759549567944-bb5923888826?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600" />
    </div>
    
  )
}

export default App
