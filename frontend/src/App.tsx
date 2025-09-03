import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Project pages, contact, etc. to be added later */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
