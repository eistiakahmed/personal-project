import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const MainLayouts = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;