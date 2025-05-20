import Image from "next/image";

export default function About() {
  return (
    <div className="container-fluid bg-light p-5">
      <div className="row">
        {/* Header Section */}
        <div className="col-12 text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">About Us</h1>
          <p className="lead text-muted">
            Learn more about who we are, our mission, and what drives our work.
          </p>
        </div>

        {/* About the Company */}
        <div className="col-12 col-lg-10 mx-auto bg-white p-4 rounded shadow-sm mb-5">
          <h2 className="h4 text-dark mb-3">Who We Are</h2>
          <p className="text-muted">
            We are a passionate team of developers and designers dedicated to
            building intuitive and powerful productivity tools. With years of experience
            in crafting clean and user-friendly web apps, our mission is to simplify
            the way people organize and achieve their goals.
          </p>

          <h2 className="h4 mt-4 text-dark mb-3">Our Mission</h2>
          <p className="text-muted">
            Our mission is to empower users through elegant and efficient task
            management. We believe technology should reduce stress—not add to it.
            Every feature we build is centered around clarity, speed, and simplicity.
          </p>

          <h2 className="h4 mt-4 text-dark mb-3">What We Offer</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Modern UI:</strong> Clean, responsive interface built with accessibility in mind.
            </li>
            <li className="list-group-item">
              <strong>Smart Features:</strong> Task reminders, project grouping, and performance tracking.
            </li>
            <li className="list-group-item">
              <strong>Cloud Sync:</strong> Secure access to your tasks from any device, anywhere.
            </li>
          </ul>

          {/* Optional Image or Illustration */}
          <div className="text-center mt-5">
            <Image
              src="/team-illustration.png" // Replace with your actual image path
              alt="Team Illustration"
              width={600}
              height={350}
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Contact or Footer-like Section */}
        <div className="col-12 text-center text-muted">
          <p className="mb-0">
            Want to collaborate or learn more? <a href="/contact" className="text-decoration-none text-primary fw-semibold">Get in touch</a>
          </p>
        </div>
      </div>
    </div>
  );
}
