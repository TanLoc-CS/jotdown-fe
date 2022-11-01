import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ACTION from "../actions/action";
import { ReactComponent as Visibility } from "../assets/visibility.svg";
import { ReactComponent as VisibilityOff } from "../assets/visibility_off.svg";

function LoginPage() {
	const navigate = useNavigate();
	// const isAuthenticated = useSelector((state) => state.isAuthenticated);
	const dispatch = useDispatch();

	const [passwordType, setPasswordType] = useState("password");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const dispatchLogin = () => dispatch(ACTION.login(username, password));
		await dispatchLogin();
		navigate("/home", { replace: true });
	};

	return (
		<form
			className="w-[505px] h-[681px] p-[40px] flex flex-col justify-start items-start border shadow-lg rounded-lg"
			onSubmit={handleSubmit}
		>
			<h1 className="text-[20px] mb-[24px]">Welcome!</h1>
			<div className="mb-[44px]">
				<h1 className="text-[24px] font-semibold mb-[8px]">Sign in to</h1>
				<p className="text-[16px]">Note is simply, lorem ipsum</p>
			</div>

			<div className="mb-[36px]">
				<p className="text-[16px] pb-[4px]">User name</p>
				<input
					type="text"
					placeholder="Enter your username"
					className="w-[424px] h-[60px] px-[16px] text-[16px] border border-black focus-within:outline-none rounded-lg"
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>

			<div className="mb-[20px]">
				<p className="text-[16px] pb-[4px]">Password</p>
				<div className="flex flex-row items-center">
					<input
						type={passwordType}
						placeholder="Enter your password"
						className="w-[424px] h-[60px] px-[16px] text-[16px] border border-black focus-within:outline-none rounded-lg"
						onChange={(e) => setPassword(e.target.value)}
					/>
					{passwordType === "password" ? (
						<VisibilityOff
							className="relative right-[40px]"
							onClick={() => setPasswordType("text")}
						/>
					) : (
						<Visibility
							className="relative right-[40px]"
							onClick={() => setPasswordType("password")}
						/>
					)}
				</div>
			</div>

			<div className="w-[424px] mb-[36px] h-auto flex flex-row justify-between items-center">
				<div className="flex flex-row">
					<input type="checkbox" className="mr-[8px]" />
					<p className="text-[12px]">Remeber me</p>
				</div>
				<p>Forget password?</p>
			</div>

			<button className="w-[424px] h-[56px] mb-[36px] bg-black text-white rounded-lg">
				Login
			</button>
			<div className="w-[424px] h-auto flex flex-row justify-center items-center">
				<p>Don&#39;t have an Account ?&nbsp;</p>
				<Link to="/register" className="font-semibold">
					Register
				</Link>
			</div>
		</form>
	);
}

export default LoginPage;
