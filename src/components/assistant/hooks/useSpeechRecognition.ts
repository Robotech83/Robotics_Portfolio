import { useCallback, useMemo, useState } from "react";

declare global {
  interface Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

type Options = {
  lang?: string;
  onTranscript: (transcript: string) => void;
  onError?: (err: unknown) => void;
};

export function useSpeechRecognition({
  lang = "en-US",
  onTranscript,
  onError,
}: Options) {
  const [isListening, setIsListening] = useState(false);

  const SpeechRecognition = useMemo(() => {
    return window.SpeechRecognition || window.webkitSpeechRecognition;
  }, []);

  const isSupported = Boolean(SpeechRecognition);

  const startListening = useCallback(() => {
    if (!SpeechRecognition) {
      onError?.(new Error("Speech recognition is not supported in this browser."));
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = lang;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);

    recognition.onresult = (e: any) => {
      const transcript = e.results?.[0]?.[0]?.transcript ?? "";
      onTranscript(transcript);
    };

    recognition.onerror = (e: any) => {
      console.error("Speech recognition error:", e);
      onError?.(e);
      setIsListening(false);
    };

    recognition.onend = () => setIsListening(false);

    recognition.start();
  }, [SpeechRecognition, lang, onTranscript, onError]);

  return { startListening, isListening, isSupported };
}