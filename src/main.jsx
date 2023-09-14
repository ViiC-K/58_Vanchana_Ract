import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";

import './index.css'

import App from './App.jsx'
import Owner from './Component/Owner.jsx';
import HomeAdmin from './Component/HomeAdmin.jsx';
import HomeUser from './Component/HomeUser.jsx';
import Data from './Component/Data';


const router = createBrowserRouter([ 
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Owner',
    element: <Owner />
  },
  {
    path: '/HomeAdmin',
    element: <HomeAdmin />
  },
  {
    path: '/HomeUser',
    element: <HomeUser/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Data >
    <RouterProvider router={router} />
  </Data>
 
  
  
 )
