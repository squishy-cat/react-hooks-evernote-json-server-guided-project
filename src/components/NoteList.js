//rendered from NoteContainer, renders individual NoteItems

import React from "react";
import NoteItem from "./NoteItem";

function NoteList( {notes, setViewer, setViewNote} ) {
  const renderNotes = () => {
    return notes.map((note) => {
      return <NoteItem 
        key = {note.id}
        note = {note}
        setViewer = {setViewer}
        setViewNote = {setViewNote}
      />
    })
  }

  return (
    <ul>
      {renderNotes()}
    </ul>
  );
}

export default NoteList;
