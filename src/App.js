import React from 'react';
import Calculator from './components/calculator/Calculator.js';
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute.js';
import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import Navbar from './components/navbar/Navbar.js';


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path="/calculator" element={<ProtectedRoute element={<Calculator />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
