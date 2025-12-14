import HomePage from "./pages/HomePage"
import CentralizedWorkflow from "./pages/CentralizedWorkflow"
import FeatureBranchWF from "./pages/FeatureBranchWF"
import ForkingWorkflow from "./pages/ForkingWorkflow"
import GitflowWorkflow from "./pages/GitflowWorkflow"
import GithubWorkflow from "./pages/GithubWorkflow"
import TrunkBasedDev from "./pages/TrunkBasedDev"
import {Routes, Route} from "react-router-dom"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />}/>
				<Route path="/centralized-workflow" element={<CentralizedWorkflow />}/>
				<Route path="/feature-branch-workflow" element={<FeatureBranchWF />}/>
				<Route path="/forking-workflow" element={<ForkingWorkflow />}/>
				<Route path="/gitflow-workflow" element={<GitflowWorkflow />}/>
				<Route path="/github-workflow" element={<GithubWorkflow />}/>
				<Route path="/trunk-based-development" element={<TrunkBasedDev />}/>
			</Routes>
		</>
	);
}

export default App;