//renders full note content

import React from "react";

function NoteViewer( {setViewer, viewNote} ) {
  return (
    <>
      <h2>{viewNote.title}</h2>
      <p>{viewNote.body}</p>
      <button  onClick = {() => setViewer("editor")}>Edit</button>
    </>
  );
}

export default NoteViewer;
