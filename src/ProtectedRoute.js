import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const userExists = localStorage.getItem('user');

    return userExists ? element : <Navigate to='/' />;
};

export default ProtectedRoute;
