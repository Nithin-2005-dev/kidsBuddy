'use client'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { useRef, useState } from 'react'
const ChatBlock = () => {
  const [responses,setResponses]=useState([''])
  console.log(responses)
  const userInput=useRef()
  const {user}=useUser();
  const callChatBot=async()=>{
    const input=userInput.current.value
    const modified=input.split(' ').join('%20');
      try{
        const response=await axios.get(`http://localhost:5000/generate?input=${modified}&session_id=user1`)
        console.log(response.data)
        setResponses([...responses,response.data.response])
        console.log(responses)
      }catch(err){
        console.log(err)
      }
  }
  return (
    <>
   <div className='h-[75vh] overflow-auto p-2 text-justify text-white font-extralight my-2 flex justify-end items-end flex-col'>
   {
    responses.map((res,ind)=>{
        return <div key={ind}>
          {res}
        </div>
    })
   }
   </div>
   <div className='p-3 flex'>
    <input type="text" className='w-full bg-green-950 p-2 text-white rounded-xl' ref={userInput}/>
    <button className='px-4 text-white bg-slate-700 rounded-xl mx-1' onClick={()=>{
      callChatBot()
    }}>send</button>
    </div>
    </>
  )
}

export default ChatBlock
