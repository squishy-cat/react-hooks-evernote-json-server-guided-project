//rendered in NoteContainer, conditionally renders NoteEditor, NoteViewer, and Instructions

import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content( {viewerState, setViewer, note} ) {
  const getContent = () => {
    if (viewerState==="editor") {
      return <NoteEditor 
        setViewer = {setViewer}
        note = {note}
      />;
    } else if (viewerState==="viewer") {
      return <NoteViewer 
        setViewer = {setViewer}
        note = {note}
      />;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
