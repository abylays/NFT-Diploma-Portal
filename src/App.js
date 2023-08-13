import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Explore from './pages/explore';
import NftDetails from './pages/NftDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/:id" element={<NftDetails />} />
      </Routes>
    </Router>
  );
}

export default App;