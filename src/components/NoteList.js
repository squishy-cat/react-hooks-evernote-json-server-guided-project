//rendered from NoteContainer, renders individual NoteItems

import React from "react";
import NoteItem from "./NoteItem";

function NoteList( {notes, setViewer} ) {
  const renderNotes = () => {
    return notes.map((note) => {
      return <NoteItem 
        key = {note.id}
        title = {note.title}
        body = {note.body}
      />
    })
  }

  return (
    <ul>
      <li onClick={setViewer("viewer")}>{renderNotes()}</li>
    </ul>
  );
}

export default NoteList;
