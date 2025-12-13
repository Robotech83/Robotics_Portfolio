import '../../styles/modules/modelviewer.css';
import { useNavigate } from 'react-router-dom';

export default function BlenderModule() {
  const navigate = useNavigate();

  return (
    <div className="module-panel blender-module">
      <h2>Virtual Model Controls</h2>
      <p>Access the full 3D Model Viewer for detailed visualization and control.</p>
      
      <div className="model-preview-card">
        <div className="preview-image">
          <div className="model-icon">🤖</div>
          <p>3D Model Visualization</p>
        </div>
        
        <div className="preview-info">
          <h3>Full Virtual Model Viewer</h3>
          <p>Features include:</p>
          <ul>
            <li>Real-time 3D model visualization</li>
            <li>Advanced lighting controls</li>
            <li>Model import & transformation</li>
            <li>Wireframe mode & reflections</li>
          </ul>
          
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/virtual-model')}
          >
            Open Full Viewer →
          </button>
        </div>
      </div>
      
      {/* Quick Settings (optional) */}
      <div className="quick-settings">
        <h3>Quick Settings</h3>
        <div className="quick-controls">
          <button className="quick-btn">Reset View</button>
          <button className="quick-btn">Toggle Grid</button>
          <button className="quick-btn">Toggle Shadows</button>
        </div>
      </div>
    </div>
  );
}