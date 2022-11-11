import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
	const location = useLocation();
	if (localStorage.getItem("token")) {
		return children;
	}
	return <Navigate to="/login" state={{ from: location }} replace />;
}

export default RequireAuth;
