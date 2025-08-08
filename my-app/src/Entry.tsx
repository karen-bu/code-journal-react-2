import { useState } from 'react';

export function Entry() {
  const [title, setEntryTitle] = useState('');
  const [photoURL, setEntryPhotoURL] = useState('');
  const [entryNotes, setEntryNotes] = useState('');

  function handleSave() {
    console.log(title, photoURL, entryNotes);
  }

  return (
    <div className="entry-container">
      <div className="entry-img column-50">
        <img src="../public/placeholder-image-square.jpg" />
      </div>
      <div className="entry-text column-50">
        <div className="entry-title">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setEntryTitle(event.target.value)}></input>
        </div>
        <div>
          <label>Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(event) => setEntryPhotoURL(event.target.value)}></input>
        </div>
        <div>
          <label>Notes</label>
          <input
            type="notes"
            value={entryNotes}
            onChange={(event) => setEntryNotes(event.target.value)}></input>
        </div>
        <div>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
