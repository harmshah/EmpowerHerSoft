import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/Logo.jpg';

export default function Navbar(props) {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
    const navbarCollapse = document.getElementById('navbarSupportedContent');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse && navbarCollapse.classList.contains('show')) {
          bsCollapse.hide(); // Close the navbar
        }
      });
    });

    // Cleanup (important!)
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
      <div className="container-fluid">
        {/* <Link className="navbar-brand d-flex align-items-center custom-title" to="/">
          {props.title}
        </Link> */}

        <Link className="navbar-brand d-flex align-items-center custom-title" to="/">
          <img
            src={Logo}  // Replace with your actual image path like '/images/logo.png'
            alt="Logo"
            style={{ height: '30px', width: '30px', marginRight: '10px' }}
          />
          {/* {props.title} */}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon custom-toggler-icon">

          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {[
              { path: '/', label: 'Home' },
              { path: '/whoweempower', label: 'Who We Empower' },
              { path: '/corevalues', label: 'Core Values' },
              { path: '/signatureprograms', label: 'Signature Programs' },
              { path: '/wallofhonor', label: 'Wall of Honor' },
              { path: '/about', label: 'About Us' }
            ].map(link => (
              <li className="nav-item" key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active-link' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};
