import React from "react";

function Team() {
  return (
    <div className="container py-5">
      <div className="row mb-5">
        <h1 className="text-center fw-bold">People</h1>
        <p className="text-center text-muted">
          Meet the mind behind this project
        </p>
      </div>

      <div className="row align-items-center shadow-lg rounded-4 bg-white p-4">
        {/* Left Side */}
        <div className="col-md-5 text-center">
          <img
            src="images/shivam.jpg"
            alt="Shivam Singh"
            className="rounded-circle mb-3"
            style={{
              width: "220px",
              height: "220px",
              objectFit: "cover",
              border: "6px solid #f1f1f1",
            }}
          />
          <h2 className="fw-bold mt-3">Shivam Singh</h2>
          <h5 className="text-primary">Developer</h5>
        </div>

        {/* Right Side */}
        <div className="col-md-7">
          <p className="text-muted" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
            Hi, I’m Shivam Singh — a passionate developer pursuing B.Tech in
            Information Technology at Galgotias College of Engineering &
            Technology. I love solving problems, exploring new technologies, and
            building impactful projects that make a difference.
          </p>
          <p className="text-muted" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
            I’ve worked on projects in web development, machine learning, and
            data analytics, focusing on practical and user-friendly solutions.
            When I’m not coding, I enjoy collaborating with like-minded people
            and experimenting with new ideas.
          </p>

          <div className="mt-4">
            <a
              href="mailto:rajputshivamsingh2003@gmail.com"
              className="btn btn-dark btn-sm mx-1"
            >
              Email
            </a>
            <a
              href="https://github.com/Shivamsingh1908"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-sm mx-1"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-singh-a683b4277/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-sm mx-1"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
