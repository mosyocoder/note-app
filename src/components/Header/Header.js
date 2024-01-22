import React, { useContext } from "react";

import "./header.css";
import { v4 } from "uuid";
import { NoteContext } from "../../context/NoteContext";

function Header() {
	const { notes, setNotes } = useContext(NoteContext);

	const addNote = () => {
		const id = v4();

		const note = {
			id,
			createdAt: Date.now(),
			text: ``,
			edit: false,
		};

		if (!notes) {
			localStorage.setItem("notes", JSON.stringify([note]));
		} else {
			const updatedNotes = [...notes, note];
			setNotes(updatedNotes);
			localStorage.setItem("notes", JSON.stringify(updatedNotes));
		}
	};

	return (
		<div className="header">
			<div className="logo">
				<i className="fa-regular fa-note-sticky fa-4x"></i>
				<h1 className="title">Note App</h1>
			</div>
			<div className="plus">
				<i onClick={() => addNote()} className="fa-solid fa-plus fa-2x"></i>
			</div>
		</div>
	);
}

export default Header;
