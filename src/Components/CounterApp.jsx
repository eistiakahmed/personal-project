import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    const plus = count + 1;
    setCount(plus);
  };

  const handleMinus = () => {
    if (count > 0) {
      const minus = count - 1;
      setCount(minus);
    }
  };

  return (
    <div className=" shadow-md w-[500px] mx-auto  p-5 mt-10 rounded-2xl bg-orange-400">
      <title>Counter Apps</title>
      <h1 className='font-bold text-2xl my-3 text-center text-white'>Counter Apps</h1>
      <div className="shadow-md border-2 border-white p-5 rounded-2xl">
        <h3 className="font-bold text-4xl">{count}</h3>
      </div>
      <div className="mt-10 flex gap-5 justify-center">
        <div onClick={handlePlus} className="btn w-[50%] bg-green-500 shadow-none text-white ">
          <h3 className="text-2xl">+</h3>
        </div>
        <div onClick={handleMinus} className="btn w-[50%] bg-red-500 border-0 shadow-none text-white">
          <h3 className="text-2xl">-</h3>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
