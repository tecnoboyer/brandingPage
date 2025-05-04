import React from "react";
import contentData from "../content.json";
import { FaComment } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";


const Intro = () => {
  const introContent = contentData.intro_screen;
  // const generalContent = contentData.general;

  const introBio = introContent.intro_bio.map((paragraph) => {
    return <p key={paragraph}>{paragraph}</p>;
  });

  return (
    <div class="container">
      <div class="row">
        <div className="col-sm-12">
          <section class="intro_section">
            <Fade direction="down" triggerOnce={true}>
              <h1>{introContent.main_header}</h1>
              <p>
                <strong>{introContent.main_subtitle}</strong>
              </p>
            </Fade>
            <Fade triggerOnce={true}>
              <div className="introParagraph">{introBio}</div>
            </Fade>
            <Fade direction="up" triggerOnce={true}>
              <h3>
                <a 
                  href="http://3.16.57.48:8050/" 
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    backgroundColor: "blue", // Green (change as needed)
                    color: "white",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "600",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#45a049";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#4CAF50";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <FaComment /> {introContent.email_button}
                </a>
              </h3>
            </Fade>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Intro;
