'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkAuth();

    // Listen for login/logout events
    window.addEventListener('authChange', checkAuth);

    return () => {
      window.removeEventListener('authChange', checkAuth);
    };
  }, [pathname]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top shadow">
      <div className="container">
        <div className="d-flex me-auto">
          <a className="navbar-brand text-white me-3" href="/">Home</a>
        </div>

        <div className="d-flex ms-auto">
          <a className="navbar-brand text-white me-3" href="/about">About</a>

          {/* Conditionally render the 'My Todos' link */}
          {isLoggedIn && (
            <a className="navbar-brand text-white me-3" href="/mytodos">My Taskly</a>
          )}

          {isLoggedIn ? (
            <a className="navbar-brand text-white me-3" href="/logout">Logout</a>
          ) : (
            <a className="navbar-brand text-white me-3" href="/login">Login</a>
          )}
        </div>
      </div>
    </nav>
  );
}
