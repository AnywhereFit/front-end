import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CreateClass from './components/createClass/CreateClass';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="create-class" element={<CreateClass />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
