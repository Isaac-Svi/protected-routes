import React from 'react';
import { useAuth } from '../providers/AuthProvider';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ redirect, ...props }) => {
    const { accessToken } = useAuth();

    return accessToken ? <Route {...props} /> : <Redirect to={redirect} />;
};

export default ProtectedRoute;
