import React, { useState } from "react";
import NoteAPI from "../services/note.service";

function Note(props) {
	const [deleted, setDeleted] = useState("block");
	const { _id, title, content } = props;
	const handleDelete = async () => {
		console.log(_id);
		setDeleted("hidden");
		await NoteAPI.deleteNote(_id);
	};

	return (
		<form
			key={_id}
			className={
				"w-[320px] h-[340px] px-5 py-3 m-4 bg-amber-100 flex flex-col justify-between items-center shadow-lg rounded-lg " +
				deleted
			}
		>
			<div className="w-[280px] h-[40px] mb-4 flex flex-col justify-center items-center bg-blue-100 rounded-lg shadow-lg">
				{title}
			</div>
			<div className="w-[240px] h-[260px] overflow-hidden hover:overflow-y-scroll scrollbar-hide">
				{content}
			</div>
			<div className="w-[272px] h-[40px] flex flex-row justify-end items-center">
				<button
					type="button"
					className="w-[64px] h-[32px] flex flex-col justify-center items-center bg-teal-100 hover:bg-teal-200 active:bg-teal-500 rounded-lg"
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
		</form>
	);
}

export default Note;
