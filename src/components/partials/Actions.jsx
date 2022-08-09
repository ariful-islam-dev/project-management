import AddTaskIcon from "@mui/icons-material/AddTask";
import { Button, ButtonGroup } from "@mui/material";
import { useStoreActions } from "easy-peasy";
import { createBrowserHistory } from "history";
import { useState } from "react";
import { Link } from "react-router-dom";
import { generate } from "shortid";
import TaskForm from "./TaskForm";

const Actions = ({ projectId }) => {
  const [open, setOpen] = useState(false);
  const addTask1 = useStoreActions((state) => state.addTask);
  const history = createBrowserHistory({ window });

  const addTask = (obj) => {
    const newTask = {
      id: generate(),
      status: "pending",
      ...obj,
    };
    addTask1(newTask);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleProjectPath = (id) => {
    history.push(`/project/${id}`);
  };
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outline primary button group"
      >
        <Button onClick={handleClickOpen} variant="outlined" size="small">
          Create Task
        </Button>
        {/* <Button onClick={() => handleProjectPath(projectId)}>Show Tasks</Button>
         */}
        <Link to={`/project/${projectId}`}>Show Tasks</Link>
        <AddTaskIcon />
      </ButtonGroup>
      <TaskForm
        handleClose={handleClose}
        open={open}
        addToTask={addTask}
        projectId={projectId}
      />
    </>
  );
};

export default Actions;
