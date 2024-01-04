import React from "react";

import "./content.css";
import NoteCard from "../NoteCard/NoteCard";

function Content() {
	return (
		<div className="container">
			<NoteCard />
			<NoteCard />
			<NoteCard />
			<NoteCard />
			<NoteCard />
			<NoteCard />
			<NoteCard />
		</div>
	);
}

export default Content;
