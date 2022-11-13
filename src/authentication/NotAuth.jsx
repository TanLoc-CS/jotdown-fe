import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
	const location = useLocation();

	if (localStorage.getItem("token")) {
		return <Navigate to="/home" state={{ from: location }} replace />;
	}
	return children;
}

export default RequireAuth;
