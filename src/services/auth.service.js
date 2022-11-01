import api from "./api";
import setToken from "../utils/setToken";

const AuthAPI = {
	login: async (username, password) =>
		await api.post("/auth/login", { username, password }),
	register: async (username, password) =>
		await api.post("/auth/register", { username, password }),
	getCurrentUser: async () => {
		if (localStorage.getItem("token")) setToken();
		const res = await api.get("/auth/user");
		return res.data;
	},
};

export default AuthAPI;
