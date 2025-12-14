import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// JSON-stringified version of your example text art
const visual = `
main       ●──────●─────────────────●──────● (main)
                   \\               /
feature            ●──●──●──●──●── (feature/user-login)
                   ^  ^  ^  ^  ^
                   |  |  |  |  |
                   Create commits
      `;

function TextArt ({text}) {
  return (
    <>
        {text}
    </>
  );
}

function GithubWorkflow() {
    return (
        <>
              
  {/* Bootstrap JS */}
  {/* Bootstrap CSS */}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GitHub Workflow Guide</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            font-family: Arial, sans-serif;\n            line-height: 1.6;\n            margin: 0;\n            padding: 20px;\n            max-width: 1200px;\n            margin: 0 auto;\n        }\n\n        .workflow-container {\n            margin: 20px 0;\n            padding: 20px;\n            border: 1px solid #ddd;\n            border-radius: 5px;\n        }\n\n        .visual-representation {\n            background: #f5f5f5;\n            padding: 20px;\n            margin: 20px 0;\n            overflow-x: auto;\n            font-family: monospace;\n            white-space: pre;\n            border-radius: 5px;\n        }\n    "
    }}
  />
  {/* Bootstrap Navbar */}
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="./">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./centralized-workflow">
              Centralized Workflow
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./gitflow-workflow">
              Gitflow Workflow
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./feature-branch-workflow">
              Feature Branch Workflow
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="./github-workflow">
              GitHub Workflow
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./trunk-based-development">
              Trunk-Based Development
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./forking-workflow">
              Forking Workflow
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container">
    <h1>GitHub Workflow</h1>
    <div className="workflow-container">
      <h2>What is GitHub Workflow?</h2>
      <p>
        GitHub Workflow is a branch-based workflow that supports teams and
        projects where deployments are made regularly. It's designed to make the
        development process more streamlined and efficient.
      </p>
      <h2>Key Principles of GitHub Workflow</h2>
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
          <strong>Regular commits:</strong> Commit changes frequently with clear
          messages.
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
      <h2>Example Workflow</h2>
      <p>
        Here's an example of implementing a new feature using GitHub Workflow:
      </p>
      <div className="visual-representation">
        <TextArt
            label="ASCII art depicting GitHub Workflow"
            text={visual}
        />
      </div>
      <h2>Benefits</h2>
      <ul>
        <li>Simplified parallel development</li>
        <li>Enhanced collaboration through pull requests</li>
        <li>Continuous integration and deployment ready</li>
        <li>Clear tracking of features and changes</li>
        <li>Easy to maintain and understand</li>
      </ul>
    </div>
  </div>
</>


    )

}

export default GithubWorkflow