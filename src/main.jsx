import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx';
import Apply from './pages/Apply.jsx';
import Privacy from './pages/DataPrivacyNotice.jsx';
import Create from './pages/Create.jsx';
import Studentdb from './pages/Studentdb.jsx';
import Courses from "./StudentdbPages/Courses.jsx";
import Notifications from "./StudentdbPages/Notifications.jsx";
import Settings from "./StudentdbPages/Settings.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/apply",
    element: <Apply />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/studentdb",
    element: <Studentdb />,
    children: [
      {
        path: "courses",
        element: <Courses />, // Component to render when /studentdb/courses is visited
      },
      {
        path: "notifications",
        element: <Notifications />, // Component for /studentdb/notifications
      },
      {
        path: "settings",
        element: <Settings />, // Component for /studentdb/settings
      },
    ],
  },
]);

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
  
