// rendered by Content, should allow users to edit existing note content

import React, {useState, useEffect} from "react";

function NoteEditor( {setViewer, viewNote} ) {
  const [newTitle, setNewTitle] = useState(`${viewNote.title}`);
  const [newBody, setNewBody] = useState(`${viewNote.body}`);

  // console.log(newTitle, newBody);

  // const config = {
  //   method: "PATCH",
  //   headers: {"Content-type": "application/json"},
  //   body: JSON.stringify({
  //     title: `${newTitle}`,
  //     body: `${newBody}`,
  //   })
  // }

  const handleSave = (note) => {
    debugger
    console.log(note);
    debugger
    // fetch (`http://localhost:3000/notes/${viewNote.id}`, { config })
    // .then (res => res.json())
    // .then (data => setViewer(data))
  }
  

  return (
    <form className="note-editor">
      <input type="text" name="title" defaultValue={viewNote.title} onChange={(e) => setNewTitle(e.target.value)} />
      <textarea name="body" defaultValue={viewNote.body} onChange={(e) => setNewBody(e.target.value)}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" onClick = {(viewNote) => handleSave(viewNote)} />
        <button type="button"  onClick = {() => setViewer("viewer")}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
