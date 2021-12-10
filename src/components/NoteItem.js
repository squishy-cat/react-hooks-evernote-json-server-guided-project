//rendered from NoteList, should display note titel and truncated description

import React from "react";

function NoteItem( {note, setViewer, setViewNote} ) {
  const truncate = (str) => str.length > 15 ? str.substring(0,15) + "..." : str;

  const handleClick = (note) => {
    setViewer("viewer");
    setViewNote(note);
  }

  return (
    <li onClick = {() => handleClick(note)}>
      <h2>{note.title}</h2>
      <p style = {{overflow: 'hidden', textOverfolow: 'ellipsis'}}>
        {truncate(note.body)}
      </p>
    </li>
  );
}

export default NoteItem;
