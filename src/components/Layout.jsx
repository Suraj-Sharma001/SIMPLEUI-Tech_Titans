import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/buttons', label: 'Buttons' },
  { path: '/cards', label: 'Cards' },
  { path: '/alerts', label: 'Alerts' },
  { path: '/auth', label: 'Auth' },
  { path: '/utilities', label: 'Utilities' }
];

function Layout({ children }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <nav className="gui-navbar gui-gap-1">
        
        {/* Desktop Navbar Links */}
        <div className={`gui-nav ${menuOpen ? 'show' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`gui-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="gui-main-content pt-16 px-4">{children}</main>
    </div>
  );
}

export default Layout;
