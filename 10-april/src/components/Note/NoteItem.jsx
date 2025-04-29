import React from "react";
import cls from "Note.module.css";

const NoteItem = ({ note, deleteNote, setEditingNoteId }) => {
  return (
    <div className={styles.NoteItem}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => setEditingNoteId(note.id)}>Edit</button>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default NoteItem;
