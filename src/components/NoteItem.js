//rendered from NoteList, should display note titel and truncated description

import React from "react";

function NoteItem( {title, body} ) {
  const truncate = (str) => str.length > 15? str.substring(0,15) + "..." : str;

  return (
    <li>
      <h2>{title}</h2>
      <p style = {{overflow: 'hidden', textOverfolow: 'ellipsis'}}>
        {truncate(body)}
      </p>
    </li>
  );
}

export default NoteItem;
