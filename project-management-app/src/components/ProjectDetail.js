import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/projects/${id}`
        );
        setProject(data);
      } catch (error) {
        console.error(
          "There was an error fetching the project details!",
          error
        );
      }
    };

    fetchProject();
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <div>
      <h3>Project Details</h3>
      <p>
        <strong>Name:</strong> {project.name}
      </p>
      <p>
        <strong>Description:</strong> {project.description}
      </p>
    </div>
  );
};

export default ProjectDetail;
