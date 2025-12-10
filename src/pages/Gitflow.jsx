import GitflowDiagram from "../assets/gitflow-workflow/gitflow-diagram.jpg";

export default function Gitflow() {
  return (
    <div
      className="container"
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "24px",
      }}
    >
      <header
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "28px" }}>GitFlow Workflow</h1>
          <p
            className="lead"
            style={{
              color: "var(--muted)",
              margin: "6px 0 20px",
            }}
          >
            A little guide to the Git branching model called GitFlow followed
            with an example and a visual diagram.
          </p>
        </div>
      </header>

      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "24px",
        }}
      >
        <main
          className="card"
          style={{
            background: "var(--card)",
            padding: "18px",
            borderRadius: "8px",
            boxShadow: "0 1px 0 rgba(0,0,0,0.04)",
          }}
        >
          <section
            className="section"
            style={{
              marginBottom: "14px",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                fontSize: "18px",
              }}
            >
              What is GitFlow?
            </h2>
            <p className="lead" style={{ margin: "6px 0 0" }}>
              GitFlow is a branching model for Git that uses feature branches
              and multiple primary branches. It's designed to make larger and
              more structured projects easier to manage due to its strict
              branching strategy to manage features, releases and hotfixes. As
              well as having a more distinct release cycle. It consists of a{" "}
              <strong>master/main</strong> (production) and{" "}
              <strong>develop</strong>
              {
                " branch, plus short-lived feature, release and hotfix branches."
              }
            </p>
          </section>

          <section
            className="section"
            style={{
              marginBottom: "14px",
            }}
          >
            <h3 style={{ marginBottom: "6px" }}>Core branches</h3>
            <ul>
              <li>
                <strong>master/main</strong> — this tracks and records the
                production-ready history (tagged releases) of the project, this
                should always be stable and deployable.
              </li>
              <li>
                <strong>develop</strong> — its used as the integration branch
                for new features; the next release is prepared here.
              </li>
              <li>
                <strong>feature/*</strong> — branched from{" "}
                <span className="kbd">develop</span> and used for developing new
                features that will be merged back into{" "}
                <span className="kbd">develop</span> when complete.
              </li>
              <li>
                <strong>release/*</strong> — branched from{" "}
                <span className="kbd">develop</span> when preparing for a
                release; it will be merged into both{" "}
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

          <section
            className="section"
            style={{
              marginBottom: "14px",
            }}
          >
            <h3 style={{ marginBottom: "6px" }}>Typical workflow commands</h3>
            <p>
              Here are some common Git commands used in a GitFlow workflow.
              Replace <span className="kbd">feature/my-feature</span> with your
              branch name.
            </p>
            <pre
              style={{
                background: "#0f172a",
                color: "#e6eef8",
                padding: "12px",
                borderRadius: "6px",
                overflow: "auto",
              }}
            >
              <code>{`git checkout -b feature/my-feature develop
  git add .
  git commit -m "Add feature XYZ"
  git checkout develop
  git merge --no-ff feature/my-feature
  git branch -d feature/my-feature

  # When creating a release
  git checkout -b release/1.2.0 develop
  git commit -m "Bump version"
  git checkout master
  git merge --no-ff release/1.2.0
  git tag -a v1.2.0 -m "Release 1.2.0"
  git checkout develop
  git merge --no-ff release/1.2.0
  git branch -d release/1.2.0

  # Hotfix example
  git checkout -b hotfix/1.2.1 master
  git commit -m "Fix critical bug"
  git checkout master
  git merge --no-ff hotfix/1.2.1
  git tag -a v1.2.1 -m "Hotfix 1.2.1"
  git checkout develop
  git merge --no-ff hotfix/1.2.1
  git branch -d hotfix/1.2.1`}</code>
            </pre>
          </section>

          <section
            className="section"
            style={{
              marginBottom: "14px",
            }}
          >
            <h3 style={{ marginBottom: "6px" }}>Example scenario.</h3>
            <p>
              A developer named Walter creates a feature branch from{" "}
              <span className="kbd">develop</span>. Another developer named
              Jessie does the same for another feature. Both merge back into{" "}
              <span className="kbd">develop</span>. When ready, a batch of{" "}
              <span className="kbd">release/</span> branches are created for
              final testing. After testing the product, the release is merged
              into <span className="kbd">master/main</span> , tagged and
              distributed. When Walter and Jessie run into production problems
              from a bug they called "Hank",{" "}
              <span className="kbd">hotfix/</span> branches are created off{" "}
              <span className="kbd">main/master</span>. When "Hank" is dealt
              with <span className="kbd">hotfix/</span> branches are merged back
              to both <span className="kbd">main/master</span> and{" "}
              <span className="kbd">develop</span>.
            </p>
          </section>

          <section
            className="section"
            style={{
              marginBottom: "14px",
            }}
          >
            <h3 style={{ marginBottom: "6px" }}>Notes & best practices</h3>
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
                <span className="kbd">git-flow</span> extensions) if you want
                CLI convenience, but the model can be used manually with Git
                commands shown above.
              </li>
            </ul>
          </section>
        </main>

        <aside
          className="card"
          style={{
            background: "var(--card)",
            padding: "18px",
            borderRadius: "8px",
            boxShadow: "0 1px 0 rgba(0,0,0,0.04)",
          }}
        >
          <div
            className="section"
            style={{
              marginBottom: "14px",
            }}
          >
            <h3 style={{ margin: "6px 0" }}>Diagram</h3>
            <p
              style={{
                margin: "6px 0 12px",
                color: "var(--muted)",
              }}
            >
              A nice little Paint3D diagram.
            </p>
            <img
              src={GitflowDiagram}
              alt="GitFlow diagram"
              className="diagram"
              style={{
                display: "block",
                maxWidth: "900px",
                width: "100%",
                height: "auto",
                borderRadius: "6px",
                border: "1px solid #e6e9ef",
                margin: "14px auto",
              }}
              onError={(e) => {
                e.target.style.opacity = 0.6;
                if (e.target.nextElementSibling)
                  e.target.nextElementSibling.style.display = "block";
              }}
            />
            <div
              style={{
                display: "none",
                color: "var(--muted)",
                fontSize: "13px",
                marginTop: "8px",
              }}
            >
              Image not found. Place the diagram image named{" "}
              <strong>gitflow-diagram.jpg</strong> in the same folder as this
              HTML file.
            </div>
          </div>

          <div
            className="section"
            style={{
              marginBottom: "14px",
            }}
          >
            <h4 style={{ margin: "6px 0" }}>Legend</h4>
            <div
              className="legend"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div
                className="legend-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  className="swatch"
                  style={{
                    width: "28px",
                    height: "12px",
                    borderRadius: "4px",
                    background: "var(--black)",
                  }}
                ></div>
                <div>master (production)</div>
              </div>
              <div
                className="legend-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  className="swatch"
                  style={{
                    width: "28px",
                    height: "12px",
                    borderRadius: "4px",
                    background: "var(--green)",
                  }}
                ></div>
                <div>develop (integration)</div>
              </div>
              <div
                className="legend-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  className="swatch"
                  style={{
                    width: "28px",
                    height: "12px",
                    borderRadius: "4px",
                    background: "var(--orange)",
                  }}
                ></div>
                <div>feature/* (developer 1)</div>
              </div>
              <div
                className="legend-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  className="swatch"
                  style={{
                    width: "28px",
                    height: "12px",
                    borderRadius: "4px",
                    background: "var(--teal)",
                  }}
                ></div>
                <div>feature/* (developer 2)</div>
              </div>
              <div
                className="legend-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  className="swatch"
                  style={{
                    width: "28px",
                    height: "12px",
                    borderRadius: "4px",
                    background: "var(--yellow)",
                  }}
                ></div>
                <div>hotfix/bugfix/*</div>
              </div>
              <div
                className="legend-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  className="swatch"
                  style={{
                    width: "28px",
                    height: "12px",
                    borderRadius: "4px",
                    background: "var(--purple)",
                  }}
                ></div>
                <div>release/*</div>
              </div>
            </div>
          </div>

          <div
            className="section"
            style={{
              marginBottom: "14px",
            }}
          >
            <h4 style={{ margin: "6px 0" }}>Quick tips</h4>
            <ul
              style={{
                color: "var(--muted)",
                fontSize: "14px",
              }}
            >
              <li>
                Protect <span className="kbd">master</span> and{" "}
                <span className="kbd">develop</span> with branch protection
                rules within your GIT.
              </li>
              <li>
                Require code reviewing before merging to{" "}
                <span className="kbd">develop</span> or{" "}
                <span className="kbd">master</span>.
              </li>
              <li>Run coding tests on feature and release branches.</li>
            </ul>
          </div>

          <footer
            style={{
              color: "var(--muted)",
              fontSize: "13px",
              marginTop: "18px",
            }}
          >
            Last updated: Oct 22, 2025
          </footer>
        </aside>
      </div>
    </div>
  );
}
