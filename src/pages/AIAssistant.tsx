// src/pages/AIAssistant.tsx
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Mic, Send, Volume2 } from "lucide-react";

import { getResponse } from "../components/CoreResponse";
import { defaultPersonality } from "../components/personalities/DefaultBot";
import { friendlyPersonality } from "../components/personalities/FriendlyBot";
import { sarcasticPersonality } from "../components/personalities/SarcasticBot";
import { robotButlerPersonality } from "../components/personalities/RobotButler";
import { type PersonalityFn } from "../components/personalities/types";

import "../styles/aiassistant.css";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

/**
 * All personalities are FUNCTIONS.
 * Each function decides how the AI responds.
 */
const personalityMap: Record<string, PersonalityFn> = {
  default: defaultPersonality,
  friendly: friendlyPersonality,
  sarcastic: sarcasticPersonality,
  butler: robotButlerPersonality,
};

export default function AIAssistantPage() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState<string[]>([
    "AI: Hello! I'm your AI assistant.",
  ]);

  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [personalityKey, setPersonalityKey] = useState("default");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  /** Speak text using browser TTS */
  const speak = (text: string) => {
    if (!window.speechSynthesis) return;

    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  /** Get the active personality function */
  const getActivePersonality = (): PersonalityFn => {
    return personalityMap[personalityKey] ?? defaultPersonality;
  };

  /** Handle text submit */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const personalityFn = getActivePersonality();
    const response = getResponse(inputText, personalityFn);

    setMessages((prev) => [
      ...prev,
      `You: ${inputText}`,
      `AI: ${response}`,
    ]);

    speak(response);
    setInputText("");
  };

  /** Handle voice input */
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    setIsListening(true);

    recognition.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;

      const personalityFn = getActivePersonality();
      const response = getResponse(transcript, personalityFn);

      setMessages((prev) => [
        ...prev,
        `You (voice): ${transcript}`,
        `AI: ${response}`,
      ]);

      speak(response);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  /** Auto-scroll chat */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="aiassistant-page">
      <button onClick={() => navigate("/control-hub")}>← Control Hub</button>

      <h1>AI Assistant</h1>

      {/* Personality Selector */}
      <select
        value={personalityKey}
        onChange={(e) => setPersonalityKey(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="friendly">Friendly</option>
        <option value="sarcastic">Sarcastic</option>
        <option value="butler">Robot Butler</option>
      </select>

      {/* Messages */}
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Text Input */}
      <form onSubmit={handleSubmit}>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Say something..."
        />
        <button type="submit">
          <Send size={18} />
        </button>
      </form>

      {/* Voice Control */}
      <button onClick={startListening} disabled={isListening}>
        <Mic size={20} />
      </button>

      {isSpeaking && <Volume2 size={18} />}
    </div>
  );
}
