import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import DocsPage from './components/docspage';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/docs/:docId" element={<DocsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
