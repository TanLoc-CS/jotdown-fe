import AuthAPI from "../services/auth.service";
import {
	LOGOUT,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN,
} from "../actions/types";

const initialState = {
	token: localStorage.getItem("token"),
	isAuthenticated: false,
	user: {},
	error: {},
};

export default async function AuthReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case LOGIN: {
			const { username, password } = payload;
			const res = await AuthAPI.login(username, password);
			console.log(res);
			if (res.statusText === "OK") {
				localStorage.setItem("token", res.data.token);
				return {
					...state,
					token: res.data.token,
					isAuthenticated: true,
				};
			}
			return {
				...state,
				isAuthenticated: false,
			};
		}

		case REGISTER_SUCCESS:
			break;
		case REGISTER_FAIL:
			break;
		case LOGOUT:
			break;
		default:
			break;
	}
}
