import './style/App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <p>
        שבוע טוב היום!
      </p>
      <Navbar />
      <Home />
      <Footer className="Footer"/>
    </div>
  );
}

export default App;
