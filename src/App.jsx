import { CssBaseline, Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import MembersPage from "./components/pages/Memberspage";
import NoMatch from "./components/pages/NoMatch";
import ProjectPage from "./components/pages/ProjectPage";
import TaskPage from "./components/pages/TaskPage";
import Navigation from "./components/partials/Navigation";

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />
      <Stack sx={{ my: 1 }} />
      <Routes>
        <Route path="/project">
          <Route path=":projectId" element={<TaskPage />} />
        </Route>
        <Route path="/member" element={<MembersPage />} />
        <Route path="/" element={<ProjectPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
