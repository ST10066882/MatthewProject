import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loginBackground from "./assets/images/login-background.jpg"; // Import the image

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    axios
      .post("https://localhost:3000/login", { email, password })
      .then((result) => {
        if (result.data === "SUCCESS") {
          navigate("/customerDashboard");
        }
      })
      .catch((err) => {
        setError("Incorrect email or password.");
      });
  };

  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      width: "100vw",
    },
    formContainer: {
      flex: 1, 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.95)", 
      padding: "40px",
    },
    formBox: {
      maxWidth: "400px",
      width: "90%",
      textAlign: "center",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      padding: "40px",
      borderRadius: "10px",
    },
    title: {
      marginBottom: "30px",
      fontSize: "2rem",
      fontWeight: "600",
      color: "#2c3e50",
    },
    inputGroup: {
      marginBottom: "20px",
      textAlign: "left",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "500",
      color: "#34495e",
    },
    input: {
      width: "100%",
      padding: "12px 15px",
      fontSize: "1rem",
      border: "1px solid #bdc3c7",
      borderRadius: "30px",
      outline: "none",
      transition: "border-color 0.3s",
    },
    button: {
      width: "100%",
      padding: "15px",
      backgroundColor: "#3498db",
      color: "#ffffff",
      border: "none",
      borderRadius: "30px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background-color 0.3s",
      marginTop: "10px",
    },
    errorMessage: {
      color: "red",
      textAlign: "center",
      marginBottom: "15px",
    },
    registerLink: {
      marginTop: "20px",
      textAlign: "center",
      color: "#7f8c8d",
    },
    link: {
      color: "#3498db",
      textDecoration: "none",
      fontWeight: "500",
    },
    imageContainer: {
      flex: 1, 
      backgroundImage: `url(${loginBackground})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <div style={styles.formBox}>
          <h2 style={styles.title}>Login</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                autoComplete="off"
                name="email"
                style={styles.input}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="password" style={styles.label}>
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                autoComplete="off"
                name="password"
                style={styles.input}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={styles.errorMessage}>{error}</p>}
            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>
          <p style={styles.registerLink}>
            Don't have an account?{" "}
            <Link to="/register" style={styles.link}>
              Register
            </Link>
          </p>
        </div>
      </div>
      <div style={styles.imageContainer}></div>
    </div>
  );
}

export default Login;


