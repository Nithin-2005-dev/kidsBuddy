'use client'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const WelcomeMsg = () => {
  const {user}=useUser()
  return (
   <>
    <p className='text-white '>
      {`Hi ${!user?'user': user.username} ,What would you like to talk about today?`}
    </p>
   </>
  )
}

export default WelcomeMsg
