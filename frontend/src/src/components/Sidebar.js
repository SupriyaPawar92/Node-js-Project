import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ menuItems }) {
  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
