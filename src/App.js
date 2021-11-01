import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main';

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
