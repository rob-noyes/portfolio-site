import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Work from './components/Work';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Routes = () => {
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
          component={() => <Home open={open} onClick={handleHeader} />}
        />
        <Route
          exact
          path="/work"
          component={() => <Work open={open} onClick={handleHeader} />}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
