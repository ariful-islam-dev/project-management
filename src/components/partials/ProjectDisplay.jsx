import { Grid, Typography } from "@mui/material";
import Actions from "./Actions";

const ProjectDisplay = ({ project }) => {
  return (
    <Grid
      item
      md={4}
      sx={{
        boxShadow: "0px 0px 10px #ddd",
        padding: "10px",
        border: "1px solid #ddd",
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h2">{project.title}</Typography>
      <Typography variant="body2">{project.description}</Typography>
      <Actions />
    </Grid>
  );
};

export default ProjectDisplay;
