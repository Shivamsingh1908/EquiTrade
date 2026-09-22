import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import api from "../../api";

const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const { data } = await api.post("/api/auth/login", credentials);

      if (!data.success) {
        toast.error(data.message || "Unable to log in");
        return;
      }

      window.location.assign(dashboardUrl);
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to log in. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="login-section">
      <div className="login-card">
        <div className="section-eyebrow">Welcome back</div>
        <h1>Continue your investing journey.</h1>
        <p className="login-card-copy">Log in to view your portfolio, orders, and market overview.</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="signup-field">
            <label htmlFor="login-email">Email address</label>
            <input
              id="login-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="signup-field">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-primary site-cta login-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="login-signup-prompt">
          New to EquiTrade? <Link to="/signup#signup-form">Create an account</Link>
        </p>
        <button className="login-back-link" type="button" onClick={() => navigate("/")}>Back to home</button>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Login;
