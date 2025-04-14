import React from "react";

const Contact = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name"> Name </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Your name"
          /> </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email"> Email </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="you@example.com"
          /> </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="message"> Message </label>
          <textarea
            id="message"
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-ecoDarkGreen bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md transition"
        >
          send
        </button>
      </form>
    </div>
  );
};

export default Contact;