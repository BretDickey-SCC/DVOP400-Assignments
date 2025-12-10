export default function GithubWorkflow() {
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
        <h1
          className="title text-center mb-2"
          style={{
            fontWeight: 700,
            letterSpacing: "-0.5px",
            fontSize: "1.75rem",
            color: "var(--text)",
          }}
        >
          GitHub Workflow
        </h1>
      </header>
      <section className="mb-4">
        <h2 className="text-center">What is GitHub Workflow?</h2>
        <p>
          GitHub Workflow is a branch-based workflow that supports teams and
          projects where deployments are made regularly. It's designed to make
          the development process more streamlined and efficient.
        </p>
      </section>
      <section className="mb-4">
        <h2 className="text-center">Key Principles of GitHub Workflow</h2>
        <ul>
          <li>
            <strong>Main branch is always deployable:</strong> The main branch
            should always contain production-ready code.
          </li>
          <li>
            <strong>Feature branches:</strong> Create new branches for each
            feature or bug fix.
          </li>
          <li>
            <strong>Descriptive branch names:</strong> Use clear, descriptive
            names for branches.
          </li>
          <li>
            <strong>Regular commits:</strong> Commit changes frequently with
            clear messages.
          </li>
          <li>
            <strong>Pull Requests:</strong> Use pull requests to merge changes
            back into the main branch.
          </li>
          <li>
            <strong>Code Review:</strong> Team members review code through pull
            requests before merging.
          </li>
        </ul>
      </section>
      <section className="mb-4">
        <h2 className="text-center">Example Workflow</h2>
        <p>
          Here's an example of implementing a new feature using GitHub Workflow:
        </p>
        <div
          className="visual-representation"
          style={{
            fontFamily: "monospace",
            whiteSpace: "pre",
            background: "var(--pre-bg)",
            color: "var(--pre-color)",
            padding: "1rem",
            borderRadius: "8px",
            marginBottom: "1rem",
          }}
        >
          {`main       ●──────●─────────────────●──────● (main)
              \\               /
feature            ●──●──●──●──●── (feature/user-login)
              ^  ^  ^  ^  ^
              |  |  |  |  |
              Create commits`}
        </div>
      </section>
      <section className="mb-4">
        <h2 className="text-center">Benefits</h2>
        <ul>
          <li>Simplified parallel development</li>
          <li>Enhanced collaboration through pull requests</li>
          <li>Continuous integration and deployment ready</li>
          <li>Clear tracking of features and changes</li>
          <li>Easy to maintain and understand</li>
        </ul>
      </section>
    </main>
  );
}
