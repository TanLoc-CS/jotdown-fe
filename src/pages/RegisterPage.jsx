import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as Visibility } from "../assets/visibility.svg";
import { ReactComponent as VisibilityOff } from "../assets/visibility_off.svg";
import AuthAPI from "../services/auth.service";

function RegisterPage() {
	const navigate = useNavigate();

	const [passwordType, setPasswordType] = useState("password");
	const [confirmPasswordType, setConfirmPasswordType] = useState("password");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Confirmed password mismatch! Please try again!");
			setPassword("");
			setConfirmPassword("");
		}

		// const dispatchRegister = () =>
		// 	dispatch(ACTION.register(username, password));
		// dispatchRegister();
		// const registered = auth.finally((registered) => registered);
		// console.log(registered);
		// if (registered === "success") {
		// 	navigate("/login", { replace: true });
		// } else if (registered === "fail") {
		// 	alert("Username already exists");
		// }

		const res = await AuthAPI.register(username, password);
		if (res.status === 409) {
			alert("Username already exists");
		}
		alert("Register successfully!");
		navigate("/login", { replace: true });
	};

	return (
		<div className="w-[505px] h-[720px] p-[40px] mb-12 flex flex-col justify-start items-start border shadow-lg rounded-lg">
			<h1 className="text-[20px] mb-[24px]">Welcome!</h1>
			<div className="mb-[44px]">
				<h1 className="text-[24px] font-semibold mb-[8px]">Sign up to</h1>
				<p className="text-[16px]">Note is simply, lorem ipsum</p>
			</div>

			<form onSubmit={handleSubmit}>
				<div className="mb-[36px]">
					<p className="text-[16px] pb-[4px]">User name</p>
					<input
						type="text"
						placeholder="Enter your username"
						className="w-[424px] h-[60px] px-[16px] text-[16px] border border-black focus-within:outline-none rounded-lg"
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>

				<div className="mb-[36px]">
					<p className="text-[16px] pb-[4px]">Password</p>
					<div className="flex flex-row items-center">
						<input
							type={passwordType}
							placeholder="Enter your password"
							value={password}
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

				<div className="mb-[20px]">
					<p className="text-[16px] pb-[4px]">Confirm password</p>
					<div className="flex flex-row items-center">
						<input
							type={confirmPasswordType}
							placeholder="Enter your password"
							value={confirmPassword}
							className="w-[424px] h-[60px] px-[16px] text-[16px] border border-black focus-within:outline-none rounded-lg"
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						{confirmPasswordType === "password" ? (
							<VisibilityOff
								className="relative right-[40px]"
								onClick={() => setConfirmPasswordType("text")}
							/>
						) : (
							<Visibility
								className="relative right-[40px]"
								onClick={() => setConfirmPasswordType("password")}
							/>
						)}
					</div>
				</div>

				<button className="w-[424px] h-[56px] my-[16px] bg-zinc-700 text-white rounded-lg hover:bg-zinc-800 active:bg-zinc-900">
					Register
				</button>
			</form>
			<div className="w-[424px] h-auto flex flex-row justify-center items-center">
				<p>Already have an Account ?&nbsp;</p>
				<Link to="/" className="font-semibold">
					Login
				</Link>
			</div>
		</div>
	);
}

export default RegisterPage;
