import './App.scss';
import Footer from './components/footer/Footer';
import Navigation from './components/navbar/Navigation';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import Cards from './components/common/Cards';

function App() {
  return (
    <div className="container">

      <Navigation />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path="*" element={<h3>404 Page not found</h3>} />
      </Routes>
      
      <Cards  />

      <Footer />
    </div>
  );
}

export default App;
