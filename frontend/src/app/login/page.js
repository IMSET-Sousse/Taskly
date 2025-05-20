'use client';

import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    const fd = new FormData(e.target);

    const data = {
      username: fd.get('username'),
      password: fd.get('password'),
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/account/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Login successful! 🎉");
        setMessageType("success");

        if (result.token) {
          localStorage.setItem('token', result.token); // ✅ Use consistent key
          window.dispatchEvent(new Event('authChange')); // ✅ Notify Header

          setTimeout(() => {
            router.push('/');
          }, 1000);
        }
      } else {
        const errors = typeof result === 'object'
          ? Object.values(result).flat().join(' ')
          : "Invalid credentials";
        setMessage(errors);
        setMessageType("error");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Something went wrong. Try again.");
      setMessageType("error");
    }
  }

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row shadow-lg rounded overflow-hidden bg-white w-100" style={{ maxWidth: "900px" }}>
        
        {/* Left Column: Illustration */}
        <div className="col-md-6 d-none d-md-flex p-0">
          <Image
            src="/login.jpg"
            alt="Login Illustration"
            width={600}
            height={600}
            className="img-fluid h-100 w-100 object-fit-cover"
          />
        </div>

        {/* Right Column: Login Form */}
        <div className="col-md-6 p-5">
          <h2 className="mb-4 text-primary fw-bold">Welcome Back 👋</h2>
          <p className="text-muted mb-4">Please enter your credentials to access your account.</p>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-semibold">Username</label>
              <input type="text" name="username" className="form-control" id="username" placeholder="your_username" required />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">Password</label>
              <input type="password" name="password" className="form-control" id="password" placeholder="Enter your password" required />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="remember" />
                <label className="form-check-label" htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="text-primary text-decoration-none">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">
              Sign In
            </button>

            {message && (
              <div className={`alert mt-2 ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`}>
                {message}
              </div>
            )}
          </form>

          <p className="mt-4 mb-0 text-muted text-center">
            Don't have an account? <a href="/register" className="text-decoration-none text-primary fw-semibold">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}
