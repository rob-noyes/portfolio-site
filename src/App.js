import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact to="/" component={Home} />
        <Route exact to="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
