import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const auth = true; /* localstorage.getItem('token'); */
    return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;