// rendered from NoteContainer, renders NoteList and provides the New button

import React from "react";
import NoteList from "./NoteList";

function Sidebar( {notes, setViewer} ) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList 
        notes = {notes}
        setViewer = {setViewer}
      />
      <button>New</button>
    </div>
  );
}

export default Sidebar;
