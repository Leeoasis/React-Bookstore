import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'BOOKS' },
  { path: 'categories', text: 'CATEGORIES' },
];

export default function Navbar() {
  return (
    <nav>
      <h1 className="bookstore">Bookstore CMS</h1>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
      <div className="Oval">
        <FontAwesomeIcon icon={faUser} className="Mask" style={{ color: '#0290ff' }} />
      </div>
    </nav>
  );
}
