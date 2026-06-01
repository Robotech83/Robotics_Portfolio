import { Mic, MicOff, Volume2 } from "lucide-react";

type Props = {
  onListen: () => void;
  isListening: boolean;
  isSpeaking: boolean;
  isSupported: boolean;
};

export function VoiceControl({
  onListen,
  isListening,
  isSpeaking,
  isSupported,
}: Props) {
  return (
    <div className="voice-control">
      <button
        onClick={onListen}
        disabled={isListening || !isSupported}
        title={
          isSupported
            ? "Start voice input"
            : "Voice recognition is not supported in this browser"
        }
      >
        {isSupported ? <Mic size={20} /> : <MicOff size={20} />}
      </button>

      {!isSupported && (
  <span className="voice-warning">
    Voice input works best in Chrome. Please use text input here.
  </span>
)}
      {isSpeaking && <Volume2 size={18} />}
    </div>
  );
}