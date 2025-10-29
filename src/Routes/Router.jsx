import { createBrowserRouter } from 'react-router';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Components/Home';
import CounterApp from '../Components/CounterApp';
import ToDoApp from '../Components/ToDoApp';
import ArrayMethod from '../Components/ArrayMethod';
import ReactHookDD from '../Components/ReactHookDD';

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
      {
        path: "/todoApp",
        element: <ToDoApp />
      },
      {
        path: "/arrayMethod",
        element: <ArrayMethod />
      },
      {
        path: "/reactDeepDrive",
        element: <ReactHookDD />
      }
    ],
  },
]);
