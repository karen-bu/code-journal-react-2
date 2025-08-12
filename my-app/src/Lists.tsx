import { useEffect, useState } from 'react';
import { type Entry, readEntries } from './data';
import { FaRegEdit } from 'react-icons/fa';

export function Lists() {
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(true);
  const [entryList, setEntryList] = useState<Entry[]>([]);

  useEffect(() => {
    async function populate() {
      try {
        const list: Entry[] = await readEntries();
        setEntryList(list);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    populate();
  }, []);

  if (isLoading) {
    return <div>This is loading</div>;
  }

  if (error) {
    return (
      <div>{error instanceof Error ? error.message : 'Unknown Error'}</div>
    );
  }

  // type UnsavedEntry = {
  //   title: string;
  //   notes: string;
  //   photoUrl: string;
  // entryId: number;
  // };

  const entriesList = entryList.map((entry) => (
    <div className="entry-holder" key={entry.entryId}>
      <div>
        <img src={entry.photoUrl} className="entrylist-img" />
      </div>
      <div>
        {/* set this to be flex later */}
        <div className="entrytitle">
          <h2>{entry.title}</h2>
          <div>
            <FaRegEdit className="edit-icon" />
          </div>
        </div>
        <div>
          <p>{entry.notes}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div>
        <h1>Entries</h1>
      </div>
      <div>{entriesList}</div>
    </div>
  );
}
