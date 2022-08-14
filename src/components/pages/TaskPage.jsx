import AddTaskIcon from "@mui/icons-material/AddTask";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";
import { useParams } from "react-router-dom";
import { generate } from "shortid";
import useToggle from "../../hooks/useToggle";
import TaskForm from "../partials/TaskForm";
import TasksView from "../partials/TasksView";

const TaskPage = () => {
  const { projectId } = useParams();
  const { handleClickOpen, handleClose, open } = useToggle();
  const { projects, tasks, members } = useStoreState((state) => state);
  const { addToTask } = useStoreActions((state) => state);
  const projectTasks = tasks.filter((item) => item.projectId === projectId);
  const project = projects.find((item) => item.id === projectId);

  const addTask = (obj) => {
    const newTask = {
      id: generate(),
      projectId,
      status: "pending",
      ...obj,
    };
    addToTask(newTask);
  };
  console.log({
    projects: project,
    tasks: tasks,
    members: members,
  });

  return (
    <Container maxWidth="lg">
      {project && (
        <>
          <Typography variant="h4">{project.title}</Typography>
          <Typography variant="body2">{project.description}</Typography>
          <Button onClick={handleClickOpen} variant="outlined" size="small">
            <AddTaskIcon /> Create Task
          </Button>
          <TaskForm
            handleClose={handleClose}
            open={open}
            projectId={project.id}
            addToTask={addTask}
          />
        </>
      )}
      {projectTasks.length === 0 ? (
        <h2>No task assign in this project</h2>
      ) : (
        <Grid>
          <TasksView tasks={projectTasks}></TasksView>
        </Grid>
      )}
    </Container>
  );
};

export default TaskPage;
