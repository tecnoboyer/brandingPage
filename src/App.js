import React from "react";
import Navbar from "./components/Navbar";
import Linkbar from "./components/Linkbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import SideProjects from "./components/SideProjects";
import Footer from "./components/Footer";
import ResumePage from "./components/Resume";
import Error404 from "./components/Error404";
import ProjectDetail from "./components/ProjectDetail";
import EfficiencyProject from "./components/EfficiencyProject";
import PersonalReadiness from "./components/PersonalReadiness";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/style.css";
import content from "./content.json";

// Note that the section.enable_section has to equal true in
// order for that specific component to load in the app.js

function App() {
  const { intro_screen, about_me, academics, experience, projects } = content;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Linkbar />
              {intro_screen.section.enable_section && <Intro />}
              {about_me.section.enable_section && <About />}
              {academics.section.enable_section && <Education />}
              {experience.section.enable_section && <WorkExperience />}
              {projects.section.enable_section && <SideProjects />}
              <Footer />
            </div>
          }
        ></Route>
        <Route path="/projects/efficiency" element={<EfficiencyProject />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects/ai" element={<PersonalReadiness />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
