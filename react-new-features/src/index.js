import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      {
        title,
        body
      }
    ]);
    setTitle('');
    setBody('');
  }

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  }

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'));
    notesData && setNotes(notesData);
  }, []);

  useEffect(() => {
    const parsedNotes = JSON.stringify(notes);
    localStorage.setItem('notes', parsedNotes);
  }, [notes]);

  return (
    <div>
      <h1>Notes</h1>
      {
        notes.map((note) => (
          <Note key={note.title} note={note} removeNote={removeNote} />
        ))
      }

      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button>Add Note</button>
      </form>
    </div>
  )
}

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log('Setting up effect!');

    return () => {
      console.log('Cleaning up effect!');
    }
  });

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  );
}

ReactDOM.render(<NoteApp />, document.getElementById('root'));

serviceWorker.unregister();
