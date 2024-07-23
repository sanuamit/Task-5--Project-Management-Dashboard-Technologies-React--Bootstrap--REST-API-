import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";

const ProjectList = ({ projects, setProjects }) => {
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/projects");
        setProjects(data);
      } catch (error) {
        console.error("There was an error fetching the projects!", error);
      }
    };

    fetchProjects();
  }, [setProjects]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/projects/${id}`);
      alert("Project deleted successfully!");
      const { data } = await axios.get("http://localhost:5000/projects");
      setProjects(data);
    } catch (error) {
      console.error("There was an error deleting the project!", error);
    }
  };

  return (
    <div>
      <h2>Project List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>
                <Link to={`/projects/${project.id}`}>Details</Link> |
                <Link to={`/projects/edit/${project.id}`}> Edit</Link> |
                <Button
                  variant="danger"
                  onClick={() => handleDelete(project.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProjectList;
