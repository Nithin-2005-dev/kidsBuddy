'use client'
import React, { useRef, useState } from 'react';
import axios from 'axios';
import { askApi } from '@/app/(api)/genAi';
const ProblemSolvingBlock = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [story, setStory] = useState(null);
  const [Answer,setAnswer]=useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
    const customStory=useRef()
    const languageRef=useRef()
    const answerRef=useRef()
  const categories = ['Maths', 'Science', 'Grammar', 'Social'];
  const [isCorrect,setIsCorrect]=useState(false)
  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
    setIsLoading(true);
    setError(null);

    try {
        const response = await askApi(`give a question on category ${category} for children in ${languageRef.current.value==''?'English':languageRef.current.value} language with 4 options and mention answer option at last of the text`);
        const newRes=response.split('**')
        const answer=response.split('Answer')
        setAnswer(answer[1])
        setStory(answer[0])
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching stories:", error);
        return null;
      }
    };
  return (
    <div className="p-8 text-white min-h-screen w-full">
    <hr className='my-2'></hr>
      <h1 className="text-3xl font-bold mb-8">Choose a Question Category</h1>
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
        <input type="text" className='w-[80vw] p-2 text-black rounded-lg' placeholder='enter language (optional) ' ref={languageRef}/>
        <button className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600" onClick={() => {handleCategorySelect(customStory.current.value)
        customStory.current.value=''
        }
        }>
        Get Question
        </button>
        </div>
       
      </div>

      {isLoading ? (
        <div className="text-center text-xl">Loading Question...</div>
      ) : error ? (
        <div className="text-center text-xl text-red-600">{error}</div>
      ) : story ? (
        <div className="bg-opacity-80 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{selectedCategory} Question</h2>
          <p className="text-lg">{story}</p>
          <p className="text-lg text-yellow-400 underline font-extrabold my-3">Choose Option</p>

          <select name="" id="" className='text-black p-1 px-4 bg-blue-2' ref={answerRef}>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
          </select>
          <button className='bg-green-500 p-1 mx-2 rounded-lg px-2' onClick={()=>{
            if(Answer?.includes(answerRef.current.value+')')){
              setIsCorrect(true)
            }else{
              setIsCorrect(false)
            }
        languageRef.current.value=''
          }
          }>Submit</button>
          {isCorrect?<p >Correct Answer</p>:<p>Incorrect Answer</p>}
        </div>
      ) : (
        <div className="text-center text-lg">Select a category to get started!</div>
      )}
    </div>
  );
};

export default ProblemSolvingBlock;
