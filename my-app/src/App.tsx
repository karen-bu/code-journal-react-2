import './App.css';
import { Header } from './Header';
import { Entry } from './Entry';
// import { type UnsavedEntry } from './data';

// type UnsavedEntry = {
//   title: string;
//   notes: string;
//   photoUrl: string;
// };

function App() {
  return (
    <>
      <Header />
      <Entry />
    </>
  );
}

export default App;
