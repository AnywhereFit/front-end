import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const SignUp = () => {
    const { push } = useNavigate();

    const [cred, setCred] = useState({
        username: "",
        password: "",
        authCode: ""
    });

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('', cred)
            .then(resp => {
                localStorage.setItem("token", );
                push('/');
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
    <div className="App">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input onChange={handleChange} name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input onChange={handleChange} name="password" type="password" id="password" />
          </div>
          <div>
            <label htmlFor="authcode">Auth Code:</label>
            <input onChange={handleChange} name="authcode" id="authcode" />
          </div>
          <button>Sign Up</button>
        </form>
    </div>)
}

export default SignUp;