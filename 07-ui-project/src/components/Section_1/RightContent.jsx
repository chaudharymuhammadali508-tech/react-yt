import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
 
  return (
    <div id='right' className='h-full w-3/4 p-6 flex overflow-x-auto  flex-nowrap gap-5'>
           {props.users.map(function(elem,idx){
            return <RightCard key={idx} id={idx}  img={elem.img} color={elem.color} tag={elem.tag}/>
           })}
    </div>
  )
}

export default RightContent
