import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBullseye, FaBrain, FaRegLightbulb,  FaChartLine } from "react-icons/fa";
import { MdOutlineSpeed} from "react-icons/md";
import { GiProgression, GiSkills } from "react-icons/gi";

const PersonalRediness = () => {
  const navigate = useNavigate();

  return (
    <div className="personal-framework">
      <button onClick={() => navigate(-1)} className="btn btn-back">
        ← Back to Projects
      </button>

      <div className="header">
        <h1><FaBullseye /> Personal Competitiveness Framework</h1>
        <p>AI-Driven Tools for Career Efficiency, Growth, and Visibility</p>
      </div>

      <div className="framework-grid">
        {/* Self-Awareness & Metrics */}
        <div className="framework-card">
          <div className="card-header">
            <div className="card-icon icon-awareness"><FaBrain /></div>
            <div>
              <div className="card-title">1. KNOW YOUR INPUTS</div>
              <small>Self-Awareness Through Data</small>
            </div>
          </div>
          <p><strong>Principle:</strong> Track time, energy, and output to improve direction</p>
          <ul>
            <li>Use time-tracking apps to analyze daily tasks</li>
            <li>Identify energy peaks and low-value activities</li>
            <li>Monitor output over effort</li>
          </ul>
          <div className="tool-highlight">
            <strong>🧠 Tools:</strong> RescueTime, Clockify, Notion dashboards
          </div>
        </div>

        {/* Personal Prioritization */}
        <div className="framework-card">
          <div className="card-header">
            <div className="card-icon icon-prioritize"><FaRegLightbulb /></div>
            <div>
              <div className="card-title">2. FOCUS ON IMPACT</div>
              <small>High-Leverage Thinking</small>
            </div>
          </div>
          <p><strong>Principle:</strong> Focus on tasks that unlock disproportionate value</p>
          <ul>
            <li>Identify what's truly moving the needle</li>
            <li>Use the Pareto Principle: 20% of tasks = 80% of impact</li>
            <li>Apply Eisenhower Matrix or RICE scoring</li>
          </ul>
          <div className="gamification-element">
            <strong>🎯 Personal ROI:</strong> Rank your tasks weekly based on outcomes
          </div>
        </div>

        {/* Visibility & Branding */}
        <div className="framework-card">
          <div className="card-header">
            <div className="card-icon icon-visibility"><FaChartLine /></div>
            <div>
              <div className="card-title">3. BUILD VISIBILITY</div>
              <small>Make Your Value Observable</small>
            </div>
          </div>
          <p><strong>Principle:</strong> If no one sees your work, it didn’t happen</p>
          <ul>
            <li>Create a personal dashboard or portfolio</li>
            <li>Automate status updates and wins</li>
            <li>Communicate your improvements clearly</li>
          </ul>
          <div className="tool-highlight">
            <strong>🌐 Tools:</strong> LinkedIn, GitHub, personal websites, weekly reports
          </div>
        </div>

        {/* Skill Automation */}
        <div className="framework-card">
          <div className="card-header">
            <div className="card-icon icon-automation"><MdOutlineSpeed /></div>
            <div>
              <div className="card-title">4. AUTOMATE ROUTINE</div>
              <small>Save Time for Strategic Thinking</small>
            </div>
          </div>
          <p><strong>Principle:</strong> Use AI tools to handle repetitive tasks</p>
          <ul>
            <li>Automate scheduling and documentation</li>
            <li>Use ChatGPT or Notion AI for drafting</li>
            <li>Build automations with Zapier or Make</li>
          </ul>
          <div className="tool-highlight">
            <strong>⚙️ AI Stack:</strong> Notion AI, Otter.ai, ChatGPT, Zapier, Voice control
          </div>
        </div>

        {/* Learning Loop */}
        <div className="framework-card">
          <div className="card-header">
            <div className="card-icon icon-growth"><GiProgression /></div>
            <div>
              <div className="card-title">5. UPGRADE CONTINUOUSLY</div>
              <small>Becoming a Learning Machine</small>
            </div>
          </div>
          <p><strong>Principle:</strong> Commit to continual skill upgrades</p>
          <ul>
            <li>Track skill goals quarterly</li>
            <li>Apply what you learn through micro-projects</li>
            <li>Pair learning with visibility: share your takeaways</li>
          </ul>
          <div className="tool-highlight">
            <strong>🎓 Toolset:</strong> Skillshare, Udemy, Coursera, Obsidian knowledge graphs
          </div>
        </div>
      </div>

      {/* Skills Visibility Block */}
      <div className="framework-card">
        <h3><GiSkills /> Map Your Competitive Edge</h3>
        <ul>
          <li><strong>Technical:</strong> Data, AI, automation, systems thinking</li>
          <li><strong>Creative:</strong> Design, branding, synthesis, storytelling</li>
          <li><strong>Relational:</strong> Empathy, influence, networking</li>
          <li><strong>Operational:</strong> Organization, execution, feedback loops</li>
        </ul>
      </div>

      <div className="call-to-action">
        <h3>💼 Boost Your Career with AI-Driven Habits</h3>
        <p>Use this framework to develop a systemized, visible, and high-impact personal strategy in today's knowledge economy.</p>
      </div>

      <style jsx>{`
        .personal-framework {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }

        .btn-back {
          background: #2c3e50;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          margin-bottom: 20px;
          cursor: pointer;
        }

        .header {
          text-align: center;
          padding: 30px;
          background: #ecf0f1;
          border-radius: 20px;
          margin-bottom: 30px;
        }

        .header h1 {
          font-size: 2.3em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #2c3e50;
        }

        .framework-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
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
          font-size: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }

        .icon-awareness { background: #16a085; }
        .icon-prioritize { background: #2980b9; }
        .icon-visibility { background: #8e44ad; }
        .icon-automation { background: #e67e22; }
        .icon-growth { background: #2c3e50; }

        .card-title {
          font-size: 1.4em;
          font-weight: bold;
          color: #2c3e50;
        }

        .tool-highlight, .gamification-element {
          background: #f4f6f7;
          padding: 12px;
          margin-top: 10px;
          border-left: 5px solid #7f8c8d;
        }

        .call-to-action {
          text-align: center;
          margin-top: 40px;
          padding: 30px;
          background: linear-gradient(135deg, #00c6ff 0%, #0072ff 100%);
          color: white;
          border-radius: 15px;
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 1.8em;
          }

          .framework-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default PersonalRediness;
