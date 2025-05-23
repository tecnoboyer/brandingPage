import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaIndustry, FaChartLine, FaListOl, FaEye, FaCogs, FaRocket } from "react-icons/fa";
import { GiFactory, GiSandsOfTime, GiProcessor } from "react-icons/gi";
import { MdOutlineInventory, MdMotionPhotosOn } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";

const EfficiencyProject = () => {
  const navigate = useNavigate();
  
  return (
    <div className="project-detail efficiency-project">
      <button 
        onClick={() => navigate(-1)} 
        className="btn btn-back"
      >
        ← Back to Projects
      </button>

      <div className="header">
        <h1><FaIndustry /> Lean Manufacturing & 5S Efficiency Framework</h1>
        <p>Data-Driven Process Improvement for Modern Organizations</p>
      </div>
      
      <div className="framework-grid">
        {/* Spectrum Analysis */}
        <div className="framework-card">
          <div className="card-header">
            <div className="card-icon icon-sort"><FaChartLine /></div>
            <div>
              <div className="card-title">1. SPECTRUM ANALYSIS</div>
              <small>Data-Driven Process Understanding</small>
            </div>
          </div>
          <p><strong>Principle:</strong> You can't enhance what you don't understand</p>
          <ul>
            <li>Deploy data-driven analysis tools</li>
            <li>Remove human perception bias</li>
            <li>Create process visibility through metrics</li>
            <li>Identify real improvement opportunities</li>
          </ul>
          <div className="tool-highlight">
            <strong>🔧 Tools:</strong> Process mining software, IoT sensors, automated data collection systems
          </div>
        </div>
        
        {/* Prioritization & Order */}
        <div className="framework-card">
          <div className="card-header">
            <div className="card-icon icon-order"><FaListOl /></div>
            <div>
              <div className="card-title">2. PRIORITIZATION & ORDER</div>
              <small>Strategic Improvement Planning</small>
            </div>
          </div>
          <p><strong>Principle:</strong> Sort overwhelming to-do lists by identifying real goals</p>
          <ul>
            <li>Rank improvements by impact and feasibility</li>
            <li>Implement one reliable improvement at a time</li>
            <li>Create data collection mechanisms</li>
            <li>Establish clear success metrics</li>
          </ul>
          <div className="gamification-element">
            <strong>🎮 RICE Framework Gamification:</strong> Score improvements using Reach × Impact × Confidence ÷ Effort
          </div>
        </div>
        
        {/* Visualization Tools */}
        <div className="framework-card">
          <div className="card-header">
            <div className="card-icon icon-shine"><FaEye /></div>
            <div>
              <div className="card-title">3. VISUALIZATION TOOLS</div>
              <small>Clear Target Communication</small>
            </div>
          </div>
          <p><strong>Principle:</strong> Everyone must know the target</p>
          <ul>
            <li>Real-time dashboards</li>
            <li>Visual management boards</li>
            <li>Performance indicators</li>
            <li>Progress tracking systems</li>
          </ul>
          <div className="tool-highlight">
            <strong>🌐 Red Tag Web Tool:</strong> Digital system for identifying items to be decommissioned or relocated
          </div>
        </div>
        
        {/* Standardization */}
        <div className="framework-card">
          <div className="card-header">
            <div className="card-icon icon-standard"><FaCogs /></div>
            <div>
              <div className="card-title">4. STANDARDIZATION</div>
              <small>IT-Enabled Process Consistency</small>
            </div>
          </div>
          <p><strong>Principle:</strong> Technology sets expectations in employee mindset</p>
          <ul>
            <li>Automated workflow systems</li>
            <li>Digital standard operating procedures</li>
            <li>Training management platforms</li>
            <li>Compliance monitoring tools</li>
          </ul>
          <div className="gamification-element">
            <strong>🏆 Role-Based Scoring:</strong> Gamify compliance and improvement participation
          </div>
        </div>
        
        {/* Substantiation */}
        <div className="framework-card">
          <div className="card-header">
            <div className="card-icon icon-sustain"><FaRocket /></div>
            <div>
              <div className="card-title">5. SUBSTANTIATION</div>
              <small>Leadership-Driven Continuous Improvement</small>
            </div>
          </div>
          <p><strong>Principle:</strong> Leadership needs information, metrics, and next targets</p>
          <ul>
            <li>Executive dashboards</li>
            <li>ROI tracking and reporting</li>
            <li>Next target identification</li>
            <li>Resource allocation planning</li>
          </ul>
          <div className="tool-highlight">
            <strong>🔍 5W Root Cause Analysis:</strong> Who, What, When, Where, Why for maintenance optimization
          </div>
        </div>
      </div>
      
      {/* 5S Implementation Framework */}
      <div className="five-s-section">
        <h2><GiFactory /> 5S Implementation Framework</h2>
        <div className="five-s-grid">
          <div className="five-s-item">
            <h4>SORT (Seiri)</h4>
            <p>Eliminate unnecessary items using data analysis</p>
          </div>
          <div className="five-s-item">
            <h4>SET IN ORDER (Seiton)</h4>
            <p>Organize based on usage frequency data</p>
          </div>
          <div className="five-s-item">
            <h4>SHINE (Seiso)</h4>
            <p>Clean and inspect with digital checklists</p>
          </div>
          <div className="five-s-item">
            <h4>STANDARDIZE (Seiketsu)</h4>
            <p>Create IT-enabled standard procedures</p>
          </div>
          <div className="five-s-item">
            <h4>SUSTAIN (Shitsuke)</h4>
            <p>Maintain through gamification and metrics</p>
          </div>
        </div>
      </div>
      
      {/* 8 Wastes Identification System */}
      <div className="framework-card">
        <h3>🗑️ 8 Wastes Identification System</h3>
        <div className="techniques-grid">
          <div className="waste-item">
            <span className="waste-icon"><GiFactory /></span>
            <span><strong>Transportation:</strong> Unnecessary movement of materials</span>
          </div>
          <div className="waste-item">
            <span className="waste-icon"><MdOutlineInventory /></span>
            <span><strong>Inventory:</strong> Excess stock and materials</span>
          </div>
          <div className="waste-item">
            <span className="waste-icon"><MdMotionPhotosOn /></span>
            <span><strong>Motion:</strong> Unnecessary human movement</span>
          </div>
          <div className="waste-item">
            <span className="waste-icon"><GiSandsOfTime /></span>
            <span><strong>Waiting:</strong> Idle time and delays</span>
          </div>
          <div className="waste-item">
            <span className="waste-icon"><GiProcessor /></span>
            <span><strong>Overproduction:</strong> Making more than needed</span>
          </div>
          <div className="waste-item">
            <span className="waste-icon"><RiErrorWarningFill /></span>
            <span><strong>Over-processing:</strong> Unnecessary process steps</span>
          </div>
          <div className="waste-item">
            <span className="waste-icon"><RiErrorWarningFill /></span>
            <span><strong>Defects:</strong> Errors and rework</span>
          </div>
          <div className="waste-item">
            <span className="waste-icon"><BsPersonFill /></span>
            <span><strong>Skills:</strong> Underutilized talent and creativity</span>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="call-to-action">
        <h3>🚀 Ready to Transform Your Organization?</h3>
        <p>This framework provides the structure to implement data-driven lean manufacturing and 5S practices across shop floor, engineering, and corporate teams.</p>
      </div>

      {/* Add the corresponding CSS */}
      <style jsx>{`
        .efficiency-project {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }
        
        .btn-back {
          background: #0078ff;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          margin-bottom: 20px;
          cursor: pointer;
        }
        
        .header {
          text-align: center;
          background: rgba(255, 255, 255, 0.95);
          padding: 30px;
          border-radius: 20px;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .header h1 {
          font-size: 2.5em;
          color: #2c3e50;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        .header p {
          font-size: 1.2em;
          color: #7f8c8d;
        }
        
        .framework-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 25px;
          margin-bottom: 30px;
        }
        
        .framework-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .framework-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }
        
        .card-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .card-icon {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          margin-right: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: white;
        }
        
        .icon-sort { background: #e74c3c; }
        .icon-order { background: #f39c12; }
        .icon-shine { background: #2ecc71; }
        .icon-standard { background: #9b59b6; }
        .icon-sustain { background: #34495e; }
        
        .card-title {
          font-size: 1.4em;
          font-weight: bold;
          color: #2c3e50;
        }
        
        ul {
          margin: 15px 0;
          padding-left: 20px;
        }
        
        .tool-highlight {
          background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
          padding: 15px;
          border-radius: 10px;
          margin: 10px 0;
          border-left: 5px solid #e67e22;
        }
        
        .gamification-element {
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
          padding: 15px;
          border-radius: 10px;
          margin: 10px 0;
          border-left: 5px solid #3498db;
        }
        
        .five-s-section {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 25px;
          margin: 20px 0;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .five-s-section h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #2c3e50;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        .five-s-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }
        
        .five-s-item {
          text-align: center;
          padding: 20px;
          border-radius: 10px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .five-s-item h4 {
          margin-bottom: 10px;
          font-size: 1.2em;
        }
        
        .techniques-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }
        
        .waste-item {
          background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
          color: #333;
          padding: 12px;
          border-radius: 8px;
          display: flex;
          align-items: center;
        }
        
        .waste-icon {
          margin-right: 10px;
          font-size: 1.2em;
        }
        
        .call-to-action {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
          padding: 30px;
          border-radius: 15px;
          margin-top: 30px;
        }
        
        .call-to-action h3 {
          margin-bottom: 15px;
          font-size: 1.8em;
        }
        
        @media (max-width: 768px) {
          .header h1 {
            font-size: 2em;
          }
          
          .framework-grid {
            grid-template-columns: 1fr;
          }
          
          .techniques-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default EfficiencyProject;