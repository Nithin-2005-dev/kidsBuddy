
import MoralsTellingPage from '@/components/EthicsLearning'
import HomeLinks from '@/components/HomeLinks'
import ProblemSolvingBlock from '@/components/ProblemSolvingBlock'
import StoryTellingPage from '@/components/StoryTellingPage'
import WelcomeMsg from '@/components/WelcomeMsg'
import Link from 'next/link'
import { Processor } from 'postcss'
import React from 'react'
const page = () => {
  return (
    <div>
      <WelcomeMsg/>
      <StoryTellingPage/>
      <MoralsTellingPage/>
      <ProblemSolvingBlock/>
    </div>
  )
}

export default page
