import React from 'react';

const ArrayMethod = () => {
  const users = [
    { id: 1, name: 'Eistiak', email: 'eistiak@gmail.com', money: 200 },
    { id: 2, name: 'Hanif', email: 'hanif@gmail.com', money: 100 },
    { id: 3, name: 'Imam', email: 'imam@gmail.com', money: 500 },
  ];

  const totalCost = users.reduce((sum, user) => sum + user.money, 0);

  const isRich = users.filter((user) => user.money >= 200);

  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-10">Array Method</h1>
      <div className="mt-5 border border-gray-100 shadow-md flex flex-col justify-center items-center p-5 rounded-2xl w-11/12 mx-auto hover:scale-105 transition duration-500 cursor-pointer hover:bg-red-400 hover:text-white">
        {users.map((user) => (
          <div className="">
            <h2 className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center text-xl font-bold">
              {user.name}
            </h2>
            <p className="text-sm rounded-2xl border p-4 my-2">{user.email}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 border border-gray-100 shadow-md flex flex-col justify-center items-center p-5 rounded-2xl w-11/12 mx-auto hover:scale-105 transition duration-500 cursor-pointer hover:bg-orange-400 hover:text-white">
        {isRich.map((user) => (
          <div className="">
            <h2 className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center text-xl font-bold">
              {user.name}
            </h2>
            <p className="text-sm rounded-2xl border p-4 my-2">{user.email}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 border border-gray-100 shadow-md flex flex-col justify-center items-center p-5 rounded-2xl w-11/12 mx-auto hover:scale-105 transition duration-500 cursor-pointer hover:bg-green-400 hover:text-white">
        {users.map((user) => (
          <div className="">
            {user.name} - ${user.money}
          </div>
        ))}

        <h2>Total Cost : ${totalCost}</h2>
      </div>
    </div>
  );
};

export default ArrayMethod;
