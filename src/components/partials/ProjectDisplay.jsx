import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const ProjectDisplay = ({ project }) => {
  console.log(project);
  return (
    <Grid item md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={RouterLink}
            variant="outlined"
            to={`/project/${project.id}`}
          >
            Show Tasks
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectDisplay;
