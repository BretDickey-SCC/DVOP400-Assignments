import TrunkDiagram from "../assets/trunk-based-development/trunk-based-development.png";

export default function TrunkBased() {
  return (
    <main className="doc-container" role="main">
      <header className="mb-4">
        <h1 className="title text-center mb-2">Trunk-Based Development</h1>
        <p className="subtitle text-center">
          Short-lived branches, frequent merges to trunk for rapid delivery.
        </p>
      </header>

      <section className="mb-4">
        <h2>What is Trunk-Based Development?</h2>
        <p>
          Trunk-Based Development is a source control workflow where developers
          collaborate on small, frequent changes directly against a single
          shared branch — commonly called the trunk, main, or master. The trunk
          remains the integration point for all changes and short-lived feature
          branches are merged quickly.
        </p>
        <div className="note bg-info bg-opacity-10 border-start border-info p-3 rounded">
          <strong>Best practice:</strong> keep branches short-lived (hours or
          days), make small changes, and use feature flags for unfinished work.
        </div>
      </section>

      <section className="mb-4">
        <h2>Example workflow</h2>
        <p>Example steps when using Git with Trunk-Based Development:</p>
        <ol>
          <li>Create a short-lived branch from main</li>
          <li>Implement a small change and write tests.</li>
          <li>
            Run CI against the branch or trunk; when green, merge quickly into
            main.
          </li>
          <li>
            Deploy small, frequent releases from main (often continuously).
          </li>
        </ol>
      </section>

      <section className="mb-4">
        <h2>Visual branching example</h2>
        <p>
          The diagram below illustrates a typical trunk-based flow: short-lived
          feature branches merge back into main frequently.
        </p>
        <figure>
          <img
            src={TrunkDiagram}
            alt="Trunk-Based Development branching diagram"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
          <figcaption className="text-center mt-2">
            Figure 1 — Example trunk-based branching (short-lived branches merge
            into trunk/main).
          </figcaption>
        </figure>
      </section>

      <section className="mb-4">
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
    </main>
  );
}
