'use client'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
const topics=['Making New Friends','Sharing and Caring','Handling Emotions','Respecting Elders','Kindness and Compliments','Random Topic']
const WelcomeMsg = () => {
  const {user}=useUser()
  return (
   <>
    <p className='text-blue-200 p-2 text-xl'>
      {`Hi ${!user?'user': user.username} ,What would you like to talk about today?`}
    </p>
    <hr className='text-slate-500 m-3'/>
    <div >
    <h2 className='text-2xl p-2 text-white font-black'>Topics to start Conversation</h2>
    <div className='flex flex-col text-center'>
    {
      topics.map((topic,ind)=>{
        return <button key={ind} className='bg-btn-pri m-1 p-2 font-semibold mx-10 rounded-lg cursor-pointer hover:opacity-75' onClick={()=>{

        }}>{topic}</button>
      })
    }
    </div>
    </div>
   </>
  )
}

export default WelcomeMsg
