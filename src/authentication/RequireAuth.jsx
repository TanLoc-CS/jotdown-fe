import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function RequireAuth({ children }) {
	const location = useLocation();
	const isAuthenticated = useSelector((state) => state.isAuthenticated);
	if (!isAuthenticated && !localStorage.getItem("token")) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
}

export default RequireAuth;
