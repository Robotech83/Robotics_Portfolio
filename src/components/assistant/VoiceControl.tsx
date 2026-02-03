import { Mic, Volume2 } from "lucide-react";

type Props = {
  onListen: () => void;
  isListening: boolean;
  isSpeaking: boolean;
};

export function VoiceControl({ onListen, isListening, isSpeaking }: Props) {
  return (
    <>
      <button onClick={onListen} disabled={isListening}>
        <Mic size={20} />
      </button>

      {isSpeaking && <Volume2 size={18} />}
    </>
  );
}
