import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { } from "./routes/Root";
import Store from "./routes/Store"
import './styles/index.css'
import ErrorPage from './error-page';
import Home from "./routes/Home"
import Champion from './routes/Champion';
import './styles/animations.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/store/:champ",
        element: <Champion />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
