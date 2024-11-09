import React from 'react';

const ProgressRewards = () => {
  const progress = 60; 
  const rewards = [
    { id: 1, name: 'Gold Badge', description: 'Awarded for 10 completed tasks' },
    { id: 2, name: 'Super Star', description: 'Awarded for 20 completed tasks' },
    { id: 3, name: 'Champion Trophy', description: 'Awarded for 30 completed tasks' },
  ];

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold text-center text-white mb-6">Progress & Rewards</h1>

      {/* Progress Section */}
      <div className="bg-blue-1 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-white">Your Progress</h2>
        <div className="mt-4 h-4 bg-gray-200 rounded-full">
          <div
            className="h-4 bg-yellow-300 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-gray-100">{progress}% completed</p>
      </div>

      {/* Rewards Section */}
      <div className="bg-blue-1 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-100">Rewards</h2>
        <ul className="mt-4 space-y-4">
          {rewards.map((reward) => (
            <li key={reward.id} className="p-4 bg-gray-300 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-700">{reward.name}</h3>
              <p className="text-gray-600">{reward.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgressRewards;
