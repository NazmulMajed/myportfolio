import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ilf0jqd", // ✅ Your Service ID
        "template_nczg5sh", // ✅ Your Template ID
        formData,
        "eukNjkANLcGY0Pw8P" // ✅ Your Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <div
      id="#Contact"
      className="w-full min-h-screen bg-black/95 text-white py-16 px-4 mt-4 mb-4"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">Contact Me</h2>
          <div>
            <h4 className="text-xl font-semibold">Phone Number:</h4>
            <p className="text-gray-300">+8801704865455</p>
            <p className="text-gray-300">+8801814122847</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Address:</h4>
            <p className="text-gray-300">Dhaka, Bangladesh</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Email:</h4>
            <p className="text-gray-300 hover:text-green-500 cursor-pointer">
              nazmul15-13911@diu.edu.bd
            </p>
            <p className="text-gray-300 hover:text-green-500 cursor-pointer">
              nazmulmajedns@outlook.com
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-8 space-y-6 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-black mb-4">
              How can I help you?
            </h3>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="border border-gray-300 p-3 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="border border-gray-300 p-3 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="border border-gray-300 p-3 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              className="border border-gray-300 p-3 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-md font-semibold transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
