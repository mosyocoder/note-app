import React, { useContext } from "react";

import "./content.css";
import NoteCard from "../NoteCard/NoteCard";
import { NoteContext } from "../../context/NoteContext";

function Content() {
	const { notes } = useContext(NoteContext);

	return (
		<div className="container">
			{notes.map((item) => (
				<NoteCard key={item.id} data={item} />
			))}
		</div>
	);
}

export default Content;
