'use client'
import React, { useRef, useState } from 'react';
import axios from 'axios';
import { askApi } from '@/app/(api)/genAi';
const StoryTellingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [story, setStory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
    const customStory=useRef()
  const categories = ['Adventure', 'Friendship', 'Animals', 'Fairy Tales'];

  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
    setIsLoading(true);
    setError(null);

    try {
        const response = await askApi(`tell a story on category ${category} for clildren`);
        console.log(response)
        setStory(response)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching stories:", error);
        return null;
      }
    };
  return (
    <div className="p-8 text-white min-h-screen w-full">
    <hr className='my-2'></hr>
      <h1 className="text-3xl font-bold mb-8">Choose a Story Category</h1>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600"
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        ))}
        <div className='flex flex-col justify-center w-full gap-2 '> 
        <input type="text" className='w-[80vw] p-2 text-black rounded-lg' placeholder='enter custom category ' ref={customStory}/>
        <button className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600" onClick={() => {handleCategorySelect(customStory.current.value)
        customStory.current.value=''
        }
        }>
        Get Story
        </button>
        </div>
       
      </div>

      {isLoading ? (
        <div className="text-center text-xl">Loading story...</div>
      ) : error ? (
        <div className="text-center text-xl text-red-600">{error}</div>
      ) : story ? (
        <div className="bg-opacity-80 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{selectedCategory} Story</h2>
          <p className="text-lg">{story}</p>
        </div>
      ) : (
        <div className="text-center text-lg">Select a category to get started!</div>
      )}
    </div>
  );
};

export default StoryTellingPage;
