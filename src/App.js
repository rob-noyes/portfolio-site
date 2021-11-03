import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
