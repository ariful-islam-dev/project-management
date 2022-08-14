import {
  MenuItem,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useStoreState } from "easy-peasy";
import { useState } from "react";

const TASK_INIT = {
  name: "",
  deadline: "",
  memberId: "",
  description: "",
};
const TaskForm = ({ open, handleClose, addToTask, projectId }) => {
  const members = useStoreState((state) => state.members);
  const [task, setTask] = useState(TASK_INIT);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    task.projectId = projectId;
    addToTask(task);
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle variant="h4">Create A Task</DialogTitle>
        <DialogContent>
          <>
            <Typography variant="h6">Task Name</Typography>
            <TextField
              focused
              onChange={handleChange}
              margin="dense"
              name="name"
              type="text"
              fullWidth
              variant="standard"
            />
          </>
          <>
            <Typography variant="h6">Deadline</Typography>
            <TextField
              focused
              onChange={handleChange}
              name="deadline"
              type="date"
              fullWidth
              variant="standard"
            />
          </>
          {members.length > 0 && (
            <>
              <Typography variant="h6">Assign this task to Member</Typography>
              <TextField
                focused
                select
                fullWidth
                variant="standard"
                name="memberId"
                onChange={handleChange}
              >
                {members.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </>
          )}
          <Typography variant="h6">About This Task</Typography>
          <TextareaAutosize
            aria-label="empty textarea"
            minRows={3}
            placeholder="Empty"
            name="description"
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskForm;
