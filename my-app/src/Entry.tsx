import { useState, useEffect, type FormEvent } from 'react';
import {
  addEntry,
  readEntry,
  updateEntry,
  type Entry,
  type UnsavedEntry,
} from './data';
import { useNavigate, useParams } from 'react-router-dom';
import { Delete } from './Delete';

export function Entry() {
  const [title, setEntryTitle] = useState('');
  const [photoUrl, setEntryPhotoURL] = useState('');
  const [notes, setEntryNotes] = useState('');
  const { entryId } = useParams();
  const navigation = useNavigate();

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
    const newEntry: UnsavedEntry = { title, photoUrl, notes };
    addEntry(newEntry);
  }

  function handleSubmit(event: FormEvent) {
    event?.preventDefault();
    if (entryId !== 'new' && entryId) {
      const updatedEntry: Entry = { title, photoUrl, notes, entryId: +entryId };
      updateEntry(updatedEntry);
    } else {
      handleSave();
    }
    navigation('/');
  }

  const placeholder = '../public/placeholder-image-square.jpg';

  return (
    <form onSubmit={handleSubmit}>
      <div className="entry-container">
        <div className="entry-img column-50">
          <img src={photoUrl || placeholder} />
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
              onChange={(event) =>
                setEntryPhotoURL(event.target.value)
              }></input>
          </div>
          <div>
            <label>Notes</label>
            <input
              type="notes"
              value={notes}
              onChange={(event) => setEntryNotes(event.target.value)}></input>
          </div>
          <div>
            <button type="submit">Save</button>
            {entryId !== 'new' && entryId && <Delete id={+entryId} />}
          </div>
        </div>
      </div>
    </form>
  );
}
