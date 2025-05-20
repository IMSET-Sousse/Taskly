import Image from "next/image";

export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
      
      }}
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header Section */}
       <div className="text-center">
  <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
    About Us
  </h1>
  <p className="text-lg text-white">
    Learn more about who we are, our mission, and what drives our work.
  </p>
</div>


        {/* About Section */}
        <div className="bg-white shadow-xl rounded-3xl p-8 space-y-8">
          {/* Who We Are */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              We are a passionate team of developers and designers dedicated to
              building intuitive and powerful productivity tools. With years of
              experience in crafting clean and user-friendly web apps, our mission
              is to simplify the way people organize and achieve their goals.
            </p>
          </section>

          {/* Our Mission */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower users through elegant and efficient task
              management. We believe technology should reduce stress—not add to it.
              Every feature we build is centered around clarity, speed, and simplicity.
            </p>
          </section>

          {/* What We Offer */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
            <ul className="space-y-3 list-disc list-inside text-gray-600">
              <li>
                <strong className="text-gray-800">Modern UI:</strong> Clean, responsive interface built with accessibility in mind.
              </li>
              <li>
                <strong className="text-gray-800">Smart Features:</strong> Task reminders, project grouping, and performance tracking.
              </li>
              <li>
                <strong className="text-gray-800">Cloud Sync:</strong> Secure access to your tasks from any device, anywhere.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
