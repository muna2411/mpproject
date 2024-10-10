import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Accounting from './components/Accounting';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Reports from './components/Reports';
import Profile from './components/Profile';


const router = createBrowserRouter([
  {
    path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        
      ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children:[
     
      {
        path:"home",
        element:<Home></Home>
      },
      {
        path:"accounting",
        element:<Accounting></Accounting>
      },
      {
        path:"reports",
        element:<Reports></Reports>
      },
      {
        path:"profile",
        element:<Profile></Profile>
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
