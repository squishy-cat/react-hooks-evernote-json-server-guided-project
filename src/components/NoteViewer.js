//renders full note content

import React from "react";

function NoteViewer( {setViewer} ) {
  return (
    <>
      <h2>Title</h2>
      <p>Body</p>
      <button onClick={setViewer("editor")}>Edit</button>
    </>
  );
}

export default NoteViewer;
