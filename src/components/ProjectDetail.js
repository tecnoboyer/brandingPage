import { useParams, useNavigate } from 'react-router-dom';
import contentData from "../content.json";
import { FaGithub, FaDownload, FaFilePdf, FaCanadianMapleLeaf } from "react-icons/fa";
import { FiExternalLink, FiFolder, FiLayers, FiSend } from "react-icons/fi";
import ReactMarkdown from "react-markdown";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = contentData.projects.project_items.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h3>Project not found</h3>
            <button 
              onClick={() => navigate('/')}
              className="btn btn-primary mt-3"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <button 
            onClick={() => navigate(-1)}
            className="btn btn-link mb-3"
          >
            ← Back to Projects
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                {project.area === 'Industry' ? (
                  <FaCanadianMapleLeaf size={40} className="me-3 text-primary" />
                ) : project.area === 'Full Stack' ? (
                  <FiLayers size={40} className="me-3 text-primary" />
                ) : project.area === 'AI' ? (
                  <FiSend size={40} className="me-3 text-primary" />
                ) : (
                  <FiFolder size={40} className="me-3 text-primary" />
                )}
                <div>
                  <h1 className="mb-1">{project.project_name}</h1>
                  <small className="text-muted">
                    {project.start_date} - {project.end_date} • {project.area}
                  </small>
                </div>
              </div>

              <div className="mb-4">
                <h4>Description</h4>
                <ReactMarkdown className="project-description">
                  {project.description}
                </ReactMarkdown>
              </div>

              <div className="mb-4">
                <h4>Technologies</h4>
                <div className="d-flex flex-wrap gap-2">
                  {project.resources_used.map((tech, index) => (
                    <span key={index} className="badge bg-light text-dark border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.links && project.links.length > 0 && (
                <div>
                  <h4>Links</h4>
                  <div className="d-flex flex-wrap gap-3">
                    {project.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-primary btn-sm"
                      >
                        {link.icon === 'FaGithub' && <FaGithub className="me-1" />}
                        {link.icon === 'FaDownload' && <FaDownload className="me-1" />}
                        {link.icon === 'FiExternalLink' && <FiExternalLink className="me-1" />}
                        {link.icon === 'FaFilePdf' && <FaFilePdf className="me-1" />}
                        {link.data_tooltip}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;