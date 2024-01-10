import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './page/Main_page/main_page';
import Loginpage from './page/Login_page/Login_page';
import Postpage from './page/post_page/post_page';
import Signuppage from './page/Signup_page/Signup_page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/Mainpage' element={<Mainpage />} />
        <Route path='/Loginpage' element={<Loginpage />} />
        <Route path='/postpage' element={<Postpage />} />
        <Route path='/Signuppage' element={<Signuppage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
