import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Workflows
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/centralized">
                Centralized Workflow
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gitflow">
                Gitflow Workflow
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/feature-branch">
                Feature Branch Workflow
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/github">
                GitHub Workflow
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/trunk-based">
                Trunk-Based Development
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/forking">
                Forking Workflow
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
