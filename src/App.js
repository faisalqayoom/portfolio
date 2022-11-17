import './App.scss';
import Footer from './components/footer/Footer';
import Navigation from './components/navbar/Navigation';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
