import FeatureBranchDiagram from "../assets/feature-branch-workflow/feature-branch-workflow-diagram.png";

export default function FeatureBranch() {
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
      <header className="mb-4">
        <div>
          <h1
            className="title text-center mb-2"
            style={{
              fontWeight: 700,
              letterSpacing: "-0.5px",
              fontSize: "1.75rem",
              color: "var(--text)",
            }}
          >
            Feature Branch Workflow in Git
          </h1>
          <p
            className="lead text-center"
            style={{
              color: "var(--muted-2)",
              marginTop: "0.25rem",
            }}
          >
            <strong>By Tristan Johnson</strong> 10/24/2025
          </p>
        </div>
      </header>
      <section className="mb-4">
        <p>
          The Feature Branch Workflow is a popular Git strategy that helps teams
          keep their codebase clean, stable, and organized. Instead of working
          directly on the <code>main</code> branch, developers spin off
          dedicated branches for each new feature or bugfix. This isolates
          changes, reduces conflicts, and makes collaboration smoother.
        </p>
        <p>
          In many setups, there's a <code>develop</code> branch that acts as a
          staging ground for new features. Developers create feature branches
          from <code>develop</code>, work independently, and then merge back
          into
          <code>develop</code> once the feature is complete. After integration
          testing, <code>develop</code> is merged into <code>main</code> for
          release.
        </p>
        <p>
          This workflow pairs perfectly with pull requests, continuous
          integration, and code reviews. It encourages clean commits, traceable
          history, and safer deployments—especially when multiple features are
          in flight.
        </p>
      </section>
      <section className="mb-4">
        <h2>Example</h2>
        <p>
          Let's say you're building a login feature. Here's how the flow would
          look:
        </p>
        <ol>
          <li>
            Start from the <code>develop</code> branch.
          </li>
          <li>
            Create a new branch called <code>feature/login</code>.
          </li>
          <li>
            Commit your changes to <code>feature/login</code>.
          </li>
          <li>
            Open a pull request to merge <code>feature/login</code> into{" "}
            <code>develop</code>.
          </li>
          <li>
            After testing and review, merge into <code>develop</code>.
          </li>
          <li>
            Once all features are ready, merge <code>develop</code> into{" "}
            <code>main</code> and tag the release (e.g., <code>1.1.0</code>).
          </li>
        </ol>
      </section>
      <section className="mb-4">
        <h2>Branching Diagram</h2>
        <img
          src={FeatureBranchDiagram}
          alt="Feature Branch Workflow Diagram"
          style={{
            maxWidth: "100%",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            margin: "16px 0",
          }}
        />
      </section>
    </main>
  );
}
