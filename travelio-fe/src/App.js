// Import necessary components and hooks
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import Books from './pages/Books';
import Wishlists from './pages/Wishlists';

// Define your routes
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/books" element={<Books />} />
        <Route path="/wishlists" element={<Wishlists />} />
      </Routes>
    </Router>
  );
};

export default App;
