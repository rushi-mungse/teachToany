import './App.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
