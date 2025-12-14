import DarkModeToggle from '../components/DarkModeToggle'

function ForkingWorkflow() {


    return (

        
        <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Forking Workflow in Git</title>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
            rel="stylesheet"
        />
        <style
            dangerouslySetInnerHTML={{
            __html:
                '\n      /* Light theme (default) */\n      :root {\n        --brand: #0d6efd;\n        --muted: #6c757d;\n        --page-bg: #e9eef3;\n        --page-bg-start: #f3f6f9;\n        --container-bg: #f8fafc;\n        --max-width: 900px;\n        --text: #1f2937;\n        --muted-2: #55606a;\n        --pre-bg: linear-gradient(180deg, #eef6fb, #e6eef7);\n        --pre-color: #05242e;\n        --hr-color: rgba(31, 41, 55, 0.18);\n        --container-border: rgba(2, 6, 23, 0.06);\n        --toc-bg: #f6f9fc;\n        --node-bg: #ffffff;\n        --node-border: rgba(2, 6, 23, 0.06);\n      }\n\n      /* Dark theme overrides */\n      [data-theme="dark"] {\n        --brand: #38bdf8;\n        --muted: #94a3b8;\n        --page-bg: #071028;\n        --page-bg-start: #030617;\n        --container-bg: linear-gradient(\n          180deg,\n          rgba(10, 18, 30, 0.96),\n          rgba(6, 12, 22, 0.95)\n        );\n        --max-width: 900px;\n        --text: #e6eef8;\n        --muted-2: #9aa6b2;\n        --pre-bg: linear-gradient(180deg, #00121a, #051421);\n        --pre-color: #d9eefc;\n        --hr-color: rgba(255, 255, 255, 0.08);\n        --container-border: rgba(255, 255, 255, 0.03);\n        --toc-bg: rgba(255, 255, 255, 0.02);\n        --node-bg: rgba(255, 255, 255, 0.03);\n        --node-border: rgba(255, 255, 255, 0.03);\n      }\n\n      html {\n        min-height: 100%;\n        scroll-behavior: smooth;\n      }\n      body {\n        min-height: 100vh;\n        margin: 0;\n        font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto,\n          "Helvetica Neue", Arial;\n        background: linear-gradient(\n          180deg,\n          var(--page-bg-start),\n          var(--page-bg) 40%\n        );\n        background-repeat: no-repeat;\n        background-attachment: fixed;\n        background-size: cover;\n        color: var(--text);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        padding: 2rem 1rem;\n      }\n\n      .doc-container {\n        max-width: var(--max-width);\n        margin: 0 auto;\n        background: var(--container-bg);\n        padding: 2.25rem 2.5rem;\n        box-shadow: 0 10px 40px rgba(2, 6, 23, 0.06);\n        border-radius: 12px;\n        border: 1px solid var(--container-border);\n      }\n\n      header .title {\n        font-weight: 700;\n        letter-spacing: -0.5px;\n        font-size: 1.75rem;\n        color: var(--text);\n      }\n      header .subtitle {\n        color: var(--muted-2);\n        margin-top: 0.25rem;\n      }\n      .meta {\n        color: var(--muted-2);\n      }\n      .italic-text {\n        font-style: italic;\n        font-size: smaller;\n      }\n      hr {\n        border: 0;\n        border-top: 1px solid var(--hr-color);\n        height: 0;\n        margin: 1rem 0 1.25rem;\n        opacity: 1;\n      }\n\n      .toc {\n        background: var(--toc-bg);\n        border-left: 3px solid var(--brand);\n        padding: 0.75rem 1rem;\n        border-radius: 6px;\n      }\n      .toc a {\n        color: var(--text);\n        text-decoration: none;\n      }\n      .toc a:hover {\n        text-decoration: underline;\n        color: var(--brand);\n      }\n\n      /* Responsive figures/images */\n      figure {\n        margin: 0 0 1rem;\n      }\n      figure img {\n        max-width: 100%;\n        height: auto;\n        display: block;\n        border-radius: 8px;\n        object-fit: contain;\n      }\n      figure figcaption {\n        margin-top: 0.35rem;\n        color: var(--muted-2);\n        font-size: 0.9rem;\n      }\n\n      pre {\n        background: var(--pre-bg);\n        color: var(--pre-color);\n        padding: 1rem;\n        border-radius: 8px;\n        overflow: auto;\n        border: 1px solid var(--container-border);\n      }\n      code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n          monospace;\n      }\n      .lead {\n        font-size: 1.05rem;\n        color: var(--text);\n      }\n      .section {\n        margin-top: 1.5rem;\n      }\n      footer {\n        margin-top: 2rem;\n        color: var(--muted-2);\n        font-size: 0.9rem;\n      }\n      a {\n        color: var(--brand);\n      }\n\n      /* Print-friendly adjustments */\n      @media print {\n        body {\n          background: white;\n          padding: 0;\n          color: black;\n        }\n        .doc-container {\n          box-shadow: none;\n          border-radius: 0;\n          padding: 0.75in;\n          background: white;\n          color: black;\n        }\n        .toc {\n          background: #f7f7f7;\n          border-left-color: #222;\n        }\n        pre {\n          background: #f5f5f5;\n          color: #111;\n        }\n      }\n    '
            }}
        />
        {/* Primary navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <div className="container-fluid">
            <a className="navbar-brand" href="./">
                Workflows
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
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                    <a className="nav-link active" aria-current="page" href="#">
                    Forking Workflow
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        <main className="doc-container" role="main">
            <header className="d-flex flex-column mb-3">
            <div className="d-flex justify-content-between align-items-start">
                <div>
                <h1 className="title">Forking Workflow in Git</h1>
                <div className="subtitle">
                    A brief introduction to the Forking Workflow
                </div>
                </div>
                <div>
                <DarkModeToggle />
                </div>
            </div>
            <hr />
            </header>
            <section className="intro mb-3">
            <p className="lead">
                The Forking Workflow is a Git workflow where contributors create a
                personal copy/fork of a repository and commit updates and changes in
                their forked copy, rather than directly in the original repository. It
                has proven ideal for open-source projects and other projects with a
                large team or external contributors collaborating together; it reduces
                the risk of breaking changes in the main repository and allows for more
                flexible experimentation.
            </p>
            </section>
            <div className="row g-3">
            <aside className="col-12 col-md-4">
                <nav className="toc">
                <strong>Contents</strong>
                <ol className="mt-2 mb-0 ps-3">
                    <li>
                    <a href="#when-to-use">When to use</a>
                    </li>
                    <li>
                    <a href="#workflow-steps">Workflow steps</a>
                    </li>
                    <li>
                    <a href="#commands">Example commands</a>
                    </li>
                    <li>
                    <a href="#visual">Example visuals</a>
                    </li>
                    <li>
                    <a href="#tips">Tips &amp; best practices</a>
                    </li>
                    <li>
                    <a href="#references">References</a>
                    </li>
                </ol>
                </nav>
            </aside>
            <article className="col-12 col-md-8">
                <section id="when-to-use" className="section">
                <h2>When to use</h2>
                <p>
                    Use the forking workflow when you want to work independently without
                    direct commit access to the upstream repository to maintain quality
                    control and security measures. Common examples:
                </p>
                <ul>
                    <li>Open-source projects with many external contributors</li>
                    <li>Learning repositories where students submit changes</li>
                    <li>Large teams where maintainers control what gets merged</li>
                </ul>
                </section>
                <section id="workflow-steps" className="section">
                <h2>Workflow steps</h2>
                <ol>
                    <li>
                    <strong>Fork</strong> the upstream repository on the hosting
                    platform (GitHub/GitLab).
                    </li>
                    <li>
                    <strong>Clone</strong> your fork to your local machine.
                    </li>
                    <li>
                    <strong>Create a feature branch</strong> for your change (do not
                    work on main/master).
                    </li>
                    <li>
                    <strong>Work locally</strong>: commit small, focused changes with
                    clear messages.
                    </li>
                    <li>
                    <strong>Push</strong> your branch to your fork.
                    </li>
                    <li>
                    <strong>Open a Pull Request</strong> against the upstream
                    repository's target branch and follow contribution guidelines.
                    </li>
                </ol>
                </section>
                <section id="commands" className="section">
                <h2>Example commands</h2>
                <p>Common sequence (replace placeholders):</p>
                <pre>
                    <code>
                    git clone git@github.com:your-username/repo-name.git{"\n"}cd
                    repo-name{"\n"}git remote add upstream
                    git@github.com:upstream-owner/repo-name.git{"\n"}git checkout -b
                    feature/brief-description{"\n"}# make changes{"\n"}git add -A
                    {"\n"}git commit -m "Short, descriptive message"{"\n"}git push
                    origin feature/brief-description{"\n"}# then open a pull request
                    on the hosting site{"\n"}
                    </code>
                </pre>
                <p className="mt-2">
                    <em>Tip:</em> Keep branches small and focused; the easier to review,
                    the faster it merges.
                </p>
                </section>
                <section id="visual" className="section">
                <h2>Example visuals</h2>
                <figure>
                    <img
                    src="forking-assets/forking-workflow-example1.png"
                    alt="Visual representation of the forking workflow"
                    />
                    <figcaption className="italic-text">
                    From Tomasz Lisowski on GitProtect
                    </figcaption>
                </figure>
                <hr />
                <figure>
                    <img
                    src="forking-assets/forking-workflow-example2.png"
                    alt="Visual representation of the forking workflow"
                    />
                    <figcaption className="italic-text">
                    Derived from work Copyright (c)
                    <a href="https://coderefinery.org" target="_blank" rel="noopener">
                        CodeRefinery
                    </a>
                    </figcaption>
                </figure>
                </section>
                <section id="tips" className="section">
                <h2>Tips &amp; best practices</h2>
                <ul>
                    <li>
                    Track and merge upstream changes regularly to keep your branch up
                    to date.
                    </li>
                    <ul>
                    <li>
                        Set the original repository as the upstream remote to easily
                        fetch branches and changes - THIS IS NOT AUTOMATIC.
                    </li>
                    </ul>
                    <li>
                    Write clear commit messages and PR descriptions referencing any
                    issue numbers.
                    </li>
                    <ul>
                    <li>
                        Squash commits into a single cohesive commit using the rebase
                        command before merging for a cleaner history.
                    </li>
                    </ul>
                    <li>
                    Run tests + linters locally and check guidelines + standards
                    before opening a PR.
                    </li>
                </ul>
                </section>
                <section id="references" className="section">
                <h2>References</h2>
                <ul>
                    <li>
                    <a href="https://docs.github.com/en/get-started/quickstart/fork-a-repo">
                        GitHub: Fork a repo
                    </a>
                    </li>
                    <li>
                    <a href="https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project">
                        Pro Git: Distributed Git - Contributing to a Project
                    </a>
                    </li>
                    <li>
                    <a href="https://graphite.dev/guides/understanding-git-fork-pull-request-workflow">
                        Graphite: Understanding the git fork and pull request workflow
                    </a>
                    </li>
                    <li>
                    <a href="https://dev.to/bendemboski/simplifying-the-git-forking-workflow-4bkf">
                        DEV: Simplifying the git forking workflow
                    </a>
                    </li>
                    <li>
                    <a href="https://gitprotect.io/blog/git-forking-workflow/">
                        GitProtect: Git Forking Workflow
                    </a>
                    </li>
                    <li>
                    <a href="https://flatironinstitute.github.io/sciware-git-collaborative/03-distributed/">
                        Flat Iron Institute: Distributed version control and forking
                        workflow
                    </a>
                    </li>
                </ul>
                </section>
            </article>
            </div>
            {/* <footer class="mt-4">
        <div class="d-flex justify-content-between">
        </div>
        </footer> */}
        </main>
        </>
    )
}

export default ForkingWorkflow