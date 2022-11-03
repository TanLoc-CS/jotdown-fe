import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Note from "../components/Note";
import NoteEditor from "../components/NoteEditor";
import NoteAPI from "../services/note.service";
import ACTION from "../actions/action";

function DashboardPage() {
	const navigate = useNavigate();
	const isAuthenticated = useSelector((state) => state.isAuthenticated);
	const [noteList, setNoteList] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		async function fetchData() {
			// You can await here
			const response = await NoteAPI.getNotes();
			setNoteList(response.data);
		}
		fetchData();
	}, []);

	const handleLogout = async () => {
		console.log("log out");
		const dispatchLogout = () => dispatch(ACTION.logout());
		await dispatchLogout();
		navigate("/login");
		// window.location.reload();
	};

	return (
		<div className="h-[980px] md:w-full p-6 flex flex-col justify-around items-center bg-indigo-100">
			<div className="h-[48px] 2xl:w-[1440px] lg:w-[1088px] md:w-[740px] sm:w-[384px] flex flex-row justify-end items-center">
				<button
					className="h-12 w-24 rounded-lg bg-slate-50 flex flex-col justify-center items-center hover:bg-slate-100 active:bg-slate-200 active:text-white"
					onClick={() => handleLogout()}
				>
					Log out
				</button>
			</div>
			<NoteEditor />

			<div className="h-[480px] 2xl:w-[1440px] lg:w-[1088px] md:w-[740px] sm:w-[384px] p-4 flex flex-wrap overflow-y-scroll scrollbar-hide bg-slate-100 rounded-lg shadow-lg">
				{noteList &&
					noteList.map((note) => {
						return (
							<Note _id={note._id} title={note.title} content={note.content} />
						);
					})}
			</div>
		</div>
	);
}

export default DashboardPage;
