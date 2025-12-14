import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function CentralizedWorkflow() {

  var currentYear = new Date().getFullYear();

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Centralized Workflow</title>
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="./">
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
              <a className="nav-link" href="./">
                Home
              </a>
              <a
                className="nav-link active"
                aria-current="./centralized-workflow"
              >
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
      <main className="container my-5">
        <h1 className="mb-3 text-center">Centralized Workflow</h1>
        <p className="lead">
          This page describes a centralized workflow approach for managing issues
          and projects. In a centralized workflow, all issues, or tasks, and
          communications are funneled through a single point of control, allowing
          for streamlined decision-making and oversight. This method is particularly
          effective for teams that require tight coordination and clear
          accountability.
        </p>
        {/* Description Section */}
        <section id="description" className="mt-5">
          <h2 className="text-center">Description</h2>
          <p>
            With centralized workflows, there is only one branch. It is the main
            branch. It is also called the master branch. All developers working
            jointly on a repository commit their work to this branch. This workflow
            model is best suited for small teams and simple projects. All developers
            must have good communication skills to avoid merge conflicts. A merge
            conflict can happen when 2 developers are individually working on the
            same lines of code or nearby lines in the same file. If one developer
            commits their update to that file to the main branch, the second
            developer will encounter a merge conflict if they haven't pulled that
            update from the remote repo prior to committing changes to it. It can
            also happen if the second developer deletes the file, commits their
            work, and pushes their work. The remote repo is expecting that file to
            be there because their local main branch is behind the remote main
            branch. It is better if each developer plans and works on different
            files. If they plan and agree to work on the same files, they should
            communicate what they are working on within those files and schedule.
            DevOps Engineers should Implement clear roles and responsibilities, use
            a centralized calendar for scheduling, and ensure constant communication
            and synchronization, pull changes frequently, make small commits, and
            use tools like rebasing to keep the history linear and prevent merge
            conflicts. Treat the central repository as immutable and prevent local
            commits from diverging from the central repository by following these
            tips.
          </p>
        </section>
        {/* Visual Representation Section */}
        <section id="image" className="mt-5">
          <div>
            <img
              className="component__image"
              src="./centralized-workflow-img/centralized-1.png"
              loading="lazy"
              alt="Centralized Workflow Diagram 1"
            />
            <img
              className="component__image"
              src="./centralized-workflow-img/centralized-2.png"
              loading="lazy"
              alt="Centralized Workflow Diagram 2"
            />
            <img
              className="component__image"
              src="./centralized-workflow-img/centralized-3.png"
              loading="lazy"
              alt="Centralized Workflow Diagram 2"
            />
          </div>
        </section>
        {/* Example Section */}
        <section id="example" className="mt-5">
          <h2 className="text-center">Examples</h2>
          <div>
            One example of centralized workflow is Concurrent Versions System (CVS),
            which was developed in the 1980's. Another example of centralized
            workflow where it is applied in a workplace is as follows: A small web
            development team is building a simple marketing website. Here is how a
            centralized workflow would be applied in this scenario:
          </div>
          <div>
            <ul>
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
          </div>
        </section>
        <section>
          <h2 className="text-center">Summary</h2>
          <ul>
            <li>
              Centralized workflows are best suited for small teams and simple
              projects where communication is straightforward.
            </li>
            <li>
              Simplicity: The lack of complex branching makes it easy for developers
              to understand, especially those new to version control systems like
              Git.
            </li>
            <li>
              Speed: Since every change is committed directly to the main branch,
              there is minimal overhead from creating and managing feature branches,
              which can speed up the development process for small projects.
            </li>
            <li>
              Consistent history: The linear development process creates a clear and
              straightforward project history, which is easy to track and maintain.
            </li>
            <li>
              Less overhead for communication: For a small team, communication is
              easy, so developers can coordinate to avoid working on the same files
              at the same time and minimize merge conflicts.
            </li>
          </ul>
        </section>
        <section id="example" className="mt-5">
          <h2 className="text-center">Sources</h2>
          <div>
            <a href="https://www.digitalproductsdp.com/blog/centralized-version-control-systems">
              Centralized Version Control Systems
            </a>
          </div>
          <div>
            <a href="https://about.gitlab.com/topics/version-control/what-is-centralized-version-control-system/">
              What is a centralized version control system
            </a>
          </div>
          <div>
            <a href="https://flatironinstitute.github.io/sciware-git-collaborative/02-centralized/">
              Centralized
            </a>
          </div>
          <div>
            <a href="https://www.atlassian.com/git/tutorials/comparing-workflows">
              Comparing Workflows
            </a>
          </div>
        </section>
      </main>
      {/* Bootstrap JS Bundle */}
      {/* Footer */}
      <footer className="bg-dark text-white py-3 mt-auto">
        <div className="container text-center">
          <p className="mb-0">
            Ryan Cooper © <span>{currentYear}</span>
          </p>
        </div>
      </footer>
    </>
  )
}

export default CentralizedWorkflow