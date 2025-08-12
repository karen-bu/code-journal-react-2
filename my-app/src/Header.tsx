import { Outlet, Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <div className="journal-header">
        <h1>
          <Link to="/">Code Journal</Link>
        </h1>
        <div className="header-link">
          <h3>
            <Link to="/entry">New Entry</Link>
          </h3>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
