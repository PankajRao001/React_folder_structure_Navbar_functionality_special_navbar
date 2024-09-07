import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Navbar from './components/common/Navbar';
import Hero from './components/common/Hero';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="landingpage" element={<LandingPage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
