import { Container, Grid, Typography } from "@mui/material";
import { useStoreState } from "easy-peasy";
import ProjectDisplay from "../partials/ProjectDisplay";

const ProjectPage = () => {
  const { projects, members } = useStoreState((state) => state);

  return projects.length === 0 ? (
    <Container maxWidth="lg">
      <Typography variant="h4">No Project Exiting Here</Typography>
    </Container>
  ) : (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {projects?.map((item) => (
          <ProjectDisplay key={item.id} project={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectPage;
