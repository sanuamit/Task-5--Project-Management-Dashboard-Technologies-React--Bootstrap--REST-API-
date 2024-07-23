import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Welcome to the Project Management Dashboard</Card.Title>
          <Card.Text>
            Manage your projects efficiently with our dashboard.
          </Card.Text>
          <Link to="/projects">
            <Button variant="primary">View Projects</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
