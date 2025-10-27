import React, { useState } from 'react';

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const handleRemoveTask = (i) => {
    const Remove = tasks.filter((_, index) => index !== i);
    setTasks(Remove);
  };

  return (
    <div className="shadow-md w-[500px] mx-auto  p-5 mt-10 rounded-2xl border-2 border-gray-100 ">
      <h1 className="font-bold text-2xl py-5 text-center">
        My Personal Todo List
      </h1>
      <div className="flex justify-center items-center relative">
        <input
          type="text"
          placeholder="Add Your Daily Task"
          className="p-2 px-10 border shadow-md border-gray-100 border-r-0 rounded-full"
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          onClick={addTask}
          className=" absolute left-73 py-2.5 px-5 bg-green-400 text-white font-bold rounded-full"
        >
          Task
        </button>
      </div>

      <h1 className="font-bold text-2xl mt-8 mb-4 text-center">Task list</h1>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-400 italic">
          No tasks yet. Add something!
        </p>
      ) : (
        <div className="">
          {tasks.map((task, index) => {
            return (
              <div
                key={index}
                className="flex font-bold border border-gray-100 rounded-full shadow-md py-4 px-4 my-4 justify-between items-center"
              >
                <p className="">{task}</p>

                <button
                  onClick={() => handleRemoveTask(index)}
                  className="btn rounded-full bg-red-600 text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ToDoApp;
