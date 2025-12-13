import ObjectDetectionCanvas from "../ObjectDectection/ObjectDetectionCanvas";
import "../styles/objectdetect.css";

export default function ClothingDetector() {
  return (
    <ObjectDetectionCanvas 
      title="FitFinder — Clothing Scanner"
      highlightColor="#ff00ff"
    />
  );
}
