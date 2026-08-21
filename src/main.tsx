import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';  
import './index.css';
// import App from './App';
import { router } from "./router/router"

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontró el elemento root para montar la app.');
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
