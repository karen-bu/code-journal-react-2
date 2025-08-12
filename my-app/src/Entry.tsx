import { useState, useEffect } from 'react';
import { addEntry, readEntry, type Entry, type UnsavedEntry } from './data';
import { useParams } from 'react-router-dom';

export function Entry() {
  const [title, setEntryTitle] = useState('');
  const [photoUrl, setEntryPhotoURL] = useState('');
  const [notes, setEntryNotes] = useState('');
  const { entryId } = useParams();

  useEffect(() => {
    async function loadEntry(entryId: number) {
      try {
        const item = await readEntry(entryId);
        if (!item) throw Error('item not found');
        setEntryTitle(item.title);
        setEntryPhotoURL(item.photoUrl);
        setEntryNotes(item.notes);
      } catch (error) {
        alert(error);
      }
    }
    if (entryId !== 'new' && entryId) loadEntry(+entryId);
  }, [entryId]);

  function handleSave() {
    console.log(title, photoUrl, notes);
    const newEntry: UnsavedEntry = { title, photoUrl, notes };
    addEntry(newEntry);
  }

  /* function updateEntry({ entryId }: Entry) {} */

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
            value={photoUrl}
            onChange={(event) => setEntryPhotoURL(event.target.value)}></input>
        </div>
        <div>
          <label>Notes</label>
          <input
            type="notes"
            value={notes}
            onChange={(event) => setEntryNotes(event.target.value)}></input>
        </div>
        <div>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
