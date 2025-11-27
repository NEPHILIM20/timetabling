// C:\Users\Melvin\Desktop\timetabling\src\AdminLogin.jsx

import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Card,
  Alert,
} from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
import styles from "./LoginStyles"; // <-- Import the separated styles

const AdminLogin = () => {
  // State to hold form input values
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  // State to handle login error messages
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors

    // --- Login Logic (Client-Side Validation) ---

    if (!studentNumber.trim() || !password.trim()) {
      setError("Please enter both your Student Number and Password.");
      return;
    }

    console.log("Attempting login with:", { studentNumber, password });

    // TODO:
    // 1. Send data to your backend API here (e.g., using fetch or Axios).
    // 2. Handle success (e.g., redirect to dashboard).
    // 3. Handle failure (e.g., setError('Invalid credentials.')).

    // Example placeholder for successful login:
    // alert('Login Successful! (Placeholder)');
  };

  return (
    <div style={styles.fullScreen}>
      <Container>
        <Row className="justify-content-center">
          {/* Responsive column sizing for Mobile (xs, sm) and Web (md, lg) */}
          <Col xs={10} sm={8} md={5} lg={4}>
            <Card style={styles.loginCard}>
              <Card.Body>
                {/* 1. Header and Separator */}
                <div className="text-center mb-4">
                  <h3
                    className="d-flex align-items-center justify-content-center"
                    style={styles.whiteText} // Applied white text style
                  >
                    <PersonCircle className="me-2" size={24} />
                    Administrator Login
                  </h3>
                  <div style={styles.separator}></div>
                </div>

                {/* Display Error Message */}
                {error && <Alert variant="danger">{error}</Alert>}

                {/* 2. Login Form */}
                <Form onSubmit={handleSubmit}>
                  {/* Student Number Field */}
                  <Form.Group className="mb-4" controlId="formStudentNumber">
                    <Form.Label style={styles.whiteText}>
                      Student Number
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      required
                      style={styles.inputField}
                      value={studentNumber}
                      onChange={(e) => setStudentNumber(e.target.value)}
                    />
                  </Form.Group>

                  {/* Password Field */}
                  <Form.Group className="mb-2" controlId="formPassword">
                    <Form.Label style={styles.whiteText}>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder=""
                      required
                      style={styles.inputField}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  {/* Forgot Password Link - Aligned Right */}
                  <div className="text-end mb-4">
                    <a href="#" style={styles.forgotLink}>
                      Forgot password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <Button type="submit" style={styles.loginButton}>
                    LOGIN
                  </Button>
                </Form>

                {/* 3. Register Link */}
                <div className="text-center mt-4">
                  <span style={styles.whiteText}>Don't Have an Account? </span>
                  <a href="#" style={styles.registerLink}>
                    Register
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLogin;
