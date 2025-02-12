// rendered from App, renders Search, Sidebar and Content

import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [viewerState, setViewer] = useState(null)
  const [viewNote, setViewNote] = useState("")

  useEffect(() => {
    fetch ("http://localhost:3000/notes")
    .then (res => res.json())
    .then (data => setNotes(data))
  }, [])

  const displayNotes = notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Search 
        setSearch = {setSearch}
      />
      <div className="container">
        <Sidebar 
          notes = {displayNotes}
          setViewer = {setViewer}
          setViewNote = {setViewNote}
        />
        <Content 
          viewerState = {viewerState}
          setViewer = {setViewer}
          viewNote = {viewNote}
        />
      </div>
    </>
  );
}

export default NoteContainer;
