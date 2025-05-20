'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function Register() {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  async function submitHandler(e) {
    e.preventDefault();
    const fd = new FormData(e.target);

    const data = {
      first_name: fd.get('firstName'),
      last_name: fd.get('lastName'),
      username: fd.get('username'),
      email: fd.get('email'),
      password: fd.get('password'),
      confirmPassword: fd.get('confirmPassword'),
    };

    if (data.password !== data.confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/account/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: data.first_name,
          last_name: data.last_name,
          username: data.username,
          email: data.email,
          password: data.password
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Registration successful!");
        setMessageType("success");
        e.target.reset();
      } else {
        const errors = Object.values(result).flat().join(' ');
        setMessage(errors || "Something went wrong.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Failed to register. Please try again later.");
      setMessageType("error");
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
      }}
    >
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-3xl p-5">
        <h2 className="mb-4 text-primary fw-bold">Create Your Account ✨</h2>
        <p className="text-muted mb-4">Join us today and manage your tasks like a pro.</p>

        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label fw-semibold">First Name</label>
            <input type="text" className="form-control" name="firstName" placeholder="John" required />
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">Username</label>
            <input type="text" className="form-control" name="username" placeholder="john_doe" required />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label fw-semibold">Last Name</label>
            <input type="text" className="form-control" name="lastName" placeholder="Doe" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
            <input type="email" className="form-control" name="email" placeholder="you@example.com" required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Create a password" required />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
            <input type="password" className="form-control" name="confirmPassword" placeholder="Re-enter your password" required />
          </div>

          <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" id="terms" required />
            <label className="form-check-label text-muted" htmlFor="terms">
              I agree to the <a href="#" className="text-primary">terms & conditions</a>
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Create Account
          </button>

          {message && (
            <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'} mt-2`}>
              {message}
            </div>
          )}
        </form>

        <p className="mt-4 mb-0 text-muted text-center">
          Already have an account? <a href="/login" className="text-decoration-none text-primary fw-semibold">Sign in</a>
        </p>
      </div>
    </div>
  );
}
