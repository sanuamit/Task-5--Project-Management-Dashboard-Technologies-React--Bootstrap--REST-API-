import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
// import "./EditProject.css"; // Optional: Custom CSS for additional styling

const EditProject = ({ setProjects }) => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/projects/${id}`
        );
        setProject(data);
        setProjectName(data.name);
        setProjectDescription(data.description);
      } catch (error) {
        console.error("There was an error fetching the project!", error);
      }
    };

    fetchProject();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/projects/${id}`, {
        name: projectName,
        description: projectDescription,
      });
      alert("Project updated successfully!");
      const { data } = await axios.get("http://localhost:5000/projects");
      setProjects(data);
      navigate("/projects");
    } catch (error) {
      console.error("There was an error updating the project!", error);
    }
  };

  if (!project) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Edit Project</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formProjectName">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formProjectDescription">
          <Form.Label>Project Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter project description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-4">
          Update Project
        </Button>
      </Form>
    </div>
  );
};

export default EditProject;
