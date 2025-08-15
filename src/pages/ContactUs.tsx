import React, { useState } from 'react';


const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-2">Have questions or need support? Reach out to us!</p>
      <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          required
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          required
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-2 border rounded"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit" className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500">Send Message</button>
      </form>
      {submitted && (
        <div className="mt-4 text-green-500 font-semibold animate-fade-in">We will reach out within 24 hours.</div>
      )}
    </div>
  );
};

export default ContactUs;
