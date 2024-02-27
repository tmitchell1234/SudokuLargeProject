import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';
import LoginPage from './pages/LoginPage';



function App()
{
    return (
		    <BrowserRouter>
		    <Routes>
			      <Route path="/" index element={<LoginPage />} />
		    </Routes>
		    </BrowserRouter>
	  );
}

export default App;
