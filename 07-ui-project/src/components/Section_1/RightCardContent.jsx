import React from 'react'
import { MoveRight } from 'lucide-react';
const RightCardContent = (props) => {
  return (
    <div className='h-full w-full absolute top-0 left-0  p-8 flex flex-col justify-between'>
                   <h1 className='size-10 bg-white text-black rounded-full flex justify-center items-center font-bold text-2xl'>{props.id+1}</h1>
                   <div className='text-white'>
                       <p className=' text-shadow-2xs mb-14 text-xl leading-relaxed'>Prime customers,that have access to bank credit and are satisfied with the current product</p>
                       <div className='flex  justify-between '>
                           <button style={{backgroundColor:props.color}} className='  bg-blue-600 py-2 px-8 rounded-full font-medium'>{props.tag}</button>
                            <button style={{backgroundColor:props.color}}  className=' bg-blue-600 py-2 px-3 rounded-full font-medium'> <MoveRight /></button>
                       </div>
                   </div>
               </div>
  )
}

export default RightCardContent
