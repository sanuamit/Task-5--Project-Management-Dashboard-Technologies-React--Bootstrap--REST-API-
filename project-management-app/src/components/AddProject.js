import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const AddProject = ({ setProjects }) => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/projects", {
        name: projectName,
        description: projectDescription,
      });
      alert("Project added successfully!");
      setProjectName("");
      setProjectDescription("");
      // Refresh the project list
      const { data } = await axios.get("http://localhost:5000/projects");
      setProjects(data);
    } catch (error) {
      console.error("There was an error adding the project!", error);
    }
  };

  return (
    <div>
      <h3>Add New Project</h3>
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
        <Button variant="primary" type="submit" className="mt-3">
          Add Project
        </Button>
      </Form>
    </div>
  );
};

export default AddProject;
