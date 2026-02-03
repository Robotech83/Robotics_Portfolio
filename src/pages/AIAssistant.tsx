import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/aiassistant.css";

import { getResponse } from "../components/CoreResponse";
import { defaultPersonality } from "../components/personalities/DefaultBot";
import { type PersonalityFn } from "../components/personalities/types";

import { AssistantHeader } from "../components/assistant/AssistantHeader";
import { PersonalitySelect } from "../components/assistant/PersonalitySelect";
import { MessageList } from "../components/assistant/MessageList";
import { ChatInput } from "../components/assistant/ChatInput";
import { VoiceControl } from "../components/assistant/VoiceControl";

import { personalityMap, personalityOptions } from "../components/assistant/data/personalities";
import type { PersonalityKey } from "../components/assistant/types";
import { useTextToSpeech } from "../components/assistant/hooks/useTextToSpeech";
import { useSpeechRecognition } from "../components/assistant/hooks/useSpeechRecognition";

export default function AIAssistantPage() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState<string[]>(["AI: Hello! I'm your AI assistant."]);
  const [inputText, setInputText] = useState("");
  const [personalityKey, setPersonalityKey] = useState<PersonalityKey>("default");

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

  const { startListening, isListening } = useSpeechRecognition({
    lang: "en-US",
    onTranscript: (t) => respond(t, "voice"),
    onError: () => alert("Speech recognition not supported in this browser."),
  });

  return (
    <div className="aiassistant-page">
      <AssistantHeader onBack={() => navigate("/control-hub")} />

      <PersonalitySelect value={personalityKey} onChange={setPersonalityKey} options={personalityOptions} />

      <MessageList messages={messages} />

      <ChatInput
        value={inputText}
        onChange={setInputText}
        onSubmit={() => {
          respond(inputText, "text");
          setInputText("");
        }}
      />

      <VoiceControl onListen={startListening} isListening={isListening} isSpeaking={isSpeaking} />
    </div>
  );
}
