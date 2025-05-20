'use client';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing icons from react-icons

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Left Section: About Us */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase font-weight-bold">About Us</h5>
            <p>
              We are a leading company in the tech industry, providing solutions
              that help people achieve their goals. With over 10 years of
              experience, we focus on quality and customer satisfaction.
            </p>
          </div>

          {/* Middle Section: Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase font-weight-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">About</a></li>
              <li><a href="#" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#" className="text-white text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Right Section: Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase font-weight-bold">Contact Info</h5>
            <p>1234 Street Name, City, Country</p>
            <p>Email: contact@company.com</p>
            <p>Phone: +123 456 789</p>

            {/* Social Icons */}
            <h5 className="mt-3 text-uppercase font-weight-bold">Follow Us</h5>
            <div>
              <a href="#" className="text-white me-3"><FaFacebook size={24} /></a>
              <a href="#" className="text-white me-3"><FaTwitter size={24} /></a>
              <a href="#" className="text-white me-3"><FaLinkedin size={24} /></a>
              <a href="#" className="text-white"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-4">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
