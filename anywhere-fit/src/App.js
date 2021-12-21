import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header>
        <h1>Anywhere Fitness</h1>
        <Link to="login">Login</Link>
        <Link to="signup">Sign Up</Link>
      </header>
    </div>
  );
}

export default App;
