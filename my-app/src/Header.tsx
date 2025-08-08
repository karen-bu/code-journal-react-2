import { Outlet } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <div className="journal-header">This is a header</div>
      <Outlet />
    </div>
  );
}
