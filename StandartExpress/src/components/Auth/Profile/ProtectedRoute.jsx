// Создайте компонент ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, adminOnly = false }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (adminOnly && user.role !== 'admin') {
        return <Navigate to="/profile" replace />;
    }

    return children;
};

export default ProtectedRoute;

// Использование в App.js
<Route 
    path="/admin" 
    element={
        <ProtectedRoute adminOnly>
            <BlogMain />
        </ProtectedRoute>
    } 
/>