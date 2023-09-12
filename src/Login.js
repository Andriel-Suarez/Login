import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-container">
        <h1 id ="header" className="text-center"></h1>
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" required />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="********" required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <a href="register.html" target="_blank" rel="noopener noreferrer">
            Register
          </a>
          <a href="https://google.com">Forgot password?</a>
        </Form>
      </div>
    </Container>
  );
}

export default Login;