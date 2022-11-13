import AuthAPI from "../services/auth.service";
import {
	LOGOUT,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN,
} from "../actions/types";

const initialState = {
	id: localStorage.getItem("null"),
	username: localStorage.getItem("null"),
	token: localStorage.getItem("null"),
	user: {},
	error: {},
};

export default async function AuthReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case LOGIN: {
			const { username, password } = payload;
			const res = await AuthAPI.login(username, password);
			if (res.statusText === "OK") {
				localStorage.setItem("id", res.data.data.id);
				localStorage.setItem("username", res.data.data.username);
				localStorage.setItem("token", res.data.token);
				localStorage.setItem("isAuthenticated", true);
				return {
					...state,
					token: res.data.token,
				};
			}
			return {
				...state,
			};
		}

		case REGISTER_SUCCESS:
			break;
		case REGISTER_FAIL:
			break;
		case LOGOUT:
			localStorage.removeItem("token");
			localStorage.removeItem("username");
			localStorage.removeItem("id");
			localStorage.removeItem("isAuthenticated");
			return {
				...state,
			};
		default:
			break;
	}
}
