import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

function App() {
  const isPalindrome = (x) => {
    if (x < 0) {
      return false;
    }
    let xPal = parseInt(x.toString().split('').reverse().join(''));
    return x === xPal ? 'true' : 'false';
  };

  console.log(isPalindrome(10));

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
