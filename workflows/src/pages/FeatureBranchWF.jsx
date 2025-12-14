import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function FeatureBranchWF() {

    return (
        <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Feature Branch Workflow in Git</title>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
        <style
            dangerouslySetInnerHTML={{
            __html:
                "\n        body {\n            background-color: #111;\n            color: #ccc;\n            text-align: justify;\n        }\n\n        img {\n            max-width: 100%;\n            height: auto;\n        }\n\n        .container {\n            max-width: 600px;\n            margin: auto;\n            padding: 4px;\n            margin-bottom: 255px;\n        }\n\n        .navbar {\n            margin-bottom: 20px;\n        }\n    "
            }}
        />
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
                    <a className="nav-link active" href="./feature-branch-workflow">
                    Feature Branch Workflow
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./github-workflow">
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
            <h1>Feature Branch Workflow in Git</h1>
            <p>
            <strong>By Tristan Johnson</strong> 10/24/2025
            </p>
            <p>
            The Feature Branch Workflow is a popular Git strategy that helps teams
            keep their codebase clean, stable, and organized. Instead of working
            directly on the <code>main</code> branch, developers spin off dedicated
            branches for each new feature or bugfix. This isolates changes, reduces
            conflicts, and makes collaboration smoother.
            </p>
            <p>
            In many setups, there's a <code>develop</code> branch that acts as a
            staging ground for new features. Developers create feature branches from{" "}
            <code>develop</code>, work independently, and then merge back into
            <code>develop</code> once the feature is complete. After integration
            testing, <code>develop</code> is merged into <code>main</code> for
            release.
            </p>
            <p>
            This workflow pairs perfectly with pull requests, continuous integration,
            and code reviews. It encourages clean commits, traceable history, and
            safer deployments—especially when multiple features are in flight.
            </p>
            <h2>Example</h2>
            <p>
            Let's say you're building a login feature. Here's how the flow would look:
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
                <code>main</code> and tag the release (e.g.,
                <code>1.1.0</code>).
            </li>
            </ol>
            <p />
            <h2>Branching Diagram</h2>
            <img
            src="feature-branch-workflow/feature-branch-workflow-diagram.png"
            alt="Feature Branch Workflow Diagram"
            />
        </div>
        </>
    )
}

export default FeatureBranchWF