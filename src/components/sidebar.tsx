import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="sidebar">
      <h2>Documentation</h2>
      <button onClick={() => setOpen(!open)}>Sections</button>
      {open && (
        <ul>
          <li><Link to="/docs/intro">Introduction</Link></li>
          <li><Link to="/docs/setup">Setup</Link></li>
          <li><Link to="/docs/usage">Usage</Link></li>
          <li><Link to="/docs/api">API Reference</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;