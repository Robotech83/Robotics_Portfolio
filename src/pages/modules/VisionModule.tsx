import { useState, useRef, useEffect } from "react";
import "../../styles/modules/visionmodule.css"; 

export default function VisionModule() {
  // State for camera feed and controls
  const [cameraState, setCameraState] = useState({
    isActive: false,           // Whether camera feed is running
    brightness: 50,            // Brightness level (0-100)
    contrast: 50,              // Contrast level (0-100)
    saturation: 50,            // Saturation level (0-100)
    zoom: 100,                 // Zoom level (100% = normal)
    exposure: 0,               // Exposure compensation (-2 to +2)
    resolution: "1280x720",    // Current camera resolution
    fps: 30,                   // Frames per second
  });

  // State for image processing options
  const [processingOptions, setProcessingOptions] = useState({
    grayscale: false,          // Convert to grayscale
    blur: 0,                   // Blur intensity (0-10)
    sharpen: 0,                // Sharpen intensity (0-10)
    edgeDetection: false,      // Apply edge detection
    invertColors: false,       // Invert image colors
    hueRotate: 0,              // Hue rotation (0-360)
    detectionEnabled: true,    // Enable object detection
    trackingEnabled: false,    // Enable object tracking
  });

  // State for object detection results
  const [detectedObjects, _setDetectedObjects] = useState([
    { id: 1, label: "person", confidence: 0.95, x: 120, y: 80, width: 60, height: 120 },
    { id: 2, label: "cup", confidence: 0.87, x: 300, y: 200, width: 40, height: 50 },
    { id: 3, label: "keyboard", confidence: 0.92, x: 150, y: 250, width: 200, height: 40 },
  ]);

  // State for camera devices and settings
  const [cameraDevices, setCameraDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedCamera, setSelectedCamera] = useState<string>("");
  
  // References for video element and canvas
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Available resolutions for camera
  const resolutions = [
    "640x480",
    "1280x720", 
    "1920x1080",
    "3840x2160"
  ];

  // Available FPS options
  const fpsOptions = [15, 30, 60, 120];

  // Effect to get available camera devices when component mounts
  useEffect(() => {
    const getCameras = async () => {
      try {
        // Request permission to access camera devices
        await navigator.mediaDevices.getUserMedia({ video: true });
        
        // Get list of all available video input devices
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        
        setCameraDevices(videoDevices);
        if (videoDevices.length > 0) {
          setSelectedCamera(videoDevices[0].deviceId);
        }
      } catch (error) {
        console.error("Error accessing cameras:", error);
      }
    };

    getCameras();
  }, []);

  // Function to start the camera feed
  const startCamera = async () => {
    try {
      // Check if camera is already active
      if (cameraState.isActive) return;

      // Configure camera constraints based on user settings
      const constraints: MediaStreamConstraints = {
        video: {
          deviceId: selectedCamera ? { exact: selectedCamera } : undefined,
          width: { ideal: parseInt(cameraState.resolution.split('x')[0]) },
          height: { ideal: parseInt(cameraState.resolution.split('x')[1]) },
          frameRate: { ideal: cameraState.fps }
        }
      };

      // Get media stream from camera
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      
      // Set stream to video element if reference exists
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      // Update camera state to active
      setCameraState(prev => ({ ...prev, isActive: true }));

    } catch (error) {
      console.error("Error starting camera:", error);
      alert("Could not access camera. Please check permissions.");
    }
  };

  // Function to stop the camera feed
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      // Get all tracks from the media stream
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      
      // Stop each track to release camera
      tracks.forEach(track => track.stop());
      
      // Clear the video source
      videoRef.current.srcObject = null;
    }

    // Update camera state to inactive
    setCameraState(prev => ({ ...prev, isActive: false }));
  };

  // Function to capture a still image from the video feed
  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context) return;

    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw current video frame to canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Create download link for the captured image
    const imageData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `capture-${new Date().getTime()}.png`;
    link.href = imageData;
    link.click();

    // Add log entry for the capture action
    console.log("Image captured successfully");
  };

  // Handler for camera setting changes (brightness, contrast, etc.)
  const handleCameraSettingChange = (setting: string, value: number) => {
    setCameraState(prev => ({
      ...prev,
      [setting]: value
    }));

    // In a real application, you would apply these settings to the camera
    console.log(`Camera ${setting} set to: ${value}`);
  };

  // Handler for processing option toggles
  const handleProcessingToggle = (option: string) => {
    setProcessingOptions(prev => ({
      ...prev,
      [option]: !prev[option as keyof typeof processingOptions]
    }));
  };

  // Handler for processing slider changes
  const handleProcessingSliderChange = (option: string, value: number) => {
    setProcessingOptions(prev => ({
      ...prev,
      [option]: value
    }));
  };

  // Function to apply CSS filters based on processing options
  const getVideoFilter = () => {
    const filters = [];
    
    // Build CSS filter string based on active processing options
    if (processingOptions.grayscale) filters.push("grayscale(100%)");
    if (processingOptions.blur > 0) filters.push(`blur(${processingOptions.blur}px)`);
    if (processingOptions.sharpen > 0) filters.push(`contrast(${100 + processingOptions.sharpen * 10}%)`);
    if (processingOptions.invertColors) filters.push("invert(100%)");
    if (processingOptions.hueRotate > 0) filters.push(`hue-rotate(${processingOptions.hueRotate}deg)`);
    
    return filters.join(" ");
  };

  // Function to reset all camera settings to defaults
  const resetSettings = () => {
    setCameraState({
      isActive: false,
      brightness: 50,
      contrast: 50,
      saturation: 50,
      zoom: 100,
      exposure: 0,
      resolution: "1280x720",
      fps: 30,
    });

    setProcessingOptions({
      grayscale: false,
      blur: 0,
      sharpen: 0,
      edgeDetection: false,
      invertColors: false,
      hueRotate: 0,
      detectionEnabled: true,
      trackingEnabled: false,
    });

    // Stop camera if it's running
    if (cameraState.isActive) {
      stopCamera();
    }
  };

  return (
    <div className="vision-module">
      <h2>Vision Controls</h2>
      
      <div className="vision-layout">
        
        {/* ===== LEFT SIDEBAR - CAMERA CONTROLS ===== */}
        <div className="control-sidebar">
          
          {/* Camera Device Selection */}
          <div className="control-group">
            <h3>Camera Selection</h3>
            <select 
              value={selectedCamera}
              onChange={(e) => setSelectedCamera(e.target.value)}
              className="camera-select"
              disabled={cameraState.isActive}
            >
              {cameraDevices.map(device => (
                <option key={device.deviceId} value={device.deviceId}>
                  {device.label || `Camera ${cameraDevices.indexOf(device) + 1}`}
                </option>
              ))}
            </select>
          </div>

          {/* Camera Controls */}
          <div className="control-group">
            <h3>Camera Controls</h3>
            
            {/* Camera Action Buttons */}
            <div className="button-group">
              <button 
                className={`btn btn-primary ${cameraState.isActive ? 'active' : ''}`}
                onClick={startCamera}
                disabled={cameraState.isActive}
              >
                {cameraState.isActive ? 'Camera Active' : 'Start Camera'}
              </button>
              <button 
                className="btn btn-secondary"
                onClick={stopCamera}
                disabled={!cameraState.isActive}
              >
                Stop Camera
              </button>
              <button 
                className="btn btn-capture"
                onClick={captureImage}
                disabled={!cameraState.isActive}
              >
                Capture Image
              </button>
            </div>

            {/* Camera Settings Sliders */}
            <div className="slider-group">
              <SliderControl
                label="Brightness"
                value={cameraState.brightness}
                onChange={(value) => handleCameraSettingChange('brightness', value)}
                min={0}
                max={100}
                disabled={!cameraState.isActive}
              />
              <SliderControl
                label="Contrast"
                value={cameraState.contrast}
                onChange={(value) => handleCameraSettingChange('contrast', value)}
                min={0}
                max={100}
                disabled={!cameraState.isActive}
              />
              <SliderControl
                label="Saturation"
                value={cameraState.saturation}
                onChange={(value) => handleCameraSettingChange('saturation', value)}
                min={0}
                max={100}
                disabled={!cameraState.isActive}
              />
              <SliderControl
                label="Zoom"
                value={cameraState.zoom}
                onChange={(value) => handleCameraSettingChange('zoom', value)}
                min={100}
                max={300}
                step={10}
                disabled={!cameraState.isActive}
              />
            </div>

            {/* Camera Configuration */}
            <div className="config-group">
              <div className="config-item">
                <label>Resolution:</label>
                <select 
                  value={cameraState.resolution}
                  onChange={(e) => setCameraState(prev => ({ ...prev, resolution: e.target.value }))}
                  disabled={cameraState.isActive}
                >
                  {resolutions.map(res => (
                    <option key={res} value={res}>{res}</option>
                  ))}
                </select>
              </div>
              
              <div className="config-item">
                <label>FPS:</label>
                <select 
                  value={cameraState.fps}
                  onChange={(e) => setCameraState(prev => ({ ...prev, fps: parseInt(e.target.value) }))}
                  disabled={cameraState.isActive}
                >
                  {fpsOptions.map(fps => (
                    <option key={fps} value={fps}>{fps}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Image Processing Controls */}
          <div className="control-group">
            <h3>Image Processing</h3>
            
            {/* Toggle Options */}
            <div className="toggle-group">
              <ToggleSwitch
                label="Grayscale"
                checked={processingOptions.grayscale}
                onChange={() => handleProcessingToggle('grayscale')}
              />
              <ToggleSwitch
                label="Edge Detection"
                checked={processingOptions.edgeDetection}
                onChange={() => handleProcessingToggle('edgeDetection')}
              />
              <ToggleSwitch
                label="Invert Colors"
                checked={processingOptions.invertColors}
                onChange={() => handleProcessingToggle('invertColors')}
              />
              <ToggleSwitch
                label="Object Detection"
                checked={processingOptions.detectionEnabled}
                onChange={() => handleProcessingToggle('detectionEnabled')}
              />
              <ToggleSwitch
                label="Object Tracking"
                checked={processingOptions.trackingEnabled}
                onChange={() => handleProcessingToggle('trackingEnabled')}
                disabled={!processingOptions.detectionEnabled}
              />
            </div>

            {/* Processing Sliders */}
            <div className="slider-group">
              <SliderControl
                label="Blur"
                value={processingOptions.blur}
                onChange={(value) => handleProcessingSliderChange('blur', value)}
                min={0}
                max={10}
              />
              <SliderControl
                label="Sharpen"
                value={processingOptions.sharpen}
                onChange={(value) => handleProcessingSliderChange('sharpen', value)}
                min={0}
                max={10}
              />
              <SliderControl
                label="Hue Rotation"
                value={processingOptions.hueRotate}
                onChange={(value) => handleProcessingSliderChange('hueRotate', value)}
                min={0}
                max={360}
              />
            </div>
          </div>

          {/* Reset Button */}
          <button className="btn btn-reset" onClick={resetSettings}>
            Reset All Settings
          </button>
        </div>

        {/* ===== MAIN CONTENT - VIDEO FEED AND DISPLAY ===== */}
        <div className="video-content">
          
          {/* Video Feed Container */}
          <div className="video-container">
            {/* Live Video Feed Element */}
            <video 
              ref={videoRef}
              autoPlay 
              playsInline
              muted
              style={{ 
                filter: getVideoFilter(),
                transform: `scale(${cameraState.zoom / 100})`
              }}
              className="video-feed"
            />
            
            {/* Hidden Canvas for Image Capture */}
            <canvas ref={canvasRef} style={{ display: 'none' }} />

            {/* Object Detection Overlay */}
            {processingOptions.detectionEnabled && detectedObjects.length > 0 && (
              <div className="detection-overlay">
                {detectedObjects.map(obj => (
                  <div 
                    key={obj.id}
                    className="detection-box"
                    style={{
                      left: `${obj.x}px`,
                      top: `${obj.y}px`,
                      width: `${obj.width}px`,
                      height: `${obj.height}px`
                    }}
                  >
                    <span className="detection-label">
                      {obj.label} ({(obj.confidence * 100).toFixed(1)}%)
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Camera Status Indicator */}
            <div className={`camera-status ${cameraState.isActive ? 'active' : 'inactive'}`}>
              {cameraState.isActive ? '● LIVE' : '○ OFFLINE'}
            </div>
          </div>

          {/* Object Detection Results Panel */}
          {processingOptions.detectionEnabled && (
            <div className="detection-results">
              <h3>Detected Objects</h3>
              <div className="objects-list">
                {detectedObjects.map(obj => (
                  <div key={obj.id} className="object-item">
                    <span className="object-label">{obj.label}</span>
                    <span className="object-confidence">
                      {(obj.confidence * 100).toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ===== REUSABLE COMPONENTS =====

// Slider Control Component for various settings
interface SliderControlProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  disabled?: boolean;
}

function SliderControl({ 
  label, 
  value, 
  onChange, 
  min, 
  max, 
  step = 1,
  disabled = false 
}: SliderControlProps) {
  return (
    <div className="slider-control">
      <label>
        {label}: <span className="slider-value">{value}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        disabled={disabled}
        className="slider"
      />
    </div>
  );
}

// Toggle Switch Component for boolean options
interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

function ToggleSwitch({ label, checked, onChange, disabled = false }: ToggleSwitchProps) {
  return (
    <div className="toggle-control">
      <label className="toggle-label">
        {label}
        <div className="toggle-switch">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
          <span className="toggle-slider"></span>
        </div>
      </label>
    </div>
  );
}
