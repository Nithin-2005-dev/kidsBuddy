'use client'
import React, { useState } from 'react';

function ParentalControlDashboard() {
  const [screenTime, setScreenTime] = useState(120);  // Total screen time in minutes
  const [usageLimit, setUsageLimit] = useState(180);  // Usage limit in minutes
  const [contentRestrictions, setContentRestrictions] = useState({
    games: true,
    socialMedia: false,
    educational: true,
  });

  const handleTimeChange = (event) => {
    setScreenTime(event.target.value);
  };

  const handleLimitChange = (event) => {
    setUsageLimit(event.target.value);
  };

  const handleRestrictionChange = (event) => {
    const { name, checked } = event.target;
    setContentRestrictions({
      ...contentRestrictions,
      [name]: checked,
    });
  };

  return (
    <div className="p-8 mx-auto text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Parental Control Dashboard</h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Screen Time Tracking</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-medium">Total Screen Time</div>
          <input
            type="number"
            value={screenTime}
            onChange={handleTimeChange}
            className="w-24 px-3 py-1 text-center border rounded text-black"
          />
          <span className="text-sm">minutes</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Usage Limit</div>
          <input
            type="number"
            value={usageLimit}
            onChange={handleLimitChange}
            className="w-24 px-3 py-1 text-center border rounded text-black"
          />
          <span className="text-sm">minutes</span>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Content Restrictions</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="games"
              checked={contentRestrictions.games}
              onChange={handleRestrictionChange}
              className="mr-2"
            />
            <span className="text-sm">Games</span>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="socialMedia"
              checked={contentRestrictions.socialMedia}
              onChange={handleRestrictionChange}
              className="mr-2"
            />
            <span className="text-sm">Social Media</span>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="educational"
              checked={contentRestrictions.educational}
              onChange={handleRestrictionChange}
              className="mr-2"
            />
            <span className="text-sm">Educational Content</span>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-lg"
          onClick={() => alert("Changes saved successfully!")}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default ParentalControlDashboard;
