import { createBrowserRouter } from 'react-router';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Components/Home';
import CounterApp from '../Components/CounterApp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/counterApp',
        element: <CounterApp />,
      },
    ],
  },
]);
