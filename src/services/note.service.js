import api from "./api";

const NoteAPI = {
	getNotes: async () => await api.get("/notes"),
	createNote: async (title, content) =>
		await api.post("/note", { title, content }),
	deleteNote: async (_id) => await api.delete("/note", { data: { _id: _id } }),
};

export default NoteAPI;
