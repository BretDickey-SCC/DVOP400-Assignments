import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main
      className="doc-container"
      role="main"
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        background: "var(--container-bg)",
        padding: "2.25rem 2.5rem",
        boxShadow: "0 10px 40px rgba(2,6,23,0.06)",
        borderRadius: "12px",
        border: "1px solid var(--container-border)",
      }}
    >
      <header className="d-flex flex-column mb-3">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h1
              className="title"
              style={{
                fontWeight: 700,
                letterSpacing: "-0.5px",
                fontSize: "1.75rem",
                color: "var(--text)",
              }}
            >
              Git Workflows
            </h1>
            <div
              className="subtitle"
              style={{ color: "var(--muted-2)", marginTop: "0.25rem" }}
            >
              Explore different Git collaboration workflows and best practices
            </div>
          </div>
        </div>
        <hr
          style={{
            border: 0,
            borderTop: "1px solid var(--hr-color)",
            height: 0,
            margin: "1rem 0 1.25rem",
            opacity: 1,
          }}
        />
      </header>
      <section className="intro">
        <p
          className="lead"
          style={{ fontSize: "1.05rem", color: "var(--text)" }}
        >
          Choose a workflow that best fits your team's collaboration style and
          project requirements. Each workflow has unique advantages and is
          suited for different team structures and project types.
        </p>
      </section>
      <div
        className="workflow-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        <Link
          to="/centralized"
          className="workflow-card"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: "8px",
            padding: "1.5rem",
            textDecoration: "none",
            color: "var(--text)",
            transition: "all 0.3s ease",
            boxShadow: "0 2px 8px var(--card-shadow)",
          }}
        >
          <h3
            style={{
              color: "var(--brand)",
              margin: "0 0 0.5rem",
              fontSize: "1.1rem",
              fontWeight: 600,
            }}
          >
            Centralized Workflow
          </h3>
          <p
            style={{
              color: "var(--muted-2)",
              fontSize: "0.95rem",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            A simple workflow where all developers work on a single main branch.
            Ideal for small teams and straightforward projects.
          </p>
        </Link>
        <Link
          to="/gitflow"
          className="workflow-card"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: "8px",
            padding: "1.5rem",
            textDecoration: "none",
            color: "var(--text)",
            transition: "all 0.3s ease",
            boxShadow: "0 2px 8px var(--card-shadow)",
          }}
        >
          <h3
            style={{
              color: "var(--brand)",
              margin: "0 0 0.5rem",
              fontSize: "1.1rem",
              fontWeight: 600,
            }}
          >
            Gitflow Workflow
          </h3>
          <p
            style={{
              color: "var(--muted-2)",
              fontSize: "0.95rem",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            A strict branching model with develop and main branches. Perfect for
            projects with scheduled releases and multiple versions.
          </p>
        </Link>
        <Link
          to="/feature-branch"
          className="workflow-card"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: "8px",
            padding: "1.5rem",
            textDecoration: "none",
            color: "var(--text)",
            transition: "all 0.3s ease",
            boxShadow: "0 2px 8px var(--card-shadow)",
          }}
        >
          <h3
            style={{
              color: "var(--brand)",
              margin: "0 0 0.5rem",
              fontSize: "1.1rem",
              fontWeight: 600,
            }}
          >
            Feature Branch Workflow
          </h3>
          <p
            style={{
              color: "var(--muted-2)",
              fontSize: "0.95rem",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Developers create feature branches for each task. Encourages
            collaboration through pull requests and code review.
          </p>
        </Link>
        <Link
          to="/github"
          className="workflow-card"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: "8px",
            padding: "1.5rem",
            textDecoration: "none",
            color: "var(--text)",
            transition: "all 0.3s ease",
            boxShadow: "0 2px 8px var(--card-shadow)",
          }}
        >
          <h3
            style={{
              color: "var(--brand)",
              margin: "0 0 0.5rem",
              fontSize: "1.1rem",
              fontWeight: 600,
            }}
          >
            GitHub Workflow
          </h3>
          <p
            style={{
              color: "var(--muted-2)",
              fontSize: "0.95rem",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            A lightweight workflow optimized for continuous deployment. Main
            branch is always deployable.
          </p>
        </Link>
        <Link
          to="/trunk-based"
          className="workflow-card"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: "8px",
            padding: "1.5rem",
            textDecoration: "none",
            color: "var(--text)",
            transition: "all 0.3s ease",
            boxShadow: "0 2px 8px var(--card-shadow)",
          }}
        >
          <h3
            style={{
              color: "var(--brand)",
              margin: "0 0 0.5rem",
              fontSize: "1.1rem",
              fontWeight: 600,
            }}
          >
            Trunk-Based Development
          </h3>
          <p
            style={{
              color: "var(--muted-2)",
              fontSize: "0.95rem",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Developers commit frequently to a single trunk. Emphasizes
            integration testing and continuous delivery.
          </p>
        </Link>
        <Link
          to="/forking"
          className="workflow-card"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: "8px",
            padding: "1.5rem",
            textDecoration: "none",
            color: "var(--text)",
            transition: "all 0.3s ease",
            boxShadow: "0 2px 8px var(--card-shadow)",
          }}
        >
          <h3
            style={{
              color: "var(--brand)",
              margin: "0 0 0.5rem",
              fontSize: "1.1rem",
              fontWeight: 600,
            }}
          >
            Forking Workflow
          </h3>
          <p
            style={{
              color: "var(--muted-2)",
              fontSize: "0.95rem",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Contributors work on personal forks without direct access to the
            upstream repository. Ideal for open-source projects.
          </p>
        </Link>
      </div>
    </main>
  );
}
