import React, { useEffect, useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

interface DetectorProps {
  title: string;
  highlightColor?: string;
}

export default function ObjectDetectionCanvas({
  title,
  highlightColor = "#00ffc8",
}: DetectorProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [model, setModel] = useState<cocoSsd.ObjectDetection | null>(null);

  // Load model
  useEffect(() => {
    cocoSsd.load().then((loadedModel) => {
      setModel(loadedModel);
      console.log("Model Loaded");
    });
  }, []);

  // Start webcam
  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error(err));
    }
  }, []);

// Detect objects continuously (safe)
useEffect(() => {
  if (!model) return;

  let rafId = 0;
  let stopped = false;

  const loop = async () => {
    if (stopped) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    // ✅ Guard: webcam not ready yet
    if (
      !video ||
      !canvas ||
      video.readyState < 2 || // HAVE_CURRENT_DATA
      video.videoWidth === 0 ||
      video.videoHeight === 0
    ) {
      rafId = requestAnimationFrame(loop);
      return;
    }

    await detectFrame(); // safe now
    rafId = requestAnimationFrame(loop);
  };

  rafId = requestAnimationFrame(loop);

  return () => {
    stopped = true;
    cancelAnimationFrame(rafId);
  };
}, [model]);

const detectFrame = async () => {
  if (!model || !canvasRef.current || !videoRef.current) return;

  const video = videoRef.current;

  // ✅ Guard again (extra safety)
  if (video.videoWidth === 0 || video.videoHeight === 0) return;

  const predictions = await model.detect(video);

  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  predictions.forEach((pred) => {
    const [x, y, w, h] = pred.bbox;

    ctx.strokeStyle = highlightColor;
    ctx.lineWidth = 3;
    ctx.strokeRect(x, y, w, h);

    ctx.fillStyle = highlightColor;
    ctx.font = "18px monospace";
    ctx.fillText(`${pred.class} (${Math.round(pred.score * 100)}%)`, x, y - 5);
  });
  
}; // <-- closes detectFrame

  return (
    <div className="detect-page">
      <h1 className="detect-title">{title}</h1>

      <div className="detect-wrapper">
        <video ref={videoRef} autoPlay playsInline className="video-feed" />
        <canvas ref={canvasRef} className="overlay-canvas" />
      </div>
    </div>
  );
} // <-- closes component
