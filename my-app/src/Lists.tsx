import { useEffect } from 'react';
import { type Entry, readEntries } from './data';

export function Lists() {
  useEffect(() => {
    async function populate() {
      try {
        const list: Entry[] = await readEntries();
        console.log(list);
      } catch {}
    }
    populate();
  }, []);

  return (
    <div>
      <div className="entries-view">Entries Placeholder</div>
    </div>
  );
}
