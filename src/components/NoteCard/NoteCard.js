import React, { useState } from "react";
import Markdown from "react-markdown";

import "./notecard.css";

function NoteCard({ data }) {
	const [note, setNote] = useState("");
	const [editMode, setEditMode] = useState(false);

	const handleNoteClick = () => {
		setEditMode(true);
	};

	const handleOutsideClick = (e) => {
		if (editMode && e.target.tagName !== "TEXTAREA") {
			setEditMode(false);
		}
	};

	return (
		<div className="note-card">
			<div className="note-card-title">
				{data.createdAt}
				<i className="fa-regular fa-trash-can"></i>
			</div>
			{data.edit ? <Markdown>{data.text}</Markdown> : <textarea defaultValue={data.text} className="text" />}
		</div>

		// <div onClick={handleOutsideClick}>
		// 	<div className={`note ${editMode ? "edit-mode" : ""}`} onClick={handleNoteClick}>
		// 		{editMode ? <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Notunuzu buraya yazın..." /> : <Markdown>{note}</Markdown>}
		// 	</div>
		// </div>
	);
}

export default NoteCard;
