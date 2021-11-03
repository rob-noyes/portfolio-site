import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
