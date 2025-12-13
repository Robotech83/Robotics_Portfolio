import ObjectDetectionCanvas from "../ObjectDectection/ObjectDetectionCanvas";
import "../styles/objectdetect.css";

export default function KitchenDetector() {
  return (
    <ObjectDetectionCanvas 
      title="DishFinder — Kitchenware Scanner"
      highlightColor="#00ffc8"
    />
  );
}
