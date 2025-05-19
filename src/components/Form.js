import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Form.css';

const Contact = () => {
  const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm(
    'service_ovji0r2',
    'template_607h2af',
    e.target,
    'jGQ3Avy14oYvZ1Kq_'
  )
  .then((result) => {
    alert('Message sent successfully!');
  }, (error) => {
    console.error('Error sending email:', error.text);
  });
};

  
  return (
    <section id="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">Have a project in mind or just want to say hello? Fill out the form below!</p>

    <form ref={form} onSubmit={sendEmail} className="form">
  <label className="label">Your Name</label>
  <input type="text" name="from_name" placeholder="Your Name" required />

  <label className="label">Your Email</label>
  <input type="email" name="from_email" placeholder="Your Email" required />

  <label className="label">Subject</label>
  <input type="text" name="subject" placeholder="Subject" required />

  <label className="label">Your Message</label>
  <textarea name="message" placeholder="Your Message" rows="6" required></textarea>

  <button type="submit">Send Message</button>
</form>

    </section>
  );
};

export default Contact;
