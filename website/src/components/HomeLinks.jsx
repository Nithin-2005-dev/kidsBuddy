import { SignInButton, SignUpButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const HomeLinks = () => {
  return (
    <div className='m-2'>
      <Link href={'/chat-page'} className='bg-btn-pri p-2 rounded-lg '>Start Conversation</Link>
    <SignInButton/>
    <SignUpButton/>
    </div>
  )
}

export default HomeLinks
