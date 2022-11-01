import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";

const routes = [
	{
		path: "/login",
		component: LoginPage,
		requireAuth: false,
	},
	{
		path: "/register",
		component: RegisterPage,
		requireAuth: false,
	},
	{
		path: "/home",
		component: DashboardPage,
		requireAuth: true,
	},
	{
		path: "/*",
		component: LoginPage,
		requireAuth: false,
	},
];

export default routes;
