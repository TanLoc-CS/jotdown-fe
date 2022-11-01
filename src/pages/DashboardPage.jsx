import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Note from "../components/Note";
import NoteEditor from "../components/NoteEditor";
import NoteAPI from "../services/note.service";

function DashboardPage() {
	const isAuthenticated = useSelector((state) => state.isAuthenticated);
	const [noteList, setNoteList] = useState([]);

	useEffect(() => {
		async function fetchData() {
			// You can await here
			const response = await NoteAPI.getNotes();
			setNoteList(response.data);
		}
		fetchData();
	}, []);

	return (
		<div className="h-[980px] md:w-full p-8 flex flex-col justify-around items-center bg-indigo-100">
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
