import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectList from "./components/ProjectList";
import AddProject from "./components/AddProject";
import EditProject from "./components/EditProject";
import ProjectDetail from "./components/ProjectDetail";

const App = () => {
  const [projects, setProjects] = useState([]);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={
              <ProjectList projects={projects} setProjects={setProjects} />
            }
          />
          <Route
            path="/projects/add"
            element={<AddProject setProjects={setProjects} />}
          />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/projects/edit/:id" element={<EditProject />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
