import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Work from './components/Work';

function App() {
  const [open, setOpen] = useState(false);

  const handleHeader = () => {
    setOpen(!open);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home open={open} onClick={handleHeader} setOpen={setOpen} />
          )}
        />
        <Route
          exact
          path="/work"
          component={() => <Work open={open} onClick={handleHeader} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
