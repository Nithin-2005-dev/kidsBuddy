'use client'
import React, { useState } from 'react';

function ConversationInsights() {
  const [insights, setInsights] = useState({
    totalConversations: 120,
    averageLength: 15,
    sentimentAnalysis: {
      positive: 60,
      neutral: 30,
      negative: 10,
    },
    mostCommonTopics: ["Social Skills", "Screen Time Management", "Emotional Awareness", "Problem Solving"],
    engagementLevels: {
      high: 40,
      medium: 35,
      low: 45,
    },
  });

  return (
    <div className="p-8 mx-auto text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Conversation Insights</h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Conversation Statistics</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-400">Total Conversations</span>
            <span className="text-xl font-semibold text-yellow-300">{insights.totalConversations}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-400">Average Length (messages)</span>
            <span className="text-xl font-semibold text-yellow-300">{insights.averageLength}</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Sentiment Analysis</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <div className="text-sm font-medium text-gray-400">Positive</div>
            <div className="w-full bg-green-200 rounded-full h-2.5">
              <div
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: `${insights.sentimentAnalysis.positive}%` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-sm font-medium text-gray-400">Neutral</div>
            <div className="w-full bg-yellow-200 rounded-full h-2.5">
              <div
                className="bg-yellow-600 h-2.5 rounded-full"
                style={{ width: `${insights.sentimentAnalysis.neutral}%` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-sm font-medium text-gray-400">Negative</div>
            <div className="w-full bg-red-200 rounded-full h-2.5">
              <div
                className="bg-red-600 h-2.5 rounded-full"
                style={{ width: `${insights.sentimentAnalysis.negative}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Most Common Topics</h3>
        <ul className="list-disc pl-5">
          {insights.mostCommonTopics.map((topic, index) => (
            <li key={index} className="text-gray-400">{topic}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Engagement Levels</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <div className="text-sm font-medium text-gray-400">High Engagement</div>
            <div className="w-full bg-blue-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${insights.engagementLevels.high}%` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-sm font-medium text-gray-400">Medium Engagement</div>
            <div className="w-full bg-orange-200 rounded-full h-2.5">
              <div
                className="bg-orange-600 h-2.5 rounded-full"
                style={{ width: `${insights.engagementLevels.medium}%` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-sm font-medium text-gray-400">Low Engagement</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-gray-600 h-2.5 rounded-full"
                style={{ width: `${insights.engagementLevels.low}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversationInsights;
