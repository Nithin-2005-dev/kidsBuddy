'use client'
import React, { useState } from 'react';

function ScreenTimeManagement() {
  const [dailyLimit, setDailyLimit] = useState(60);
  const [screenTimeData, setScreenTimeData] = useState({
    Monday: 50,
    Tuesday: 70,
    Wednesday: 40,
    Thursday: 55,
    Friday: 65,
    Saturday: 80,
    Sunday: 45,
  });

  return (
    <div className="p-8 w-full mx-auto rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">Screen Time Management</h2>
      <div className="mb-6">
        <label htmlFor="dailyLimit" className="block text-sm font-medium text-gray-100 mb-2">
          Set Daily Screen Time Limit (minutes)
        </label>
        <input
          id="dailyLimit"
          type="number"
          value={dailyLimit}
          onChange={(e) => setDailyLimit(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-blue-2"
        />
      </div>

      <h3 className="text-lg font-semibold mb-4 text-white">Weekly Screen Time Summary</h3>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(screenTimeData).map(([day, time]) => (
          <div key={day} className="p-4 border rounded-md flex justify-between items-center">
            <span className="font-medium text-gray-100">{day}</span>
            <span className={`font-bold ${time > dailyLimit ? 'text-red-500' : 'text-green-500'}`}>
              {time} min
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScreenTimeManagement;
