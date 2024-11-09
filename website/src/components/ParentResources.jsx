'use client'
import React from 'react';

const ParentResources = () => {
  return (
    <div className="p-8 mx-auto  rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-6">Resources & Tips for Parents</h2>

      <p className="text-sm mb-8">
        Explore expert-backed advice and practical tips to help you manage your child's screen time and encourage healthy habits in the digital world.
      </p>

      <div className="space-y-8">
        <div className=" p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Screen Time Management</h3>
          <p className="text-sm mb-4">Learn the best practices for managing your child's screen time effectively, including recommended limits by age and tips for balancing screen use with physical activity.</p>
          <ul className="list-disc pl-6">
            <li>Set daily limits based on your child's age.</li>
            <li>Encourage breaks between long screen sessions.</li>
            <li>Use apps that monitor and limit screen time usage.</li>
          </ul>
        </div>

        <div className=" p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Social & Emotional Development</h3>
          <p className="text-sm mb-4">Help your child develop empathy, emotional intelligence, and healthy social skills, even in a digital world.</p>
          <ul className="list-disc pl-6">
            <li>Engage in conversations about feelings and empathy.</li>
            <li>Encourage playdates or group activities offline.</li>
            <li>Teach conflict resolution skills with real-life examples.</li>
          </ul>
        </div>

        <div className=" p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Health & Well-being</h3>
          <p className="text-sm mb-4">Maintaining a healthy balance between screen time and physical activity is crucial for your child's well-being.</p>
          <ul className="list-disc pl-6">
            <li>Promote outdoor play or sports alongside screen activities.</li>
            <li>Ensure your child takes regular breaks to prevent eye strain.</li>
            <li>Monitor sleep patterns and make sure screens are away before bedtime.</li>
          </ul>
        </div>

        <div className=" p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Educational Content & Resources</h3>
          <p className="text-sm mb-4">Discover age-appropriate educational apps and tools to boost your child's learning while using screens responsibly.</p>
          <ul className="list-disc pl-6">
            <li>Explore interactive learning apps for math, reading, and more.</li>
            <li>Use educational YouTube channels designed for children.</li>
            <li>Follow expert advice on how to make screen time educational without overloading.</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg">
          Download Parenting Guide
        </button>
      </div>
    </div>
  );
}

export default ParentResources;
