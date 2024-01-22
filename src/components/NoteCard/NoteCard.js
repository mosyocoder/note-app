import React, { useContext, useState } from "react";
import Markdown from "react-markdown";

import "./notecard.css";
import { NoteContext } from "../../context/NoteContext";

function NoteCard({ data }) {
	const date = new Date(data.createdAt);

	const { notes, setNotes } = useContext(NoteContext);

	const [note, setNote] = useState();

	const changeEdit = () => {
		var updatedNotes = notes.map((note) => (note.id === data.id ? { ...note, edit: !note.edit } : note));

		if (!data.edit) {
			const otherNotes = updatedNotes.filter((note) => note.id !== data.id);
			otherNotes.forEach((note) => (note.edit = false));
		} else {
			updatedNotes = notes.map((item) => (item.id === data.id ? { ...item, text: note, edit: false } : item));
		}

		setNotes(updatedNotes);
		localStorage.setItem("notes", JSON.stringify(updatedNotes));
	};

	const deleteNote = () => {
		const noteId = notes.findIndex((note) => note.id === data.id);

		const updatedNotes = [...notes];

		updatedNotes.splice(noteId, 1);

		setNotes(updatedNotes);

		localStorage.setItem("notes", JSON.stringify(updatedNotes));
	};

	return (
		<div className="note-card">
			<div className="note-card-title">
				{date.toDateString() + "  " + date.toLocaleTimeString()}
				<div className="note-card-buttons">
					<i onClick={() => changeEdit()} className={data.edit ? "fa-regular fa-floppy-disk" : "fa-regular fa-pen-to-square"}></i>
					<i onClick={() => deleteNote()} className="fa-regular fa-trash-can"></i>
				</div>
			</div>
			{data.edit ? <textarea defaultValue={data.text} placeholder="Please Enter Your Message" onChange={(e) => setNote(e.target.value)} autoFocus className="text" /> : <Markdown className={"md"}>{data.text}</Markdown>}
		</div>
	);
}

export default NoteCard;
