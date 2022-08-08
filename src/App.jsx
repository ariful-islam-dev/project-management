import { Container, CssBaseline } from "@mui/material";
import ProjectPage from "./components/pages/ProjectPage";

function App() {
  return (
    <div style={{ paddingTop: "30px" }}>
      <CssBaseline />
      <Container>
        <ProjectPage />
      </Container>
    </div>
  );
}

export default App;
