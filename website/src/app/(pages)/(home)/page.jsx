
import MoralsTellingPage from '@/components/EthicsLearning'
import HomeLinks from '@/components/HomeLinks'
import StoryTellingPage from '@/components/StoryTellingPage'
import WelcomeMsg from '@/components/WelcomeMsg'
import Link from 'next/link'
import React from 'react'
const page = () => {
  return (
    <div>
      <WelcomeMsg/>
      <StoryTellingPage/>
      <MoralsTellingPage/>
    </div>
  )
}

export default page
