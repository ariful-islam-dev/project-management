import { Button, Container, Grid } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import { generate } from "shortid";
import ProjectDisplay from "../partials/ProjectDisplay";
import ProjectForm from "../partials/ProjectForm";

const ProjectPage = () => {
  const projects = useStoreState((state) => state.projects);
  const tasks = useStoreState((state) => state.tasks);
  const addProject = useStoreActions((state) => state.addProject);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormData = (data) => {
    data.id = generate();
    addProject(data);
  };
  console.log(projects);

  // projects.length === 0 ?? <Typography>There is no project here</Typography>;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {projects?.map((item) => (
          <ProjectDisplay key={item.id} project={item} />
        ))}
        <Grid item md={4}>
          <Button variant="contained" onClick={handleClickOpen}>
            Create A new Project
          </Button>
          <ProjectForm
            open={open}
            handleClose={handleClose}
            handleFormData={handleFormData}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectPage;
