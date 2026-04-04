import '../styles/ContactTerminal.css';
import { useState } from 'react';

export function ContactTerminal() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseText, setResponseText] = useState('');
  const [isSending, setIsSending] = useState(false);

  const responses = [
    "Sonny: Message received...\nSonny: Logging interaction...\nSonny: I will respond shortly.",
    "Sonny: Signal received...\nSonny: Human message stored...\nSonny: Awaiting next interaction.",
    "Sonny: Transmission successful...\nSonny: Reviewing communication...\nSonny: Response pending.",
    "Sonny: Contact established...\nSonny: Message archived...\nSonny: Stay awesome, human.",
    "Sonny: Message received...\nSonny: I am watching.\nSonny: Carefully."
  ];

  const typeEffect = (text: string, speed = 30) => {
    let i = 0;
    setResponseText('');

    const interval = setInterval(() => {
      setResponseText((prev) => prev + text.charAt(i));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setResponseText('');

    try {
      const response = await fetch('https://formspree.io/f/mpqojvzr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setEmail('');
      setMessage('');

      typeEffect('Sonny: Processing transmission...\n', 35);

      setTimeout(() => {
        const randomResponse =
          responses[Math.floor(Math.random() * responses.length)];
        typeEffect(randomResponse, 25);
      }, 1200);
    } catch (error) {
      typeEffect(
        'Sonny: ERROR...\nSonny: Transmission failed.\nSonny: Please try again.',
        25
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Terminal</h2>

      <form className="terminal-box" onSubmit={handleSubmit}>
        <p>&gt; connect --email</p>

        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          className="terminal-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <button
          type="submit"
          className="terminal-button"
          disabled={isSending}
        >
          {isSending ? '> transmitting...' : '> transmit_message()'}
        </button>

        {responseText && (
          <pre className="terminal-response">
            {responseText}
            <span className="cursor">█</span>
          </pre>
        )}
      </form>
    </section>
  );
}