import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Documentation</h2>
      <ul>
        <li><Link to="/docs/intro">Introduction</Link></li>
        <li><Link to="/docs/setup">Setup</Link></li>
        <li><Link to="/docs/usage">Usage</Link></li>
        <li><Link to="/docs/api">API Reference</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
