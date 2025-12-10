import Forking1 from "../assets/forking-assets/forking-workflow-example1.png";
import Forking2 from "../assets/forking-assets/forking-workflow-example2.png";

export default function Forking() {
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
              Forking Workflow in Git
            </h1>
            <div
              className="subtitle"
              style={{
                color: "var(--muted-2)",
                marginTop: "0.25rem",
              }}
            >
              A brief introduction to the Forking Workflow
            </div>
          </div>
        </div>
        <hr />
      </header>
      <section className="intro mb-3">
        <p
          className="lead"
          style={{
            fontSize: "1.05rem",
            color: "var(--text)",
          }}
        >
          The Forking Workflow is a Git workflow where contributors create a
          personal copy/fork of a repository and commit updates and changes in
          their forked copy, rather than directly in the original repository. It
          has proven ideal for open-source projects and other projects with a
          large team or external contributors collaborating together; it reduces
          the risk of breaking changes in the main repository and allows for
          more flexible experimentation.
        </p>
      </section>
      <div className="row g-3">
        <aside className="col-12 col-md-4">
          <nav
            className="toc"
            style={{
              background: "var(--toc-bg)",
              borderLeft: "3px solid var(--brand)",
              padding: "0.75rem 1rem",
              borderRadius: "6px",
            }}
          >
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
                <a href="#tips">Tips & best practices</a>
              </li>
              <li>
                <a href="#references">References</a>
              </li>
            </ol>
          </nav>
        </aside>
        <article className="col-12 col-md-8">
          <section
            id="when-to-use"
            className="section"
            style={{ marginTop: "1.5rem" }}
          >
            <h2>When to use</h2>
            <p>
              Use the forking workflow when you want to work independently
              without direct commit access to the upstream repository to
              maintain quality control and security measures. Common examples:
            </p>
            <ul>
              <li>Open-source projects with many external contributors</li>
              <li>Learning repositories where students submit changes</li>
              <li>Large teams where maintainers control what gets merged</li>
            </ul>
          </section>
          <section
            id="workflow-steps"
            className="section"
            style={{ marginTop: "1.5rem" }}
          >
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
                <strong>Work locally</strong>: commit small, focused changes
                with clear messages.
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
          <section
            id="commands"
            className="section"
            style={{ marginTop: "1.5rem" }}
          >
            <h2>Example commands</h2>
            <p>Common sequence (replace placeholders):</p>
            <pre
              style={{
                background: "var(--pre-bg)",
                color: "var(--pre-color)",
                padding: "1rem",
                borderRadius: "8px",
                overflow: "auto",
                border: "1px solid var(--container-border)",
              }}
            >
              <code>{`git clone git@github.com:your-username/repo-name.git
cd repo-name
git remote add upstream git@github.com:upstream-owner/repo-name.git
git checkout -b feature/brief-description
# make changes
git add -A
git commit -m "Short, descriptive message"
git push origin feature/brief-description
# then open a pull request on the hosting site`}</code>
            </pre>
            <p className="mt-2">
              <em>Tip:</em> Keep branches small and focused; the easier to
              review, the faster it merges.
            </p>
          </section>
          <section
            id="visual"
            className="section"
            style={{ marginTop: "1.5rem" }}
          >
            <h2>Example visuals</h2>
            <figure style={{ margin: "0 0 1rem" }}>
              <img
                src={Forking1}
                alt="Visual representation of the forking workflow"
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  objectFit: "contain",
                }}
              />
              <figcaption
                className="italic-text"
                style={{
                  fontStyle: "italic",
                  fontSize: "smaller",
                  marginTop: "0.35rem",
                  color: "var(--muted-2)",
                }}
              >
                From Tomasz Lisowski on GitProtect
              </figcaption>
            </figure>
            <hr />
            <figure style={{ margin: "0 0 1rem" }}>
              <img
                src={Forking2}
                alt="Visual representation of the forking workflow"
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  objectFit: "contain",
                }}
              />
              <figcaption
                className="italic-text"
                style={{
                  fontStyle: "italic",
                  fontSize: "smaller",
                  marginTop: "0.35rem",
                  color: "var(--muted-2)",
                }}
              >
                Derived from work Copyright (c){" "}
                <a
                  href="https://coderefinery.org"
                  target="_blank"
                  rel="noopener"
                  style={{ color: "var(--brand)" }}
                >
                  CodeRefinery
                </a>
              </figcaption>
            </figure>
          </section>
          <section
            id="tips"
            className="section"
            style={{ marginTop: "1.5rem" }}
          >
            <h2>Tips & best practices</h2>
            <ul>
              <li>
                Track and merge upstream changes regularly to keep your branch
                up to date.
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
          <section
            id="references"
            className="section"
            style={{ marginTop: "1.5rem" }}
          >
            <h2>References</h2>
            <ul>
              <li>
                <a
                  href="https://docs.github.com/en/get-started/quickstart/fork-a-repo"
                  target="_blank"
                  rel="noopener"
                  style={{ color: "var(--brand)" }}
                >
                  GitHub: Fork a repo
                </a>
              </li>
              <li>
                <a
                  href="https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project"
                  target="_blank"
                  rel="noopener"
                  style={{ color: "var(--brand)" }}
                >
                  Pro Git: Distributed Git - Contributing to a Project
                </a>
              </li>
              <li>
                <a
                  href="https://graphite.dev/guides/understanding-git-fork-pull-request-workflow"
                  target="_blank"
                  rel="noopener"
                  style={{ color: "var(--brand)" }}
                >
                  Graphite: Understanding the git fork and pull request workflow
                </a>
              </li>
              <li>
                <a
                  href="https://dev.to/bendemboski/simplifying-the-git-forking-workflow-4bkf"
                  target="_blank"
                  rel="noopener"
                  style={{ color: "var(--brand)" }}
                >
                  DEV: Simplifying the git forking workflow
                </a>
              </li>
              <li>
                <a
                  href="https://gitprotect.io/blog/git-forking-workflow/"
                  target="_blank"
                  rel="noopener"
                  style={{ color: "var(--brand)" }}
                >
                  GitProtect: Git Forking Workflow
                </a>
              </li>
              <li>
                <a
                  href="https://flatironinstitute.github.io/sciware-git-collaborative/03-distributed/"
                  target="_blank"
                  rel="noopener"
                  style={{ color: "var(--brand)" }}
                >
                  Flat Iron Institute: Distributed version control and forking
                  workflow
                </a>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
