import Home from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import Project from './pages/Project';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <div className='w-full font-aktiv bg-primary'>
      <ScrollToTop />
      <Header />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/:project' element={<Project />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
