import { useEffect, useRef } from "react";

type Props = {
  messages: string[];
};

export function MessageList({ messages }: Props) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="messages">
      {messages.map((msg, i) => (
        <div key={i}>{msg}</div>
      ))}
      <div ref={endRef} />
    </div>
  );
}
