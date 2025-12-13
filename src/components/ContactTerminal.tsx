import '../styles/ContactTerminal.css';

export function ContactTerminal() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Terminal</h2>

      <div className="terminal-box">
        <p>&gt; connect --email</p>
        <input
          className="terminal-input"
          placeholder="Type your message..."
        />
      </div>
    </section>
  );
}
