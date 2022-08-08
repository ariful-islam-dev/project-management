import { Button, Grid, Typography } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
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
    console.log(data);
    addProject(data);
  };

  projects.length === 0 ?? <Typography>There is no project here</Typography>;

  return (
    <Grid spacing={2} container>
      {projects?.map((item) => (
        <ProjectDisplay key={item.id} project={item} />
      ))}
      <Grid
        item
        md={4}
        sx={{
          boxShadow: "0px 0px 10px #ddd",
          padding: "10px",
          border: "1px solid #ddd",
          boxSizing: "border-box",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
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
  );
};

export default ProjectPage;
