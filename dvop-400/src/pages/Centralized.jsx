import Centralized1 from "../assets/centralized-workflow-img/centralized-1.png";
import Centralized2 from "../assets/centralized-workflow-img/centralized-2.png";
import Centralized3 from "../assets/centralized-workflow-img/centralized-3.png";

export default function Centralized() {
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
      <h1
        className="mb-3 text-center"
        style={{
          fontWeight: 700,
          letterSpacing: "-0.5px",
          fontSize: "1.75rem",
          color: "var(--text)",
        }}
      >
        Centralized Workflow
      </h1>
      <p
        className="lead"
        style={{
          color: "var(--muted-2)",
          marginTop: "0.25rem",
        }}
      >
        This page describes a centralized workflow approach for managing issues
        and projects. In a centralized workflow, all issues, or tasks, and
        communications are funneled through a single point of control, allowing
        for streamlined decision-making and oversight. This method is
        particularly effective for teams that require tight coordination and
        clear accountability.
      </p>

      {/* Description Section */}
      <section id="description" className="mt-5">
        <h2 className="text-center">Description</h2>
        <p>
          With centralized workflows, there is only one branch. It is the main
          branch. It is also called the master branch. All developers working
          jointly on a repository commit their work to this branch. This
          workflow model is best suited for small teams and simple projects. All
          developers must have good communication skills to avoid merge
          conflicts. A merge conflict can happen when 2 developers are
          individually working on the same lines of code or nearby lines in the
          same file. If one developer commits their update to that file to the
          main branch, the second developer will encounter a merge conflict if
          they haven't pulled that update from the remote repo prior to
          committing changes to it. It can also happen if the second developer
          deletes the file, commits their work, and pushes their work. The
          remote repo is expecting that file to be there because their local
          main branch is behind the remote main branch. It is better if each
          developer plans and works on different files. If they plan and agree
          to work on the same files, they should communicate what they are
          working on within those files and schedule. DevOps Engineers should
          Implement clear roles and responsibilities, use a centralized calendar
          for scheduling, and ensure constant communication and synchronization,
          pull changes frequently, make small commits, and use tools like
          rebasing to keep the history linear and prevent merge conflicts. Treat
          the central repository as immutable and prevent local commits from
          diverging from the central repository by following these tips.
        </p>
      </section>

      {/* Visual Representation Section */}
      <section id="image" className="mt-5">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          <img
            className="component__image img-fluid mb-3"
            src={Centralized1}
            loading="lazy"
            alt="Centralized Workflow Diagram 1"
            style={{
              maxWidth: "280px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          />
          <img
            className="component__image img-fluid mb-3"
            src={Centralized2}
            loading="lazy"
            alt="Centralized Workflow Diagram 2"
            style={{
              maxWidth: "280px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          />
          <img
            className="component__image img-fluid mb-3"
            src={Centralized3}
            loading="lazy"
            alt="Centralized Workflow Diagram 3"
            style={{
              maxWidth: "280px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          />
        </div>
      </section>

      {/* Example Section */}
      <section id="example" className="mt-5">
        <h2 className="text-center">Examples</h2>
        <div style={{ marginBottom: "1rem" }}>
          One example of centralized workflow is Concurrent Versions System
          (CVS), which was developed in the 1980's. Another example of
          centralized workflow where it is applied in a workplace is as follows:
          A small web development team is building a simple marketing website.
          Here is how a centralized workflow would be applied in this scenario:
        </div>
        <ul style={{ marginBottom: "1.5rem" }}>
          <li>
            The single source of truth: All developers push and pull their code
            from a single, main branch in a central repository.
          </li>
          <li>
            A new developer joins the project: The developer begins by cloning
            the central repository to their local machine.
          </li>
          <li>
            Multiple developers work on a task: Two team members, John and
            Jessica, are both working on different sections of the website.
          </li>
          <li>
            One developer pushes their changes: John finishes his work first and
            pushes his changes to the main branch of the central repository.
          </li>
          <li>
            The other developer updates their local copy of the same file John
            was working on: Jessica tries to push her work next, but her push is
            rejected because the main branch has been updated by John.
          </li>
          <li>
            Resolving conflicts: Jessica must first pull John's new changes from
            the central repository and merge them with her own work. She
            resolves any potential code conflicts that arise.
          </li>
          <li>
            Final push to the central repository: After the merge, Jessica
            successfully pushes her new, complete code to the main branch.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-center">Summary</h2>
        <ul style={{ marginBottom: "1.5rem" }}>
          <li>
            Centralized workflows are best suited for small teams and simple
            projects where communication is straightforward.
          </li>
          <li>
            Simplicity: The lack of complex branching makes it easy for
            developers to understand, especially those new to version control
            systems like Git.
          </li>
          <li>
            Speed: Since every change is committed directly to the main branch,
            there is minimal overhead from creating and managing feature
            branches, which can speed up the development process for small
            projects.
          </li>
          <li>
            Consistent history: The linear development process creates a clear
            and straightforward project history, which is easy to track and
            maintain.
          </li>
          <li>
            Less overhead for communication: For a small team, communication is
            easy, so developers can coordinate to avoid working on the same
            files at the same time and minimize merge conflicts.
          </li>
        </ul>
      </section>

      <section id="example" className="mt-5">
        <h2 className="text-center">Sources</h2>
        <div style={{ marginBottom: "0.5rem" }}>
          <a
            href="https://www.digitalproductsdp.com/blog/centralized-version-control-systems"
            target="_blank"
            rel="noopener"
            style={{ color: "var(--brand)" }}
          >
            Centralized Version Control Systems
          </a>
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <a
            href="https://about.gitlab.com/topics/version-control/what-is-centralized-version-control-system/"
            target="_blank"
            rel="noopener"
            style={{ color: "var(--brand)" }}
          >
            What is a centralized version control system
          </a>
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <a
            href="https://flatironinstitute.github.io/sciware-git-collaborative/02-centralized/"
            target="_blank"
            rel="noopener"
            style={{ color: "var(--brand)" }}
          >
            Centralized
          </a>
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <a
            href="https://www.atlassian.com/git/tutorials/comparing-workflows"
            target="_blank"
            rel="noopener"
            style={{ color: "var(--brand)" }}
          >
            Comparing Workflows
          </a>
        </div>
      </section>
    </main>
  );
}
