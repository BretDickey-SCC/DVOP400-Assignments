import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Centralized from "./pages/Centralized";
import Gitflow from "./pages/Gitflow";
import FeatureBranch from "./pages/FeatureBranch";
import GithubWorkflow from "./pages/GithubWorkflow";
import TrunkBased from "./pages/TrunkBased";
import Forking from "./pages/Forking";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/centralized" element={<Centralized />} />
        <Route path="/gitflow" element={<Gitflow />} />
        <Route path="/feature-branch" element={<FeatureBranch />} />
        <Route path="/github" element={<GithubWorkflow />} />
        <Route path="/trunk-based" element={<TrunkBased />} />
        <Route path="/forking" element={<Forking />} />
      </Routes>
    </Router>
  );
}

export default App;
