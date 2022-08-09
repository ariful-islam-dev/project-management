import { Box, Grid, Typography } from "@mui/material";
import Actions from "./Actions";

const ProjectDisplay = ({ project }) => {
  return (
    <Grid item md={4}>
      <Box
        sx={{
          boxShadow: "1px 1px 10px #ddd",
          background: "#ddd",
          padding: "10px",
        }}
      >
        <Typography variant="h2">{project.title}</Typography>
        <Typography variant="body2">{project.description}</Typography>

        <Actions projectId={project.id} />
      </Box>
    </Grid>
  );
};

export default ProjectDisplay;
