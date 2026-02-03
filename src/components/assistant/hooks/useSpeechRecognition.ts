import { useCallback, useState } from "react";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

type Options = {
  lang?: string;
  onTranscript: (transcript: string) => void;
  onError?: (err: unknown) => void;
};

export function useSpeechRecognition({ lang = "en-US", onTranscript, onError }: Options) {
  const [isListening, setIsListening] = useState(false);

  const startListening = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      onError?.(new Error("Speech recognition not supported in this browser."));
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = lang;

    setIsListening(true);

    recognition.onresult = (e: any) => {
      const transcript = e.results?.[0]?.[0]?.transcript ?? "";
      onTranscript(transcript);
      setIsListening(false);
    };

    recognition.onerror = (e: any) => {
      onError?.(e);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  }, [lang, onTranscript, onError]);

  return { startListening, isListening };
}
