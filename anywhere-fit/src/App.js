import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CreateClass from "./components/createClass/CreateClass";
import InsLanding from "./components/InsLanding";
import Client from "./components/Client";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="login" element={<Login />} />
      <Route exact path="signup" element={<SignUp />} />

      <Route 
        path="createclass" 
        element={
          <PrivateRoute>
            <CreateClass />
          </PrivateRoute>
        }
      />
      
      <Route 
        path="inslanding" 
        element={
          <PrivateRoute>
            <InsLanding />
          </PrivateRoute>
        } 
      />

      <Route 
        path="client" 
        element={
          <PrivateRoute>
            <Client />
          </PrivateRoute>
        } 
      />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
