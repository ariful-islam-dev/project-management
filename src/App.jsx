import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import NoMatch from "./components/pages/NoMatch";
import ProjectPage from "./components/pages/ProjectPage";
import TaskPage from "./components/pages/TaskPage";

function App() {
  return (
    <div style={{ paddingTop: "30px" }}>
      <CssBaseline />
      <Routes>
        <Route path="/project">
          <Route path=":projectId" element={<TaskPage />} />
        </Route>
        <Route path="/" element={<ProjectPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
