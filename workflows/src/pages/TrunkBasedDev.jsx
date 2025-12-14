import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function TrunkBasedDev() {

  return (
    <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Trunk-Based Development</title>
    {/* Bootstrap CSS */}
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
    />
    <style
        dangerouslySetInnerHTML={{
        __html:
            '\n      body {\n        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n          "Helvetica Neue", Arial;\n        line-height: 1.6;\n        margin: 2rem;\n        color: #222;\n        background: #fff;\n      }\n      header h1 {\n        margin: 0 0 0.25rem 0;\n      }\n      .meta {\n        color: #555;\n        margin-bottom: 1rem;\n      }\n      figure {\n        margin: 1rem 0;\n      }\n      img.diagram {\n        max-width: 100%;\n        height: auto;\n        border: 1px solid #ddd;\n        border-radius: 6px;\n      }\n      pre {\n        background: #f6f8fa;\n        padding: 0.75rem 1rem;\n        border-radius: 6px;\n        overflow: auto;\n      }\n      .note {\n        background: #eef9ff;\n        border-left: 4px solid #79b8ff;\n        padding: 0.5rem 1rem;\n        margin: 1rem 0;\n      }\n      /* Navbar link styling: uniform font/size and spacing */\n      .navbar .nav-link {\n        font-size: 1rem;\n        font-weight: 500;\n        letter-spacing: 0.2px;\n        padding-left: 0.8rem;\n        padding-right: 0.8rem;\n      }\n      .navbar .nav-link:hover {\n        color: #e6f3ff;\n      }\n      .navbar .navbar-brand {\n        font-weight: 600;\n      }\n    '
        }}
    />
    {/* Bootstrap navbar (bg-primary) */}
    <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
        <div className="container-fluid">
        <a className="navbar-brand" href="./">
            Home
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
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
                <a className="nav-link" href="./github-workflow">
                GitHub Workflow
                </a>
            </li>
            <li className="nav-item">
                <a
                className="nav-link active"
                aria-current="page"
                href="#"
                >
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
    <header>
        <h1>Trunk-Based Development</h1>
        <p className="meta">
        A short explanation and example of how Trunk-Based Development is used
        with Git.
        </p>
    </header>
    <section>
        <h2>What is Trunk-Based Development?</h2>
        <p>
        Trunk-Based Development is a source control workflow where developers
        collaborate on small, frequent changes directly against a single shared
        branch — commonly called the trunk, main, or master. The trunk remains the
        integration point for all changes and short-lived feature branches are
        merged quickly.
        </p>
        <div className="note">
        Best practice: keep branches short-lived (hours or days), make small
        changes, and use feature flags for unfinished work.
        </div>
    </section>
    <section>
        <h2>Example workflow</h2>
        <p>Example steps when using Git with Trunk-Based Development:</p>
        <ol>
        <li>Create a short-lived branch from main</li>
        <li>Implement a small change and write tests.</li>
        <li>
            Run CI against the branch or trunk; when green, merge quickly into main.
        </li>
        <li>Deploy small, frequent releases from main (often continuously).</li>
        </ol>
    </section>
    <section>
        <h2>Visual branching example</h2>
        <p>
        The diagram below illustrates a typical trunk-based flow: short-lived
        feature branches merge back into main frequently.
        </p>
        <figure>
        <img
            className="diagram"
            src="trunk-based-development/trunk-based-development.png"
            alt="Trunk-Based Development branching diagram"
        />
        <figcaption>
            Figure 1 — Example trunk-based branching (short-lived branches merge
            into trunk/main).
        </figcaption>
        </figure>
    </section>
    <section>
        <h2>Why teams use Trunk-Based Development</h2>
        <ul>
        <li>Reduces long-lived merge conflicts.</li>
        <li>Encourages continuous integration and frequent releases.</li>
        <li>
            Works well with feature flags and automated testing to keep trunk
            deployable.
        </li>
        </ul>
    </section>
    {/* Bootstrap JS bundle (for navbar toggling) */}
    </>

  )
}

export default TrunkBasedDev