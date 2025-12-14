import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function HomePage() {

  return (
    
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            body {\n                background-color: #f4f7f6;\n                color: #333;\n                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                text-align: center;\n            }\n\n            header {\n                border-bottom: 5px solid #004085;\n                padding-top: 2rem;\n                padding-bottom: 2rem;\n            }\n            \n            h1, h2 {\n                text-align: center;\n            }\n\n            .card {\n                border: none;\n                border-radius: 8px;\n                transition: transform 0.3s ease, box-shadow 0.3s ease;\n                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n                text-align: left;\n                height: 100%;\n            }\n\n            .card:hover {\n                transform: translateY(-5px);\n                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n            }\n\n            .card-title {\n                font-weight: 600;\n                color: #0056b3;\n                text-align: left;\n            }\n\n            .card-text {\n                color: #6c757d;\n                text-align: left;\n            }\n\n            .btn-primary {\n                background-color: #007bff;\n                border-color: #007bff;\n                transition: background-color 0.2s;\n                width: 100%;\n            }\n\n            .btn-primary:hover {\n                background-color: #0056b3;\n                border-color: #0056b3;\n            }\n\n            footer {\n                background-color: #e9ecef;\n                color: #6c757d;\n                border-top: 1px solid #dee2e6;\n                padding-top: 1rem;\n                padding-bottom: 1rem;\n            }\n        "
    }}
  />
  <header className="bg-primary">
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          SDLC Automation:
          <br />
          Plan &amp; Code
        </a>
        <button
          id="collapseButton"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="#">
              Home
            </a>
            <a className="nav-link" href="./centralized-workflow">
              Centralized Workflow
            </a>
            <a className="nav-link" href="./gitflow-workflow">
              Gitflow Workflow
            </a>
            <a className="nav-link" href="./feature-branch-workflow">
              Feature Branch Workflow
            </a>
            <a className="nav-link" href="./github-workflow">
              GitHub Workflow
            </a>
            <a className="nav-link" href="./trunk-based-development">
              Trunk-Based Development
            </a>
            <a className="nav-link" href="./forking-workflow">
              Forking Workflow
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main className="container my-5">
    <h1>Welcome to my DVOP400 Final Project Home Page!</h1>
    <p className="lead mb-5">
      Select a workflow below to view detailed documentation and implementation
      guides for your team.
    </p>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div className="col">
        <div className="card">
          <div className="card-body d-flex flex-column">
            <h2 className="card-title h5">Centralized Workflow</h2>
            <p className="card-text">
              A simple, SVN-style workflow where all team members push to a
              single `main` branch. Ideal for small teams or beginners.
            </p>
            <a
              href="./centralized-workflow"
              className="btn btn-primary mt-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body d-flex flex-column">
            <h2 className="card-title h5">Feature Branch Workflow</h2>
            <p className="card-text">
              Every new feature or bugfix is developed on a dedicated branch.
              This promotes clean history and structured code reviews.
            </p>
            <a
              href="./feature-branch-workflow"
              className="btn btn-primary mt-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body d-flex flex-column">
            <h2 className="card-title h5">Forking Workflow</h2>
            <p className="card-text">
              A decentralized workflow suitable for open-source projects.
              Contributions are made via public "forks" and pull requests.
            </p>
            <a href="./forking-workflow" className="btn btn-primary mt-auto">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body d-flex flex-column">
            <h2 className="card-title h5">Gitflow Workflow</h2>
            <p className="card-text">
              A highly structured workflow with dedicated branches for features,
              releases, hotfixes, and development/main lines.
            </p>
            <a href="./gitflow-workflow" className="btn btn-primary mt-auto">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body d-flex flex-column">
            <h2 className="card-title h5">GitHub Workflow</h2>
            <p className="card-text">
              A streamlined, lightweight, branch-based workflow focused on pull
              requests. It is the core methodology used on GitHub.com.
            </p>
            <a href="./github-workflow" className="btn btn-primary mt-auto">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body d-flex flex-column">
            <h2 className="card-title h5">Trunk Based Development (TBD)</h2>
            <p className="card-text">
              Developers merge small, frequent commits into a single "trunk"
              (main branch). Key for continuous integration and delivery
              (CI/CD).
            </p>
            <a
              href="./trunk-based-development"
              className="btn btn-primary mt-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer className="text-center py-4 mt-5">
    <p>© 2025 Ryan Cooper</p>
  </footer>
</>

  )
}

export default HomePage