import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import registerBackground from "./assets/images/login-background.jpg"; // Import the image

function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regular expression patterns
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const idPattern = /^\d{13}$/;

    // Validate Name
    if (!namePattern.test(name)) {
      setError("Name can only contain letters and spaces.");
      return;
    }

    // Validate Email
    if (!emailPattern.test(email)) {
      setError("Invalid email format.");
      return;
    }

    // Validate Password
    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one letter and one number."
      );
      return;
    }
    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    // Validate ID
    if (!idPattern.test(id)) {
      setError("ID must be a string of exactly 13 digits.");
      return;
    }
    // Clear the error if inputs are valid
    setError("");
    axios
      .post("https://localhost:3000/register", {
        name,
        surname,
        email,
        password,
        confirmPassword,
        id,
      })
      .then((result) => {
        navigate("/login");
      })
      .catch((err) => {
        if (err.response && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError(`An error occurred: ${err.message}`);
        }
      });
  };

  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      width: "100vw",
    },
    formContainer: {
      flex: 1, // Takes up 50% of the width
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      padding: "40px",
    },
    formBox: {
      maxWidth: "500px",
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
      backgroundColor: "#e67e22",
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
    loginLink: {
      marginTop: "20px",
      textAlign: "center",
      color: "#7f8c8d",
    },
    link: {
      color: "#e67e22",
      textDecoration: "none",
      fontWeight: "500",
    },
    imageContainer: {
      flex: 1, // Takes up 50% of the width
      backgroundImage: `url(${registerBackground})`,
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
          <h2 style={styles.title}>Register</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label htmlFor="name" style={styles.label}>
                Name
              </label>
              <input
                type="text"
                placeholder="Enter name"
                autoComplete="off"
                name="name"
                style={styles.input}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="surname" style={styles.label}>
                Surname
              </label>
              <input
                type="text"
                placeholder="Enter surname"
                autoComplete="off"
                name="surname"
                style={styles.input}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="id" style={styles.label}>
                ID
              </label>
              <input
                type="text"
                placeholder="Enter ID"
                autoComplete="off"
                name="id"
                style={styles.input}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </div>
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
            <div style={styles.inputGroup}>
              <label htmlFor="confirmPassword" style={styles.label}>
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                autoComplete="off"
                name="confirmPassword"
                style={styles.input}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={styles.errorMessage}>{error}</p>}
            <button type="submit" style={styles.button}>
              Register
            </button>
          </form>
          <p style={styles.loginLink}>
            Already have an account?{" "}
            <Link to="/login" style={styles.link}>
              Login
            </Link>
          </p>
        </div>
      </div>
      <div style={styles.imageContainer}></div>
    </div>
  );
}

export default Register;

