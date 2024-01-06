import React from "react";

import "./content.css";
import NoteCard from "../NoteCard/NoteCard";

function Content() {

    const notes = [
		{
			id: "1",
			createdAt: Date.now(),
			text: `## deneme yazısı`,
			edit: true,
		},
		{
			id: "2",
			createdAt: Date.now(),
			text: "deneme text",
			edit: false,
		},
		{
			id: "3",
			createdAt: Date.now(),
			text: "deneme text",
			edit: false,
		},
		{
			id: "4",
			createdAt: Date.now(),
			text: "deneme text",
			edit: false,
		},
		{
			id: "5",
			createdAt: Date.now(),
			text: "deneme text",
			edit: false,
		},
    ];

    return (
		<div className="container">
			{notes.map((item) => (
				<NoteCard key={item.id} data={item} />
			))}
		</div>
    );
}

export default Content;
