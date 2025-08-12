import { removeEntry } from './data';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

type Props = {
  id: number;
};

export function Delete({ id }: Props) {
  const navigate = useNavigate();
  console.log(window.location.pathname);
  function deletion(entryId: number) {
    removeEntry(entryId);
    window.location.pathname.includes('entry')
      ? navigate('/')
      : window.location.reload();
  }

  return (
    <button onClick={() => deletion(id)}>
      <MdDelete />
    </button>
  );
}
