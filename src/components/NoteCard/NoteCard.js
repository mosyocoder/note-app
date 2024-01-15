import React, { useContext, useRef } from "react";
import Markdown from "react-markdown";

import "./notecard.css";
import { NoteContext } from "../../context/NoteContext";

function NoteCard({ data }) {
	const date = new Date(data.createdAt);

	const { notes, setNotes } = useContext(NoteContext);

	const changeEdit = () => {
		const noteIndex = notes.findIndex((note) => note.id === data.id);

		const updatedNote = { ...notes[noteIndex] };

		updatedNote.edit = !updatedNote.edit;

		const updatedNotes = [...notes];
		updatedNotes[noteIndex] = updatedNote;

		setNotes(updatedNotes);
		localStorage.setItem("notes", JSON.stringify(updatedNotes));
	};

	return (
		<div className="note-card">
			<div className="note-card-title">
				{date.toDateString() + "  " + date.toLocaleTimeString()}
				<div className="note-card-buttons">
					<i onClick={() => changeEdit()} className={!data.edit ? "fa-regular fa-floppy-disk" : "fa-regular fa-pen-to-square"}></i>
					<i className="fa-regular fa-trash-can"></i>
				</div>
			</div>
			{data.edit ? <Markdown>{data.text}</Markdown> : <textarea defaultValue={data.text} autoFocus className="text" />}
		</div>
	);
}

export default NoteCard;
