import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Community from './pages/Community/Community';
import Explore from './pages/Explore/Explore';
import Sports from './pages/Sports/Sports';

function App() {
  return (
    <div className="App">
      <nav style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/explore" style={{ marginRight: 12 }}>Explore</Link>
        <Link to="/sports" style={{ marginRight: 12 }}>Sports</Link>
        <Link to="/community" style={{ marginRight: 12 }}>Community</Link>
        <Link to="/login" style={{ marginRight: 12 }}>Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/community" element={<Community />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </div>
  );
}

export default App;
