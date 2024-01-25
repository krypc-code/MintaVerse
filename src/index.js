import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Nft from './pages/Nft';
import SavedNfts from './pages/SavedNfts';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{
      path:"/",
      element: <Nft />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/nft",
      element: <Nft/>
    },
    {
      path:"/saved-nfts",
      element: <SavedNfts />
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
