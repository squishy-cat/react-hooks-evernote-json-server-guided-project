// rendered by Content, should allow users to edit existing note content

import React from "react";

function NoteEditor( {setViewer} ) {
  return (
    <form className="note-editor">
      <input type="text" name="title" />
      <textarea name="body" />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button"  onClick = {() => setViewer("viewer")}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
