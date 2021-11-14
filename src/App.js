import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Roomdesign from './components/portfolio-components/Roomdesign';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/roomdesign" component={Roomdesign} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
