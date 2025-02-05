import './style/App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route, NavLink, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <p>
        שבוע טוב היום!
      </p>
      <Navbar navigate={navigate}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>אודות</div>} />
        <Route path="/contact" element={<div>צור קשר</div>} />
      </Routes>
      <Footer className="Footer"/>
    </div>
  );
}

export default App;
