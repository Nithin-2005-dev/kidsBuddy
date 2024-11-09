'use client'
import React, { useState } from 'react';

function ProgressAndSkills() {
  const [skills, setSkills] = useState([
    { name: "Communication", progress: 80 },
    { name: "Emotional Awareness", progress: 65 },
    { name: "Problem Solving", progress: 50 },
    { name: "Social Interaction", progress: 90 },
  ]);

  return (
    <div className="p-8 w-full mx-auto text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Progress & Skill Development</h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Skill Progress</h3>
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-white">{skill.name}</span>
              <span className="text-sm font-medium text-white">{skill.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-yellow-400 h-2.5 rounded-full"
                style={{ width: `${skill.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Achievements</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Completed Communication exercises with 80% accuracy.</li>
          <li>Improved Problem Solving speed by 20%.</li>
          <li>Achieved 5 new milestones in Emotional Awareness.</li>
          <li>Enhanced Social Interaction skills to 90% proficiency.</li>
        </ul>
      </div>
    </div>
  );
}

export default ProgressAndSkills;
