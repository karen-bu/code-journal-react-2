import './App.css';
import { Header } from './Header';
import { Entry } from './Entry';
import { Routes, Route } from 'react-router-dom';
import { Lists } from './Lists';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Lists />} />
          <Route path="/entry" element={<Entry />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
