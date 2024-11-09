import ConversationInsights from '@/components/ConversationInsights'
import ParentalControlDashboard from '@/components/ParentalControlDashboard'
import ProgressAndSkills from '@/components/ParentialProgress'
import ParentResources from '@/components/ParentResources'
import ScreenTimeManagement from '@/components/ScreenTimeManagement'
import React from 'react'

const page = () => {
  return (
    <div>
      <ScreenTimeManagement></ScreenTimeManagement>
      <ProgressAndSkills/>
      <ConversationInsights/>
      <ParentalControlDashboard/>
      <ParentResources/>
    </div>
  )
}

export default page
