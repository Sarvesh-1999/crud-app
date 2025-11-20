import React from "react";
import Navbar from "../components/Navbar";

const ContactsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Page Header */}
      <section className="max-w-4xl mx-auto text-center mt-20 px-6">
        <h1 className="text-5xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Have questions or need support? Feel free to reach out to us anytime.
        </p>
      </section>

      {/* Contact Details + Form */}
      <section className="max-w-6xl mx-auto mt-16 px-6 grid md:grid-cols-2 gap-12">

        {/* Left - Contact Information */}
        <div className="bg-white shadow rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800">📞 Contact Information</h2>

          <ul className="mt-4 text-gray-600 space-y-4">
            <li>
              <span className="font-medium text-gray-800">Email:</span> support@ems.com
            </li>
            <li>
              <span className="font-medium text-gray-800">Phone:</span> +91 98765 43210
            </li>
            <li>
              <span className="font-medium text-gray-800">Address:</span>
              <p className="text-gray-600">
                4th Floor, Tech Park Tower,
                <br /> Bengaluru, Karnataka, India
              </p>
            </li>
          </ul>

          <h3 className="mt-6 text-xl font-semibold text-gray-800">🌐 Follow Us</h3>
          <div className="flex gap-4 mt-3 text-blue-600 text-xl">
            <a href="#" className="hover:text-blue-800">🌍</a>
            <a href="#" className="hover:text-blue-800">📘</a>
            <a href="#" className="hover:text-blue-800">🐦</a>
            <a href="#" className="hover:text-blue-800">📸</a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white shadow rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800">✉️ Send Us a Message</h2>

          <form className="mt-6 space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-500 outline-none"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-6 text-center text-gray-500 border-t">
        © {new Date().getFullYear()} Employee Management — We’re here to help.
      </footer>
    </div>
  );
};

export default ContactsPage;
