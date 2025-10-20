import React, { useRef } from 'react';
import { Link } from "react-router-dom";



function EmailForm() {
  const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then(() => alert("Message sent!"))
      .catch((err) => alert("Failed to send: " + err.text));
  };
<>


  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto mt-4">
      <input type="text" name="name" placeholder="Your Name" className="border p-2 w-full mb-2" required />
      <input type="email" name="email" placeholder="Your Email" className="border p-2 w-full mb-2" required />
      <textarea name="message" placeholder="Your Message" className="border p-2 w-full mb-2" required />
      <button type="submit" className="bg-black text-white py-2 px-4 rounded hover:bg-pink-600">Send</button>
    </form>
  );
  </>
}

export default EmailForm;
