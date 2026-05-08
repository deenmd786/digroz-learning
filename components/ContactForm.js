"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 md:p-10 bg-[#1a1c29] rounded-[2rem] shadow-2xl">
      <h2 className="text-center text-3xl font-bold text-white mb-8 tracking-wide">
        Send a Direct Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Top Grid: 2 Columns on Desktop, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Text Area */}
        <textarea
          name="message"
          placeholder="Message (Text Area)"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-5 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-green-400 text-center font-medium">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-center font-medium">Failed to send message. Please try again.</p>
        )}

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="px-10 py-3 rounded-full text-white font-bold tracking-wide transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed
                       bg-gradient-to-r from-[#7B8AE6] to-[#c48eec] shadow-lg"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}