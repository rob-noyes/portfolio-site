import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import Rewind from './pages/projectpages/Rewind';

function App() {
  const location = useLocation();

  return (
    <div className='w-full font-aktiv bg-primary'>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/myrewind' element={<Rewind />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
