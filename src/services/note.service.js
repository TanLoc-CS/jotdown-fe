import api from "./api";

const NoteAPI = {
	getNotes: async (userId) => await api.get(`/notes/${userId}`),
	createNote: async (title, content, userId) => {
		console.log(`title: ${title}, userId: ${userId}`);
		await api.post("/note", { title, content, userId });
	},
	deleteNote: async (_id) => await api.delete("/note", { data: { _id: _id } }),
};

export default NoteAPI;
