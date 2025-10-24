import React from 'react'
import Section1 from './components/Section_1/Section1'

const App = () => {
   const users =[
       {
        img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
          color:"royalblue",
        intro:'',
        tag:'Satisfied'

       },
       {
           img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
           color:"lightseagreen",
        intro:'',
        tag:'Underserved'
       },
       {
         img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
         color:"orange"
         ,
        intro:'',
        tag:'Underbanked'
       },
        {
         img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974',
         color:"pink"
         ,
        intro:'',
        tag:'UnderWear'
       },
             {
         img:'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
         color:"black",
        intro:'',
        tag:'Average'
       }
   ]
   
  return (
    <div className=''>
      <Section1 users={users}/>
    </div>
  )
}

export default App
