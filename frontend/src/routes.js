// routes.js
import React from 'react';
import Position from './pages/Position'; 
import Report from './pages/Report'; 
import Testdata from './pages/Testdata'; 
import Vacancy from './pages/Vacancy'; 
import AssignEmployeeToPosition  from './function/assignEmployeeToPosition'; 
import EditInterview from './function/EditInterview';
import EditPosition from './function/EditPosition';
import EditTestdata from './function/EditTestdata';
import EditVacancy from './function/EditVacancy';
import MessageTest from './function/MessageTest';
import SendMessage from './function/SendMessage';
import ViewResume from './function/ViewResume';
import ViewVacancy from './function/ViewVacancy';
import Home from './pages/Homepage'; 
import Interview from './pages/Interview'; 
import Profile from './pages/Profile'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const routes = [
  { path: '/Homepage', element: <Home /> },
  { path: '/Vacancy', element: <Vacancy /> },
  { path: '/Interview', element: <Interview /> },
  { path: '/Position', element: <Position /> },
  { path: '/Report', element: <Report /> },
  { path: '/Testdata', element: <Testdata /> },
  { path: '/Profile', element: <Profile /> },
  { path: '/ViewVacancy/:id', element: <ViewVacancy /> },
  { path: '/ResumeDetail/:id', element: <ViewResume /> },
  { path: '/Vacancy/:id', element: <EditVacancy /> },
  { path: '/Testdata/:id', element: <EditTestdata /> },
  { path: '/Position/:id', element: <EditPosition /> },
  { path: '/Assign/:id', element: <AssignEmployeeToPosition /> },
  { path: '/MessageTest', element: <MessageTest /> },
  { path: '/Interview/:id', element: <EditInterview /> },
  { path: '/SendMessage', element: <SendMessage /> },
];

export default routes;
