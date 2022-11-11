import {
	LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	REGISTER,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
} from "./types";

const login = (username, password) => ({
	type: LOGIN,
	payload: {
		username: username,
		password: password,
	},
});

const succeedLogin = (token) => ({
	type: LOGIN_SUCCESS,
	payload: {
		token: token,
	},
});

const failLogin = () => ({
	type: LOGIN_FAIL,
	payload: {},
});

const logout = () => ({
	type: LOGOUT,
	payload: {},
});

// const register = (username, password) => ({
// 	type: REGISTER,
// 	payload: {
// 		username: username,
// 		password: password,
// 	},
// });

// const succeedRegister = () => ({
// 	type: REGISTER_SUCCESS,
// 	payload: null,
// });

// const failRegister = () => ({
// 	type: REGISTER_FAIL,
// 	payload: null,
// });

const ACTION = {
	login,
	succeedLogin,
	failLogin,
	logout,
	// register,
	// succeedRegister,
	// failRegister,
};

export default ACTION;
