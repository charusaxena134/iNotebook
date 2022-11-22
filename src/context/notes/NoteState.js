import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "635d41483b8709b320b83aa9",
      user: "635bfba65e19f2205119f5bd",
      title: "My title",
      description: "Wake by early",
      tag: "Personal",
      date: "2022-10-29T15:05:44.999Z",
      __v: 0,
    },
    {
      _id: "635f69b9eb8d71c64f12c319",
      user: "635bfba65e19f2205119f5bd",
      title: "New node updated23",
      description: "Updated the notes",
      tag: "Personal",
      date: "2022-10-31T06:22:49.395Z",
      __v: 0,
    },
    {
      _id: "635f69b9eb8d71c64f12c319",
      user: "635bfba65e19f2205119f5bd",
      title: "New node updated23",
      description: "Updated the notes",
      tag: "Personal",
      date: "2022-10-31T06:22:49.395Z",
      __v: 0,
    },
    {
      _id: "635f69b9eb8d71c64f12c319",
      user: "635bfba65e19f2205119f5bd",
      title: "New node updated23",
      description: "Updated the notes",
      tag: "Personal",
      date: "2022-10-31T06:22:49.395Z",
      __v: 0,
    },
    {
      _id: "635f69b9eb8d71c64f12c319",
      user: "635bfba65e19f2205119f5bd",
      title: "New node updated23",
      description: "Updated the notes",
      tag: "Personal",
      date: "2022-10-31T06:22:49.395Z",
      __v: 0,
    },
    {
      _id: "635f69b9eb8d71c64f12c319",
      user: "635bfba65e19f2205119f5bd",
      title: "New node updated23",
      description: "Updated the notes",
      tag: "Personal",
      date: "2022-10-31T06:22:49.395Z",
      __v: 0,
    },
    {
      _id: "635f69b9eb8d71c64f12c319",
      user: "635bfba65e19f2205119f5bd",
      title: "New node updated23",
      description: "Updated the notes",
      tag: "Personal",
      date: "2022-10-31T06:22:49.395Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
