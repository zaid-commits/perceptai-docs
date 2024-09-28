import React from 'react';
import './App.css'; // Import your CSS styles
import TableOfContents from './components/tableofcontents';

const App: React.FC = () => {
  const headings = [
    { id: 'introduction', text: 'Introduction' },
    { id: 'setup', text: 'Setup' },
    { id: 'usage', text: 'Usage' },
    { id: 'conclusion', text: 'Conclusion' },
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Documentation</h1>
      </header>
      <div className="content">
        <TableOfContents headings={headings} />
        <main>
          <section id="introduction">
            <h2>Introduction</h2>
            <p>Welcome to the documentation. This section introduces the project.</p>
          </section>
          <section id="setup">
            <h2>Setup</h2>
            <p>Follow these steps to set up the project...</p>
          </section>
          <section id="usage">
            <h2>Usage</h2>
            <p>Learn how to use the application...</p>
          </section>
          <section id="conclusion">
            <h2>Conclusion</h2>
            <p>Wrap up and further resources...</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
