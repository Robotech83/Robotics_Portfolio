import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/aiassistant.css";

import { getResponse } from "../components/assistant/CoreResponse";
import { type PersonalityFn } from "../components/assistant/personalities/types";
import { defaultPersonality } from "../components/assistant/personalities/DefaultBot";

import { AssistantHeader } from "../components/assistant/AssistantHeader";
import { PersonalitySelect } from "../components/assistant/PersonalitySelect";
import { MessageList } from "../components/assistant/MessageList";
import { ChatInput } from "../components/assistant/ChatInput";
import { VoiceControl } from "../components/assistant/VoiceControl";

import {
  personalityMap,
  personalityOptions,
} from "../components/assistant/data/personalities";

import type { PersonalityKey } from "../components/assistant/data/types";
import { useTextToSpeech } from "../components/assistant/hooks/useTextToSpeech";
import { useSpeechRecognition } from "../components/assistant/hooks/useSpeechRecognition";

export default function AIAssistantPage() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState<string[]>([
    "AI: Hello! I'm Sonny. Pick a command below or type your own.",
  ]);

  const [inputText, setInputText] = useState("");
  const [personalityKey, setPersonalityKey] =
    useState<PersonalityKey>("default");

  const activePersonality: PersonalityFn = useMemo(() => {
    return personalityMap[personalityKey] ?? defaultPersonality;
  }, [personalityKey]);

  const { speak, isSpeaking } = useTextToSpeech();

  const respond = (userText: string, source: "text" | "voice") => {
    const cleaned = userText.trim();

    if (!cleaned) return;

    const response = getResponse(cleaned, activePersonality);

    setMessages((prev) => [
      ...prev,
      source === "voice" ? `You (voice): ${cleaned}` : `You: ${cleaned}`,
      `AI: ${response}`,
    ]);

    speak(response);
  };

  const handleTextSubmit = () => {
    respond(inputText, "text");
    setInputText("");
  };

  const handlePromptClick = (prompt: string) => {
    setInputText(prompt);
  };

  const { startListening, isListening, isSupported } = useSpeechRecognition({
  lang: "en-US",
  onTranscript: (transcript) => respond(transcript, "voice"),
  onError: () => {
    setMessages((prev) => [
      ...prev,
      "AI: Voice recognition is not supported in this browser. Please use the text box instead.",
    ]);
  },
});

  return (
    <main className="aiassistant-page">
      <AssistantHeader onBack={() => navigate("/control-hub")} />

      <PersonalitySelect
        value={personalityKey}
        onChange={setPersonalityKey}
        options={personalityOptions}
      />

      <section className="assistant-help-panel">
        <h2>Try Asking Sonny</h2>

        <p className="assistant-help-subtitle">
          Click a prompt below or type your own command.
        </p>

        <div className="assistant-command-grid">
          <button onClick={() => handlePromptClick("What can you do?")}>
            What can you do?
          </button>

          <button onClick={() => handlePromptClick("Tell me about Sonny OS")}>
            Tell me about Sonny OS
          </button>

          <button onClick={() => handlePromptClick("What is your mission?")}>
            What is your mission?
          </button>

          <button onClick={() => handlePromptClick("Who created you?")}>
            Who created you?
          </button>

          <button onClick={() => handlePromptClick("Change to villain mode")}>
            Change to villain mode
          </button>

          <button onClick={() => handlePromptClick("Tell me a robotics joke")}>
            Tell me a robotics joke
          </button>

          <button onClick={() => handlePromptClick("What hardware do you use?")}>
            What hardware do you use?
          </button>

          <button onClick={() => handlePromptClick("How does your vision work?")}>
            How does your vision work?
          </button>
        </div>
      </section>

      <MessageList messages={messages} />

      <ChatInput
        value={inputText}
        onChange={setInputText}
        onSubmit={handleTextSubmit}
      />

      <VoiceControl
        onListen={startListening}
        isListening={isListening}
        isSpeaking={isSpeaking}
        isSupported={isSupported}
/>
    </main>
  );
}