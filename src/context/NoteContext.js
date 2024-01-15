import { createContext, useState } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
	const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

	const values = { notes, setNotes };

	return <NoteContext.Provider value={values}>{children}</NoteContext.Provider>;
};
