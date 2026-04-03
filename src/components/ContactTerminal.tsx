import '../styles/ContactTerminal.css';
import { useState } from 'react';

export function ContactTerminal() {
  const [message, setMessage] = useState('');

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Terminal</h2>

      <form
        className="terminal-box"
        action="https://formspree.io/f/mpqojvzr"
        method="POST"
      >
        <p>&gt; connect --email</p>

        <input
          type="email"
          name="email"
          placeholder="Your email..."
          className="terminal-input"
          required
        />


        <textarea
          name="message"
          className="terminal-input"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit" className="terminal-button">
          initiate_contact_protocol()
        </button>
      </form>
    </section>
  );
}