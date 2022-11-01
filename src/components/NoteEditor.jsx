import React, { useState } from "react";
import NoteAPI from "../services/note.service.js";

function NoteEditor() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleChangeTitle = (e) => {
		e.preventDefault();
		setTitle(e.target.value);
	};
	const handleChangeContent = (e) => {
		e.preventDefault();
		setContent(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await NoteAPI.createNote(title, content);
		// alert("Note saved!");
		window.location.reload(true);
	};

	return (
		<form
			id="note"
			className="h-[320px] w-[640px] p-5 bg-slate-50 rounded-lg flex flex-row justify-between items-center shadow-lg"
			// onSubmit={handleSubmit}
		>
			<div className="h-[264px] flex flex-col justify-between items-center">
				<textarea
					name=""
					form="note"
					cols="36"
					rows="2"
					className="p-2 outline rounded-lg"
					placeholder={"Write your title here ..."}
					onChange={handleChangeTitle}
				/>
				<textarea
					name=""
					form="note"
					cols="36"
					rows="7"
					className="p-2 outline rounded-lg"
					placeholder={"Write your note here ..."}
					onChange={handleChangeContent}
				/>
			</div>
			<button
				type="submit"
				className="w-[96px] h-[64px] mr-9 flex flex-col justify-center items-center bg-teal-100 hover:bg-teal-200 active:bg-teal-500 rounded-lg text-slate-800"
				onClick={handleSubmit}
			>
				Save
			</button>
		</form>
	);
}

export default NoteEditor;
