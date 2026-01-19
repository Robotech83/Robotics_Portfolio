// pages/AIAssistantPage.tsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Mic, Send, Bot, Volume2 } from "lucide-react";

import { getResponse } from "../components/CoreResponse";
import { defaultPersonality } from "../components/personalities/DefaultBot";
import { friendlyPersonality } from "../components/personalities/FriendlyBot";
import { sarcasticPersonality } from "../components/personalities/SarcasticBot";
import { robotButlerPersonality } from "../components/personalities/RobotButler";
import  { type  PersonalityFn } from "../components/personalities/types";
import "../styles/aiassistant.css";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

// Create a map of personality functions
const personalityMap: Record<string, PersonalityFn> = {
  "default": defaultPersonality,
  "friendly": friendlyPersonality,
  "sarcastic": sarcasticPersonality,
  "butler": robotButlerPersonality
};

export default function AIAssistantPage() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState<string[]>([
    "AI: Hello! I'm your AI assistant."
  ]);

  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [personality, setPersonality] = useState<string>("default");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Speak
  const speak = (text: string) => {
    if (!window.speechSynthesis) return;
    setIsSpeaking(true);

    const utter = new SpeechSynthesisUtterance(text);
    utter.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utter);
  };

  // Submit text
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Get the current personality function
    const personalityFn = personalityMap[personality] || defaultPersonality;
    const response = getResponse(inputText, personalityFn);

    setMessages(prev => [
      ...prev,
      `You: ${inputText}`,
      `AI: ${response}`
    ]);

    speak(response);
    setInputText("");
  };

  // Voice input
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    setIsListening(true);

    recognition.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;
      const personalityFn = personalityMap[personality] || defaultPersonality;
      const response = getResponse(transcript, personalityFn);

      setMessages(prev => [
        ...prev,
        `You (voice): ${transcript}`,
        `AI: ${response}`
      ]);

      speak(response);
      setIsListening(false);
    };

    recognition.start();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="aiassistant-page">
      <button onClick={() => navigate("/control-hub")}>
        ← Control Hub
      </button>

      <h1>AI Assistant</h1>

      {/* Personality Selector */}
      <select
        value={personality}
        onChange={e => setPersonality(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="friendly">Friendly</option>
        <option value="sarcastic">Sarcastic</option>
        <option value="butler">Robot Butler</option>
      </select>

      {/* Messages */}
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i}>{m}</div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit}>
        <input
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Say something..."
        />
        <button type="submit">
          <Send size={18} />
        </button>
      </form>

      {/* Controls */}
      <button onClick={startListening} disabled={isListening}>
        <Mic size={20} />
      </button>

      {isSpeaking && <Volume2 size={18} />}
    </div>
  );
}