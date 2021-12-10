// rendered from NoteContainer, renders NoteList and provides the New button

import React from "react";
import NoteList from "./NoteList";

function Sidebar( {notes, setViewer, setViewNote} ) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList 
        notes = {notes}
        setViewer = {setViewer}
        setViewNote = {setViewNote}
      />
      <button>New</button>
    </div>
  );
}

export default Sidebar;
