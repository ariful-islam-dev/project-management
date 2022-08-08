import { Button, ButtonGroup } from "@mui/material";
import { useStoreActions } from "easy-peasy";
import { useState } from "react";
import { generate } from "shortid";
import TaskForm from "./TaskForm";

const Actions = () => {
  const [open, setOpen] = useState(false);
  const addTask1 = useStoreActions((state) => state.addTask);

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
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outline primary button group"
      >
        <Button onClick={handleClickOpen}>Create Task</Button>
        <Button>Update Project</Button>
      </ButtonGroup>
      <TaskForm handleClose={handleClose} open={open} addToTask={addTask} />
    </>
  );
};

export default Actions;
