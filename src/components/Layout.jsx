import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/buttons", label: "Buttons" },
  { path: "/cards", label: "Cards" },
  { path: "/alerts", label: "Alerts" },
  { path: "/auth", label: "Auth" },
  { path: "/utilities", label: "Utilities" },
];

function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const searchBtn = (e) => {
    e.preventDefault();
    const found = navLinks.find((link) =>
      link.label.toLowerCase().includes(search.toLowerCase())
    );
    if (found) {
      navigate(found.path);
      setSearch("");
    } else {
      alert("Component not found!");
    }
  };

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  });

  return (
    <div className="flex min-h-screen flex-col font-bold">
      <nav className="gui-navbar gui-gap-1">
        <div className={`gui-nav ${menuOpen ? "show" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`gui-nav-link ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <span
            className="" style={{cursor: "pointer"}}
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </span>

          <form onSubmit={searchBtn} className="gui-search-form">
            <input
              type="text"
              placeholder="Search your component..."
              className="gui-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </nav>

      <main className="gui-main-content pt-16 px-4">{children}</main>
    </div>
  );
}

export default Layout;
