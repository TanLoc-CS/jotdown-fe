import React from "react";
import { Route, Routes } from "react-router-dom";

import routes from "./routes/routes";
import RequireAuth from "./authentication/RequireAuth";
// import DashboardPage from "./pages/DashboardPage";

function App() {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<Routes>
				{routes.map((route) => {
					const Component = route.component;
					if (route.requireAuth)
						return (
							<Route
								path={route.path}
								element={
									<RequireAuth>
										<Component />
									</RequireAuth>
								}
								key={route.path}
							/>
						);
					return (
						<Route path={route.path} element={<Component />} key={route.path} />
					);
				})}
			</Routes>
		</div>
	);
}

export default App;
