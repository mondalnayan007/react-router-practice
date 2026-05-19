import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import RootLayout from './components/Layouts/RootLayout';
import Home from './components/Home/Home';
import Properties from './components/Properties/Properties';


const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayout,
    children : [
      {
        index : true,
        Component: Home
      },
      {
        path : 'properties',
        Component : Properties
      }
    ]
  },
  {
    path: "/about",
    element: <div>Hello I am from about</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
