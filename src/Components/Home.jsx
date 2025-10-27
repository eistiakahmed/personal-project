import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-center mt-24 mb-5">
        {' '}
        Remove AI addiction from my useless Brain{' '}
      </h1>
      <h1 className="font-bold text-3xl text-center my-5">
        {' '}
        Apps
      </h1>
      <div className='border-2 border-amber-500 p-3 rounded-2xl'>
        <img
          src="https://i.ibb.co.com/WN5rtWsN/Screenshot-2025-10-26-235539.png"
          alt="counter apps"
          className='w-[300px] '
        />
        <Link to="/counterApp">
          <button className="btn mt-2">Counter App</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;