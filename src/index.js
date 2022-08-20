import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/Home/Home';
import Login from './Components/LogIn/Login';
import Student_D from './Components/Student_D/Student_D';
import Teacher_D from './Components/Teacher_D/Teacher_D';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

const wrapper = (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
      		<Route path="/student" element={<Student_D />} />
      		<Route path="/teacher" element={<Teacher_D />} />
		</Routes>
	</BrowserRouter>
);

root.render(wrapper);

/* root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */



