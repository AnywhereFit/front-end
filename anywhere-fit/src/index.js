import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CreateClass from "./components/createClass/CreateClass";
import InsLanding from "./components/InsLanding";

import PrivateRoute from "./components/PrivateRoute";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
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

    </Routes>
  </BrowserRouter>,
  rootElement
);
