import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client';
import AppRouter from '@providers/AppRouter';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={AppRouter} />
  </React.StrictMode>,
)
