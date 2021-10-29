import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/utilities/Button';

function App() {
  const [open, setOpen] = useState(true);

  const handleHeader = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <Header open={open} onClick={handleHeader} />
    </div>
  );
}

export default App;
