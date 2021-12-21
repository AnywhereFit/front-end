import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CreateClass from "./components/createClass/CreateClass";
import InsLanding from "./components/InsLanding";
import Client from "./components/Client";

import PrivateRoute from "./components/PrivateRoute";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <NavBar />
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

      <Route 
        path="client" 
        element={
          <PrivateRoute>
            <Client />
          </PrivateRoute>
        } 
      />

    </Routes>
  </BrowserRouter>,
  rootElement
);
