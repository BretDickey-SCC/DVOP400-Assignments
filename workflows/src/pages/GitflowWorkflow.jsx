import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function GitflowWorkflow() {
    return (
<>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>GitFlow Workflow — DVOP400</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\t\t\t:root{\n\t\t\t\t--bg:#fafafa;\n\t\t\t\t--card:#fff;\n\t\t\t\t--muted:#6b7280;\n\t\t\t\t--accent:#111827;\n\t\t\t\t--green:#34d399; /* develop */\n\t\t\t\t--black:#111827; /* master */\n\t\t\t\t--orange:#f59e0b; /* feature 1 */\n\t\t\t\t--teal:#06b6d4; /* feature 2 */\n\t\t\t\t--yellow:#facc15; /* hotfix/bugfix */\n\t\t\t\t--purple:#a78bfa; /* release */\n\t\t\t}\n\t\t\thtml,body{height:100%;margin:0;font-family:Segoe UI, Roboto, 'Helvetica Neue', Arial;color:var(--accent);background:var(--bg)}\n\t\t\t.container{max-width:1000px;margin:40px auto;padding:24px}\n\t\t\theader{display:flex;gap:20px;align-items:center}\n\t\t\th1{margin:0;font-size:28px}\n\t\t\tp.lead{color:var(--muted);margin:6px 0 20px}\n\t\t\t.grid{display:grid;grid-template-columns:1fr;gap:24px}\n\t\t\t.card{background:var(--card);padding:18px;border-radius:8px;box-shadow:0 1px 0 rgba(0,0,0,0.04)}\n\t\t\t.legend{display:flex;flex-direction:column;gap:8px}\n\t\t\t.legend-item{display:flex;align-items:center;gap:10px}\n\t\t\t.swatch{width:28px;height:12px;border-radius:4px}\n\t\t\tpre{background:#0f172a;color:#e6eef8;padding:12px;border-radius:6px;overflow:auto}\n\t\t\t.diagram{display:block;max-width:900px;width:100%;height:auto;border-radius:6px;border:1px solid #e6e9ef;margin:14px auto}\n\t\t\t.section{margin-bottom:14px}\n\t\t\t.kbd{font-family:monospace;background:#f3f4f6;padding:2px 6px;border-radius:4px}\n\t\t\tfooter{color:var(--muted);font-size:13px;margin-top:18px}\n\t\t\t@media (max-width:900px){.grid{grid-template-columns:1fr}}\n\t\t"
    }}
  />
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
            <a className="nav-link active" href="#">
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
            <a className="nav-link" href="./forking-workflow">
              Forking Workflow
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container">
    <header>
      <div>
        <h1>GitFlow Workflow</h1>
        <p className="lead">
          A little guide to the Git branching model called GitFlow followed with
          an example and a visual diagram.
        </p>
      </div>
    </header>
    <div className="grid">
      <main className="card">
        <section className="section">
          <h2 style={{ marginTop: 0, fontSize: 18 }}>What is GitFlow?</h2>
          <p className="lead" style={{ margin: "6px 0 0" }}>
            GitFlow is a branching model for Git that uses feature branches and
            multiple primary branches. It's designed to make larger and more
            structured projects easier to manage due to its strict branching
            strategy to manage features, releases and hotfixes. As well as
            having a more distinct release cycle. It consists of a{" "}
            <strong>master/main</strong> (production) and{" "}
            <strong>develop</strong> branch, plus short-lived feature, release
            and hotfix branches.
          </p>
        </section>
        <section className="section">
          <h3 style={{ marginBottom: 6 }}>Core branches</h3>
          <ul>
            <li>
              <strong>master/main</strong> — this tracks and records the
              production-ready history (tagged releases) of the project, this
              should always be stable and deployable.
            </li>
            <li>
              <strong>develop</strong> — its used as the integration branch for
              new features; the next release is prepared here.
            </li>
            <li>
              <strong>feature/*</strong> — branched from{" "}
              <span className="kbd">develop</span> and used for developing new
              features that will be merged back into{" "}
              <span className="kbd">develop</span> when complete.
            </li>
            <li>
              <strong>release/*</strong> — branched from{" "}
              <span className="kbd">develop</span> when preparing for a release;
              it will be merged into both{" "}
              <span className="kbd">master/main</span> and{" "}
              <span className="kbd">develop</span>.
            </li>
            <li>
              <strong>hotfix/bugfix/*</strong> — branched from{" "}
              <span className="kbd">master/main</span> to quickly patch
              production, unlike release and feature branches bugfix branches
              off main. When finished it will be merged into both{" "}
              <span className="kbd">master/main</span> and{" "}
              <span className="kbd">develop</span> branches.
            </li>
          </ul>
        </section>
        <section className="section"></section>
        <section className="section">
          <h3 style={{ marginBottom: 6 }}>Typical workflow commands</h3>
          <p>
            Here are some common Git commands used in a GitFlow workflow.
            Replace <span className="kbd">feature/my-feature</span> with your
            branch name.
          </p>
          <pre>
            <code>
              git checkout -b feature/my-feature develop{"\n"}
              {"\t"}
              {"\t"}git add .{"\n"}
              {"\t"}
              {"\t"}git commit -m "Add feature XYZ"{"\n"}
              {"\t"}
              {"\t"}git checkout develop{"\n"}
              {"\t"}
              {"\t"}git merge --no-ff feature/my-feature{"\n"}
              {"\t"}
              {"\t"}git branch -d feature/my-feature{"\n"}
              {"\n"}
              {"\t"}
              {"\t"}# When creating a release{"\n"}
              {"\t"}
              {"\t"}git checkout -b release/1.2.0 develop{"\n"}
              {"\t"}
              {"\t"}git commit -m "Bump version"{"\n"}
              {"\t"}
              {"\t"}git checkout master{"\n"}
              {"\t"}
              {"\t"}git merge --no-ff release/1.2.0{"\n"}
              {"\t"}
              {"\t"}git tag -a v1.2.0 -m "Release 1.2.0"{"\n"}
              {"\t"}
              {"\t"}git checkout develop{"\n"}
              {"\t"}
              {"\t"}git merge --no-ff release/1.2.0{"\n"}
              {"\t"}
              {"\t"}git branch -d release/1.2.0{"\n"}
              {"\n"}
              {"\t"}
              {"\t"}# Hotfix example{"\n"}
              {"\t"}
              {"\t"}git checkout -b hotfix/1.2.1 master{"\n"}
              {"\t"}
              {"\t"}git commit -m "Fix critical bug"{"\n"}
              {"\t"}
              {"\t"}git checkout master{"\n"}
              {"\t"}
              {"\t"}git merge --no-ff hotfix/1.2.1{"\n"}
              {"\t"}
              {"\t"}git tag -a v1.2.1 -m "Hotfix 1.2.1"{"\n"}
              {"\t"}
              {"\t"}git checkout develop{"\n"}
              {"\t"}
              {"\t"}git merge --no-ff hotfix/1.2.1{"\n"}
              {"\t"}
              {"\t"}git branch -d hotfix/1.2.1
            </code>
          </pre>
        </section>
        <section className="section">
          <h3 style={{ marginBottom: 6 }}>Example scenario.</h3>
          <p>
            {" "}
            A developer named Walter creates a feature branch from{" "}
            <span className="kbd">develop</span>. Another developer named Jessie
            does the same for another feature. Both merge back into{" "}
            <span className="kbd">develop</span>. When ready, a batch of{" "}
            <span className="kbd">release/</span> branches are created for final
            testing. After testing the product, the release is merged into{" "}
            <span className="kbd">master/main</span> , tagged and distributed.
            When Walter and Jessie run into production problems from a bug they
            called "Hank", <span className="kbd">hotfix/</span> branches are
            created off <span className="kbd">main/master</span>. When "Hank" is
            dealt with <span className="kbd">hotfix/</span> branches are merged
            back to both <span className="kbd">main/master</span> and{" "}
            <span className="kbd">develop</span>.
          </p>
        </section>
        <section className="section">
          <h3 style={{ marginBottom: 6 }}>Notes &amp; best practices</h3>
          <ul>
            <li>
              Use descriptive branch names such as:{" "}
              <span className="kbd">feature/login-form</span>,{" "}
              <span className="kbd">hotfix/typo-500</span>.
            </li>
            <li>
              Feature branches should be short-lived as well you should
              rebase/update often to avoid merging conflicts.
            </li>
            <li>
              Tag releases on <span className="kbd">master/main</span> so you
              can fallback or reference releases easily.
            </li>
            <li>
              Consider using a GitFlow helper tool (e.g.,{" "}
              <span className="kbd">git-flow</span> extensions) if you want CLI
              convenience, but the model can be used manually with Git commands
              shown above.
            </li>
          </ul>
        </section>
      </main>
      <aside className="card">
        <div className="section">
          <h3 style={{ margin: "6px 0" }}>Diagram</h3>
          <p style={{ margin: "6px 0 12px", color: "var(--muted)" }}>
            A nice little Paint3D diagram.
          </p>
          <img
            src="gitflow-workflow/gitflow-diagram.jpg"
            alt="GitFlow diagram"
            className="diagram"
            onerror="this.style.opacity=0.6;this.nextElementSibling.style.display='block'"
          />
          <div
            style={{
              display: "none",
              color: "var(--muted)",
              fontSize: 13,
              marginTop: 8
            }}
          >
            Image not found. Place the diagram image named{" "}
            <strong>gitflow-diagram.jpg</strong> in the same folder as this HTML
            file.
          </div>
        </div>
        <div className="section">
          <h4 style={{ margin: "6px 0" }}>Legend</h4>
          <div className="legend">
            <div className="legend-item">
              <div className="swatch" style={{ background: "var(--black)" }} />
              <div>master (production)</div>
            </div>
            <div className="legend-item">
              <div className="swatch" style={{ background: "var(--green)" }} />
              <div>develop (integration)</div>
            </div>
            <div className="legend-item">
              <div className="swatch" style={{ background: "var(--orange)" }} />
              <div>feature/* (developer 1)</div>
            </div>
            <div className="legend-item">
              <div className="swatch" style={{ background: "var(--teal)" }} />
              <div>feature/* (developer 2)</div>
            </div>
            <div className="legend-item">
              <div className="swatch" style={{ background: "var(--yellow)" }} />
              <div>hotfix/bugfix/*</div>
            </div>
            <div className="legend-item">
              <div className="swatch" style={{ background: "var(--purple)" }} />
              <div>release/*</div>
            </div>
          </div>
        </div>
        <div className="section">
          <h4 style={{ margin: "6px 0" }}>Quick tips</h4>
          <ul style={{ color: "var(--muted)", fontSize: 14 }}>
            <li>
              Protect <span className="kbd">master</span> and{" "}
              <span className="kbd">develop</span> with branch protection rules
              within your GIT.
            </li>
            <li>
              Require code reviewing before merging to{" "}
              <span className="kbd">develop</span> or{" "}
              <span className="kbd">master</span>.
            </li>
            <li>Run coding tests on feature and release branches.</li>
          </ul>
        </div>
        <footer>Last updated: Oct 22, 2025</footer>
      </aside>
    </div>
  </div>
</>
    );
}

export default GitflowWorkflow;