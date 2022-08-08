import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const TASK_INIT = {
  name: "",
  deadline: "",
};
const TaskForm = ({ open, handleClose, addToTask }) => {
  const [task, setTask] = useState(TASK_INIT);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create A Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            onChange={handleChange}
            margin="dense"
            name="name"
            id="name"
            label="Task Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            onChange={handleChange}
            margin="dense"
            id="name"
            name="deadline"
            label="Deadline"
            type="date"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => addToTask(task)}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskForm;
