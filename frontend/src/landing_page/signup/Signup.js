import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const { name, username, email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });

  const handleError = (msg) => {
    toast.error(msg, {
      position: "top-right",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !username || !email || !password) {
      handleError("Please fill all fields");
      return;
    }

    try {
      const { data } = await api.post(
        "/api/auth/signup",
        inputValue,
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setInputValue({
          name: "",
          username: "",
          email: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      handleError("Signup failed");
    }

  };


  return (
    <section className="signup-section" id="signup-form">
      <div className="container">
      <div className="signup-layout">
        <div className="signup-visual">
          <div className="signup-visual-copy">
            <span className="hero-kicker">Start with clarity</span>
            <h2>Your money deserves a better interface.</h2>
            <p>One calm workspace for your first investment and every decision after it.</p>
          </div>
          <img src="/images/signup.png" alt="EquiTrade account setup on mobile" className="signup-image" />
          <div className="signup-proof-row">
            <span><strong>₹0</strong> account opening</span>
            <span><strong>24/7</strong> access</span>
          </div>
        </div>
        <div className="signup-card">
          <div className="section-eyebrow">Create your account</div>
          <h1 className="mb-2">Make your first move</h1>
          <p className="signup-card-copy">Join EquiTrade in a few minutes. No paperwork maze, no noisy upsells.</p>
          <form onSubmit={handleSubmit}>
            <div className="signup-form-grid">
              <div className="signup-field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={handleOnChange}
                />
              </div>

              <div className="signup-field">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  placeholder="Choose a username"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={handleOnChange}
                />
              </div>

              <div className="signup-field signup-field-wide">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={handleOnChange}
                />
              </div>

              <div className="signup-field signup-field-wide">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Create a secure password"
                  autoComplete="new-password"
                  minLength="8"
                  required
                  value={password}
                  onChange={handleOnChange}
                />
              </div>

              <div className="signup-submit-row">
                <p className="signup-login-prompt">
                  Already have an account? <Link to="/login">Log in</Link>
                </p>
                <button type="submit" className="btn btn-primary site-cta signup-submit">
                  Create account <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Signup;