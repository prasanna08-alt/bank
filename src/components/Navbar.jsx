import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/accounts', label: 'Accounts' },
  { to: '/cards', label: 'Cards' },
  { to: '/loans', label: 'Loans' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <svg className="brand-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C16 2 22 9 22 15.5C22 19.6 19.3 23 16 23C12.7 23 10 19.6 10 15.5C10 9 16 2 16 2Z" fill="#E3A438"/>
            <path d="M16 23V30" stroke="#1E2A47" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16 27L11 24" stroke="#1E2A47" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16 27L21 24" stroke="#1E2A47" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Larkspur Bank
        </Link>

        <nav className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="nav-login">Log in</Link>
          <Link to="/signup" className="btn btn-primary">Open an account</Link>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-panel ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link to="/login" onClick={() => setOpen(false)}>Log in</Link>
        <div className="mobile-cta">
          <Link to="/signup" className="btn btn-primary btn-block" onClick={() => setOpen(false)}>
            Open an account
          </Link>
        </div>
      </div>
    </header>
  )
}
