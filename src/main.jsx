import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs.jsx';
import NotFoundPage from './pages/NotFoundPage';
import Packages from './pages/Packages/Packages.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/packages',
    element: <Packages />,
  },
  {
    path: '/about',
    element: <AboutUs />,
  },
  {
    path: '/contactus',
    element: <ContactUs />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
