import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import InsLanding from "./components/InsLanding";
function App() {
  return (
    <div className="App">
      <header>
        <h1>Anywhere Fitness</h1>
        <Link to="login">Login</Link>
        <Link to="signup">Sign Up</Link>
      </header>
      <InsLanding />
    </div>
  );
}

export default App;
