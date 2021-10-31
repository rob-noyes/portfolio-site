import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Button from './components/utilities/Button';

function App() {
  const [open, setOpen] = useState(false);

  const handleHeader = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <Main open={open} onClick={handleHeader} />
    </div>
  );
}

export default App;
