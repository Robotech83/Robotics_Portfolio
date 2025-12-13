// pages/AIAssistantPage.tsx
import { useNavigate } from "react-router-dom"; 
import React, { useState, useEffect, useRef } from 'react';
import { Mic, Send, Bot, Volume2, Code } from 'lucide-react';

import RobotPersonalitySelector from "../components/RobotPersonalitySelector";

import DefaultBot from "../components/personalities/DefaultBot";
import FriendlyBot from "../components/personalities/FriendlyBot";
import SarcasticBot from "../components/personalities/SarcasticBot";
import RobotButler from "../components/personalities/RobotButler";



import "../styles/aiassistant.css";

// Required for browsers with prefixed Web Speech API
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export default function AIAssistantPage() {
  const navigate = useNavigate();

  // Personality state
  const [personality, setPersonality] = useState("default");

  // Personality mapping
  const personalities: any = {
    default: DefaultBot,
    friendly: FriendlyBot,
    sarcastic: SarcasticBot,
    butler: RobotButler,
  };

  // Chat system state
  const [messages, setMessages] = useState<string[]>([
    "Hi! I'm your portfolio AI assistant. Try typing or using voice!"
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Apply personality response generator
  const getResponse = (userInput: string): string => {
    const BotPersonality = personalities[personality];
    return BotPersonality(userInput);  
  };

  // Text-to-speech
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 0.8;

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  // Handle typed messages
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setMessages(prev => [...prev, `You: ${inputText}`]);

    const reply = getResponse(inputText);
    setMessages(prev => [...prev, `AI: ${reply}`]);

    speak(reply);
    setInputText('');
  };

  // Voice input handler
  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support voice recognition.");
      return;
    }

    setIsListening(true);
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);

      const reply = getResponse(transcript);
      setMessages(prev => [...prev, `You (voice): ${transcript}`, `AI: ${reply}`]);
      speak(reply);
    };

    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  // Auto-scroll chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="aiassistant-page">

      {/* Back Button */}
      <button 
        className="back-btn-top"
        onClick={() => navigate("/control-hub")}
      >
        ← Control Hub
      </button>

      <header className="ai-header">
        <h1 className="ai-title">AI Assistant Demo</h1>
        <p className="ai-subtitle">
          Interactive voice & text assistant with adjustable personality
        </p>
      </header>

      <div className="ai-demo-section">
        <div className="ai-demo-card">

          <h2>Live Assistant</h2>
          <p>Choose a personality & chat with the AI:</p>

          {/* PERSONALITY SELECTOR */}
          <RobotPersonalitySelector
            personality={personality}
            onPersonalityChange={setPersonality}
          />

          <div className="ai-assistant-container">
            <div className="assistant-window">

              {/* Chat messages */}
              <div className="messages-container">
                {messages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`message ${msg.startsWith('You') ? 'user-message' : 'ai-message'}`}
                  >
                    <div className="message-content">
                      <div className="message-text">
                        {msg}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input + controls */}
              <div className="input-area">

                <form onSubmit={handleSubmit} className="input-form">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type a message..."
                  />
                  <button type="submit" className="send-btn">
                    <Send size={18} />
                  </button>
                </form>

                <div className="controls">
                  <button
                    className={`voice-btn ${isListening ? 'active' : ''}`}
                    onClick={startListening}
                    disabled={isSpeaking}
                  >
                    <Mic size={20} />
                    {isListening ? "Listening..." : "Voice Input"}
                  </button>

                  <button
                    className="speak-btn"
                    onClick={() => {
                      const lastAi = messages.filter(m => m.startsWith("AI")).pop();
                      if (lastAi) speak(lastAi.replace("AI: ", ""));
                    }}
                  >
                    <Volume2 size={18} />
                    Repeat
                  </button>

                  <button
                    className="clear-btn"
                    onClick={() => setMessages([
                      "Hi! I'm your portfolio AI assistant. Try typing or using voice!"
                    ])}
                  >
                    Clear Chat
                  </button>
                </div>

                <div className="tech-badge">
                  <Code size={14} />
                  <span>React + TypeScript + Web Speech API</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
