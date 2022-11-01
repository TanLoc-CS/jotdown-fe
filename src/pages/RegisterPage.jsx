import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Visibility } from "../assets/visibility.svg";
import { ReactComponent as VisibilityOff } from "../assets/visibility_off.svg";

function RegisterPage() {
	const [passwordType, setPasswordType] = useState("password");
	const [confirmPasswordType, setConfirmPasswordType] = useState("password");
	// const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(email);
		console.log(username);
		console.log(password);
		console.log(confirmPassword);
	};

	return (
		<div className="w-[505px] h-[800px] p-[40px] mb-12 flex flex-col justify-start items-start border shadow-lg rounded-lg">
			<h1 className="text-[20px] mb-[24px]">Welcome!</h1>
			<div className="mb-[44px]">
				<h1 className="text-[24px] font-semibold mb-[8px]">Sign up to</h1>
				<p className="text-[16px]">Note is simply, lorem ipsum</p>
			</div>

			<form onSubmit={handleSubmit}>
				{/* <div className="mb-[36px]">
					<p className="text-[16px] pb-[4px]">Email</p>
					<input
						type="email"
						placeholder="Enter your email"
						className="w-[424px] h-[60px] px-[16px] text-[16px] border border-black focus-within:outline-none rounded-lg"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div> */}

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
