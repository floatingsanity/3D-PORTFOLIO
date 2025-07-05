
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Particles } from '../components/Particles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("form submitted", formData);

      await emailjs.send(
         "service_ctglhdj", "template_v3jze1f",
        {
          form_name: formData.name,
          to_name: "Feda",
          from_email: formData.email,
          to_email: "fedaalmodhi@gmail.com",
          message: formData.message,
        },
        "wfsp1y9E46GY3ZZGn" 
      );

      alert("Success! Message sent.");
      setFormData({ name: "", email: "", message: "" }); 
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
        <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're hiring, collaborating, or just exploring ideas, I'm always open to work,
            internships, side projects, or creative friendships. I build with passion and I love
            hearing from people who care about art and innovation.
          </p>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Full Name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="field-label">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="you@example.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="field-label">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="field-input field-input-focus min-h-[120px]"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your idea..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 mt-2 text-white transition duration-300 rounded-lg bg-[#870066] hover:bg-[#F719CC]"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;