import React, { useEffect, useState } from 'react';

const ReactHookDD = () => {
  
  const[text, setText]= useState(false)
  const[chat, setChat] = useState("Typing......")


  useEffect(()=>{ 
    console.log("Chatting Start...")
    setTimeout(()=> { 
      setChat(" If you want to achieve me then Code everyday 8hrs. Build your logic and debugging skill improve. And try to learn new thing EveryDay")
    }, 3000)
  },[chat])


  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl text-center font-bold mt-15 border-b-2 pb-2">
        useState Hook
      </h1>

      <div className=" mt-8 text-center font-bold text-2xl">
        {text ? (
          <p>Be come a Font-end Developer</p>
        ) : (
          <p>Inshallah Full Stack Developer</p>
        )}
        <button
          onClick={() => setText(!text)}
          className="bg-gray-200 py-3 px-10 mt-3 rounded-xl text-sm cursor-pointer hover:scale-105 transition hover:bg-green-500 hover:text-white"
        >
          Hand Work
        </button>
      </div>

      <div>
        <h1 className="text-3xl text-center font-bold mt-15 border-b-2 pb-2">
          useEffect Hook
        </h1>

        <div>
          <p>
            <span className="font-bold">Intern:</span> Work hard if you want
            this and complete this task with full dedication.
          </p>
          <p>
            <span className="font-bold">RAJ:</span> Definitely I will try my
            best to always sir. Now I'm just kidding with React
          </p>
          <p>
            <span className="font-bold">Intern:</span>
            {chat}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReactHookDD;