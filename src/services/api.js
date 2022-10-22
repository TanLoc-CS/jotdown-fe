import axios from "axios";

console.log(process.env);
const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 3000,
	headers: {
		"Content-Type": "application/json",
	},
});

export default instance;
