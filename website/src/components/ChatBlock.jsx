'use client'
import React from 'react'

const ChatBlock = () => {
  return (
    <>
   <div className='h-[75vh] overflow-auto p-2 text-justify text-white font-extralight my-2 flex justify-end items-end flex-col'>
   {
    [1,2,3,4].map((ind)=>{
        return <div className='w-1/2 bg-slate-700 p-2 m-2 rounded-2xl rounded-e-sm ' key={ind}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sapiente in est aut excepturi, porro, molestias molestiae laboriosam praesentium animi at suscipit assumenda error dignissimos odit facilis? Quam, officia inventore!</div>
    })
   }
   </div>
   <div className='p-3'>
    <input type="text" className='w-full bg-green-950 p-2 text-white rounded-xl' />
    </div>
    </>
  )
}

export default ChatBlock
