import React from "react";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="max-w-4xl mx-auto text-center mt-20 px-6">
        <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn more about our mission, values, and the purpose behind this
          Employee Management System.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto mt-16 px-6 grid md:grid-cols-2 gap-10">

        {/* Left - Mission */}
        <div className="bg-white shadow rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800">🌟 Our Mission</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Our mission is to simplify employee management by creating an easy,
            efficient, and user-friendly platform. We aim to help businesses
            track, store, and maintain employee records effortlessly.
          </p>
        </div>

        {/* Right - Vision */}
        <div className="bg-white shadow rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800">🚀 Our Vision</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            We envision a workplace where company data management becomes
            seamless, fast, and accessible — empowering teams to focus more on
            growth and less on manual administrative work.
          </p>
        </div>

        {/* Left - Why this project? */}
        <div className="bg-white shadow rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            🧑‍💻 Why This System?
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            This Employee Management System was created to demonstrate effective
            CRUD operations, UI responsiveness, routing structure, and modern
            frontend design — all built using React.js & Tailwind CSS.
          </p>
        </div>

        {/* Right - What we offer */}
        <div className="bg-white shadow rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800">💼 What We Offer</h2>
          <ul className="mt-3 text-gray-600 space-y-2 leading-relaxed">
            <li>✔ Simple employee registration</li>
            <li>✔ Organized record management</li>
            <li>✔ Clean, modern dashboard UI</li>
            <li>✔ Fast navigation and smooth UX</li>
            <li>✔ Scalable design for future features</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-6 text-center text-gray-500 border-t">
        © {new Date().getFullYear()} Employee Management — Built with React & Tailwind CSS.
      </footer>
    </div>
  );
};

export default AboutPage;
