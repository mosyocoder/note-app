// src/App.js

import React, { useState } from "react";
import Markdown from "react-markdown";
import "./App.css";

function App() {
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
		<div className="App" onClick={handleOutsideClick}>
			<div className={`note ${editMode ? "edit-mode" : ""}`} onClick={handleNoteClick}>
				{editMode ? <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Notunuzu buraya yazın..." /> : <Markdown>{note}</Markdown>}
			</div>
		</div>
	);
}

export default App;
