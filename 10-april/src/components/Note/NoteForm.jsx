import React from "react";
import { connect } from "react-redux";

const NoteForm = (props) => {
  const { addNote, updateNote, editingNote, setEditingNoteId } = props;
  const [note, setNote] = useState({ title: "", content: "" });
  useEffect(() => {
    if (editingNote) {
      setNote(editingNote);
    }
  }, [editingNote]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingNote) {
      updateNote(editingNote.id, note);
      setEditingNoteId(null);
    } else {
      addNote({
        ...note,
        id: new Date().getTime().toString(),
      });
    }
    setNote({ title: "", content: "" });
  };
  return (
    <form onSubmit={handleSubmit} className={cls.noteForm}>
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="title"
        required
      />
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="content"
        required
      ></textarea>
      <button>{editingNote ? "update note" : "add note"}</button>
    </form>
  );
};

const mapStateToProps = (state, ownProps) => ({
  editingNote: state.notes.find((note) => note.id === ownProps.editingNoteId),
});

const mapDispatchToProps = {
  addNote,
  updateNote,
};

export default connect(mapDispatchToProps, mapDispatchToProps)(NoteForm);
